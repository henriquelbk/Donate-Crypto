import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADRESS = "0x5a91B1893f22421bfBC1CF4C86015E1f6Dc464fA"

export async function doLogin() {

  if (!window.ethereum) throw new Error("No Metamask found!");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error("Wallet not found!");

  localStorage.setItem("wallet", accounts[0])

  return accounts[0];
}

function getContract(){
  const web3 = new Web3(window.ethereum);
  const from = localStorage.getItem("wallet");
  return new web3.eth.Contract(ABI, CONTRACT_ADRESS, { from });
}

export async function addCampaign(campaign){
  const contract = getContract()
  return contract.methods.addCampaign(campaign.title, campaign.description, campaign.ivideoUrl, campaign.imageUrl),send()
}