import './App.scss';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
        <About/>
    </div>
  );
}

export default App;
