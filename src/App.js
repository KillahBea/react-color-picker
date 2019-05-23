import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker'
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <ColorPicker />
      </main>
    )
  }
}
export default App
