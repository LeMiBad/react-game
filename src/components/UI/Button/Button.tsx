import css from './Button.module.sass';
import cx from 'classnames';
import { Link } from 'react-router-dom';

type StandardComponentProps = {
    className?: string
    link?: string
    children: React.ReactNode | React.ReactNode
}

const Button: React.FC<StandardComponentProps> = ({className, link='/*', children}) => {
    return <Link to={link}><button className={cx(css.button, className)}>{children}</button></Link>
}

export default Button;