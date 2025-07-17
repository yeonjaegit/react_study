import { useState } from "react";
import './App.css'

function App2 () {
const [board, setBoard] = useState([
    {
      title : 'React',
      date : '2025-07-15',
      like : 0
    },
    {
      title : 'HTML',
      date : '2025-07-16',
      like : 0
    },
    {
      title : 'CSS',
      date : '2025-07-17',
      like : 0
    }
  ])

  const [addInput, setAddInput] = useState('');

  return (
    <div className="App">

      <div className="nav">
        <h3>게시판</h3>
      </div>
        {board.map((data , i) => {
          return (
          <div className="list" key={i}>
            <h4>{data.title}
              <span onClick={() => {
                let _board = [...board]
                _board[i].like += 1
                setBoard(_board)
                
              }}>👍</span><span>{data.like}</span>
            </h4>
            <p>{data.date}</p>
            <button onClick={() => {
              let _board = [...board]
              _board.splice(i, 1)
              setBoard(_board);
            }}>삭제</button>
          </div>
          )
          
        })}
      <input onChange = {(e) => {
        setAddInput(e.target.value)
        
      }} type="text" value={addInput} />
      <button onClick={() => {
        if(addInput == 0){
          alert('댓글을 입력하세요.')
          return;
        }
        let now = new Date();
        let date = now.getFullYear() + '-' +
        (now.getMonth()+1) + '-' + now.getDate();

        let newData = {
          title: addInput,
          date: date,
          like: 0
        }
        let _board = [...board]
        _board.push(newData)
        setBoard(_board)
        setAddInput('')

      }}>추가</button>
    </div>
  );
}

export default App2;