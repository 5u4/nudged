import { NowRequest, NowResponse } from "@vercel/node";
import admin from "firebase-admin";
import { db } from "../utils/firebase";

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method === "GET") return handleGET(request, response);
  if (request.method === "POST") return handlePOST(request, response);

  response.status(405);
};

const handleGET = async (_: NowRequest, response: NowResponse) => {
  response.status(200).json((await db.doc("count/count").get()).data());
};

const handlePOST = async (_: NowRequest, response: NowResponse) => {
  await db.doc("count/count").update({
    count: admin.firestore.FieldValue.increment(1),
  });
  response.status(201).send("Updated");
};
