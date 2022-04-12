import React from "react";
import App from './App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import store from './app/store'
import { Provider } from 'react-redux'


document.getElementById('root')
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>);
