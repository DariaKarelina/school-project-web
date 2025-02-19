import './Menu.css';
import Home from '../Pages/Home/Page/home1Home';
import Notes from '../Pages/Notes/page1/allPage/notes1Notes';

const Menu = () => {
    return(
        <div className="menu"> 
            <div className="menu-home"> 
                <a href="/">
                    Главная
                </a> 
            </div> 

            <div className="menu-notes"> 
                <a href="/notes"> Лекции </a> 
            </div> 

            <div className="menu-hw"> 
                <a href="/homework"> Домашние задания </a> 
            </div> 

            <div className="menu-self"> 
                <a href="/self"> Материалы </a> 
            </div> 

            <div className="menu-about"> 
                <a href="/about-c"> О курсе </a> 
            </div> 

    </div> 
); 
};

export default Menu;