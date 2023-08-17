const withdrowBtn = document.querySelector("#withdrow-btn");
const withdrowInput = document.querySelector("#withdrow-input");

//
const withdrowTotal = document.querySelector("#withdrow-total");

//
const totalBalance = document.querySelector("#total-balance");

const errorHandle = document.getElementById("errorhandle");

withdrowBtn.addEventListener("click", function () {
  const withdrowInputVlaue = withdrowInput.value;
  const withdrowInputVlaueNum = parseFloat(withdrowInputVlaue);

  const withdrowTotalValue = withdrowTotal.innerText;
  const withdrowTotalValueNum = parseFloat(withdrowTotalValue);
  const currentWithdrowBal = withdrowInputVlaueNum + withdrowTotalValueNum;

  withdrowTotal.innerText = currentWithdrowBal;

  withdrowInput.value = "";

  //

  const totalBalanceValue = totalBalance.innerText;
  const totalBalanceValueNum = parseFloat(totalBalanceValue);

  const currentBal = totalBalanceValueNum - withdrowInputVlaueNum;

  totalBalance.innerText = currentBal;
  if (
    withdrowInputVlaueNum > 0 &&
    withdrowInputVlaueNum < totalBalanceValueNum
  ) {
    //UPDATE BALANCE
    errorHandle.classList.remove("text-red-500");
    errorHandle.classList.add("text-green-500");
    errorHandle.innerText =
      "Funds have been sucessfully withdrawn from your account";
    setTimeout(() => {
      errorHandle.innerText = " ";
    }, 2000);
  } else {
    totalBalance.innerText = totalBalanceValueNum;
    withdrowTotal.innerText = withdrowTotalValue;
    errorHandle.classList.remove("text-green-500");
    errorHandle.classList.add("text-red-500");
    errorHandle.innerText = "Withdraw Failed ! Insufficient Funds";
    setTimeout(() => {
      errorHandle.innerText = " ";
    }, 2000);
  }
});
