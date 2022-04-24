import ReactDOM from 'react-dom';

import { gerRouteMap as Router } from './react-router';
import './Index.less';

const App = () => {

  return (
    <>
    <div id="main-content">
      <Router />
    </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
