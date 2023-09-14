import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div>
            <h3 className='text-xl bg-slate-200 p-4 m-4 rounded-lg'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;