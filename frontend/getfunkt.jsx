import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={SongsIndex} >

  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});
