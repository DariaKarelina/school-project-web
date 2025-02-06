import './App.css';
import Home from './Pages/Home/Page/home1Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 
import Notes from './Pages/Notes/page1/allPage/notes1Notes';
import Homework from './Pages/Homework/page1/allPage/hw1Homework';
import Self from './Pages/SelfStudy/page1/allPage/self1Self';
import Feedback from './Pages/Feedback/page/fb1Feedback.js';
import Topic1 from './Pages/Notes/page2/allPage/notes2Topic1';
import Homework1 from './Pages/Homework/page2/allPage/hw2Homework1';
import VideoHeader from './Pages/SelfStudy/pageVideo/video material/self2Video2Header'
import DocHeader from './Pages/SelfStudy/pageDoc/documentation/self2Doc2Header';
import TextHeader from './Pages/SelfStudy/pageText/text material/self2Text2Header.js';
import AboutCourse from './Pages/AboutCourse/page/ac1AboutCourse.js';
import Authorization from './Pages/Authorization/auth1Authorization.js';




const App = () => {
  return (
    
      <div className="Web">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="notes" element={<Notes />} />
            <Route path="notes/topic1" element={<Topic1 />} />
            <Route path="homework" element={<Homework />} />
            <Route path="homework/homework1" element={<Homework1 />} />
            <Route path="self" element={<Self />} />
            <Route path="self/video" element={<VideoHeader />} />
            <Route path="self/doc" element={<DocHeader />} />
            <Route path="self/text" element={<TextHeader />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path='about' element={<AboutCourse/>}/>
            <Route path='authorization' element={<Authorization/>}/>
          </Routes>
        </BrowserRouter>

      </div>
     
  );
}


export default App;
