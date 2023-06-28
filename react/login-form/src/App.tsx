import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import { LoginContainer } from './pages/login/LoginContainer';
import { PageB } from './pages/pageB/PageB';


function App() {

  // react 一切皆组件
  return (
    <>
      <HashRouter>
        <Switch>
          {/* exact={true} // 精确匹配 */}
          <Route exact={true} path="/" component={LoginContainer} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default App
