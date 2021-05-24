import React from "react";
import BookCard from "./BookCard"

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                                keys={i} 
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.title}
                                author={book.authors}
                                published={book.publishedDate} />
                })
            }
        </div>
    )
}

export default BookList;