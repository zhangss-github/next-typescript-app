import { NextApiHandler } from "next";

const HelloApi: NextApiHandler = (requset, response) => {
  response.status(200).json("hello, nextjs!");
}

export default HelloApi;