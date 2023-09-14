import { PropTypes } from 'prop-types';
import { FaBookmark } from 'react-icons/fa'


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {

    const {id, title, cover, author, author_img, posted_date,  reading_time, hashtags} = blog
    return (
        <div className='text-xl mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover}alt="" />
            <div className='flex justify-between mb-4 '>
                <div className='flex justify-center ml-6 '>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className=' ml-4 text-red-600 text-2xl '><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
           <p className='mt-8'>
              {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span> )
              }
           </p>
           <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold text-lg border-2 rounded-lg bg-slate-300 p-2'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;