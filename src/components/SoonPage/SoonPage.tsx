import ModalWindow from "../UI/ModalWindow/ModalWindow"
import css from './SoonPage.module.sass'

const SoonPage = ({mainText='Скоро!', secondText='Эта страница обязательно появится в будущем)'}) => {
    return (
        <div className={css.wrapper}>
            <ModalWindow buttonColor={'green'} buttonLink={'/'} mainText={mainText} secondText={secondText} buttonText={'На главную'}/>
        </div>
    )
}

export default SoonPage;