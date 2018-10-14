document.addEventListener('DOMContentLoaded', function() {
  //  Arrays containing Number and their Roman Numeral Representation for comparing
  const numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // Variables for html elements
  const numberField1 = document.getElementById('num1');
  const romanField1 = document.getElementById('roman-num1');
  const numberField2 = document.getElementById('num2');
  const romanField2 = document.getElementById('roman-num2');
  const convertNumberBtn = document.getElementById('convertToRoman');
  const convertRomanBtn = document.getElementById('convertToNumber');
  const resetNumberBtn = document.getElementById('resetNumber');
  const resetRomanBtn = document.getElementById('resetRoman');

  // Function to convert NUMBER to ROMAN NUMERAL
  const convertNumber = (numberVal) => {
    let convertNum = '';

    for (let item of numArr){
      if (numberVal === 0) {
        break;
      }
      
      while (item <= numberVal) {
        numberVal -= item;
        convertNum += romanArr[numArr.indexOf(item)];
      }
    };

    return convertNum;
  }

  // Function to convert ROMAN NUMERAL to NUMBER
  const convertRoman = (romanVal) => {
    let convertRoman = numArr[romanArr.indexOf(romanVal[0])];
    let prev, curr;

    for (let i = 1; i < romanVal.length; i++) {
      prev = numArr[romanArr.indexOf(romanVal[i - 1])];
      curr = numArr[romanArr.indexOf(romanVal[i])];
      
      if (curr > prev) {
        convertRoman = convertRoman - (prev * 2) + curr;
      } else {
        convertRoman += curr;  
      }
    }

    return convertRoman;
  }

  // On-click event of the convertion from NUMBER to ROMAN NUMERAL
  convertNumberBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Regular expression to check for alphabets or dot
    let regex = /[A-Za-z\.]/;
    let numberFieldCheck = regex.test(numberField1.value);
    let numberVal = parseInt(numberField1.value);

    // Checks if the NUMBER field value is null, empty or contains invalid characters
    if (numberField1.value == null || numberField1.value == "" || numberFieldCheck || numberVal < 1) {
      document.getElementById('error1').style.display = "block";
      romanField1.innerHTML = '';
    } else {
      let romanNum = convertNumber(numberVal);
      romanField1.innerHTML = romanNum;
      document.getElementById('error1').style.display = "none";
    }
  });

   // On-click event of the convertion from ROMAN NUMERAL to NUMBER
  convertRomanBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Checks for invalid ROMAN NUMERAL characters
    let romanValCaps = romanField2.value.toUpperCase();
    let romanValCheck = romanValCaps.split('').some((char) => !(romanArr.includes(char))); 

    // Checks if the ROMAN NUMERAL field value is null, empty or contains invalid characters
    if (romanField2.value == null || romanField2.value == "" || romanValCheck) {
      document.getElementById('error2').style.display = "block";
      numberField2.innerHTML = '';
    } else {
      romanField2.value = romanValCaps;
      let num2 = convertRoman(romanValCaps);
      numberField2.innerHTML = num2;
      document.getElementById('error2').style.display = "none";
    }
  });

  // To reset input and output fields, for converting from NUMBER to ROMAN NUMERAL
  resetNumberBtn.addEventListener('click', function(event) {
    event.preventDefault()
    numberField1.value = null;
    romanField1.innerHTML = '';
  });

  // To reset input and output fields, for converting from ROMAN NUMERAL to NUMBER
  resetRomanBtn.addEventListener('click', function(event) {
    event.preventDefault()
    numberField2.innerHTML = '';
    romanField2.value = null;
  });
});