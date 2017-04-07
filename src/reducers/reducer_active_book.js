// state argument is **not application state**, only the state this reducer is responsible for
export default function(state = null, action) {
  console.log('reducer', action);
  switch(action.type) {
    case 'BOOK_SELECTED':
      console.log('book selected reducer');
      return action.payload;
    break;
  }

  return state;
}
