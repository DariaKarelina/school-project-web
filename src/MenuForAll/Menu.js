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