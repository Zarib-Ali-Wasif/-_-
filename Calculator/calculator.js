let inputDisplay = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);
let str = "";
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clk = e.target.innerHTML;
    if (clk == "=") {
      try {
        let cal = eval(str);
        if (Number.isInteger(cal)) {
          str = cal;
        } else {
          str = cal.toFixed(4); //after point upto 2 decimal places
        }
        inputDisplay.value = str;
      } catch (error) {
        inputDisplay.value = "Error";
      }
    } else if (clk == "AC") {
      str = "";
      inputDisplay.value = str;
    } else if (clk == "Del") {
      str = str.toString().slice(0, -1);
      // str = str.substring(0,str.length-1);
      inputDisplay.value = str;
    } else if (str == "." && clk == ".") {
      str = "";
      str += clk;
      inputDisplay.value = str;
    } else {
      str += clk;
      inputDisplay.value = str;
    }
  });
});
