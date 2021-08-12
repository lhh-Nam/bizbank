
import ApplicationDetail from './containers/application/detail';
import ApplicationList from './containers/application/list';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReportDownload from './containers/report/download';
import ReportActivity from './containers/report/activity';
import VersionDetail from './containers/version/detail';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/application/detail">
            <ApplicationDetail />
          </Route>
          <Route path="/version/detail">
            <VersionDetail />
          </Route>
          <Route path="/report/download">
            <ReportDownload />
          </Route>
          <Route path="/report/activity">
            <ReportActivity />
          </Route>
          <Route path="/">
            <ApplicationList />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
