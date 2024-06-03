
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar'
import Videos from './Videos/Videos';
import VideoDetail from './Videos/VideoDetail';
import './MainPage.css'



function MainPage() {
  return (
    <div className="App">
      <Header/>
      <div className="main-display" style={{"display" : "flex"}}>
      <Sidebar/>
       <Videos/>
      </div>
    </div>
  );
}

export default MainPage;
