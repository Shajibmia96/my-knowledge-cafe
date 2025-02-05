import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/header/Header'

function App() {
  return (
    <>  
        <div className="container mx-auto">
           <Header></Header>

            <div className='md:grid grid-cols-8 gap-4 mt-4'>
                <div className='md:grid col-span-6'>
                  <Blogs></Blogs>
                </div>
                <div className='md:grid col-span-2'>
                  <BookMarks></BookMarks>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
