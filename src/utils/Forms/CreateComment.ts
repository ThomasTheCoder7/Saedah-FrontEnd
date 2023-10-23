import { load } from "utils/storageHandler";
import { URL, headers } from "../logicUtils";

export const createComment = async (
  id: number,
  comment: string,
  appendComment: Function
) => {
  const token = await load("token");
  const authHeaders = { ...headers, Authorization: `Token ${token}` };
  // console.log("headers:",authHeaders);
  const formData = new FormData();
  formData.append("content", comment);

  const request = await fetch(`${URL}/deal/${id}/comment/`, {
    method: "POST",
    headers: authHeaders,
    body: formData,
  });
  const response = await request.json();

  if (!request.ok) return;

  appendComment((prev: any) => [...prev, response]);
};
