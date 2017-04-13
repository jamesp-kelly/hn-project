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

const Table = ({
  list, 
  sortKey,
  isSortReverse,
  onSort,
  onDismiss
}) => {

  const sortedList = SORTS[sortKey](list);
  const renderList = isSortReverse ? sortedList.reverse() : sortedList;

  return (
    <div className="table">
      <div className="table-header">
        <span style={{ width: '40%' }}>
          <Sort 
            sortKey={'TITLE'} 
            onSort={onSort}
            activeSortKey={sortKey}
          >
        
            Title
          </Sort>
        </span>
        <span style={{ width: '30%' }}>
          <Sort 
            sortKey={'AUTHOR'} 
            onSort={onSort}
            activeSortKey={sortKey}
          >
            Author
          
          </Sort>
        </span>
        <span style={{ width: '10%' }}>
          <Sort 
            sortKey={'COMMENTS'} 
            onSort={onSort}
            activeSortKey={sortKey}
          >
            Comments
          </Sort>
        </span>
        <span style={{ width: '10%' }}>
          <Sort 
            sortKey={'POINTS'}  
            onSort={onSort}
            activeSortKey={sortKey}
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