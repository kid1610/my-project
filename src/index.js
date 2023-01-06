import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
  Link } from 'react-router-dom';
import Home from './Home'; 
import Blog from './Component/Blog/Index';
import Detail from './Component/Blog/Detail';
import Login from './Component/Member/Login';
import Register from './Component/Member/Register';
import Account from './Component/Member/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <App>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route  path="/blog/list" element={<Blog />} />
                <Route  path="/blog/detail/:id" element={<Detail/>} />
                <Route  path="/login" element={<Login/>} />
                <Route  path="/register" element={<Register/>} />
                <Route  path="/account" element={<Account />} />
            </Routes>
        </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
