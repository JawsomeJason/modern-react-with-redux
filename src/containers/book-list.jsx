import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index.js';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps({ books }) {
  // whatever is returned will show up as props inside BookList
  return { books };
}


// anything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// promote book list from a component to a container.  it needs to know about this new dispatch method, selectBook.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
