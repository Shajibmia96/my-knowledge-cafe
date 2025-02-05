import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({time,bookMark}) => {
    return (
        <div>
               <div className="border p-4 mb-4npm i prop-types flex justify-center bg-orange-50 border-blue-500">
                     <h1 className="text-blue-500 font-semibold">Total time : {time} Minute</h1>
               </div>
              
              <div >
               <h1 className="text-4xl">Book Mark : {bookMark.length}</h1>
                  {
                    bookMark.map((mark , idx) => <BookMark key={idx} mark={mark}></BookMark>)
                  }
              </div>
        </div>
    );
};

BookMarks.propTypes ={
     time: PropTypes.number,
     bookMark : PropTypes.array
}
export default BookMarks;