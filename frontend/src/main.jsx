import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

// 👨🏽‍💻 We set a Redux and ChakraProvider, in case of needed,
// change their position to involve Chakra into Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
