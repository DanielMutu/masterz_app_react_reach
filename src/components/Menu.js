import React  from "react";
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

const MenuEl = () => {

    return (
        <React.Fragment>
            <Menu>
                <a id="CreateFund" className="menu-item" href="/">Create New Fund</a>
                <a id="DonateFund" className="menu-item" href="/">Donate </a>
            </Menu>            
        </React.Fragment>    
    );
};
export default MenuEl;
