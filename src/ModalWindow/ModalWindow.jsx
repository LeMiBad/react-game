import Button from '../UI/Button/Button';
import css from './ModalWindow.module.sass'

const ModalWindow = () => {

    return (
        <div className={css.modal}>
            <div className={css.modal_content_wrapper}>
                <div className={css.modal_content}>
                    <h1>Приветствую!</h1>
                    <h2>Для начала игры - нажми кнопку "Старт!"</h2>
                    <Button className={css.green}>Start!</Button>
                </div>  
            </div>
        </div>
    )
}

export default ModalWindow;