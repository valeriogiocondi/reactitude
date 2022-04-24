import { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import './Home.less';

const Home: FunctionComponent = () => {

  return (
    <div id="home" className="page">  
      <div className="container">
        <div className="box">
          <h1>Home</h1>
          <Link to="foo">go to Foo component</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;