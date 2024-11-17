// import { Router } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, a } from 'react-router-dom';
import './Menu.css';
import Home from './home1Home';
const Menu = () => {
    return(
        <div className="menu">
            <div className='menu-home'><a href='/home'>  Главная </a></div>
        
            <div className='menu-notes'><a href='/notes'>Конспекты </a></div> 
        
            <div className='menu-hw'><a href='/homework'>Домашнее задание </a></div>
        
            <div className='menu-self'><a href='/self'> Самостоятельное изучение </a></div>
        
            <dev className="menu-about"><a href='/about'>О курсе </a></dev>
        
            // <Router>
            //     <Switch>
            //         <Route exact path='/home' component={Home}/>
            //     </Switch>
            // </Router>


        </div>

    )
}

export default Menu;
