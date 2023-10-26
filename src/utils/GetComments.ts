import { load } from "./storageHandler";
import { URL, headers } from "./logicUtils";

export const getComments = async (
  id: number,
  setComments: Function,
  setPage: Function,
  page: number
) => {
  const token = await load("token");
  const AuthHeaders = { ...headers, Authorization: `Token ${token}` };
  const arg = page != null ? "?page=" + page : "";

  const request = await fetch(`${URL}/deal/${id}${arg}`, {
    method: "GET",
    headers: AuthHeaders,
  });
  if (request.status != 200) return;

  const response = await request.json();
  if (page > 1) {
    setComments((prev: any) => {
      if (!prev.comments) return response;
      const comments = [...prev.comments, ...response.comments];
      return { ...response, comments: comments };
    });
  } else {
    setComments(response);
  }
  if (response.has_next_page) {
    setPage(page + 1);
  }
};
