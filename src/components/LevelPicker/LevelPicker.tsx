import css from './LevelPicker.module.sass';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setLevel, setPossiblePickData } from '../../store/gameSlice';
import axios from 'axios';

const LevelPicker = () => {
    const dispatch = useDispatch();
    const state: any = useSelector(state => state);

    const fetchLevel = async (e: any,) => {
        const responce = await axios.get(`http://localhost:3100/levels/${e.target.innerText}`)
        await dispatch(setLevel(responce.data.levelInfo))
    }

    const returnLevelPicker = (levelStatus: any, index: number) => {
        if(levelStatus === 'uncompleted') return <Link onClick={() => {dispatch(setPossiblePickData(getPossiblePickData()))}} key={index} to={'/levelpick'}><div onClick={fetchLevel} className={cx(css.lvl, css.uncompleted)}><div className={css.lvlItem}>{index+1}</div></div></Link>
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
            newArr.push(oldarr.slice(0+i, 6+i))
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