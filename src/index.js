import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// add component

import Header from './components/header';
import Body from './components/body';
import SubBody from './components/sub_body';
import Footer from './components/footer';

ReactDOM.render(<Header/>,document.getElementById('header'));
ReactDOM.render(<Body/>,document.getElementById('body'));
ReactDOM.render(<SubBody/>,document.getElementById('subbody_1'));
ReactDOM.render(<Footer/>,document.getElementById('footer'));

// registerServiceWorker();