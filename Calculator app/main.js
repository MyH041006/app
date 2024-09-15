let outputscreen = document.getElementById('output-screen');

function display(num) {
  outputscreen.value += num;
}


function calculate() {
  try {

    if (outputscreen.value === '') {
      alert('Please enter a value to calculate');
    } else {
      outputscreen.value = eval(outputscreen.value);
    }
  } catch (err) {
    alert("Invalid Input");
    clr();
  }
}

function clr() {
  outputscreen.value = '';
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
