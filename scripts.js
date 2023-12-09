document.addEventListener('DOMContentLoaded', () => {
  const mintButton = document.getElementById('mintButton');
  const mintingAnimation = document.getElementById('mintingAnimation');
  const checkNFTButton = document.getElementById('checkNFTButton');
  const nftIdInput = document.getElementById('nftId');
  const nftCardDiv = document.getElementById('nftCard');

  mintButton.addEventListener('click', () => {
    mintButton.disabled = true;
    startMintingAnimation();

    // Simulate minting process
    setTimeout(() => {
      stopMintingAnimation();
      alert('NFT Minted successfully!');
      mintButton.disabled = false;
    }, 3000); // Adjust as needed
  });

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  checkNFTButton.addEventListener('click', () => {
    const nftId = nftIdInput.value.trim();
    /*if(isLetter(nftId)){
      alert('is alphabet')
    }*/

    if (nftId !== '') {
      if(nftId <= 101){
        const nftDetails = fetchNFTDetails(nftId);
        displayNFTDetails(nftDetails);
      } else {
        const nftDetails = displayError(nftId);
        displayNFTDetails(nftDetails);
      }
    } else {
      alert('Please enter a valid NFT ID.');
    }
  });

  function startMintingAnimation() {
    mintingAnimation.innerHTML = '<div class="minting-spinner"></div>';
  }

  function stopMintingAnimation() {
    mintingAnimation.innerHTML = '';
  }

  function fetchNFTDetails(nftId) {
    if(isLetter(nftId)){
      return {
        errors: 'Invalid NFT ID.'
      };
    } else {
      // Replace this with actual logic to fetch NFT details
      return {
        name: 'My NFT',
        owner: 'John Doe',
        mintedDate: '2023-01-01',
        otherDetails: 'Additional details about the NFT.'
      };
    }
  }

  function displayError(details) {
    nftCardDiv.innerHTML = `
      <div><strong>Error:</strong> Invalid NFT ID.</div>
    `;
  }

  function displayNFTDetails(details) {
    nftCardDiv.innerHTML = `
      <div><strong>Name:</strong> ${details.name}</div>
      <div><strong>Owner:</strong> ${details.owner}</div>
      <div><strong>Minted Date:</strong> ${details.mintedDate}</div>
      <div><strong>Other Details:</strong> ${details.otherDetails}</div>
    `;
  }

  // Function to check if MetaMask is connected
  if (typeof window.ethereum !== 'undefined' && window.ethereum.isConnected()) {
    console.log('MetaMask is connected');
    alert('none');
    // connectButton.style.display = 'none'; // Hide connect button if connected
  } else {
    console.log('MetaMask is not connected');
    alert('block');
    // connectButton.style.display = 'block'; // Show connect button if not connected
  }

});


// document.addEventListener('DOMContentLoaded', () => {
//   // Existing code remains unchanged
//
//   const checkNFTButton = document.getElementById('checkNFTButton');
//   const nftIdInput = document.getElementById('nftId');
//   const nftDetailsDiv = document.getElementById('nftDetails');
//
//   checkNFTButton.addEventListener('click', () => {
//     const nftId = nftIdInput.value.trim();
//
//     // Check if the input is not empty
//     if (nftId !== '') {
//       // Fetch NFT details (replace this with your logic)
//       const nftDetails = fetchNFTDetails(nftId);
//
//       // Display NFT details
//       displayNFTDetails(nftDetails);
//     } else {
//       alert('Please enter a valid NFT ID.');
//     }
//   });
//
//   function fetchNFTDetails(nftId) {
//     // Replace this with your actual logic to fetch NFT details from the backend or blockchain
//     // For demonstration purposes, returning a mock NFT details object
//     return {
//       name: 'My NFT',
//       owner: 'John Doe',
//       mintedDate: '2023-01-01',
//       otherDetails: 'Additional details about the NFT.'
//     };
//   }
//
//   function displayNFTDetails(details) {
//     // Display NFT details in the specified div
//     nftDetailsDiv.innerHTML = `
//       <p><strong>Name:</strong> ${details.name}</p>
//       <p><strong>Owner:</strong> ${details.owner}</p>
//       <p><strong>Minted Date:</strong> ${details.mintedDate}</p>
//       <p><strong>Other Details:</strong> ${details.otherDetails}</p>
//     `;
//   }
// });

let count = 1;
let cost = 101;
var newCost = 101;
const costDisplay = document.getElementById('cost');
const countDisplay = document.getElementById('countDisplay');

function increaseCount() {
  if(count < 101){
    count++;
    newCost = cost * count;
    updateCount();
    updateCost();
  }
}

function decreaseCount() {
  if (count > 1) {
    count--;
    newCost = cost * count;
    updateCount();
    updateCost();
  }
}

function updateCount() {
  countDisplay.innerHTML = '<strong>' + count + '</strong>';
}

function updateCost() {
  costDisplay.innerHTML = newCost;
}
