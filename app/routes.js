import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="courses" component={CoursesPage} />
      <Route path="about" component={AboutPage} />
  </Route>
);
