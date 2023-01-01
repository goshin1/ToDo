import logo from './logo.svg';
import './App.css';

function ToDoForm(props){
  return (
    <div id='formDiv'>
      <form>
        <p>
          <input type="submit" value="To Do List!" onClick={event=>{
            event.preventDefault();
          }}/>
        </p>
        <label htmlFor="todo"><input id="todo" type="text" name="todo" placeholder="To Do"/></label><br/>
        <label htmlFor="detail" ><textarea id="detail" name="detail" placeholder="Detail content" cols="22" rows="5"></textarea></label><br/>
        <label htmlFor="date">Date <input id="date" type="date"/></label><br/>
        <label htmlFor="time">Time <input id="time" type="time"  /></label>
      </form>
    </div>
  );
}

function List(props){
  const lis = [];
  const calenders = props.calenders;
  for(let i = 0; i < calenders.length; i++){
    lis.push(<ListBlock key={calenders[i].id} num={calenders[i].id} todo={calenders[i].todo} detail={calenders[i].detail} 
                  date={calenders[i].date} time={calenders[i].time}></ListBlock>)
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
        <button className='check' onClick={()=>{
          
        }}></button>
        <span>{props.todo}</span>
        
      </div>
      <div className="blockBottom">
        <div className='dateBlock'>
          <span style={left}>{props.date}</span>
          <span style={right}>{props.time}</span>
        </div>
        <p>{props.detail}</p>
      </div>
    </li>
  );
}

function App() {
  const calenders = [
    {id:1, todo : '해야 할 일1', detail : '세부적인 내용ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', date : '2022-12-29', time : '오후 03 : 12'},
    {id:2, todo : '해야 할 일2', detail : '세부적인 내용', date : '2022-12-29', time : '오후 03 : 12'},
    {id:3, todo : '해야 할 일3', detail : '세부적인 내용', date : '2022-12-29', time : '오후 03 : 12'},
    {id:4, todo : '해야 할 일4', detail : '세부적인 내용', date : '2022-12-29', time : '오후 03 : 12'}
  ];

  return (
    <div className="App">
      <ToDoForm></ToDoForm>
      <List calenders={calenders}></List>
    </div>
  );
}

export default App;
