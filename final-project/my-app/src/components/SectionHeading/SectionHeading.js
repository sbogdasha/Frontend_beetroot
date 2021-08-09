import './SectionHeading.scss';


export default function SectionHeading(props){
    return (
        <div className="section-heading">
                <h2 className="about-title">{props.text}</h2>
        </div>
    );
}