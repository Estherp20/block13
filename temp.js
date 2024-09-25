
let inputFahrenheit = prompt('Enter a temperature in Fahrenheit')
console .log("Input Temperature: ", inputFahrenheit)

function convertToCelsius (fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}
 
let convertedCelsius = convertToCelsius(inputFahrenheit);
console.log("Converted Celsius: ", convertedCelsius);


/*let inputCelsius = prompt('Enter a temperature in Fahrenheit');
  let convertedCelsius = convertToFahrenheit(inputCelsius);
  console.log("Converted Celsius: ", convertedCelsius)*/

  //function
  function createMessage(fahrenheit, celsius){
    let message = 'freezing point';
    const numFahrenheit = fahrenheit * 1;

  if(numFahrenheit === 40) {
    message = 'You will need a jaket!'
  } else if(numFahrenheit === 32) {
    message = 'Now it can snow!';
  } else if(numFahrenheit === 10) {
    message = 'Stay inside!';
  } 

  return `${fahrenheit} fahrebheit is ${ celsius} celsius. ${message}`;
}

/*let output = createMessage(inputFahrenheit, convertedCelsius);
console.log(output);*/

let inputCelsius = prompt('5, we will convert that number from Fahrenheit to Celsius');
  let convertedFarenheit = convertToFahrenheit(inputFahrenheit);
  let output = createMessage(inputFahrenheit, convertedCelsius);
  console.log(output);

  let randomFahrenheit = Math.random() * 100; 
convertedCelsius = convertToCelsius(randomFahrenheit);
output = createMessage(randomFahrenheit, convertedCelsius);
console.log(output);


  


  