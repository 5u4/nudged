import { NowRequest, NowResponse } from "@vercel/node";

export default (request: NowRequest, response: NowResponse) => {
  if (request.method === "GET") return handleGET(request, response);
  if (request.method === "POST") return handlePOST(request, response);

  response.status(405);
};

const handleGET = (request: NowRequest, response: NowResponse) => {
  response.status(200).send("Hello");
};

const handlePOST = (request: NowRequest, response: NowResponse) => {
  response.status(201).send("Created");
};
