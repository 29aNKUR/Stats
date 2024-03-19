import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Desktop from './Desktop';
import Frame from './Frame';
import Group from './Group';
import PieChart from './PieChart';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Group />
          </Route>
          <Route path="/pie-chart">
            <PieChart />
          </Route>
          <Route path="/desktop">
            <Desktop />
          </Route>
          <Route path="/frame">
            <Frame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
