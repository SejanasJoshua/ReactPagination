import React, { useEffect, useState } from "react";
import Card from "./Card";
// import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";

import "./Pagination.css";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  // const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const usersPerPage = 9;

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    const totalPages = Math.ceil(data.length / usersPerPage);
    setIsLoading(false);
    setPages(totalPages);
    return data;
  };

  useEffect(async () => {
    const data = await fetchData();
    setUsers(data);
  }, []);

  const pageChange = async ({ selected }) => {
    setPageNo(selected);
    const data = await fetchData();
    setUsers(data);
  };
  const index = pageNo * usersPerPage;
  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="row">
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row" style={{ justifyContent: "center" }}>
            {users.slice(index, index + usersPerPage).map((userList) => {
              return <Card key={userList.id} users={userList} />;
            })}
          </div>
        )}
      </div>
      {/* <Pagination pages={pages} /> */}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pages}
        containerClassName={"paginationContainer"}
        activeClassName={"paginationActive"}
        onPageChange={pageChange}
      />
    </>
  );
};

export default UserData;
