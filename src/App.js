import Header from './components/Header/Header';
import './App.css';
import MenuContainer from './components/Menu/MenuContainer';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/"
              element={<Navigate to="/menu" />} />
            <Route path="/menu"
              element={<MenuContainer />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
