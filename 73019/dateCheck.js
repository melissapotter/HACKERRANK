const d = new Date();
const month = d.getMonth() + 1;
const year = d.getFullYear();

function dateCheck(m, y) {
  if ((1 <= m <= 12) && (1900 <= y <= year)) {
    yearCalc = (year - y);
    monthCalc = (((month - m) / 12));
    console.log((yearCalc + monthCalc).toFixed(2));
  }
}

dateCheck(7, 2000); 