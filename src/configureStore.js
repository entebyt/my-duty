import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import { createStore } from 'redux'
// import notesReducer from './notesApp'

// const store = createStore(rootReducer)


export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    // persistedState,
    applyMiddleware(thunkMiddleware)
  )
  return store
}

// export default store


