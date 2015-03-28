/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');

var {
  TextInput,
  View,
  AppRegistry,
  StyleSheet
} = React;

var textinputstyle = (x) => ({
  fontSize: 20,
  height: 20,
  // Uncomment this and textinput 2 & 3 won't work
  top: x * 50,
  borderWidth: 1,
  borderColor: 'green',
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    borderWidth: 1,
    borderColor: 'blue',
  },
  subc: {
    borderWidth: 1,
    borderColor: 'red',
  },
  textinput: textinputstyle(1),
  textinput2: textinputstyle(2),
  textinput3: textinputstyle(3),
  textinput4: textinputstyle(4),
});

var Bug2 = React.createClass({
  render() {
    return <View style={styles.subc}>
      <TextInput style={styles.textinput3} placeholder="You can't use me too" />
    </View>
  }
});

var App = React.createClass({
  render() {
    return <View style={styles.container}>
      <TextInput style={styles.textinput} placeholder='Works!' />
      <View style={styles.subc}>
        <TextInput style={styles.textinput2} placeholder="You can't use me" />
      </View>
      <Bug2/>
      <TextInput style={styles.textinput4} placeholder='Works!' />
    </View>
  }
});

AppRegistry.registerComponent('textinputbug', () => App);
