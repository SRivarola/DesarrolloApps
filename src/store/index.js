import { createStore, combineReducers, applyMiddleware } from 'redux';
import movieReducer from './reducers/movie.reducers';
import miListaReducer from './reducers/miLista.reducers';
import userReducer from './reducers/user.reducers';
import actorReducer from './reducers/actor.reducers';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    movieList: movieReducer,
    miLista: miListaReducer,
    user: userReducer,
    actor: actorReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));