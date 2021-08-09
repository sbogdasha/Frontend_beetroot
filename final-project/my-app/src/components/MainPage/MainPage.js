import './MainPage.scss';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Drops from '../Drops/Drops';
import Footer from '../Footer/Footer';

export default function MainPage(){

    return (
        <>
        <Welcome></Welcome>
        <About></About>
        <Drops></Drops>
        </>
    );
}