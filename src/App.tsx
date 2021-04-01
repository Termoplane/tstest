import React, { useState } from 'react';
import TheHeader from './components/TheHeader/TheHeader';
import TheMain from './components/TheMain/TheMain';
import { Provider } from 'react-redux'
import configureStore from './store/store'

const store = configureStore()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

function App(): JSX.Element {
  const [showModal, setShowModal] = useState<Boolean>(false)
  return (
    <Provider store={store}>
      <div className="app">
        <TheHeader setShowModal={() => setShowModal(!showModal)} />
        <TheMain />
      </div>
    </Provider>
  );
}

export default App;
