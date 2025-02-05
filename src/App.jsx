import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/header/Header'

function App() {
  const [time, setTime] = useState(0)
  const [bookMark, setBookMark] = useState([])


    const handlesTime = getTime =>{
            const newTime = time + getTime ;  
            setTime(newTime)         
    }
    console.log(time);

    const handlesMark = title =>{
        const newBookMark = [...bookMark , title]
        setBookMark(newBookMark)    
    }
    console.log(bookMark);
    
    
  return (
    <>  

        <div className="container mx-auto">
           <Header></Header>

            <div className='md:grid grid-cols-8 gap-4 mt-4'>
                <div className='md:grid col-span-6'>
                  <Blogs 
                  handlesMark = {handlesMark}
                  handlesTime={handlesTime}>
                  
                  </Blogs>
                </div>
                <div className='md:grid col-span-2'>
                  <BookMarks 
                  time={time}
                  bookMark={bookMark}
                  ></BookMarks>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
