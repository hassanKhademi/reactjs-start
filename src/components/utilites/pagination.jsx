import React, { Component } from "react";

const Pagination = (props) => {
  const { pageLength, itemSize } = props;

  let pageCount = (itemSize / pageLength) | 0;

  let pages = Array(pageCount)
    .fill(1)
    .map((f, index) => index + 1);

  return (
    <ul className="pagination ml-2 mt-2">
      {pages.map((pg, index) => (
        <li className="pagination" key={index}>
          <a className="page-link">{pg}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
