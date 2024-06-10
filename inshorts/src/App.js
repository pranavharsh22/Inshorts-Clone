import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Infoheader from './components/Infoheader';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        
      <Infoheader/>
      <Articles/>
      </div>
    </div>
  );
}

export default App;
