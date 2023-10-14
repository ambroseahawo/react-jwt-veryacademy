import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path='/login' element={<Login />} />
			</Routes>
			<Footer />
	  </Router>
	</React.StrictMode>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
