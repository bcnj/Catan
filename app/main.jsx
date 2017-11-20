import './index.scss'
import React from 'react'
import { Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import WhoAmI from './containers/WhoAmI'
import NotFound from './containers/NotFound'

import store from './store'
import Main from './containers'

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main')
)
