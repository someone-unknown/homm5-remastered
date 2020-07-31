import React from 'react';
import ReactDOM from 'react-dom';

import { Global } from 'UI/Global';

window.addEventListener('DOMContentLoaded', (): void => {
    ReactDOM.render(<Global/>, document.body);
});