import './Navigation.scss';
import { listOfNavigationLinks } from '../../mockData/nav_data';
import PlayGameBtn from '../PlayGameBtn/PlayGameBtn';

export default function Navigation() {
  const NavItem = (list) => (list.map(elem => (
    <li className="navigation__item" key={elem.id}>
        <a 
          href={elem.href} 
          className={'navigation__link ' + (elem.isActive && 'navigation__link--hover')}
        >{elem.name}</a>
    </li>
  )));

  const HamItem = (list) => (list.map(elem => (
    <li className="hamburger__item" key={elem.id}>
        <a 
          href={elem.href} 
          className={'hamburger__link ' + (elem.isActive && 'hamburger__link--hover')}
        >{elem.name}</a>
    </li>
  )));

  function openHam() {
    const menu = document.getElementById("hamburger__list");
    menu.classList.toggle('is-nav-open')
  }

  return (
    <div className="navigation">
      <nav className="navigation__container">
          <ul className="navigation__list">
            {NavItem(listOfNavigationLinks)}
          </ul>
      </nav>
      <div className="hamburger">
        <i onClick={openHam} class="fas fa-bars"></i>
          <ul className="hamburger__list" id="hamburger__list">
              {HamItem(listOfNavigationLinks)}
              <div className="play-game play-game--ham">
                <a href="#game">
                    <button className="play-game-btn">
                        PLAY GAME
                    </button>
                </a>
              </div>
          </ul>
      </div>
    </div>
  );
}