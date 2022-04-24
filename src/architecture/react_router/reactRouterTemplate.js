const route = require('./route.json');

exports.template = () => {
  
  const importList = Array.from( new Set(route.map(x => x.component)) ).map(x => `import ${x.name} from '${x.path}';`);
  const routeList = route.map(x => `<Route path='${x.path}' element={ <${x.component.name} /> } />`);
  
  return (
`// ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
${ importList.join('\n') }

export const gerRouteMap = () => (
  <BrowserRouter>
    <Routes>
      ${ routeList.join('\n\t\t\t') }  
    </Routes>
  </BrowserRouter>
);
`
  );  
}
