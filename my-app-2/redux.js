const redux = require('redux');
const createStore = redux.createStore;
const intialState = {
    value: 0,
    name: 'Dimas',
    job: 'Software engineer',
    age: 18
}
/// Reducer
const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'PLUS_AGE':
            return {
                ...state,
                name: 'Dimas Sr.',
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state
    }
}
/// Store
const store = createStore(rootReducer);
console.log(store.getState())

/// Subscription
store.subscribe(() => {
    console.log('store change:', store.getState())
})

/// Dispatch or Action
store.dispatch({ type: 'PLUS_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 100 })
console.log(store.getState())
