import ModalWindow from "../ModalWindow/ModalWindow"
import css from './SoonPage.module.sass'

const SoonPage = () => {
    return (
        <div className={css.wrapper}>
            <ModalWindow buttonColor={'green'} buttonLink={'/'} mainText={'Скоро!'} secondText={'Эта страница обязательно появится в будущем)'} buttonText={'SORRY('}/>
        </div>
    )
}

export default SoonPage;