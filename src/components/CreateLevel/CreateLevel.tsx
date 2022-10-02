import css from './CreateLevel.module.sass'
import cx from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gameSlice } from '../../store/redusers/gameSlice';

const CreateLevel = () => {
    const [gameArea, setGameArea] = useState([['active']])
    const dispatch = useAppDispatch()
    const {} = useAppSelector(state => state.gameReducer)
    const {setLevel} = gameSlice.actions

    const Cell = (type: string, key: number, column: number) => {
        const typeStr = type
        if(type === 'none') return 
        if(type === 'empty') type = cx(css.cell, css.empty)
        if(type === 'active') type = cx(css.cell, css.active)
        if(type === 'produced') type = cx(css.cell, css.produced)
        if(type === 'water') type = cx(css.cell, css.water)
        if(type === 'full') type = css.cell

        return <div key={key} onClick={() => {setCell(column, key, typeStr)}} style={{width: `6vw`, height: `6vw`}} className={type}></div>
    }


    const addRow = () => {
        const newArea = gameArea
        newArea.push(['full'])
        setGameArea([...newArea])
    }

    const addCell = (y: number) => {
        const newArea = gameArea
        newArea[y].push('full')
        setGameArea([...newArea])
    }
    
    const setCell = (y: number, x: number, type: string) => {
        const newArea = gameArea
        if(type === 'full') newArea[y][x] = 'water'
        if(type === 'water') newArea[y][x] = 'empty'
        if(type === 'empty') newArea[y][x] = 'full'
        setGameArea([...newArea])
    }

    const ref = () => {
        const newLevel = gameArea 
        newLevel.map(item => {
            item.push('none')
            item.unshift('none')
            return item
        })
        const vertical = gameArea[0].map(item => {
            return 'none'
        })
        newLevel.push(vertical)
        newLevel.unshift(vertical)
        dispatch(setLevel(newLevel))
    }

    return (
        <>
            <Link to='/level' onClick={ref} className={css.play}>Поиграть</Link>
            <div className={css.playgroundWrapper}>
                <div className={css.playgroundContentWrapper}>
                    {gameArea.map((item: Array<string>, index: number) => 
                    <div key={index} className={css.cellWrapper}>
                        {item.map((item: string, ind: number) => Cell(item, ind, index))}
                            <button onClick={() => {addCell(index)}}>+</button>
                    </div>)}
                    <button onClick={addRow}>Добавить ряд</button>
                </div>
            </div>
        </>
    )
}

export default CreateLevel