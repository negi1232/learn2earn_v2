import BloctoSDK from "@blocto/sdk";
const chainId= "0x13881"; // (required) chainId to be used
const rpc="https://rpc-mumbai.maticvigil.com/"; // (required for Ethereum) JSON RPC endpoint
const bloctoSDK = new BloctoSDK({
    ethereum: {
      chainId: "0x13881", // (required) chainId to be used
      rpc: "http://localhost:8545/" // (required for Ethereum) JSON RPC endpoint
    }
  });


const quiz_address="0x4eC8E1E12bD0547Ae5F05e2dDf797707709684F7";
const token_address="0xdee17a4bd57B214294edcf370000D0427e7aDF27";

export {chainId,rpc,bloctoSDK,quiz_address,token_address };
