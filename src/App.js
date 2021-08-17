
import ApplicationDetail from './containers/application/detail';
import ApplicationList from './containers/application/list';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReportDownload from './containers/report/download';
import ReportActivity from './containers/report/activity';
import VersionDetail from './containers/version/detail';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router >
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
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
      </div>
    </Router >
  );
}

export default App;
