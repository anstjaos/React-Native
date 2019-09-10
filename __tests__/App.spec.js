/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import expectExport from 'expect';
import { shallow } from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App></App>)
  it('is Text visible?', () => {
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  })

  it('is ADDToDO visible?', () => {
    expect(wrapper.find('AddToDo')).toHaveLength(1);
  })

  it('is ToDoList visible?', () => {
    expect(wrapper.find('ToDoList')).toHaveLength(1);
  })
})