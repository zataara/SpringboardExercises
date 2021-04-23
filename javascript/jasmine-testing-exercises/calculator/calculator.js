window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount:2000, years:30, rate:5.0};
  userAmount = document.getElementById("loan-amount");
  values.amount = userAmount.value;
  userYears = document.getElementById('loan-years');
  values.years = userYears.value;
  userRate = document.getElementById('loan-rate');
  values.rate = userRate.value;
  update();



}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
  
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // let monthlyPayment = (value.amount*(values.rate/12)/(1-(1+(values.rate/12))**(values.years*12)))
  let pir = (values.rate*.01)/12;
  let numpay = Math.floor(values.years*12);
  let monthlyPayment = (values.amount*pir)/(1-Math.pow((1+pir),-numpay));
  return monthlyPayment.toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let newMonthly = document.getElementById('monthly-payment');
  newMonthly.innerText = "$" + monthly;
}
