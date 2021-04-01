// Handle fetch data from the test endpoint
const getData = async () => {
  const response = await fetch(
    "http://staccah.fattureincloud.it/testfrontend/data.json"
  );
  const json = await response.json();
  return await json;
};
// Function to find the bigger amount on an array of int
// used to find the month with the highest amount of €
const findBigger = (array) => {
  return array.reduce((acc, curr) => {
    return Math.max(acc, curr);
  });
};

// Function to parse correctly the numbers to desplay
const separateNum = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

// function to calculate the height of each greenArea in pixels proportionally to the biggest one
const calcGreenPx = (amount, biggerAmount) => {
  const height = biggerAmount ? parseInt((amount * 75) / biggerAmount) : 0;
  return height;
};
// Array with the names of months
const MESI = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

export { getData, separateNum, findBigger, calcGreenPx, MESI };
