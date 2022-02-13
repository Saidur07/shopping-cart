function updateCaseNumber(product, price, isIncreasing) {
  let productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // Update product Total
  let productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
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
