import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './styles/theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;