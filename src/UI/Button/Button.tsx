import css from './Button.module.sass';
import cx from 'classnames';

type StandardComponentProps = {
    className?: string
    children: React.ReactNode
}

const Button = ({className, children}: StandardComponentProps) => {
    return (
        <button className={cx(css.button, className)}>{children}</button>
    )
}

export default Button;