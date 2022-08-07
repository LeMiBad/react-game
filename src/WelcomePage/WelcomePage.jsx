import ModalWindow from '../ModalWindow/ModalWindow';
import css from './WelcomePage.module.css'

const WelcomePage = () => {
    return (
        <div className={css.wrapper}>
            <ModalWindow/>
        </div>
    )
}

export default WelcomePage;