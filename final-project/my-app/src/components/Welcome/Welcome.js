import './Welcome.scss';

export default function Welcome() {
    return (
        <section className="welcome" id="welcome">
            <div className="container">
                <div className="welcome__text-block text-block">
                    <div className="text-block__main">
                        <h1 className="text-block__header">NFT FINANCER</h1>
                        <p className="text-block__main-text">Build your crazy financial empire with NFT Financier</p>
                        <p className="text-block__main-text">Simple, Quick and Easy! Best Play to Earn Game!</p>
                    </div>
                    <div className="text-block__neftie">
                        <p className="text-block__neftie-text">Hi, boss! I'm your personal assistant Neftie Earner. Let me bring you up to date!</p>
                    </div>
                </div>
                <div className="welcome__neftie-block">
                    <img className="neftie-pic" src={window.location.origin + '/img/neftie.png'} alt="Neftie" />
                </div>
            </div>
        </section>
    );
}