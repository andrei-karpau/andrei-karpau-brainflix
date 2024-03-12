import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';


function Header () {
    return (
        <header>
            <nav className='nav-bar'>
                <div className='nav-bar__container'>
                    <div className='nav-bar__container-logo'>
                        <a className='nav-bar__container-logo--link' href='#brainflix'>
                            <img id='logo' src={logo} alt='Here could be Brain Flix Logo'/>
                        </a>
                    </div>
                    <div className='nav-bar__container-search'>
                        <input type='search' placeholder='Search' id='search-input' className='nav-bar__container-search--input' />
                    </div>
                    <img className='nav-bar__container-search--avatar' src={avatar}  alt='here could be user avatar'/>
                    <button className='nav-bar__container-upload'>
                        upload
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;