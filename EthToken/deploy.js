// your code here
const HDWalletProvider = require("truffle-hdwallet-provider");// correct sa7!
const infura_apikey = "https://rinkeby.infura.io/v3/0595622d78684678a1bfb50858535d05";
const mnemonic = "enable nature base midnight visa arm act cup garbage olive bright journey";
const { interface, bytecode } = require('./compile');
console.log('interface____________________ ',interface)
let JSONABI = JSON.parse(interface);

const Web3 = require('web3'); 
// const contract = require("truffle-contract");
// 
// const MyContract = contract({
//   abi:'my api',
//   unlinked_binary: "zain said that i'm an asshole"

// })
// const provider = new Web3.providers.HttpProvider("http://localhost:8545");
// MyContract.setProvider(provider);

// const Artifactor = require("truffle-artifactor");
const provider = new HDWalletProvider(mnemonic,infura_apikey);
// const wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
// const provider = new WalletProvider(wallet, "https://ropsten.infura.io/")
 const web3 = new Web3(provider) // your code here

// var deployed;
// MyContract.deployed().then(function(instance) {
//   var deployed = instance;
//   return instance.someFunction(5);
// }).then(function(result) {
// //  console.log(result)
// console.log('alo alo')
// });

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]); 
  // address of the deployer

  const result =await new web3.eth.Contract(JSONABI)
  .deploy({
    data: '0x'+bytecode,
    arguments: [100000000000000000000, 'BCCoin', 0, 'BCC' , 100]
  })
  .send({ from: accounts[0], gas: '1000000'});
    // your code here
     
  console.log('Contract deployed to', result.options.address); 
  //address of the deployed contract
};
deploy();
