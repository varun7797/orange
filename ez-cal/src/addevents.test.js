import React from 'react';
import ReactDOM from 'react-dom';
import addEvents from './addevents'

it('successful render', () => {
    const div = document.createElement('div');
    const {getByText, getByTestId, container} = render(<addEvents />, div);
    const elem = getByTestId('save-holder');
    ReactDOM.unmountComponentAtNode(div);
})

it('button clickable', () => {
    const div = document.createElement('div');
    const {getByText, getByTestId, container} = render(<addEvents />, div);
    const elem = getByTestId('save-button');
})