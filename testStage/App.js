import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './Navigation/Navigation'
import Store from './Store/configureStore'
import { Provider } from 'react-redux'
import Search from './components/Search'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Search/>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
