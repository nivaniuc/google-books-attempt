import React, {Component} from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return <BookCard keys={book.id} info={book} />;
      })}
    </div>
  );
};

export default BookList;
//formatted doc with prettier