import { createStore, combineReducers, applyMiddleware } from 'redux';
import movieReducer from './reducers/movie.reducers';
import miListaReducer from './reducers/miLista.reducers';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    movieList: movieReducer,
    miLista: miListaReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));