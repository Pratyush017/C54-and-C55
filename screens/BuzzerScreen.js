import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import Sound1 from '../components/SoundButton'

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Sound1 color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}
