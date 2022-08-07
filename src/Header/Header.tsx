import css from './Header.module.sass'

const Header = () => {
    return(
        <div className={css.headerWrapper}>
            <div className={css.headerContent}>
                <a href='*'><div>Уровни</div></a>
                <a target='blank' href='https://github.com/LeMiBad'><div>GitHub</div></a>
                <a href='*'><div className={css.main}>Главная</div></a>
                <a href='*'><div>Future</div></a>
                <a href='*'><div>Future</div></a>
            </div>
        </div>
    )
}

export default Header;