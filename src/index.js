import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';
import './index.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Modal from './Modal';
import Main from './Main';


ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <Sidebar />
    <Main />
    <Modal />
  </React.StrictMode>,
  document.getElementById('root')
);