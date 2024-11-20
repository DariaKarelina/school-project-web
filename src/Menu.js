import { Router } from 'react-router-dom';
import './Menu.css';
import Home from './Home/home1Home';
import Notes from './Notes/page1/notes1Notes';

const Menu = () => {
    return(
        <div className="menu"> 
            <div className="menu-home"> 
                <a href="/home">
                    <Router to={Home} >
                        Главная
                    </Router>
                </a> 
            </div> 

            <div className="menu-notes"> 
                <a href="/notes"> Конспекты </a> 
            </div> 

            <div className="menu-hw"> 
                <a href="/homework"> Домашнее задание </a> 
            </div> 

            <div className="menu-self"> 
                <a href="/self"> Самостоятельное изучение </a> 
            </div> 

            <div className="menu-about"> 
                <a href="/about"> О курсе </a> 
            </div> 

    </div> 
); 
};

export default Menu;
