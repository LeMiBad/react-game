import css from './LevelPicker.module.sass';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {gameSlice, getLevel} from '../../store/redusers/gameSlice';

const LevelPicker = () => {
    const dispatch = useAppDispatch()
    const {lvlPickData} = useAppSelector(state => state.gameReducer)
    const {setPossiblePickData} = gameSlice.actions

    const fetchLevel = async (lvlId: string) => {
        dispatch(getLevel(lvlId))
    }

    const returnLevelPicker = (levelStatus: any, index: number) => {
        if(levelStatus === 'uncompleted') return <Link className={cx(css.lvl, css.uncompleted)} to={'*'} style={{pointerEvents: 'none'}} key={index}>{index+1}</Link>
        if(levelStatus === 'completed') return <Link className={css.lvl} onClick={() => {dispatch(setPossiblePickData(getPossiblePickData())); fetchLevel(String(index+1))}} key={index} to={'/level'}>{index+1}</Link>
        if(levelStatus === 'active') return <Link className={css.lvl} onClick={() => {dispatch(setPossiblePickData(getPossiblePickData())); fetchLevel(String(index+1))}} key={index} to={'/level'}>{index+1}</Link>
    } 

    const getPossiblePickData = () => {
        let oldarr = lvlPickData.flat(1)
        let newArr = []
        let activeIndex = 0;
        oldarr.forEach((item: string, index: number) => {
            if(item === 'active') activeIndex = index;
        })
        oldarr[activeIndex] = 'completed'
        oldarr[activeIndex+1] = 'active'
        
        for(let i = 0; i <= oldarr.length; i += 6) newArr.push(oldarr.slice(i, 6+i))
        newArr.splice(newArr.indexOf([]), 1)
        return newArr
    }


    return (
        <div className={css.levelPickerWrapper}>
            {lvlPickData.map((item: Array<string>, index: number) => <div key={index} className={css.levelWrapper}>{item.map((level: string, ind: number) => returnLevelPicker(level, (index)*6+ind))}</div>)}
        </div>
    )
}

export default LevelPicker