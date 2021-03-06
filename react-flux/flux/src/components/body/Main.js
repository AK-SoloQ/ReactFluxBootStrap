import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import More from './More'
import Blue from './Blue'
import Red from './Red'
import Yellow from './Yellow'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/More/:number' component={More} />
      <Route path='/Blue' component={Blue} />
      <Route path='/Red' component={Red} />
      <Route path='/Yellow' component={Yellow} />
    </Switch>
  </main>
)

export default Main
