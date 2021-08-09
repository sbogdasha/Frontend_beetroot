import './About.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import AboutPinkBlock from '../AboutPinkBlock/AboutPinkBlock';


export default function About(){
    return (
        <section id="about" className="about">
            <SectionHeading text="ABOUT PROJECT"/>
            <div className="about__content container">
                    <div className="about__text-block">
                        <AboutPinkBlock first_text ="We know that you love money as far as we know how 
                        much you love to play games! Special for you, we are happy to represent our brand 
                        new game called " keyword="NFT Financier" second_text =", where we put those both things together!" />
                        <div className="centered-txt">
                            <p className="about__white-txt">The Best </p>
                            <p className="about__white-txt">Play to Earn Game!</p>
                        </div>
                        <AboutPinkBlock first_text ="Once you achieved maximum success on your starting planet - " keyword = "Atomic" 
                        second_text =", you can discover the brand new lands that we have prepared specially for you!" />
                        <div className="centered-txt">
                            <p className="about__green-txt">The More You Click,</p>
                            <p className="about__green-txt">The Richer You Get!</p>
                        </div>
                    </div>
                    <div className="about__gameplay-block gameplay-block">
                        <div className="gameplay-block__text">
                            <p className="about__pink-txt">THE RULES ARE SIMPLE</p>
                            <p className="about__curvy-green-txt">just click and grow rich</p>
                        </div>
                        <div className="fingertap-img">
                            <img className="click-pic" src={window.location.origin + '/img/click.png'} alt="click-pic" />
                        </div>
                        <div className="gameplay-block__screenshot">

                        </div>
                        <div className="gameplay-block__screenshot">

                        </div>
                    </div>
            </div>
        </section>
    );
}