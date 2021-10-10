const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"


let toDos =  []



function saveTodo (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// JSON.stringify()--> array를 포함 어떤 것이던 string으로 만들어줌 
//JSON.parse()--> string을 array로 만들어줌 
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //--> 이 함수에 얻은 아이디의 타입은  string이기 떄문에 비교를 위해서 .parseInt()를 사용해서 number로 바꿔줌
    saveTodo ();
};



function paintNewTodDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    const headImg = document.createElement("div");
    button.innerText = "x"
    button.addEventListener("click",  deleteTodo);
    li.appendChild(headImg);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
    function line(){
        span.classList.toggle("active");
    };
    span.addEventListener("click", line);
};

function handleToDoSumit(event){
    event.preventDefault()
    const newTodo = toDoInput.value; //<----newTodo를 복사한 시점에서 그 다음  toDoInput.value 에 어떤 것을 하던  newToDo는 영향을 받지 않는다 
    toDoInput.value = "";
    const newTodoObj  = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintNewTodDo(newTodoObj);
    saveTodo();
};

toDoForm.addEventListener("submit", handleToDoSumit);
 



const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedtoDos = JSON.parse(saveToDos);
    toDos = parsedtoDos
    parsedtoDos.forEach(paintNewTodDo);
}

// array 안 각가에  기능을 실행하고 싶을 때 array.forEach();
/*
function sayHello(item){
   console.log("this is turn of ", item);
};
와 
forEach((item) => console.log("this is turn of", item));
은 같은 거임 밑에거 좀 신버전
*/