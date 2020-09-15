import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="../pages/home_page.js">one</a></li>
                <li><a href="../pages/contact.js">two</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;