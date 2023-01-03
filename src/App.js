import './App.css';
import {useState} from 'react';

function ToDoForm(props){
  const dayMap = {
    
  }

  return (
    <div id='formDiv'>
      <form onSubmit={(event)=>{
        event.preventDefault();
        let target = event.target;
        if(target.todo.value === null || target.todo.value === '' || target.todo.value === ' '){
          alert('해야할 일을 입력해주세요.');
          return;
        }
        
        let selDate = new Date(target.date.value);
        if(target.date.value === ''){
          alert("시간을 입력해주세요.");
          return;
        }
        let now = new Date();
        if(selDate - now <= 0){
          alert("현재 이후를 선택해주세요.")
          return;
        }

      
        let time = selDate.toTimeString().substring(0, 9);
        props.onCalender(target.todo.value, target.detail.value, selDate.toLocaleDateString(), time);
      }}>
        <p>
          <input type="submit" value="To Do List!"/>
        </p>
        <label htmlFor="todo"><input id="todo" type="text" name="todo" placeholder="To Do"/></label><br/>
        <label htmlFor="detail" ><textarea id="detail" name="detail" placeholder="Detail content" cols="22" rows="5"></textarea></label><br/>
        <label htmlFor="date">Date <input id="date" type="datetime-local"/></label>
      </form>
    </div>
  );
}

function List(props){
  const lis = [];
  const calenders = props.calenders;
  for(let i = 0; i < calenders.length; i++){
    lis.push(<ListBlock key={calenders[i].id} num={calenders[i].id} todo={calenders[i].todo} detail={calenders[i].detail} 
                  date={calenders[i].date} time={calenders[i].time} onDelect={(id)=>{
                    props.onDelect(id);
                  }}></ListBlock>)
  }

  return (
    <div id='list'>
      {lis}
    </div>
  );
}

function ListBlock(props){
    let left = {float : "left", marginLeft:"25px"};
    let right = {float : "right", marginRight : "25px"};
    let [limitDate, setLimitDate] = useState(props.date);
    let [limitTime, setLimitTime] = useState(props.time);

    let months = [
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];


    function timeOut(){
      let now = new Date();
      let test = new Date(props.date + " " + props.time);
      let diff = test - now;
      let cSec = 1000;
      let cMin = cSec * 60;
      let cHour = cMin * 60;
      let cDay = cHour * 24;
      let cMonth = cDay * 30;
      let cYear = cMonth * 12;
      const diffYear = Math.floor((diff / cYear));
      const diffMonth = Math.floor((diff / cMonth) % 12);
      const diffDay = Math.floor((diff / cDay) % months[test.getMonth()]);
    
      const diffHour = Math.floor((diff / cHour) % 24);
      const diffMin = Math.floor((diff / cMin) % 60);
      const diffSec = Math.floor(diff / cSec % 60);
      setLimitDate(diffYear + ". " + diffMonth + ". " + diffDay);
      setLimitTime(diffHour + ":" + diffMin + ":" + diffSec);
    }

    let timeMove = setInterval(timeOut, 500);

  return (
    <li className="block" key={props.num} onClick={(event)=>{
      let current = event.currentTarget;
      let child = current.children[0];

      // 클릭 시 세부 정보가 보인다.
      if(current.style.height === "150px"){
        current.style.height = "40px";
        current.style.overflow = "hidden";
        child.className = "blockTop";
        child.children[0].style.backgroundColor = "rgb(255, 255, 255)";
        child.children[0].style.border = "1px solid rgb(104, 177, 255)";
      } else {
        current.style.height = "150px";
        current.style.overflowY = "auto";
        child.className = "blockTopActive";
        child.children[0].style.backgroundColor = "rgb(104, 177, 255)";
        child.children[0].style.border = "1px solid rgb(234, 234, 234)";
        
      }
      
    }}>
      <div className="blockTop">
        <div className='check' onClick={()=>{
          props.onDelect(props.num);
        }}></div>
        <span>{props.todo}</span>
        
      </div>
      <div className="blockBottom">
        <div className='dateBox'>
          <div className='dateSlide'>
            <div className='dateBlock'>
              <span style={left}>{limitDate}</span>
              <span style={right}>{limitTime}</span>
            </div>
            <div className='dateBlock'>
              <span style={left}>{props.date}</span>
              <span style={right}>{props.time}</span>
            </div>
          </div>
        </div>
        <p>{props.detail}</p>
      </div>
    </li>
  );
}





function App() {
  const [id, nextId] = useState(1);
  const lis = [];
  const [calenders, setCalenders] = useState(lis);
  

  return (
    <div className="App">
      <ToDoForm onCalender={(todo, detail, date, time)=>{
        let added = {id : id, todo : todo, detail : detail, date : date, time : time}
        calenders.push(added);
        setCalenders(calenders);
        nextId(id + 1);
      }}></ToDoForm>
      <List calenders={calenders} onDelect={(id)=>{
        let newLis = [];
        for(let i = 0; i < calenders.length; i++){
          if(calenders[i].id !== id){
            newLis.push(calenders[i]);
          }
        }
        setCalenders(newLis);
      }}></List>
    </div>
  );
}

export default App;
