import React from 'react';
import styles from './pagination.module.css';
import {useState} from 'react';

const Pagination = (props) => {

  let pagesCount = props.pages;

  const [currentPage, setCurrentPage] = useState(1);

  const showTenPages = (currentPage) => {
    const renderMultiplier = Math.ceil(currentPage/10);
    const firstPage = renderMultiplier*10-9;
    let lastPage = renderMultiplier*10;
    if (Math.ceil(pagesCount/10) === renderMultiplier) {
      lastPage = pagesCount;
    }
    let pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(<span key={i} onClick={() => {
        props.onPageChange(i);
        setCurrentPage(i);
      }}
        className={currentPage === i ? styles.activePage : styles.normalPage}>{i}
      </span>)
    }
    return pages;
  }

  const getPagination = () => {
    return <span> {showTenPages(currentPage)} </span>
  }

  const setNextPage = () => {
    let nextPageNumber = currentPage + 10;
    if (nextPageNumber < pagesCount) {
      props.onPageChange(nextPageNumber);
      setCurrentPage(nextPageNumber);
    } else if (nextPageNumber <= pagesCount + 5) {
      nextPageNumber = pagesCount;
      props.onPageChange(nextPageNumber);
      setCurrentPage(nextPageNumber);
    }
  }

  const setPreviousPage = () => {
    const previousPageNumber = currentPage - 10;
    if (previousPageNumber > 0) {
      props.onPageChange(previousPageNumber);
      setCurrentPage(previousPageNumber);
    }
  }

  return <span className={styles.pagination}>
    <span onClick={setPreviousPage}>&larr; </span>
    {getPagination()}
    <span onClick={setNextPage}> &rarr;</span>
  </span>
}

export default Pagination;
