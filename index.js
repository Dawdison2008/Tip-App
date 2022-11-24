
const buttons = document.querySelectorAll('.tip');
const billInput = document.querySelector('.billInput');
const customInput = document.querySelector('.custom')
const numPeople = document.querySelector('.numPeople')
const tipAmountContent = document.querySelector('.tip-amount-result');
const totalAmountContent = document.querySelector('.total-amount');
const resetBtn = document.querySelector('.reset')

let tip;
let bill;
let custom;
let numOfPeople;
let tipAmount;
let totalAmount

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        buttons.forEach((button) => {
            button.classList.remove('active');
        })
        event.currentTarget.classList.add('active')
        tip = +event.currentTarget.id
        custom = undefined;
        customInput.value = '';
        if (bill > 1 && numOfPeople > 0){
          calculateTip()
        } else{
          showError(event)
        }
    })
})

billInput.addEventListener('input', (event) => {
    bill = +event.target.value

    // if (bill > 1 && numOfPeople > 0){
    //   calculateTip()
    // } else{
    //   showError(event)
    // }
})

customInput.addEventListener('input', (event) => {
  custom = event.target.value

  buttons.forEach((button) => {
    button.classList.remove('active');
})

  if (bill > 1 && numOfPeople > 0){
    calculateTip()
  } else{
    showError(event)
  }
})

numPeople.addEventListener('input', (event) => {
  numOfPeople = +event.target.value

  // if (bill > 1 && numOfPeople > 0){
  //   calculateTip()
  // } else{
  //   showError(event)
  // }
})


const showError = (event) =>{
  event.currentTarget.classList.remove('active');
  numPeople.setAttribute("placeholder", "type something")
  billInput.setAttribute('placeholder', 'type something')


  setTimeout(() => {
    numPeople.removeAttribute("placeholder", "type something")
    billInput.removeAttribute('placeholder', 'type something')
  }, 2000)
}


const calculateTip = () =>{

    if (typeof custom !== "undefined") {
      tipAmount = Math.floor((bill * (Number(custom.replace('%', '')) / 100)) / numOfPeople);
    } else {
      tipAmount = (bill * (tip / 100)) / numOfPeople;
    }
    totalAmount = tipAmount * numOfPeople;
    showResults();
}

const reset = () => {
    tip = 0;
    custom = 0;
    numOfPeople = 0;
    tipAmount = 0;
    totalAmount = 0;
    numPeople.value = "";
    billInput.value = "";
    showResults();
    customInput.value = '';
}

const showResults = () => {
    tipAmountContent.textContent = `$${tipAmount}`;
    totalAmountContent.textContent = `$${totalAmount}`;
}

resetBtn.addEventListener('click', () =>{
  reset()
})

//error jak wpiszemy bill, potem custom albo tip i potem nr of people to nie pokazuje nam results

//if bill > 0 custom także jest disabled







