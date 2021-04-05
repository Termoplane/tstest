import { RouterHistory } from '../../router/history'
import { Provider } from 'react-redux'
import configureStore from '../../store/store'
import './App.css'

const store = configureStore()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="app">
        <RouterHistory />
      </div>
    </Provider>
  );
}

export default App;
