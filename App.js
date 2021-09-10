import React, {Component} from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title = "Take a picture" 
          />
        </View>
        <View style = {styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Authentication"
            color = "#841584" 
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
})

