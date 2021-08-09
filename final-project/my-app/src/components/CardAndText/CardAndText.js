import './CardAndText.scss';

export default function CardAndText(props) {
    return (
       
        <div className="card-and-text">
           <div className={props.color + ' card-and-text__card'} >
               
           </div>
           <div className="card-and-text__text">
                <p className="card-text">{props.first_str}</p>
                <p className="card-text">{props.second_str}</p>
                <p className="card-text">{props.third_str}</p>
           </div>
        </div>

    );
}