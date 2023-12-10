var shibaAddr = null;
var contract = null; 

document.getElementById('connectWalletButton').onclick = async () => {
  if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
        shibaAddr = accounts[0];
        document.getElementById('connectWalletButton').textContent = "Connected!";
        console.log(shibaAddr);
  }
}
