import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Chatblockai from './views/chatblockai'
import SignIn from './views/sign-in'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Chatblockai} exact path="/" />
        <Route component={SignIn} exact path="/sign-in" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
