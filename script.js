
function updateScreen(value) {
    document.getElementById('result').value += value;
  }
  
  function clearScreen() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    const input = document.getElementById('result').value;

    if (input === '') {
      alert('Lutfen bir matematiksel ifade girin.');
      return;
    }
  
    if (!checkSyntax()) {
      alert('Sözdizimi Hatalı!');
      return;
    }
  
    try {
      const result = eval(input);
      document.getElementById('result').value = result;
      alert('Sözdizimi Doğru!');

    } catch (error) {
      alert('Hata: ' + error);
    }
  }
  
  function checkSyntax() {
    const input = document.getElementById('result').value;
    let i = 0;
    let par_count = 0;
    let dot_count = 0;
    let num_count = 0;
    let op_count = 0;
  
    while (i < input.length) {
      if (!isNaN(input[i])) {
        num_count++;
        while (!isNaN(input[i]) || input[i] === '.') {
          if (input[i] === '.') {
            dot_count++;
          }
          i++;
        }
      } else if (input[i] === '(') {
        par_count++;
        i++;
      } else if (input[i] === ')') {
        if (par_count <= 0) {
          return false;
        }
        par_count--;
        i++;
      } else if (input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
        op_count++;
        i++;
      } else if (input[i] === ' ') {
        i++;
      } else {
        return false;
      }
    }
  
    if (par_count === 0 && dot_count <= num_count && op_count === num_count - 1) {
      return true;
    } else {
      return false;
    }
  }
  