import ReactDOM from 'react-dom';
import React from 'react';

import { remote } from 'electron';

import MainContainer from './containers/MainContainer';

import 'materialDesignLite/material.min.css';
import 'materialDesignLite/material.min.js';
import 'materialDesignIcons';
import './style/material.deep_orange-orange.min.css';
import './style/style.css';

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123) {
        remote.getCurrentWindow().webContents.openDevTools({
            mode: 'detach',
        });
    }
});

ReactDOM.render(
    <MainContainer/>,
    document.getElementById('app')
);
