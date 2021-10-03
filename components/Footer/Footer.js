import {footerMenu, navMenu} from "../../defaults/messages/navMenu"
import {navRekzvizits} from "../../defaults/messages/navRekvizits"

const Footer = () => {
  return (
    <div>
      <div className='footer container'>
        <div className="footer__rekvizit">
          <p>Реквизиты компании</p>
          <ul>
            <li>{navRekzvizits[0].name}</li>
            <li>{navRekzvizits[0].bin}</li>
            <li>{navRekzvizits[0].address}</li>
            <li>{navRekzvizits[0].address2}</li>
            <li>{navRekzvizits[0].facticalAddress}</li>
            <li>{navRekzvizits[0].phone}</li>
            <li>{navRekzvizits[0].bill}</li>
            <li>{navRekzvizits[0].bank}</li>
            <li>{navRekzvizits[0].bik}</li>
          </ul>
        </div>
        <div className='footer__links'>
          <ul>
            {footerMenu.map(nav => (
              <li>
                <a href={nav.path}>{nav.name}</a>
              </li>
            ))}
          </ul>
          <div className='socials'>
            <a><img src="/img/insta.svg"/></a>
            <a><img src="/img/facebook.svg"/></a>
          </div>
        </div>
      </div>
      <p className='footerText text-center'>TOO «Nash Company»</p>
    </div>
  )
}

export default Footer