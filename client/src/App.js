import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Countries from './Components/Countries'
import Details from './Components/Details'
import Activity from './Components/Activity'
import Landscape from './Components/LandScape'


function App() {
  return (
  <BrowserRouter>
    <Route exact path={'/'} component={Landscape}/>
    <Route path={'/home'} component={Navbar}/>
    <Route exact path={'/home'} component={Countries}/>
    <Route exact path={'/home/details/:id'} component={Details}/>
    <Route exact path={'/home/activity'} component={Activity}/>
  </BrowserRouter>
  );
}

export default App;
     
      
  

  
