// spiderman quiz

// event listener
document.getElementById("btn").addEventListener("click", btnclicked);

// function
function btnclicked() {
  // out messages
  out1 = document.getElementById("out1");
  out2 = document.getElementById("out2");
  out3 = document.getElementById("out3");
  out4 = document.getElementById("out4");
  outr = document.getElementById("response");

  // blank message
  let blank = "please answer the question and try again";

  // correct and incorrect message
  let c = "correct";
  let inc = "incorrect";

  // total answered correctly
  let tac = 0;

  // input
  let q1 = document.getElementById("in1").value.toLowerCase();
  let q2 = document.getElementById("in2").value.toLowerCase();
  let q3 = document.getElementById("in3").value.toLowerCase();
  let q4 = document.getElementById("in4").value.toLowerCase();

  // question 1 if statement
  if (q1 === "") {
    out1.innerHTML = blank;
  } else if (q1 === "red blue" || q1 === "blue red") {
    out1.innerHTML = c;
    tac++;
  } else {
    out1.innerHTML = inc;
  }
  // question 2 if statement
  if (q2 === "") {
    out2.innerHTML = blank;
  } else if (q2 === "marvel") {
    out2.innerHTML = c;
    tac++;
  } else {
    out2.innerHTML = inc;
  }
  // question 3 if statement
  if (q3 === "") {
    out3.innerHTML = blank;
  } else if (q3 === "peter parker" || q3 === "peter benjamin parker") {
    out3.innerHTML = c;
    tac++;
  } else {
    out3.innerHTML = inc;
  }
  // question 4 if statement
  if (q4 === "") {
    out4.innerHTML = blank;
  } else if (q4 === "stan lee" || q4 === "steve ditko") {
    out4.innerHTML = c;
    tac++;
  } else {
    out4.innerHTML = inc;
  }

  // percentage
  let ptac = tac * 25;

  // your score
  document.getElementById("ur-score").innerHTML = `${tac}/4 ${ptac}%`;

  // responce if statement
  if (tac < 2) {
    outr.innerHTML = "Nice Try!";
  } else if (tac < 3) {
    outr.innerHTML = "Almost there!";
  } else if (tac < 4) {
    outr.innerHTML = "Good Job!";
  } else {
    outr.innerHTML = "Great Job!";
  }
}
