import Button from '../UI/Button/Button';
import css from './ModalWindow.module.sass'

type ModalWindowComponentProps = {
    buttonColor: string
    buttonText: string
    buttonLink: string
    mainText: string
    secondText: string
}

const ModalWindow: React.FC<ModalWindowComponentProps> = ({buttonColor, buttonText, mainText, secondText, buttonLink}) => {

    const buttonStylePicker = (color: string) => {
        if(color === 'green') return css.green
        if(color === 'red') return css.red
    }

    return (
        <div className={css.absolute}>
            <div className={css.modal}>
                <div className={css.modal_content_wrapper}>
                    <div className={css.modal_content}>
                        <h1>{mainText}</h1>
                        <h2>{secondText}</h2>
                        <Button link={buttonLink} className={buttonStylePicker(buttonColor)}>{buttonText}</Button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;