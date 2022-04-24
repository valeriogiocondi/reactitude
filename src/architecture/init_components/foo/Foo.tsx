import { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import './Foo.less';

const Foo: FunctionComponent = () => {

  return (
    <div id="foo" className="page">  
      <div className="container">
        <Link to="/">go back</Link>
        <div className="box">
          <div className="cover">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Smokeycover.jpg" alt="Foo Smokeycover.jpg" />
          </div>
          <div className="description">
            <h1>Foo</h1>
            <p>
              The terms <b>foobar</b> (/ˈfuːbɑːr/), foo, bar, baz, and others are used as metasyntactic variables and placeholder names in computer programming or computer-related documentation.[1] They have been used to name entities such as variables, functions, and commands whose exact identity is unimportant and serve only to demonstrate a concept. 
            </p>
            <a href="https://en.wikipedia.org/wiki/Foobar" target="_blank">To know more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foo;
