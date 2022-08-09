import css from './Level.module.sass'
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { moveUp, moveRight, moveDown, moveLeft } from '../../store/gameSlice';
import React, { useEffect } from 'react';

const Level = (gameRule?: {}) => {

    const gameArea: any = useSelector(state => state)
    const dispatch = useDispatch();

    const Cell = (type: any, key: number) => {
        if(type === 'empty') type = cx(css.cell, css.empty)
        if(type === 'active') type = cx(css.cell, css.active)
        if(type === 'produced') type = cx(css.cell, css.produced)
        if(type === 'full') type = css.cell

        return <div key={key} style={{width: `50px`, height: `50px`}} className={type}></div>
    }

    const 
        upRef: any = React.createRef(),
        rightRef: any = React.createRef(),
        downRef: any = React.createRef(),
        leftRef: any = React.createRef();  

    window.addEventListener('keydown', (e) => {
        if(e.key === 'w' || e.key === 'ц'){
            upRef.current.click()
        }
        if(e.key === 'd' || e.key === 'в'){
            rightRef.current.click()
        }
        if(e.key === 's' || e.key === 'ы'){
            downRef.current.click()
        }
        if(e.key === 'a' || e.key === 'ф'){
            leftRef.current.click()
        }
    })

    const up = () => {
        dispatch(moveUp())
    }
    const right = () => {
        dispatch(moveRight())
    }
    const down = () => {
        dispatch(moveDown())
    }
    const left = () => {
        dispatch(moveLeft())
    }

    return (
        <div className={css.playgroundWrapper}>
            <div className={css.playgroundContentWrapper}>
                {gameArea.game.gameArea.map((item: Array<string>, index: number) => <div key={index} className={css.cellWrapper}>{item.map((item: string, index: number) => Cell(item, index))}</div>)}
                <button ref={upRef} onClick={up}>right</button>
                <button ref={rightRef} onClick={right}>right</button>
                <button ref={downRef} onClick={down}>right</button>
                <button ref={leftRef} onClick={left}>right</button>
            </div>
        </div>
    )
}

export default Level;