
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Videos from './components/Videos/Videos';

function App() {
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

export default App;
