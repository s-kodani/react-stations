// DO NOT DELETE

import * as React from 'react'
// import './destyle.css'
import './App.css'
import { Header } from './Header.js'
import { Description } from './Description.js'
import { DogListContainer } from './DogListContainer.js'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div className="dog">
      <Header />
      <Description />
      <hr></hr>
      <DogListContainer />
    </div>
  )
}
