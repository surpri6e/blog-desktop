import './BurgerMenu.scss'

import { Link } from 'react-router-dom'

const BurgerMenu = (): JSX.Element => {
  return (
    <div className="menu">
      <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
      <label htmlFor="burger-checkbox" className="burger"></label>
      <ul className="menu-list">
        <li>
          <Link to={'/'} className="menu-item">
            Найти пользователя
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu
