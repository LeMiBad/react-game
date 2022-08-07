import css from './Button.module.sass';
import cx from 'classnames';

const Button = ({className, children}) => {
    return (
        <button className={cx(css.button, className)}>{children}</button>
    )
}

export default Button;