import * as actions from "../actions/itemActions";
import * as contentful from "contentful";

export const fetchItems = () => {
  return function (dispatch) {
    dispatch(actions.fetchItemsRequest());
    const client = contentful.createClient({
      space: "bz2b6zu2ij16",
      accessToken: "5g4Q46RqnmPxrAOwon5dsojjIVslg7fFC17jryB4IEY",
    });
    client
      .getEntries("itemShop")
      .then((entry) => {
        const items = entry.items.map((item) => item);
        dispatch(actions.fetchItemsSuccess(items));
      })
      .catch((error) => {
        dispatch(actions.fetchItemsFailure(error.message));
      });
  };
};
