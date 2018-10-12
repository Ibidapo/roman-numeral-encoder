document.addEventListener('DOMContentLoaded', function() {
  const Arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const numberField = document.getElementById('num');
  const romanNumeralField = document.getElementById('roman-num');
  const convertBtn = document.getElementById('convert');
  const resetBtn = document.getElementById('reset');

  const convertNumber = () => {
    let convertNum = '';
    let numberVal = parseInt(numberField.value);

    for (let item of Arr){
      if (numberVal === 0) {
        break;
      }
      console.log(item);
      while (item <= numberVal) {
        numberVal -= item;
        convertNum += romanArr[Arr.indexOf(item)];
      }
    };

    return convertNum;
  }

  convertBtn.addEventListener('click', function(event) {
    event.preventDefault();

    if (numberField.value == null || numberField.value == "") {
      document.getElementById('error').style.display = "block";
    } else {
      let romanNum = convertNumber();
      romanNumeralField.innerHTML = romanNum;
      resetBtn.disabled = false;
      document.getElementById('error').style.display = "none";
    }
  });

  resetBtn.addEventListener('click', function() {
    numberField.value = null;
    romanNumeral.innerHTML = '';
    resetBtn.disabled = true;
  });
});