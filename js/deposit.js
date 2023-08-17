const depositBtn = document.querySelector('#deposit-btn');
const depositInput = document.querySelector('#deposit-input');

const depositTotal = document.querySelector('#deposit-value');

//get total Balance
const totalBalnace = document.querySelector('#total-balance');



depositBtn.addEventListener('click', function(){
    const depositInputValue = depositInput.value;
    const depositInputValueNum = parseFloat(depositInputValue);
    console.log(depositInputValueNum);

    //get privious deposit value and parsefloat
    const depositTotalValue = depositTotal.innerText;
    const depositTotalValueNum = parseFloat(depositTotalValue);

    const currentDepositValue = depositInputValueNum + depositTotalValueNum;

    depositTotal.innerText = currentDepositValue;

    depositInput.value = '';

    //add total balance
    const previoustotalBalnace = totalBalnace.innerText;
    const previoustotalBalnaceNum = parseFloat(previoustotalBalnace)

    const currentTotalBal = previoustotalBalnaceNum +depositInputValueNum;
    totalBalnace.innerText = currentTotalBal;

    if(depositInputValueNum > 0) {

        errorHandle.classList.remove('text-red-500');
        errorHandle.classList.add('text-green-500');
        errorHandle.innerText = "Funds have been sucessfully added to you account";
        setTimeout(() => {
            errorHandle.innerText = " ";
          }, 2000);
        
      }else{
        depositTotal.innerText = depositTotalValue;
        totalBalnace.innerText = previoustotalBalnaceNum;
        errorHandle.classList.remove('text-green-500');
        errorHandle.classList.add('text-red-500');
        errorHandle.innerText = "Please Insert a Positive Number";
        setTimeout(() => {
            errorHandle.innerText = " ";
          }, 2000);
     
      }
    
})