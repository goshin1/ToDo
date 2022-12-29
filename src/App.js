import logo from './logo.svg';
import './App.css';

function ToDoForm(props){
  return (
    <div>
      <form>
        <p>
          <input type="submit" value="To Do List!" onSubmit={event=>{
            event.preventDefault();
          }}/>
        </p>
        <label for="todo"><input id="todo" type="text" name="todo" placeholder="To Do"/></label><br/>
        <label for="detail" ><textarea id="detail" name="detail" placeholder="Detail content" cols="22" rows="5"></textarea></label><br/>
        <label for="date">Date <input id="date" type="date"/></label><br/>
        <label for="time">Time <input id="time" type="time"  /></label>
      </form>
    </div>
  );
}


function ListBlock(props){
  return (
    <li>
      <div>
        <button onClick={()=>{

        }}></button>
        <span>{props.todo}</span>
        <button onClick={()=>{
          
        }}></button>
      </div>
      <div>
        <button>{props.date}{props.time}</button>
        <p>{props.detail}</p>
      </div>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <ToDoForm></ToDoForm>
    </div>
  );
}

export default App;
