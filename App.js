/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

export default class App extends Component {
  render() {
    return (
      <View testID = "welcome">
        <Text>ToDo TDD</Text>
        <AddToDo></AddToDo>
        <ToDoList></ToDoList>
      </View>
    )
  }
}