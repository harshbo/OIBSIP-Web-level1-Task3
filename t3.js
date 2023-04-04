function convert() {
  // Get the Fahrenheit input value
  var fahrenheit = document.getElementById("fahrenheit").value;

  // Convert Fahrenheit to Celsius
  var celsius = (fahrenheit - 32) * 5 / 9;

  // Round the Celsius value to two decimal places
  celsius = celsius.toFixed(2);

  // Set the Celsius input value
  document.getElementById("celsius").value = celsius;
}
