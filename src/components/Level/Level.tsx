import css from './Level.module.sass'
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { moveUp, moveRight, moveDown, moveLeft } from '../../store/gameSlice';
import React from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

const Level = (gameRule?: {}) => {

    const state: any = useSelector(state => state)
    const dispatch = useDispatch();

    const Cell = (type: any, key: number) => {
        if(type === 'none') return 
        if(type === 'empty') type = cx(css.cell, css.empty)
        if(type === 'active') type = cx(css.cell, css.active)
        if(type === 'produced') type = cx(css.cell, css.produced)
        if(type === 'water') type = cx(css.cell, css.water)
        if(type === 'full') type = css.cell

        return <div key={key} style={{width: `50px`, height: `50px`}} className={type}></div>
    }

    const upLayout = ['w', 'W', 'ц', 'Ц', 'ArrowUp'],
        rightLayout = ['d', 'D', 'в', 'В', 'ArrowRight'],
        downLayout = ['s', 'S', 'ы', 'Ы', 'ArrowDown'],
        leftLayout = ['a', 'A', 'ф', 'Ф', 'ArrowLeft'];

    
    const upRef: any = React.createRef(),
        rightRef: any = React.createRef(),
        downRef: any = React.createRef(),
        leftRef: any = React.createRef();  

    window.addEventListener('keydown', (e) => {
        if(upLayout.includes(e.key)) { try{upRef.current.click()}catch(e){} }

        if(rightLayout.includes(e.key)) { try{rightRef.current.click()}catch(e){} }

        if(downLayout.includes(e.key)) { try{downRef.current.click()}catch(e){} }

        if(leftLayout.includes(e.key)) { try{leftRef.current.click()}catch(e){} }
    })

    const endGame = (gameResult: string) => {
        const goodTextArray = ['Великолепно!', 'Потрясающе!', 'Невероятно!']
        const badTextArray = ['Печально(', 'Больше старайся', 'Всё поулчится!']
        const randomGoodTextArray = goodTextArray[Math.floor(Math.random() * goodTextArray.length)];
        const randomBadTextArray = badTextArray[Math.floor(Math.random() * badTextArray.length)];
        if(gameResult === 'win') return <ModalWindow buttonLink={'/levelpick'} buttonColor={'green'} mainText={randomGoodTextArray} secondText={'Нажимай, что-бы перейти на новый уровень!!!'} buttonText={'Next!'}/>
        if(gameResult === 'loose') return <ModalWindow buttonLink={'/levelpick'} buttonColor={'red'} mainText={randomBadTextArray} secondText={'Я уверен, у тебя всё получится!!!'} buttonText={'Again!'}/>
        return 
    }
    console.log(state.game.victoryState)


    return (
        <div className={css.playgroundWrapper}>
            {endGame(state.game.victoryState)}
            <div className={css.playgroundContentWrapper}>
                {state.game.gameArea.map((item: Array<string>, index: number) => <div key={index} className={css.cellWrapper}>{item.map((item: string, index: number) => Cell(item, index))}</div>)}
                <button ref={upRef} onClick={() => {dispatch(moveUp())}}>right</button>
                <button ref={rightRef} onClick={() => {dispatch(moveRight())}}>right</button>
                <button ref={downRef} onClick={() => {dispatch(moveDown())}}>right</button>
                <button ref={leftRef} onClick={() => {dispatch(moveLeft())}}>right</button>
            </div>
        </div>
    )
}

export default Level;