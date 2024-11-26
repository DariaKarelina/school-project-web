import './home1Home.css';
import Head from '../Header/home1Head';
import Menu from '../../../MenuForAll/Menu';
import News from '../News/AllNews/home1News';
import Message from "../ButtonFB/home1Message";

const Home = () => {
    return (
      
        <div className="home">
          <Head/>
          <Menu/>
          <News/>
          <Message/>
    
    
        </div>
        
      );
}

export default Home;