export const INCREMENT = 'INCREMENT_COUNTER';
export const DECREMENT = 'DECREMENT_COUNTER';
export const counterActions = {};

counterActions.increment = () => { return { type: INCREMENT } };
counterActions.decrement = () => { return { type: DECREMENT } };