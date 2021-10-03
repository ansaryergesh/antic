import {useEffect, useState} from "react";
import {slide as Menu} from "react-burger-menu";
import { navMenu } from "../../defaults/messages/navMenu";

const Nav = (props) => {
  const [menu,
    setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu);
  }

  useEffect(() => {
    if (!menu) {
      document.documentElement.style.height = '100%';
      document.body.style.overflowY = 'hidden';
    }
    if (menu) {
      document.body.style.overflowY = 'unset';
    }
  }, [menu])

  return (
    <div>
      <div className='nav nav__desktop'>
        {/* <div className='nav__logo'>
          <img src="/img/logoWhite.png"/>
        </div> */}
        <div className='nav__links'>
          <ul>
            {navMenu.map(nav=> (
              <li>{nav.name}</li>
            ))}
          </ul>
        </div>
        <div className='nav__others'>
          <p>KZ | RU</p>
          <img src='/img/user.svg'/>
          
        </div>
      </div>

      <div className='nav nav__mobile'>
        <Menu {...props} onStateChange={() => handleMenu()}>
          {navMenu.map(nav=> (
            <a className="menu-item" href="#">
              {nav.name}
            </a>
          ))}
        </Menu>
        {/* <div className='nav__logo'>
          <img src="/img/logoWhite.png"/>
        </div> */}
        <div className='nav__userlogo'>
          <img src='/img/user.svg'/>
        </div>
      </div>
    </div>

  )
}

export default Nav;