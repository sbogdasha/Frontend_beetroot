import './Roadmap.scss';
import Header from '../Header/Header';
import { listOfRoadmapTextBlocks } from '../../mockData/roadmap-blocks__data';
import Footer from '../Footer/Footer';

export default function Roadmap(){

    const Roadmap_TextBlock = (list) => (list.map(elem => (
        <div className={"roadmap-item " + (elem.order)}>
            <div className={"roadmap-item__textblock " + (elem.className)} key={elem.id}>
                <p className="ri-text"
                >{elem.text}</p>
            </div>
            <div className="numeration">
                <div className="numeration__number" key={elem.id}>
                    <p className={"ri-number " + (elem.numberClass)}>
                        {elem.number}
                    </p>
                </div>
                <p className="numeration__title">{elem.numTitle}</p>
            </div>
        </div>
      )));

    return (
        <>
        <section id="roadmap" className="roadmap">
            <div className="roadmap-container container">
                <div className="roadmap__title">
                    ROADMAP
                </div>
                <div className="roadmap__content">
                    {Roadmap_TextBlock(listOfRoadmapTextBlocks)}
                </div>
            </div>
        </section>
        </>
    );
}