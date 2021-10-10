const reccentTime = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    reccentTime.innerText = `${hours} : ${minutes}`;
}

getClock();
setInterval(getClock, 1000);

/*
"1".padStart(2,"0") --> 2는 string의 자리수 지정하는 곳 원하는 만큼 지정 가능
0은 string자리가 부족하면  어떤 것을 채워질지 지정하는 부분
--> 예시는 1 이라는 스트링값만 있으면 2자리가 다 차지 않기 때문에  자리를
채우기위해서 0을 넣어줌

"anystring".padStart(,) --> 내가 지정한 문자보다 길어지게 해야할 때 앞에 빈자리를 채워줌
"anystring".padEnd(,) --> 내가 지정한 문자보다 길어지게 해야할 때 뒤에 빈자리를 채워줌
*/

// number 를 string으로 변경하는 것  String()