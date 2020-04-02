import React from 'react';

class List extends React.Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="list-container">
        List Componets
      </div>
    );
  }

}

export default List;