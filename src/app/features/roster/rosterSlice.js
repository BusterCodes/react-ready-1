import { createSlice } from "@reduxjs/toolkit";

export const rosterSlice = createSlice({
  name: "roster",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      const student = action.payload;

      state.students = [...state.students, student];
    },
    removeStudent: (state, action) => {
      const item = action.payload;
      const updatedTotalPrice =
        state.totalPrice - item.price * (1 - item.discount) * item.quantity;
      const updatedTotalQuantity = state.totalQuantity - item.quantity;
      const existingCartItemIndex = state.items.findIndex(
        (existingItem) => existingItem.productId === item.productId
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        if (existingCartItem.quantity <= item.quantity) {
          updatedItems = [...state.items];
          updatedItems.splice(existingCartItemIndex, 1);
        } else {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - item.quantity,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
      } else {
        return;
      }

      state.items = updatedItems;
      state.totalPrice = updatedTotalPrice;
      state.totalQuantity = updatedTotalQuantity;
    },
  },
});

export const { addStudent, removeStudent } = rosterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRoster = (state) => state.roster.value;

export default rosterSlice.reducer;
