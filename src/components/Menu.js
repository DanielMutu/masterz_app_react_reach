import React  from "react";
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

const MenuEl = () => {

    return (
        <React.Fragment>
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
            </Menu>            
        </React.Fragment>    
    );
};
export default MenuEl;
