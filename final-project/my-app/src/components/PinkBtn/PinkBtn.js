import './PinkBtn.scss';

export default function PinkBtn(props) {
    return (
       
        <div className="pink-btn">
            <a href={props.link}>
                <button className="drops-btn">
                    {props.text}
                </button>
            </a>
        </div>

    );
}