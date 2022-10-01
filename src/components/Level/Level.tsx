import css from './Level.module.sass'
import cx from 'classnames';
import {gameSlice} from '../../store/redusers/gameSlice';
import { useEffect, createRef } from 'react';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Navigate } from 'react-router-dom';

const Level = () => {

    const dispatch = useAppDispatch()
    const {gameArea, victoryState} = useAppSelector(state => state.gameReducer)
    const {moveUp, moveRight, moveDown, moveLeft} = gameSlice.actions

    const Cell = (type: string, key: number) => {
        if(type === 'none') return 
        if(type === 'empty') type = cx(css.cell, css.empty)
        if(type === 'active') type = cx(css.cell, css.active)
        if(type === 'produced') type = cx(css.cell, css.produced)
        if(type === 'water') type = cx(css.cell, css.water)
        if(type === 'full') type = css.cell

        return <div key={key} style={{width: `60px`, height: `60px`}} className={type}></div>
    }

    const upLayout = ['w', 'W', 'ц', 'Ц', 'ArrowUp'],
        rightLayout = ['d', 'D', 'в', 'В', 'ArrowRight'],
        downLayout = ['s', 'S', 'ы', 'Ы', 'ArrowDown'],
        leftLayout = ['a', 'A', 'ф', 'Ф', 'ArrowLeft'];

    
    const upRef: any = createRef(),
        rightRef: any = createRef(),
        downRef: any = createRef(),
        leftRef: any = createRef();  

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if(upLayout.includes(e.key)) try{upRef.current.click()}catch(e){}
    
            if(rightLayout.includes(e.key)) try{rightRef.current.click()}catch(e){}
    
            if(downLayout.includes(e.key)) try{downRef.current.click()}catch(e){}
    
            if(leftLayout.includes(e.key)) try{leftRef.current.click()}catch(e){}
        })

        let startX = 0
        let startY = 0
        let currentX = 0
        let currentY = 0

        window.addEventListener('touchstart', (start) => {
            startX = start.touches[0].clientX
            startY = start.touches[0].clientY
        })

        window.addEventListener('touchmove', (move) => {
            currentX = move.touches[0].clientX
            currentY = move.touches[0].clientY
        })

        window.addEventListener('touchend', () => {
            if(Math.abs(startX - currentX) > Math.abs(startY - currentY)) {
                if(startX > currentX) try{leftRef.current.click()}catch(e){}
                else try{rightRef.current.click()}catch(e){}
            }else {
                if(startY > currentY) try{upRef.current.click()}catch(e){}
                else try{downRef.current.click()}catch(e){}
            }
        })
    })

    const endGame = (gameResult: string) => {
        const goodTextArray = ['Великолепно!', 'Потрясающе!', 'Невероятно!']
        const badTextArray = ['Печально(', 'Больше старайся', 'Всё поулчится!']
        const randomGoodTextArray = goodTextArray[Math.floor(Math.random() * goodTextArray.length)];
        const randomBadTextArray = badTextArray[Math.floor(Math.random() * badTextArray.length)];
        if(gameResult === 'win') return <ModalWindow buttonLink={'/levelpick'} buttonColor={'green'} mainText={randomGoodTextArray} secondText={'Нажимай, что-бы перейти на новый уровень!!!'} buttonText={'Next!'}/>
        if(gameResult === 'loose') return <ModalWindow buttonLink={'/level'} buttonColor={'red'} mainText={randomBadTextArray} secondText={'Я уверен, у тебя всё получится!!!'} buttonText={'Again!'}/>
        return 
    }

    if(gameArea === undefined) return (
        <Navigate to={'/levelpick'}></Navigate>
    )

    return (
        <div className={css.playgroundWrapper}>
            {endGame(victoryState)}
            <div className={css.playgroundContentWrapper}>
                {gameArea.map((item: Array<string>, index: number) => <div key={index} className={css.cellWrapper}>{item.map((item: string, index: number) => Cell(item, index))}</div>)}
                <button ref={upRef} onClick={() => {dispatch(moveUp())}}>right</button>
                <button ref={rightRef} onClick={() => {dispatch(moveRight())}}>right</button>
                <button ref={downRef} onClick={() => {dispatch(moveDown())}}>right</button>
                <button ref={leftRef} onClick={() => {dispatch(moveLeft())}}>right</button>
            </div>
        </div>
    )
}

export default Level;