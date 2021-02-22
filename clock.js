const clockContainer= document.querySelector(".js-clock"),
//clock class의 자식을 탐색했음 ,를써서 const변수를 더 선언가능
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date(); //현재 날짜를 받아옴
  const minutes = date.getMinutes();
  const hours= date.getHours();
  const seconds = date.getSeconds();
  
  clockTitle.innerText = ` ${hours<10 ? `0${hours}`:hours}:${minutes <10 ? `0${minutes}`:minutes}:${seconds <10?`0${seconds}` : seconds }`;
  
  
  }
  //그러나 이렇게하면 시간이 date를 불렀을때 시간만 저장되므로 실시간으로 변하지않음 그래서 setInterval(fn,1000) 라는것을사용 1000이 1초 , , fn에는 함수를 넣어줌

function init(){
//1. 현재시간을 얻어야함 getTime 함수를 만들어보자 
//getTime();
//2.실시간을 위해서 setInterval사용 그러면 완성 
setInterval(getTime,1000);
}

init();