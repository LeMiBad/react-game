import css from './LevelPicker.module.sass';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getLevel, setPossiblePickData } from '../../store/redusers/gameSlice';

const LevelPicker = () => {
    const dispatch = useDispatch<any>();
    const state: any = useSelector(state => state);

    const fetchLevel = async (e: React.SyntheticEvent<HTMLDivElement>) => {
        const element = e.target as HTMLInputElement
        dispatch(getLevel(element.innerText))
    }

    const returnLevelPicker = (levelStatus: any, index: number) => {
        if(levelStatus === 'uncompleted') return <Link to={'*'} style={{pointerEvents: 'none'}} key={index}><div onClick={fetchLevel} className={cx(css.lvl, css.uncompleted)}><div className={css.lvlItem}>{index+1}</div></div></Link>
        if(levelStatus === 'completed') return <Link onClick={() => {dispatch(setPossiblePickData(getPossiblePickData()))}} key={index} to={'/level'}><div onClick={fetchLevel} className={css.lvl}><div className={css.lvlItem}>{index+1}</div></div></Link>
        if(levelStatus === 'active') return <Link onClick={() => {dispatch(setPossiblePickData(getPossiblePickData()))}} key={index} to={'/level'}><div onClick={fetchLevel} className={css.lvl}><div className={css.lvlItem}>{index+1}</div></div></Link>
    } 

    const getPossiblePickData = () => {
        let oldarr = state.game.lvlPickData.flat(1)
        let newArr = []
        let activeIndex = 0;
        oldarr.forEach((item: string, index: number) => {
            if(item === 'active') activeIndex = index;
        })
        oldarr[activeIndex] = 'completed'
        oldarr[activeIndex+1] = 'active'
        
        for(let i = 0; i <= oldarr.length; i += 6){
            newArr.push(oldarr.slice(i, 6+i))
        }
        newArr.splice(newArr.indexOf([]), 1)
        return newArr
    }


    return (
        <div className={css.levelPickerWrapper}>
            <div className={css.levelPickerContentWrapper}>
                {state.game.lvlPickData.map((item: any, index: number) => <div key={index} className={css.levelWrapper}>{item.map((level: any, ind: number) => returnLevelPicker(level, (index)*6+ind))}</div>)}
            </div>
        </div>
    )
}

export default LevelPicker;