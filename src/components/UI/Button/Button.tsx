import css from './Button.module.sass';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inGame } from '../../../store/redusers/gameSlice';

type StandardButtonProps = {
    className?: string
    link?: string
    children: React.ReactNode | React.ReactNode
}

const Button: React.FC<StandardButtonProps> = ({className, link='/*', children}) => {
    const dispatch = useDispatch()

    return <Link to={link}><button onClick={() => {dispatch(inGame())}} className={cx(css.button, className)}>{children}</button></Link>
}

export default Button;