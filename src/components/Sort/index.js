import React from 'react';
import Button from '../../components/Button';
import classNames from 'classnames';

const Sort = ({ 
  sortKey, 
  onSort, 
  children,
  activeSortKey,
  isSortReverse
}) =>
  {
    const sortClass = classNames(
      'button-inline',
      { 'button-active' : sortKey === activeSortKey}
    );

    const arrowClass = classNames(
      'fa',
      { 'fa-arrow-up': !isSortReverse },
      { 'fa-arrow-down': isSortReverse },
      {'hidden': sortKey !== activeSortKey}
    );

    return (
      <div>
        <Button 
          onClick={() => onSort(sortKey)}
          className={sortClass}
        >
          {children}
        </Button>
        <i className={arrowClass} aria-hidden="true"></i>
      </div>
    );
  }
  

export default Sort;