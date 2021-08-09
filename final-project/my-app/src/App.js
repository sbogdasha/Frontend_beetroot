import './App.scss';
import Roadmap from './components/Roadmap/Roadmap';
import Game from './components/Game/Game';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
          <Header/>
            <div className="app-wrapper-content">
              <Route exact path='/' component={MainPage}/>
              <Route path='/game' component={Game}/>
              <Route path='/roadmap' component={Roadmap}/>
            </div>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
