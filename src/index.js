import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import HomeContainer from './containers/Home';
import About from './containers/About';
import muiTheme from './config/theme';
import './index.css';

const BuildingBlocks = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={About} />>
            </Switch>
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(<BuildingBlocks />, document.getElementById('root'));
registerServiceWorker();