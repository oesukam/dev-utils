import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Wrapper from './containers/Wrapper/Wrapper';
import routes from './routes';


const App = () => <Layout>
    <Router>
      <Switch>
      {
        routes.map((route) => 
          (
            <Route
              exact
              path={route.path}
              render={props => 
                <Wrapper category={route.category} name={route.name}>
                  <route.component {...props} />
                </Wrapper>
              }
            />
          )
        )
      }
      </Switch>
    </Router>
   
  </Layout>

export default App;
