import './AboutPinkBlock.scss';


export default function AboutPinkBlock(props){
    return (
        <div className="about-pink-block">
            <div className="text-container">
                <span className="pink-block-txt">{props.first_text}</span>
                <span className="pink-block-txt--black">{props.keyword}</span>
                <span className="pink-block-txt">{props.second_text}</span>
            </div>
        </div>
    );
}