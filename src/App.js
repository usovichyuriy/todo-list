import Header from './components/Header/Header';
import './App.css';
import MenuContainer from './components/Menu/MenuContainer';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'>
        <MenuContainer />
      </div>
    </div>
  );
}

export default App;
