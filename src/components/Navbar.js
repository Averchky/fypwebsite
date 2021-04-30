import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import teamLogo from '../assets/DJFnz_Black.png';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const showLogo = () => {
    if (window.innerWidth >= 960) {
        return <img src = { teamLogo }
             alt = "TeamLogo"
             style = {{width:"290px", height:"111px"}}></img>;
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/fypwebsite' className='navbar-logo' onClick={closeMobileMenu}>
              { showLogo() }
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/fypwebsite' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gamefeature'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Game Features
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/awareness'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Awareness
              </Link>
            </li>

            <li>
              <Link
                to='/download'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Download
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Game Download</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
