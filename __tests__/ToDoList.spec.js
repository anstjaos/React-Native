import React from 'react'
import ToDoList from '../ToDoList'
import { shallow } from 'enzyme'

describe('Rendering', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            items: [
                {
                    text: 'some ToDo',
                    completed: false
                },
                {
                    text: 'some ToDo 2',
                    completed: true
                }
            ]
        }
        wrapper = shallow(<ToDoList {...props}></ToDoList>)
    })

    it('should render a flat list', () => {
        expect(wrapper.find('FlatList')).toHaveLength(1);
    })

    it('should pass props to FlatList', () => {
        expect(wrapper.find('FlatList').prop('data')).toBe(props.items)
    })
})