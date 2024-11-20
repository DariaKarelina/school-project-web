import './hw1Homework.css';
import Menu from './Menu.js';
import Homeworks from './hw1Homeworks.js';

const Homework = () =>{
    return(
        <div className='homework'>
            <Menu/>
            <div className='head-for-homework'>
                Домашнее Задание
            </div>
            <Homeworks/>

        </div>

    );

}

export default Homework;