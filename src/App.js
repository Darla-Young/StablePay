import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
import logo from './assets/images/tablePay.png';
// import About from './components/General/About.js';
// import Averages from './components/Dealer/Averages.js';
// import Calendar from './components/Dealer/Calendar.js';
// import Contact from './components/General/Contact.js';
// import FAQ from './components/General/FAQ.js';
// import ForgotPassword from './components/General/ForgotPassword.js';
// import Home from './components/Dealer/Home.js';
// import Main from './components/Main.js';
// import Profile from './components/Dealer/Profile.js';
// import SignIn from './components/SignIn.js';
// import SignUp from './components/General/SignUp.js';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isEmployer, setIsEmployer] = useState(false);

  return (
    <React.Fragment>
      <img className='header' alt='StablePay logo' src={logo} />
      <div className="Body">
        <Routes>

        </Routes>
      </div>
      <div className='Footer'>
        <Link className='footlink' to='./components/About'>About Us</Link>
        <Link className='footlink' to='./components/Contact'>Contact Form</Link>
        <Link className='footlink' to='./components/FAQ'>FAQ</Link>
      </div>
    </React.Fragment>
  );
}

export default App;
