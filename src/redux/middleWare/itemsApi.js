import * as actions from "../actions/itemActions";
import * as contentful from "contentful";

const accessToken = process.env.REACT_APP_CONTENFUL_ACCESS_TOKEN_ITEM_SHOP;
const space = process.env.REACT_APP_CONTENFUL_SPACE_ITEM_SHOP;

export const fetchItems = () => {
  return function (dispatch) {
    dispatch(actions.fetchItemsRequest());
    const client = contentful.createClient({
      space: space,
      accessToken: accessToken,
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
