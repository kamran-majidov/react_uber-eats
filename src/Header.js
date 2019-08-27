import React from 'react';

const Header = () => (
  <header id="to-top" className="header">
    <div className="logo">
      <a href="#!">
        <img src="image/Logo.png" alt="Logo" />
      </a>
    </div>
    <div className="location-delivery">
      <form action="search" className="form1 form">
        <div className="inner">
          <div className="location_icon" />
          <input name="search" type="text" className="input" placeholder="Location" />
          <button className="clear" disabled>Clear</button>
          <div className="bulkhead" />
          <button type="button" className="close" disabled>
            <svg className="svg-one" viewBox="0 0 24 24">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
      </form>
      <div className="inner">
        {/* <div className="delivery_icon" /> */}
          <select className="delivery-select">
            <option>Delivery</option>
            <option>ASAP</option>
          </select>
        </div>
    </div>
    <div className="search-login">
      <form action="search" className="form1 form">
        <div className="inner">
          <div className="search-icon">
          </div>
          <input name="search" type="text" className="input" placeholder="Search" />
          <button className="clear" disabled>Clear</button>
          <div className="bulkhead" />
          <button type="button" className="close" disabled>
            <svg className="svg-one" viewBox="0 0 24 24">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
      </form>
      <div><a>Sign in</a></div>

    </div>
  </header>
);

export default Header;