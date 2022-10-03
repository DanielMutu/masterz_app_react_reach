import React  from "react";
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

const MenuEl = () => {

    function About() {
        return (
          <div>
            <h2>About</h2>
          </div>
        );
      }    



      
    return (
        <React.Fragment>
            <Menu>
                <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/fund">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/fund" element={<About />} />
                                
                    </Routes>
                </div>    
                </Router>                
            </Menu>            
        </React.Fragment>    
    );
};
export default MenuEl;
