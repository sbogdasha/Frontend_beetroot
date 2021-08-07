import './Navigation.scss';
import { listOfNavigationLinks } from '../../mockData/nav_data';

export default function Navigation() {
  const NavItem = (list) => (list.map(elem => (
    <li className="navigation__item" key={elem.id}>
        <a 
          href={elem.href} 
          className={'navigation__link ' + (elem.isActive && 'navigation__link--hover')}
        >{elem.name}</a>
    </li>
  )));

  return (
    <div className="navigation">
      <nav className="navigation__container">
          <ul className="navigation__list">
            {NavItem(listOfNavigationLinks)}
          </ul>
      </nav>
    </div>
  );
}