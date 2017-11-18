// import './index.scss'
import React from 'react'
import {Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import WhoAmI from './containers/WhoAmI'
import NotFound from './containers/NotFound'
import Main from './containers'

render(
  <Main />,
  document.getElementById('main')
)
