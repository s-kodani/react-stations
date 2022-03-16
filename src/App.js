// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header.js'
import { Description } from './Description.js'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div className="dog">
      <Header />
      <Description />
    </div>
  )
}
