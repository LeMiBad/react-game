import WelcomePage from './components/WelcomePage/WelcomePage';
import LevelPicker from './components/LevelPicker/LevelPicker';
import Level from './components/Level/Level';
import SoonPage from './components/SoonPage/SoonPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Header from './components/Header/Header';
import CreateLevel from './components/CreateLevel/CreateLevel';
import Loading from './components/Loading/Loading';
import { useAppSelector } from './hooks/redux';

const App = () => {
    const location = useLocation()
    const {isLoading} = useAppSelector(state => state.gameReducer)

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
            display: 'none',
            transform: 'translate3d(-100%,0,0)'
        },
    })

    const loading = () => (isLoading)? <Loading /> : <></>

    return (
        <>
            {loading()}
            <Header />
            {transitions((props, item) => (
            <animated.div style={props}>
                <Routes location={item}>
                    <Route path='/' element={<WelcomePage />} />
                    <Route path='/react-game' element={<WelcomePage />} />
                    <Route path='/level' element={<Level />} />
                    <Route path='/levelpick' element={<LevelPicker />} />
                    <Route path='/create' element={<CreateLevel />} />
                    <Route path='/control' element={<SoonPage mainText="Управление" secondText="Управление производится клавишами w a s d или стрелочками"/>} />
                    <Route path='/*' element={<SoonPage />} />
                </Routes>
            </animated.div>
            ))}
        </>
    )
}

export default App