import PropTypes from "prop-types";

const BookMark = ({mark}) => {
    return (
        <div >
             
            <h1 className="border shadow-xl mt-4 p-4">{mark}</h1>
        </div>
    );
};

  BookMark.propTypes ={
    mark: PropTypes.object.isRequired,
    
  }
export default BookMark;
