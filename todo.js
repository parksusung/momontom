const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList= document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

let toDos=[];


function deleteToDo(event){

  const btn=event.target;
  const li=btn.parentNode;
  toDoList.removeChild(li);//화면에만없어짐 새로고침하면 다시생김.
 // console.log(event.target.parentNode)
 const cleanToDos= toDos.filter(function(toDo){
   return toDo.id !== parseInt(li.id);//li.id는 String이므로 정수로변환해줌

 });
 //filter은 array의 모든아이템을 통해 함수를 실행시키고 true인 아이템들만 가지고 새로운 array를 만들듬 

 toDos = cleanToDos;
 saveToDos();
}


function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
  //object로 저장되므로 string으로저장하기위해 JSON.stringify() 사용
}

let idNumbers=1;
function paintToDo(text){
  
  console.log(text);
  const li=document.createElement("li");
  const delBtn=document.createElement("button");
  delBtn.innerHTML="❌";
  delBtn.addEventListener("click",deleteToDo);
  const span = document.createElement("span");
  //const newId=toDos.length+1;
  const newId= idNumbers;
  idNumbers +=1;
  span.innerText=text;
  li.appendChild(span);//li내에 span을 넣는 이유 li는 컨테이너이고, 그안에 span인 text와 button이 들어가기때문이다!

  li.appendChild(delBtn);
  li.id=newId;

  toDoList.appendChild(li);
  const toDoObj={
    text: text,
    id:newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue= toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
  
}

function loadToDos(){
  const loadedToDos= localStorage.getItem(TODOS_LS);
  if(loadedToDos!==null){

      const parsedToDos=JSON.parse(loadedToDos);//다시 string을 object로 바꿔줌
      parsedToDos.forEach(function(toDo){
        //array에담겨있는것을 소환
        paintToDo(toDo.text);
      });
        //array에담겨있는것을 소환
        
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}

init();