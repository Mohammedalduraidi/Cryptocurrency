import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider) // your code here;
console.log(web3.version)
console.log('jackel ',web3)
export default web3;