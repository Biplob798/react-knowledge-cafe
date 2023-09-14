import { useState } from 'react';
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
  setReadingTime(readingTime + time);
  }
  // Remove the blog from bookmark 
//  console.log('remove')
//  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
//  setBookmarks(remainingBookmarks);

  return (
    <>
      <Header></Header>
      <div className='flex justify-between gap-6 mx-12 my-12'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
