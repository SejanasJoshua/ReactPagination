import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pages }) => {
  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pages}
        containerClassName={"paginationContainer"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default Pagination;
