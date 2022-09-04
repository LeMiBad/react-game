import WelcomePage from './components/WelcomePage/WelcomePage';
import LevelPicker from './components/LevelPicker/LevelPicker';
import Level from './components/Level/Level';
import SoonPage from './components/SoonPage/SoonPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

const App = () => {
    const location = useLocation()

    const transitions = useTransition(location, {
        from: {
            opacity: 0,
            transform: 'translate3d(100%,0,0)'
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0%,0,0)'
        },
        leave: {
            opacity: 0,
            transform: 'translate3d(-100%,0,0)'
        },
    })


    return transitions((props, item) => (
        <animated.div style={props}>    
            <Routes location={item}>
                <Route path='/' element={<WelcomePage/>}/>
                <Route path='/level' element={<Level/>}/>
                <Route path='/levelpick' element={<LevelPicker/>}/>
                <Route path='/*' element={<SoonPage/>}/>
            </Routes>
        </animated.div>
    ))
}

export default App