import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MenuContainer from './components/Menu/MenuContainer';

function App() {
  return (
    <div className="app-wrapper">
      <HashRouter>
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/"
              element={<Navigate to="/menu" />} />
            <Route path="/menu"
              element={<MenuContainer />} />
            <Route path="/login"
              element={<Login />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
