import './App.css';
import Home from './Pages/Home/Page/home1Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Notes from './Pages/Notes/page1/allPage/notes1Notes';
import Homework from './Pages/Homework/page1/allPage/hw1Homework';
import Self from './Pages/SelfStudy/page1/allPage/self1Self';
import Feedback from './Pages/Feedback/page/fb1Feedback.js';
import Topic1 from './Pages/Notes/page2/Topic1/allPage/notes2Topic1';
import Topic2 from './Pages/Notes/page2/Topic2/allPage/notes2Topic2';
import Topic3 from './Pages/Notes/page2/Topic3/allPage/notes2Topic3';
import Topic4 from './Pages/Notes/page2/Topic4/allPage/notes2Topic4';
import Topic5 from './Pages/Notes/page2/Topic5/allPage/notes2Topic5';
import Topic6 from './Pages/Notes/page2/Topic6/allPage/notes2Topic6';
import Topic7 from './Pages/Notes/page2/Topic7/allPage/notes2Topic7';
import Topic8 from './Pages/Notes/page2/Topic8/allPage/notes2Topic8';
import Topic9 from './Pages/Notes/page2/Topic9/allPage/notes2Topic9';
import Topic10 from './Pages/Notes/page2/Topic10/allPage/notes2Topic10';
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
            <Route path="notes/topic2" element={<Topic2 />} />
            <Route path="notes/topic3" element={<Topic3 />} />
            <Route path="notes/topic4" element={<Topic4 />} />
            <Route path="notes/topic5" element={<Topic5 />} />
            <Route path="notes/topic6" element={<Topic6 />} />
            <Route path="notes/topic7" element={<Topic7 />} />
            <Route path="notes/topic8" element={<Topic8 />} />
            <Route path="notes/topic9" element={<Topic9 />} />
            <Route path="notes/topic10" element={<Topic10 />} />
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
