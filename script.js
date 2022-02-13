function updateCaseNumber(product, price, isIncreasing) {
  let productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // Update product Total
  let productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  calculateTotal();
}

function getInputValue(product) {
  let productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  let phoneTotal = getInputValue("phone") * 1219;
  let caseTotal = getInputValue("case") * 59;
  let subTotal = phoneTotal + caseTotal;
  let taxAmount = subTotal / 10;
  let totalPrice = subTotal + taxAmount;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-price").innerText = totalPrice;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", 59, false);
});
