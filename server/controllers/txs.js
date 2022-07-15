import mongoose from "mongoose";
import request from "request"
import dotenv from "dotenv";
dotenv.config();

const url = process.env.URL;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

export const getAddress = async (req, res) => {
  try {
    var add = "";

    const txs = new Promise((resolve, reject) => {
      const newreq = request.post(
        url,
        {
          forever: true,
          json: {
            jsonrpc: "2.0",
            id: "0",
            method: "get_address",
            params: { "account_index": 0, "address_index": [0] }
          },
          auth: {
            user: username,
            pass: password,
            sendImmediately: false
          }
        },
        function(err, res, body) {
          console.log("setting add...");
          add = body.result.address;
          resolve();
        }
      );
    });

    await txs;

    console.log("Address:");
    console.log(add);
    //res.status(201).json({message: add});
    res.status(201).send(add);
  } catch (error) {
    console.log("E409: " + error);
    res.status(409).json({ message: error.message });
  }
};