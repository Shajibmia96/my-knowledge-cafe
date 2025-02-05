import BookMark from "../BookMark/BookMark";

const BookMarks = () => {
    return (
        <div>
            <div className="border p-4  flex justify-center bg-orange-50 border-blue-500">
                     <h1 className="text-blue-500 font-semibold">Total time : </h1>
               </div>
             <BookMark></BookMark>
        </div>
    );
};

export default BookMarks;