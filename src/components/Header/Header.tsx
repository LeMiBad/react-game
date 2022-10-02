import css from './Header.module.sass'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className={css.headerWrapper}>
            <div className={css.headerContent}>
                <Link to='/levelpick'>Уровни</Link>
                <a target='blank' href='https://github.com/LeMiBad'>GitHub</a>
                <Link to='/' className={css.main}>Главная</Link>
                <Link to='/create'>Генератор уровней</Link>
                <Link to='/control'>Управление</Link>
            </div>
        </div>
    )
}

export default Header;