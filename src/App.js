import { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LoginContainer from './components/Login/LoginContainer';
import MenuContainer from './components/Menu/MenuContainer';
import { getAuthUserData } from './redux/authReducer';

function App(props) {

  useEffect(() => {
    props.getAuthUserData();
  }, [])

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
              element={<LoginContainer />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
export default connect(null, { getAuthUserData })(App);
