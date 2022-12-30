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
  return (
    <li className="block" key={props.num}>
      <div className="blockTop">
        <button className='check' onClick={()=>{
          
        }}></button>
        <span>{props.todo}</span>
        <button className='plus' onClick={(event)=>{
          let parent = event.target.parentElement;
        
        }}></button>
      </div>
      <div className="blockBottom">
        <button>{props.date}{props.time}</button>
        <p>{props.detail}</p>
      </div>
    </li>
  );
}

function App() {
  const calenders = [
    {id:1, todo : '해야 할 일', detail : '세부적인 내용', date : '2022-12-29', time : '오후 03 : 12'},
    {id:2, todo : '해야 할 일', detail : '세부적인 내용', date : '2022-12-29', time : '오후 03 : 12'}
  ];

  return (
    <div className="App">
      <ToDoForm></ToDoForm>
      <List calenders={calenders}></List>
    </div>
  );
}

export default App;
