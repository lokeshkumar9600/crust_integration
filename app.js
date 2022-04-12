const {create} = require("ipfs-http-client");
// const CID = require('cids');

// const crustPin = require('@crustio/crust-pin').default;
// const crust = new crustPin(`${cTKurfQnHqfvK6VQqW9d7cqktU4YYah7vPj3H5nS9FBuQo36V}`);
// const main = async () => {
//     await crust.pin(x.path);
// }

// main();


const polkadot = require("@polkadot/api");
const crustio = require("@crustio/type-definitions");
// const keyring = require("@polkadot/keyring");
const keyringPair = require("@polkadot/keyring/pair");

const { waitReady } = require("@polkadot/wasm-crypto");
const { Keyring } = require("@polkadot/api");

const crustChainEndpoint = "wss://rpc.crust.network";
const Wsprovider = new polkadot.WsProvider(crustChainEndpoint);


async function ipfsClient()
{
    const ipfs = await create();
    return ipfs;
}

const obj={
  name : "Lokesh",
  email : "lokesh@gmail.com",
  gender : "Male",
  phone : "9600771852",
  DOB : "25-09-2002",
  addressL1 : "No 5 jj nagar",
  addressL2 : "pondicherry",
  city : "Chennai",
  pincode : 605010,
  age : 19,
  pgonAdd : "0xC9E6ACd323C2Ae48bDAa3ff4570b2eD8e218433D"
 }

 const myJSON = JSON.stringify(obj);
//  console.log(myJSON);


 var result;

async function saveText(){
    let ipfs = await ipfsClient();
     result = await ipfs.add(myJSON);
    // console.log(result.path);
}
saveText();
// console.log(x);

async function placeStorageOrder() {
  await waitReady();
  const api = new polkadot.ApiPromise({
    provider: Wsprovider,
    typesBundle: crustio.typesBundleForPolkadot,
  });
  await api.isReady;
  // 1. Construct place-storage-order tx
  const fileCid = resu; // IPFS CID, take `Qm123` as example
  const fileSize = 2 * 1024 * 1024; // Let's say 2 gb(in byte)
  const tips = 0;
  const memo = "";
  const tx = api.tx.market.placeStorageOrder(fileCid, fileSize, tips, memo);

  const keyring = new Keyring({ type: "sr25519" });
  console.log(keyring);
  const krp = keyring.addFromUri(
    "find curious smooth cart tumble jaguar impact grunt bird idle stand okay"
  );
  console.log(krp);

  await api.isReadyOrError;
  return new Promise((resolve, reject) => {
    tx.signAndSend(krp, ({ events = [], status }) => {
      console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

      if (status.isInBlock) {
        events.forEach(({ event: { method, section } }) => {
          if (method === "ExtrinsicSuccess") {
            console.log(`✅  Place storage order success!`);
            resolve(true);
          }
        });
      } else {
        // Pass it
      }
    }).catch((e) => {
      reject(e);
    });
  });

  // 3. Send transaction
}

const res = placeStorageOrder();


async function getData(hash){
  let ipfs =  await ipfsClient();
  let asyncitr = ipfs.cat(hash);
  for await (const itr of asyncitr) {
      
    let data = Buffer.from(itr).toString();
    console.log(data);
  }
}
console.log(result.path);
// getData("QmeWaDunFB1KQ2WQii6bprGLBc8cLwGFhbYfTHAm5h9BjF");