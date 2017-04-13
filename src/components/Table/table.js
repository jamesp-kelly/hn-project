import React from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import Button from '../../components/Button/';
import Sort from '../../components/Sort';

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, [(item) => item.title.toLowerCase()]),
  AUTHOR: list => sortBy(list, [(item) =>  item.author.toLowerCase()]), 
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse()
}

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReverse: false
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    this.setState((prevState) => {
      const isSortReverse = prevState.sortKey === sortKey && !prevState.isSortReverse;
      return { 
        sortKey, isSortReverse 
      };
    });
  }

  render() {
    const {
      list,
      onDismiss
    } = this.props;

    const {
      sortKey,
      isSortReverse
    } = this.state;

    const sortedList = SORTS[sortKey](list);
    const renderList = isSortReverse ? sortedList.reverse() : sortedList;

    return (
      <div className="table">
        <div className="table-header">
          <span style={{ width: '40%' }}>
            <Sort 
              sortKey={'TITLE'} 
              onSort={this.onSort}
              activeSortKey={sortKey}
              isSortReverse={isSortReverse}
            >
          
              Title
            </Sort>
          </span>
          <span style={{ width: '30%' }}>
            <Sort 
              sortKey={'AUTHOR'} 
              onSort={this.onSort}
              activeSortKey={sortKey}
              isSortReverse={isSortReverse}
            >
              Author
            
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            <Sort 
              sortKey={'COMMENTS'} 
              onSort={this.onSort}
              activeSortKey={sortKey}
              isSortReverse={isSortReverse}
            >
              Comments
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            <Sort 
              sortKey={'POINTS'}  
              onSort={this.onSort}
              activeSortKey={sortKey}
              isSortReverse={isSortReverse}
            >
              Points
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            Archive
          </span>
        </div>

        { renderList.map(item =>
          <div key={item.objectID} className="table-row">
            <span style={{ width: '40%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: '30%' }}>
              {item.author}
            </span>
            <span style={{ width: '10%' }}>
              {item.num_comments}
            </span>
            <span style={{ width: '10%' }}>{item.points}</span>
            <span style={{ width: '10%' }}>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"  
              >
                Dismiss
              </Button>
            </span>
          </div>
        )}      
      </div>
    );
  }
}
  

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.points
    })).isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Table;