import './Drops.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import PinkBtn from '../PinkBtn/PinkBtn';
import CardAndText from '../CardAndText/CardAndText';

export default function Drops(){
    return (
        <section id="drops" className="drops">
            <SectionHeading text="OUR NFT DROPS"/>
            <div className="drops__content container">
                <div className="pink-buttons-container">
                    <div className="gray-buttons-container">
                        <PinkBtn text="ENTER THE GIVEAWAY" link="#" />
                        <PinkBtn text="CHECK OUR ROADMAP" link="/roadmap"/>
                    </div>
                </div>
                <div className="drops__heading">
                    <h2 className="drops-heading-txt">prepare for earnings with our land packs</h2>
                </div>
                <div className="drops__cards">
                    <CardAndText color="purple" first_str="Land Packs" second_str="x 800" third_str="per 50$"/>
                    <CardAndText color="green" second_str="Rarible"/>
                    <CardAndText color="green" second_str="OpenSea"/>
                    <CardAndText color="green" second_str="TopShot"/>
                </div>
                <div className="drops__link-btn">
                    <PinkBtn text="LINK COMING SOON..." link="#" />
                </div>
            </div>
        </section>
    );
}