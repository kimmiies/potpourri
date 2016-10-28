var React = require('react');
var ReactDOM = require('react-dom');
import Routes from'./components/routes';
// var MyComponent = require('./components/movements.js');

require("./styles.scss");

var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyDkpW9S_NssooZbMOiOyX5AON8gcDTEemI",
  authDomain: "potpourri-1ba61.firebaseapp.com",
  databaseURL: "https://potpourri-1ba61.firebaseio.com",
  storageBucket: "potpourri-1ba61.appspot.com",
  messagingSenderId: "302567965002"
};
firebase.initializeApp(config);



// ReactDOM.render(<MyComponent />, document.getElementById("placeholder"));

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
