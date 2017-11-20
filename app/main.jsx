// import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Route, IndexRedirect, browserHistory} from 'react-router'
// import {BrowserRouter as Router, Switch} from 'react-router-dom'
// import WhoAmI from './containers/WhoAmI'
// import NotFound from './containers/NotFound'
import Main from './containers'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main')
)
