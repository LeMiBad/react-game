import css from './LevelPicker.module.sass';

const LevelPicker = () => {
    return (
        <div className={css.levelPickerWrapper}>
            <div className={css.levelPickerContentWrapper}>
                <div className={css.levelWrapper}>
                    <div className={css.lvl}><div className={css.lvlItem}>1</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>2</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>3</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>4</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>5</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>6</div></div>
                </div>
                <div className={css.levelWrapper}>
                    <div className={css.lvl}><div className={css.lvlItem}>7</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>8</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>9</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>10</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>11</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>12</div></div>
                </div>
                <div className={css.levelWrapper}>
                    <div className={css.lvl}><div className={css.lvlItem}>13</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>14</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>15</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>16</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>17</div></div>
                    <div className={css.lvl}><div className={css.lvlItem}>18</div></div>
                </div>
            </div>
        </div>
    )
}

export default LevelPicker;