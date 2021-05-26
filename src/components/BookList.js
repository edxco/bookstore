import React from "react";
import { connect } from "react-redux";

const BooksList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          {props.books.map((book) => {
            return (
              <>
                <td>book.id</td>
                <td>book.title</td>
                <td>book.category</td>
              </>
            );
          })}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

mapStateToProps = (state) => {
  return { books: state.books };
};

export default connect(mapStateToProps)(BooksList);
