import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import axios from 'axios'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// AXIOS
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

// REDUX
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
