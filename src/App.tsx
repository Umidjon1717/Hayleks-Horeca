import { Provider } from 'react-redux'
import './index.css'
import Routers from './router'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
        <Routers />
    </Provider>
  )
}

export default App
