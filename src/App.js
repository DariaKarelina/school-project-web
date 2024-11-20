import './App.css';
import Home from './Home/home1Home.js';
import { BrowserRouter } from 'react-router-dom';
import Menu from "./Menu.js";
// import Notes from './Notes/page1/notes1Notes';
// import Homework from './Homework/page1/hw1Homework';
// import Self from './SelfStudy/self1Self';
// import Feedback from './Feedback+AboutUs/fb1Feedback';
// import Topic1 from './Notes/page2/notes2Topic1';
// import Homework1 from './Homework/page2/hw2Homework1';




const App = () => {
  return (
    
      <div className="Web">
        <BrowserRouter>
          <Menu/>
        </BrowserRouter>
        <Home/>
        {/* <Notes/> */}
        {/* <Homework/> */}
        {/* <Self/> */}
        {/* <About/> */}
        {/* <Feedback/>  */}
        {/* <Topic1/> */}
        {/* <Homework1/> */}

      </div>
     
  );
}

export default App;
