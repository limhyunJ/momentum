const loginForm = document.querySelector("#login");
const inputBox = document.querySelector("#login input");
const loginButton = document.querySelector("#login button");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden"
const USERKEY = "user"

function onSubmit (event){
  ;
  loginForm.classList.add(HIDDEN);
  const user = inputBox.value;
  localStorage.setItem(USERKEY,user);
  printGreeting(user);
}
function printGreeting(user){
  greeting.innerText = `hello ${user} :)`; 
  greeting.classList.remove(HIDDEN);
}

const saveUserName = localStorage.getItem(USERKEY);

if (saveUserName === null){
   loginForm.classList.remove(HIDDEN);
   loginForm.addEventListener("submit", onSubmit);
} else{
  printGreeting(saveUserName);
}


//___.className -->  다 갈아버림
//______.classList --> 클래스를 추가해 리스트로 만들어줌
//.contain()포함하고 있는지 체크 .add() 추가 .remove() 제거 괄호안의 있는 것들 
// .toggle() 포함하고 있는지 판단하고 갖고 있다면 추가 하고 없다면 제거 
// "strig" + 변수  ==>  `string ${변수명}`   
//`` 백틱이 포인트

// user정보 저장  localstorage.setItem("", 정보 변수 라던지 ) 
//저장 정보 불러오기 localstorage.getItem("",정보 변수 라던지)

