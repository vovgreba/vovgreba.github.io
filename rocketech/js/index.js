//----- calculating the ticket reservation cost -----

const bookingColumnQuantity = document.querySelector('.booking_column-quantity')
const bookingColumnCost = document.querySelector('.booking_column-cost')
const bookingValueCost = document.querySelector('.booking_value span')
const bookingValueCostDinner = document.querySelector('.booking_column-cost .cost--dinner')
const bookingValueCostProgram = document.querySelector('.booking_column-cost .cost--program')

const calculateTotalPrice = (el) => {
  const valueDinner = Number(bookingValueCostDinner.innerText)
  const valueProgram = Number(bookingValueCostProgram.innerText)
  const valueTotalCost = Number(bookingValueCost.innerText)

  switch (el.className) {
    case 'plus--first':
      const totalPlusFirst = valueTotalCost + valueDinner
      bookingValueCost.innerText = totalPlusFirst;
      break;
    case 'plus--second':
      const totalPlusSecond = valueTotalCost + valueProgram
      bookingValueCost.innerText = totalPlusSecond;
      break;
    case 'minus--first':
      const totalMinusFirst = valueTotalCost - valueDinner
      bookingValueCost.innerText = totalMinusFirst;
      break;
    case 'minus--second':
      const totalMinusSecond = valueTotalCost - valueProgram
      bookingValueCost.innerText = totalMinusSecond;
      break;
  
    default:
      break;
  }
}

const getCountQuantity = (ev) => {
  const targetElem = ev.target
  if(targetElem.innerText === '+') {
    const quantityElem = targetElem.nextElementSibling.innerText

  
    const quantity =  Number(quantityElem) + 1
    targetElem.nextElementSibling.innerText = quantity
    calculateTotalPrice(targetElem)
  }

  if(targetElem.innerText === '-') {
    const quantityElem = targetElem.previousElementSibling.innerText
    const quantity =  Number(quantityElem) - 1
    if(quantity >= 0) {
      targetElem.previousElementSibling.innerText = quantity 
      calculateTotalPrice(targetElem)
    }
  }

}

bookingColumnQuantity.addEventListener('click', ev=> {
  
  getCountQuantity(ev)
  
})


// burger

const burger = document.querySelector('.header_burger')
const mobileMenu = document.querySelector('.mobile-menu')

burger.addEventListener('click', ev => {
  mobileMenu.classList.toggle('mobile-menu--show')

  console.log(mobileMenu)
})



