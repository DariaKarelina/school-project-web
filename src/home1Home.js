import './home1Home.css';
import Head from './home1Head';
import Menu from './Menu';
import News from './home1News';
import Message from "./home1Message";

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