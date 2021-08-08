import './App.scss';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Drops from './components/Drops/Drops';
import footer from './components/Footer/Footer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
        <About/>
        <Drops/>
        <Footer/>
    </div>
  );
}

export default App;
