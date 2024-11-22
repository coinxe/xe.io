
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var sol = document.getElementById("solana");
var bnb = document.getElementById("bnb1");
var algo = document.getElementById("algorand");
var usdt = document.getElementById("tether");
var xrp = document.getElementById("ripple");
var trx = document.getElementById("tron");

//mobile menu
document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })
})

     
fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL,TRX,XRP,USDT,ALGO,BNB&tsyms=USD")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    //   console.log(data.ALGO);
      btc.innerHTML = data.BTC.USD;
      eth.innerHTML = data.ETH.USD;
      sol.innerHTML = data.SOL.USD;
      trx.innerHTML = data.TRX.USD;
      xrp.innerHTML = data.XRP.USD;
      usdt.innerHTML = data.USDT.USD;
      algo.innerHTML = data.ALGO.USD;
      bnb.innerHTML = data.BNB.USD;

  })
  .catch((error) => console.error("FETCH ERROR:", error));

  
  let toastBox = document.getElementById('toastBox');
        let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
        let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> error: kindly complete your signing deposit';
        let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> invalid input, check again';

        function showToast(msg) {
            let toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = msg;
            toastBox.appendChild(toast);

            if (msg.includes('error')) {
                toast.classList.add('error');
            }
            if (msg.includes('invalid')) {
                toast.classList.add('invalid');
            }

            setTimeout(() => {
                toast.remove();
            }, 6000);
        }



 