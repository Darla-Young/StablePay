import React, { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import throttle from 'lodash/throttle';
import logo from './assets/images/tablePay.png';

// COMPONENTS

// import PrivateRoute from './routes/PrivateRoute';
// import About from './components/General/About.js';
// import Averages from './components/Dealer/Averages.js';
// import Calendar from './components/Dealer/Calendar.js';
import ContactUs from './components/ContactUs.js';
// import FAQ from './components/General/FAQ.js';
// import ForgotPassword from './components/General/ForgotPassword.js';
// import Home from './components/Dealer/Home.js';
// import Main from './components/Main.js';
// import Profile from './components/Dealer/Profile.js';
// import SignIn from './components/SignIn.js';
// import SignUp from './components/General/SignUp.js';

// STATE

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isEmployer, setIsEmployer] = useState(false);

function App() {
  const onScroll = () => {
    const header = document.querySelector(".header");
    if (window.pageYOffset) {
      header.classList.add("isActive");
    } else {
      header.classList.remove("isActive");
    };
  };

  window.addEventListener("scroll", throttle(onScroll, 300));

  return (
    <React.Fragment>
      <header className='header'>
        <Link className='linkHome' to='./components/Home' />
      </header>
      <div className="body">
        <Routes>
          <Route 
          /* change path to /ContactUs after creating home page */
            path='/'
            element={
              <ContactUs />
            }
          />
        </Routes>
      </div>
      <div className='footer grid' >
        <div className="navigation">
          <NavLink className='navLink navLink--isActive' to="/About">About Us</NavLink>
          <NavLink className='navLink navLink--isActive' to="/ContactUs">Contact Developer</NavLink>
          <NavLink className='navLink navLink--isActive' to="/FAQ">FAQ</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
