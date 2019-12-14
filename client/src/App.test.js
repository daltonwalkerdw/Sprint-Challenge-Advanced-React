import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UseDarkMode from "./Components/UseDarkMode"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shows data", () => {
  expect(UseDarkMode).toBeFalsy()
});