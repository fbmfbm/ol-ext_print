
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import PrintMap from './components/PrintMap';
import HistoMap from './components/HistoMap';


function App() {
  return (
    <Router>
      <div>
        <nav className={'bg-purple-500 text-white p-4 flex-auto'}>
          <ul className={'flex justify-center'}>
            <li  className={'mr-5'}>
              <Link className={'bg-purple-900 hover:bg-purple-700 p-2 rounded-md shadow hover:shadow-lg'} to="/">Accueil</Link>
            </li>
            <li className={'mr-5'}>
              <Link className={'bg-purple-900 hover:bg-purple-700 p-2 rounded-md shadow hover:shadow-lg'} to="/print">Impression panel</Link>
            </li>
            <li className={'mr-5'}>
              <Link className={'bg-purple-900 hover:bg-purple-700 p-2 rounded-md shadow hover:shadow-lg'} to="/histo">Navigation historique</Link>
            </li>
          </ul>
        </nav>
        <div className={"App-header m-2 shadow-md"}>
        <Switch>
          <Route path="/print">
            <PrintMap />
          </Route>
          <Route path="/histo">
            <HistoMap />
          </Route>
          <Route path="/">
            <div className="App">
              
              <h1 className={"text-4xl font-bold"}><span className={"font-light"}>Test OpenLayers</span> Impression</h1>
              
            </div>
          </Route>
        </Switch>
        <div className={'footer'}>
         
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
