const getData = async () => {
  const response = await fetch(
    "http://staccah.fattureincloud.it/testfrontend/data.json"
  );
  const json = await response.json();
  return await json;
};
const findBigger = (array) => {
  return array.reduce((acc, curr) => {
    return Math.max(acc, curr);
  });
};

const separateNum = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const calcGreenPx = (amount, biggerAmount) => {
  const height = biggerAmount ? parseInt((amount * 75) / biggerAmount) : 0;
  return height;
};
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
