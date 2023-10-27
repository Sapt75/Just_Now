import React from 'react';
import './Header/Header.css';

function NavHeader() {
  return (
    <>
      <header className="main-header main-header-bg sticky-header sh-2">
        <div className="container navbox-d">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <ul className='list-style-none w-50 d-flex justify-content-between m-auto'>

              <a href={'/new-cars/hyundai'}>
                <li>CARS BY BRAND</li>
              </a>

              <a href='/cars/body_type/suv'>
                <li>CARS BY TYPE</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default NavHeader
