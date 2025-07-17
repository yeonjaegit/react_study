import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import App2 from './App2';

function App() {
  // const [변수명, 변경함수] = useState(초기값);
  // useXXX : 리액트 내장함수 ( 리액트 훅 )
  const [title, setTitle] = useState('게시판');

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

  const [boardTitle, setBoardTitle] 
  = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState([0, 0, 0]);
  const [show, setshow] = useState(false);
  // 몇 번째 게시글을 클릭한지 저장
  const [titleIndex, setTitleIndex] = useState(0);
  // 새로운 글작성 제목을 기억하는 스테이트
  const [newTitle, setNewTitle] = useState('');
  const [deleteIndex, setDeleteIndex] = useState(0);

  console.log(newTitle)

  let arr = [1,2,3,4,5];

  function change() {
    setLike(like + 1)
  }

  return (
    <div className='App'>
      <App2/>
      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() => {
        setTitle('상품목록')
      }}>제목바꾸기</button>

      {boardTitle.map((title, i) => {
        return (
      <div className='list' key={i}>
        <h4 onClick={() => {
          setshow(!show)
          setTitleIndex(i)
          console.log(titleIndex)

        }}>{title}<button onClick={(e) => {
          let _like = [...like]
          _like[i] += 1
          setLike(_like)
          e.stopPropagation();
        }}>좋아요</button>{like[i]}</h4>
        <p>2025-07-16</p>

        <button onClick={() => {
         let _boardTitle = [...boardTitle]
         _boardTitle.splice(i, 1)
         setBoardTitle(_boardTitle);

         let _like = [...like]
         _like.splice(i, 1)
         setLike(_like)
          
        }}>삭제</button>
      </div>
        )
      })}

      <button onClick={() => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = 'Java';

        setBoardTitle(_boardTitle)
      }}>첫 번째 게시물 제목바꾸기</button>

      {
        show ? <Detail titleIndex = {titleIndex} boardTitle = {boardTitle} like = {like} setBoardTitle = {setBoardTitle} /> : ''
      }
      <input type="text" value={newTitle} onInput={(e) => {
        setNewTitle(e.target.value);

      }}/>
      <button onClick={() => {
        if(newTitle == ''){
          alert('작성할 제목을 입력하세요.')
          return;
        }

        let _boardTitle = [...boardTitle];
        _boardTitle.push(newTitle);
        setBoardTitle(_boardTitle)

        let _like = [...like]
        _like.push(0);
        setLike(_like);

        setNewTitle('');

      }}>글작성</button>



    </div>
  )
}

export default App
