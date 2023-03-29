import './App.css';
import Header from './components/Header/Header';
import MenuContainer from './components/Menu/MenuContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <MenuContainer />
      </div>
    </div>
  );
}

export default App;
