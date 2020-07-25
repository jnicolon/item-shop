export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_ITEM":
      return [...state, { ...action.item }];
    default:
      return state;
  }
}
