import './Header.scss';
import Navigation from '../Navigation/Navigation';

export default function Header(){
    return (
        <header id="header" className="header">
            <a href="#header">
                <p className="header__logo">NFT FINANCIER</p>
            </a>
            <Navigation></Navigation>
        </header>
    );
}