let str = "";
let rad = true;
let deg = false;

document.getElementById("rad").onclick = function () {
  rad = true;
  deg = false;
  document.getElementById("result").value = str;
};

document.getElementById("deg").onclick = function () {
  rad = false;
  deg = true;
  document.getElementById("result").value = str;
};

document.getElementById("fact").onclick = function () {
  str += "!";
  document.getElementById("result").value = str;
};

document.getElementById("open").onclick = function () {
  str += "(";
  document.getElementById("result").value = str;
};

document.getElementById("close").onclick = function () {
  str += ")";
  document.getElementById("result").value = str;
};

document.getElementById("modulo").onclick = function () {
  str += "%";
  document.getElementById("result").value = str;
};

document.getElementById("cancel").onclick = function () {
  str = "";
  document.getElementById("result").value = 0;
};

document.getElementById("sin").onclick = function () {
  str += "sin(";
  document.getElementById("result").value = str;
};

document.getElementById("ln").onclick = function () {
  str += "ln(";
  document.getElementById("result").value = str;
};

document.getElementById("seven").onclick = function () {
  str += "7";
  document.getElementById("result").value = str;
};

document.getElementById("eight").onclick = function () {
  str += "8";
  document.getElementById("result").value = str;
};

document.getElementById("nine").onclick = function () {
  str += "9";
  document.getElementById("result").value = str;
};

document.getElementById("divide").onclick = function () {
  str += "÷";
  document.getElementById("result").value = str;
};

document.getElementById("cos").onclick = function () {
  str += "cos(";
  document.getElementById("result").value = str;
};

document.getElementById("log10").onclick = function () {
  str += "log(";
  document.getElementById("result").value = str;
};

document.getElementById("four").onclick = function () {
  str += "4";
  document.getElementById("result").value = str;
};

document.getElementById("five").onclick = function () {
  str += "5";
  document.getElementById("result").value = str;
};

document.getElementById("six").onclick = function () {
  str += "6";
  document.getElementById("result").value = str;
};

document.getElementById("multiplication").onclick = function () {
  str += "×";
  document.getElementById("result").value = str;
};

document.getElementById("tan").onclick = function () {
  str += "tan(";
  document.getElementById("result").value = str;
};

document.getElementById("sqrt").onclick = function () {
  str += "√(";
  document.getElementById("result").value = str;
};

document.getElementById("one").onclick = function () {
  str += "1";
  document.getElementById("result").value = str;
};

document.getElementById("two").onclick = function () {
  str += "2";
  document.getElementById("result").value = str;
};

document.getElementById("three").onclick = function () {
  str += "3";
  document.getElementById("result").value = str;
};

document.getElementById("minus").onclick = function () {
  str += "-";
  document.getElementById("result").value = str;
};

document.getElementById("pow10").onclick = function () {
  str += "E";
  document.getElementById("result").value = str;
};

document.getElementById("xpowy").onclick = function () {
  str += "pow(";
  document.getElementById("result").value = str;
};

document.getElementById("zero").onclick = function () {
  str += "0";
  document.getElementById("result").value = str;
};

document.getElementById("point").onclick = function () {
  str += ".";
  document.getElementById("result").value = str;
};

document.getElementById("add").onclick = function () {
  str += "+";
  document.getElementById("result").value = str;
};

function compute_factorial() {
  let temp = str.replace("!", "");
  let factorial = 1;
  for (let i = 1; i <= Number(temp); i++) {
    factorial *= i;
  }
  document.getElementById("result").value = factorial;
  str = factorial.toString();
}

function compute_sin() {
  let num = str.replace("sin(", "");
  num = num.replace(")", "");
  if (rad == true) {
    num = Math.sin(Number(num));
    document.getElementById("result").value = num;
    str = num.toString();
  }
  if (deg == true) {
    num = Math.sin(Number(num) * (Math.PI / 180));
    document.getElementById("result").value = num;
    str = num.toString();
  }
}

function compute_ln() {
  let num = str.replace("ln(", "");
  num = num.replace(")", "");
  num = Math.log(Number(num));
  document.getElementById("result").value = num;
  str = num.toString();
}

function compute_cos() {
  let num = str.replace("cos(", "");
  num = num.replace(")", "");
  if (rad == true) {
    num = Math.cos(Number(num));
    document.getElementById("result").value = num;
    str = num.toString();
  }
  if (deg == true) {
    num = Math.cos(Number(num) * (Math.PI / 180));
    document.getElementById("result").value = num;
    str = num.toString();
  }
}

function compute_log() {
  let num = str.replace("log(", "");
  num = num.replace(")", "");
  num = Math.log10(Number(num));
  document.getElementById("result").value = num;
  str = num.toString();
}

function compute_tan() {
  let num = str.replace("tan(", "");
  num = num.replace(")", "");
  if (rad == true) {
    num = Math.tan(Number(num));
    document.getElementById("result").value = num;
    str = num.toString();
  }
  if (deg == true) {
    num = Math.tan(Number(num) * (Math.PI / 180));
    document.getElementById("result").value = num;
    str = num.toString();
  }
}

function compute_sqrt() {
  let temp = str.replace("√(", "");
  temp = temp.replace(")", "");
  let num = Math.sqrt(Number(temp));
  document.getElementById("result").value = num;
  str = num.toString();
}

function compute_pow10() {
  let temp = str.replace("E", ",");
  let arr = temp.split(",");
  str = (arr[0] * Math.pow(10, Number(arr[1]))).toString();
  document.getElementById("result").value = str;
}

function compute_x_pow_y() {
  let temp = str.replace("pow(", ",");
  temp = temp.replace(")", "");
  let arr = temp.split(",");
  str = Math.pow(Number(arr[0]), Number(arr[1])).toString();
  document.getElementById("result").value = str;
}

document.getElementById("equals").onclick = function () {
  str = str.replace("×", "*");
  str = str.replace("÷", "/");
  if (str.search("!") != -1) {
    compute_factorial();
  } else if (str.search("sin\\(") != -1) {
    compute_sin();
  } else if (str.search("ln\\(") != -1) {
    compute_ln();
  } else if (str.search("cos\\(") != -1) {
    compute_cos();
  } else if (str.search("log\\(") != -1) {
    compute_log();
  } else if (str.search("tan\\(") != -1) {
    compute_tan();
  } else if (str.search("√\\(") != -1) {
    compute_sqrt();
  } else if (str.search("E") != -1) {
    compute_pow10();
  } else if (str.search("pow\\(") != -1) {
    compute_x_pow_y();
  } else {
    document.getElementById("result").value = eval(str);
    str = document.getElementById("result").value;
  }
};
