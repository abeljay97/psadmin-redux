import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStableInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        compose(
        applyMiddleware(thunk, reduxImmutableStableInvariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
}