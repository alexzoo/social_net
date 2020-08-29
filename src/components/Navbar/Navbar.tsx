import React from 'react';
import css from './Navbar.module.css';


function Navbar() {
    return <nav className={css.nav}>
        <div className={css.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={css.item}>
            <a href='/dialogs'>Messages</a>
        </div>
        <div className={css.item}>
            <a>News</a>
        </div>
        <div className={css.item}>
            <a>Music</a>
        </div>
        <div className={css.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;