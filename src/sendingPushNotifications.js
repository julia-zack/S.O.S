import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'dc2e4f6d8273ece57016aa2b17e115c6a70562e99989e3171f403ba4d499857b'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `S.O.S. Notification`,
        body: `Be attentive. Someone needs your help.`
      },
      payload: {
        title: `S.O.S. message`,
        body: `Julia, 1101234567, Buenos Aires, violencia domestica`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0x28D359c0D906dcF8cFa7177A1E45c3AFfB21B8af', // recipient address
      channel: 'eip155:5:0x67Ea839b012319B93319a2b13b08efB9bF18a6F3', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API response: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();