import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('Basic Test Suite for React Dom', () => {
  test('Does it render without crashing...', () => {
    shallow(<App />);
  });

  test('Does the rendered dom contain a welcome message?', () => {
    const welcome = <h2>Welcome to React</h2>;
    expect(shallow(<App />).contains(welcome)).toEqual(true);
  });

  test('Does the state of bool start as a truthy value?', () => {
    expect(shallow(<App />).state().bool).toBeTruthy();
  });

  test('Does clicking the button change the bool value from truthy to falsey?', () => {
      shallow(<App />).find('#button-click').simulate('click');
      expect(shallow(<App />).state().bool).toBeFalsey;
      shallow(<App />).find('#button-click').simulate('click');
      expect(shallow(<App />).state().bool).toBeTruthy;
  });
});
