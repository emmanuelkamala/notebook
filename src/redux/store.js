import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
  notes: ['note1', 'note2']
}

const reducer = initialState => initialState;

export const store = createStore(initialState, reducer, composeWithDevTools());
