const getData = async () => {
  const response = await fetch(
    "http://staccah.fattureincloud.it/testfrontend/data.json"
  );
  const json = await response.json();
  return await json;
};

const separateNum = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
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

export { getData, separateNum, MESI };
