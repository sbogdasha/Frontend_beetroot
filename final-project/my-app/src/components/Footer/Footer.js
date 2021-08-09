import './Footer.scss';


export default function Footer(){
    return (
        <footer id="footer" className="footer">
            <div className="footer__content container">
                <div className="footer__text-block">
                    <p className="footer__copyright-txt">Copyright © 2021 All Rights Reserved</p>
                    <p className="footer__logo-txt">NFT FINANCIER</p>
                </div>
                <div className="footer__social-media-block">
                    <a className="footer__link" href="#">
                        <i className="fab fa-twitter fa-5x"> </i>
                    </a>
                    <a className="footer__link" href="#">
                        <i className="fab fa-telegram-plane fa-5x"> </i>
                    </a>
                    <a className="footer__link" href="#">
                        <i className="fab fa-discord fa-5x"> </i>
                    </a>
                </div>
            </div>
        </footer>
    );
}