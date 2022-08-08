import css from './Level.module.sass'
import cx from 'classnames';

const Level = (gameRule?: {}) => {
    let areaInfo: any = [
        ['active', 'full', 'empty', 'full', 'full', 'full'],
        ['empty', 'full', 'full', 'full', 'empty', 'full'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'full'],
        ['empty', 'full', 'full', 'full', 'empty', 'full'],
        ['empty', 'full', 'empty', 'full', 'empty', 'full'],
        ['empty', 'full', 'empty', 'full', 'empty', 'full'],
        ['empty', 'full', 'empty', 'full', 'full', 'full'],
    ];

    const Cell = (type: any, key: number) => {
        if(type === 'empty') type = cx(css.cell, css.empty)
        if(type === 'active') type = cx(css.cell, css.active)
        if(type === 'full') type = css.cell

        return <div key={key} style={{width: `50px`, height: `50px`}} className={type}></div>
    }

    return (
        <div className={css.playgroundWrapper}>
            <div className={css.playgroundContentWrapper}>
                {areaInfo.map((item: Array<string>, index: number) => <div key={index} className={css.cellWrapper}>{item.map((item: string, index: number) => Cell(item, index))}</div>)}
            </div>
        </div>
    )
}

export default Level;