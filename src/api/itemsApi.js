import { handleResponse, handleError } from "./apiUtils";
import * as contentful from "contentful";

export function getItems() {
  const client = contentful.createClient({
    space: "bz2b6zu2ij16",
    accessToken: "5g4Q46RqnmPxrAOwon5dsojjIVslg7fFC17jryB4IEY",
  });
  return client
    .getEntries("itemShop")
    .then((entry) => handleResponse(entry))
    .catch((err) => handleError(err));
}
