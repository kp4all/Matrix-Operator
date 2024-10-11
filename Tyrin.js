const choose = document.querySelector(".selectt");
const sectwo = document.querySelector(".second");

function last() {
  // Retrieve input values inside the function
  const aone = parseFloat(document.getElementById("a").value) || 0;
  const atwo = parseFloat(document.getElementById("b").value) || 0;
  const athree = parseFloat(document.getElementById("c").value) || 0;
  const afour = parseFloat(document.getElementById("d").value) || 0;
  const afive = parseFloat(document.getElementById("e").value) || 0;
  const asix = parseFloat(document.getElementById("f").value) || 0;
  const aseven = parseFloat(document.getElementById("g").value) || 0;
  const aeight = parseFloat(document.getElementById("h").value) || 0;
  const anine = parseFloat(document.getElementById("i").value) || 0;
  const aten = parseFloat(document.getElementById("j").value) || 0;
  const aeleven = parseFloat(document.getElementById("k").value) || 0;
  const atwelve = parseFloat(document.getElementById("l").value) || 0;

  const hello = [aone, atwo, athree, afour]; 
  const yelo = [afive, asix, aseven, aeight];
  const olo = [anine, aten, aeleven, atwelve];
  let empty = null;  
  let emptwo = null; 

  const yes = choose.options[choose.selectedIndex].id;  
  const secsub = sectwo.options[sectwo.selectedIndex].id;  
  const method = document.querySelector(".operation");
  const typedValue = method.options[method.selectedIndex].id;  

  if (yes === "R1") {
    empty = hello;
  } else if (yes === "R2") {
    empty = yelo;
  } else {
    empty = olo; 
  }

  if (secsub === "R2") {
    emptwo = yelo;
  } else if (secsub === "R1") {
    emptwo = hello;
  } else {
    emptwo = olo; 
  }

  const ratan = document.getElementById("multi").value;
  const tata = document.getElementById("mute").value;
  const arrayy = [parseFloat(ratan)];
  const list = [parseFloat(tata)];

  let result = [];

  if (empty && emptwo) {
    if (typedValue === "Add") {
      result = empty.map((value, index) => list[0] * value + emptwo[index] * arrayy[0]);
    } else if (typedValue === "Divide") {
      result = empty.map((value, index) => list[0] * value / emptwo[index] * arrayy[0]);  
    } else if (typedValue === "Multiply") {
      result = empty.map((value, index) => list[0] * value * emptwo[index] * arrayy[0]);
    } else if (typedValue === "Subtract") {
      result = empty.map((value, index) => list[0] * value - emptwo[index] * arrayy[0]);
    }
    
    const page = document.querySelector("p");
    page.innerHTML = result;
  }
}