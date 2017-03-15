import ReactDOM from 'react-dom';
import React from 'react';

import { remote } from 'electron';

import MainContainer from './containers/MainContainer';

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
