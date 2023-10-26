import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const createComment = async (
  id: number,
  comment: string,
  appendComment: Function
) => {
  const token = await load("token");
  const authHeaders = { ...headers, Authorization: `Token ${token}` };
  const data = { content: comment };

  try {
    const request = await fetch(`${URL}/deal/${id}/comment/`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(request.status);

    if (!request.ok) return;
    console.log(response);
    // return;
    appendComment((prev: any) => {
      const comments = [...prev.comments, response]
      return {...prev, comments:comments} 
    });
  } catch (err) {
    console.log(err);
  }
};
