import './index.scss'
import React from 'react'
import {Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Main from './components'

render(
  <Main />,
  document.getElementById('main')
)
