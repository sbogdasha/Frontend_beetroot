import './Header.scss';
import Navigation from '../Navigation/Navigation';
import PlayGameBtn from '../PlayGameBtn/PlayGameBtn';

export default function Header(){
    return (
        <header id="header" className="header">
            <div className="header-container container">
            <a className="header-logo-link" href="#welcome">
                <p className="header__logo">NFT FINANCIER</p>
            </a>
            <Navigation></Navigation>
            <PlayGameBtn/>
            </div>
        </header>
    );
}