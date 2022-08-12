import ModalWindow from '../ModalWindow/ModalWindow';
import css from './WelcomePage.module.sass'

const WelcomePage = () => {
    return (
        <div className={css.wrapper}>
            <ModalWindow buttonColor={'green'} buttonLink={'/levelpick'} mainText={'Приветствую!'} secondText={'Для выбора уровня - нажми кнопку "Старт!"'} buttonText={'GO!'}/>
        </div>
    )
}

export default WelcomePage;