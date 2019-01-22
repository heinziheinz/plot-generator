import React from 'react';
import { shallow } from 'enzyme';
import Element from './new-element';

it('renders without crashing', () => {
  shallow(<Element />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Element />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Element />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper).toContainReact(welcome);
});
