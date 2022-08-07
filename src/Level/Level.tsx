import css from './Level.module.sass'
import cx from 'classnames';

interface LevelProps {
    gameRule?: {}
}

const Level: React.FC<LevelProps> = (gameRule) => {

    // const gameRule = {
    //     playgroundArea: [2, 2, 2, 1],
    //     startPoint: {x: 1, y: 1},
    //     currentPoint: {x: 1, y: 1} //useState in future
    // }

    return (
        <div className={css.playgroundWrapper}>
            <div className={css.playgroundContentWrapper}>
                <div className={css.ceilWrapper}>
                    <div style={{width: `50px`}} className={css.cell}></div>
                    <div className={css.cell}></div>
                </div>
                <div className={css.ceilWrapper}>
                    <div className={css.cell}></div>
                    <div className={css.cell}></div>
                </div>
                <div className={css.ceilWrapper}>
                    <div className={css.cell}></div>
                    <div className={css.cell}></div>
                </div>
                <div className={css.ceilWrapper}>
                    <div className={cx(css.cell, css.active)}></div>
                </div>
            </div>
        </div>
    )
}

export default Level;