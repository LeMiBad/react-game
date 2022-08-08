import css from './Level.module.sass'
import cx from 'classnames';

const Level = (gameRule?: {}) => {
    // <div className={css.cellWrapper}>
    //     <div style={{width: `50px`}} className={css.cell}></div>
    //     <div className={cx(css.cell, css.active)}></div>
    //     <div className={css.cell}></div>
    // </div>
    let areaInfo: any = [
        ['active', 'full', 'empty', 'full', 'full', 'full'],
        ['empty', 'full', 'full', 'full', 'empty', 'full'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'full'],
        ['empty', 'full', 'full', 'full', 'empty', 'full'],
        ['empty', 'full', 'empty', 'full', 'empty', 'full'],
        ['empty', 'full', 'empty', 'full', 'empty', 'full'],
        ['empty', 'full', 'empty', 'full', 'full', 'full'],
    ];

    const Cell = (type: any) => {
        if(type === 'empty') type = cx(css.cell, css.empty)
        if(type === 'active') type = cx(css.cell, css.active)
        if(type === 'full') type = css.cell

        return <div className={type}></div>
    }

    return (
        <div className={css.playgroundWrapper}>
            <div className={css.playgroundContentWrapper}>
                {areaInfo.map((item: Array<string>) => <div className={css.cellWrapper}>{item.map((item: string) => Cell(item))}</div>)}
            </div>
        </div>
    )
}

export default Level;