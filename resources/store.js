import {createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const initial = {
      books: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        default: return state;
    }
}

const store = createStore(reducer, initial, applyMiddleware(thunk));

export {
	store
};

