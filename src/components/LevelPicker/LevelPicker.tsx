import css from './LevelPicker.module.sass';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLevel } from '../../store/gameSlice';
import axios from 'axios';

const LevelPicker = () => {
    const dispatch = useDispatch();

    const norm = (e: any,) => {
        let levelId = e.target.innerText;
        const apiUrl = `http://localhost:3100/levels/${levelId}`;
            axios.get(apiUrl).then((resp) => {
                dispatch(setLevel(resp.data.levelInfo))
            });
    }

    return (
        <div className={css.levelPickerWrapper}>
            <div className={css.levelPickerContentWrapper}>
                <div className={css.levelWrapper}>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>1</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>2</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>3</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>4</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>5</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>6</div></div></Link>
                </div>
                <div className={css.levelWrapper}>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>8</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>9</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>10</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>11</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>7</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>12</div></div></Link>
                </div>
                <div className={css.levelWrapper}>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>13</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>14</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>15</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>16</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>17</div></div></Link>
                    <Link to={'/level'}><div onClick={norm} className={css.lvl}><div className={css.lvlItem}>18</div></div></Link>
                </div>
            </div>
        </div>
    )
}

export default LevelPicker;