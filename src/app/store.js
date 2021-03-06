import { createStore, combineReducers } from "redux";
import counterReducer from "./features/counter/counterSlice";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import rosterReducer from "./features/roster/rosterSlice";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  darkMode: darkModeReducer,
  roster: rosterReducer,
});

const persistedStore = loadFromLocalStorage();

const store = createStore(rootReducer, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
