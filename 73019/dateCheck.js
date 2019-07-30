const d = new Date();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const date = (month + "." + year);

function dateCheck(m, y) {
  yearCalc = (year - y);
  monthCalc = (((month - m) / 12));
  console.log((yearCalc + monthCalc).toFixed(2));
}

dateCheck(7, 2018); 