let img = document.getElementById("img");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let score = document.getElementById("score");
let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let reset_btn = document.getElementById("reset_btn");
let end_btn = document.getElementById("end_btn");

let imgArray = new Array();
imgArray[0] = "paper.png";
imgArray[1] = "rock.png";
imgArray[2] = "scissors.png";

let a;
let userscore = 0;
let cpuscore = 0;

function imageTime() {
  //1. 0~2 숫자가 나와야 함
  // Math.random() = 0 ~ 1 미만의 부동소수점 난수를 생성
  // floor 소수점 버림, 가까운 정수 형태로 만듬
  a = Math.floor(Math.random() * 3);
  img.src = imgArray[a];
}

setInterval(imageTime, 500);

const handleClick = (choice) => {
  clearInterval();
  if (a === (choice + 1) % 3) {
    alert("승리");
    userscore++;
    user_score.textContent = userscore;
  } else if (a === choice) {
    alert("비김");
  } else {
    alert("패배");
    cpuscore++;
    computer_score.textContent = cpuscore;
  }
};

scissors.onclick = () => handleClick(0);
rock.onclick = () => handleClick(1);
paper.onclick = () => handleClick(2);

reset_btn.onclick = () => {
  let check = confirm("다시 시작?");
  if (check) location.reload();
};

// // 가위를 클릭 했을 때
// scissors.onclick = () => {
//   clearInterval();
//   if (a === 0) {
//     userVictory();
//   } else if (a === 2) {
//     tie();
//   } else {
//     computerVictory();
//   }
// };

// // 바위를 클릭 했을 때
// rock.onclick = () => {
//   clearInterval();
//   if (a === 2) {
//     userVictory();
//   } else if (a === 1) {
//     tie();
//   } else {
//     computerVictory();
//   }
// };

// // 보를 클릭 했을 때
// paper.onclick = () => {
//   clearInterval();
//   if (a === 1) {
//     userVictory();
//   } else if (a === 0) {
//     tie();
//   } else {
//     computerVictory();
//   }
// };

// function userVictory() {
//   alert("승리");
//   userscore++;
//   user_score.textContent = userscore;
// }

// function computerVictory() {
//   alert("패배");
//   cpuscore++;
//   computer_score.textContent = cpuscore;
// }

// function tie() {
//   alter("비김");
// }
