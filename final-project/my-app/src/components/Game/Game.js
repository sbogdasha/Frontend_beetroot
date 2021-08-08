import './Game.scss';
import Header from '../Header/Header';

export default function Game() {
    return (
        <>
        <Header></Header>
        <section className="game" id="game">
                <div className="loading-circle">
                    <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                        <circle cx="170" cy="170" r="160" stroke="#1AC587"/>
                        <circle cx="170" cy="170" r="135" stroke="#EB69EE"/>
                        <circle cx="170" cy="170" r="110" stroke="#E1F1E5"/>
                        <circle cx="170" cy="170" r="85" stroke="#EB69EE"/>
                    </svg>
                    <p className="game-soon">
                        COMING SOON...
                    </p>
                </div>
        </section>
        </>
    );
}