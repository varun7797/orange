import React from 'react';
import ReactDOM from 'react-dom';
import addEvents from './addevents'

it('successful render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<addEvents link="dummy.com" />, div);
    ReactDOM.unmountComponentAtNode(div);
}) 