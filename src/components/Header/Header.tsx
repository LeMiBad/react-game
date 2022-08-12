import css from './Header.module.sass'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className={css.headerWrapper}>
            <div className={css.headerContent}>
                <Link to='/levelpick'><div>Уровни</div></Link>
                <a target='blank' href='https://github.com/LeMiBad'><div>GitHub</div></a>
                <Link to='/welcomepage'><div className={css.main}>Главная</div></Link>
                <a href='*'><div>Future</div></a>
                <a href='*'><div>Future</div></a>
            </div>
        </div>
    )
}

export default Header;