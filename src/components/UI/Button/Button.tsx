import css from './Button.module.sass';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inGame } from '../../../store/gameSlice';

type StandardComponentProps = {
    className?: string
    link?: string
    children: React.ReactNode | React.ReactNode
}

const Button: React.FC<StandardComponentProps> = ({className, link='/*', children}) => {
    const dispatch = useDispatch()

    return <Link to={link}><button onClick={() => {dispatch(inGame())}} className={cx(css.button, className)}>{children}</button></Link>
}

export default Button;