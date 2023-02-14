import Header from './components/Header/Header';
import './App.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'>
        <Menu />
      </div>
    </div>
  );
}

export default App;
