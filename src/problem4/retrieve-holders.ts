//Importing Axios for API calls
import axios, { AxiosError } from "axios";
//Importing dotenv for API key
import dotenv from "dotenv";
require("dotenv").config();

//Token contract address and API key
const contractAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const apiKey = process.env.API_KEY;
// Array of addresses to look up
const addresses = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

async function retrieveHolders() {
  try {
    const req = addresses.map((address) => {
      const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${apiKey}`;
      return axios.get(url);
    });
    const res = await Promise.all(req);
    res.forEach((response, i) => {
      const { status, result } = response.data;
      if (status === "1") {
        const amount = parseFloat(result) / 10 ** 8;
        console.log(`${addresses[i]} ${amount.toLocaleString()}`);
      } else {
        console.log(`Failed to retrieve balance for ${addresses[i]}`);
      }
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error retrieving holders:", axiosError.message);
  }
}

retrieveHolders();
