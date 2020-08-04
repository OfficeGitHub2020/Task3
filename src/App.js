import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses'
// import Course from './containers/Course/Course'
import Users from './containers/Users/Users'
import ErrorPage from './components/ErrorPage/ErrorPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/courses">Courses</NavLink>
            </li>

            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        {/* <Route path="/courses" exact component={Courses} />
        <Route path="/users" component={Users} />
        <Route path="/courses/course" component={Course} /> */}
        <Switch>
          {/* if you r using switch then order is necessary */}
          <Route path="/users" component={Users} />
          {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
