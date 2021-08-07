import './Welcome.scss';

export default function Welcome() {
    return (
        <section className="welcome" id="welcome">
            <div className="container">
                <div className="welcome-text">
                    <p className="welcome-text__heading">CREATIVE DIGITAL PROJECT</p>
                    <p className="welcome-text__subheading"> Duis mollis, est non commodo luctus <br></br> nisi erat porttitor ligula, eget lacinia odio sem nec elit</p>
                </div>
            </div>
        </section>
    );
}