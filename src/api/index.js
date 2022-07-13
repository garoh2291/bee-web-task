import { BACKEND_URL } from "../data";
import { getToken } from "../helpers/token";

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  })
    .then((respone) => respone.json())
    .then((data) => {
      if (data.error || data.errors) {
        throw new Error(data.error[0]);
      }
      return data;
    })
    .catch((err) => console.log(err));
}
export function getTasksRequest(query) {
  return get(`${BACKEND_URL}/task${query ? `?${query}` : ""}`);
}
