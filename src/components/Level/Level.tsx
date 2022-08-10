import css from './Level.module.sass'
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { moveUp, moveRight, moveDown, moveLeft } from '../../store/gameSlice';
import React from 'react';

const Level = (gameRule?: {}) => {

    const gameArea: any = useSelector(state => state)
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

    return (
        <div className={css.playgroundWrapper}>
            <div className={css.playgroundContentWrapper}>
                {gameArea.game.gameArea.map((item: Array<string>, index: number) => <div key={index} className={css.cellWrapper}>{item.map((item: string, index: number) => Cell(item, index))}</div>)}
                <button ref={upRef} onClick={() => {dispatch(moveUp())}}>right</button>
                <button ref={rightRef} onClick={() => {dispatch(moveRight())}}>right</button>
                <button ref={downRef} onClick={() => {dispatch(moveDown())}}>right</button>
                <button ref={leftRef} onClick={() => {dispatch(moveLeft())}}>right</button>
            </div>
        </div>
    )
}

export default Level;