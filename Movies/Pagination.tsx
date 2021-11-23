import "./Movie.css";

function Pagination(props: any) {
  const { postPerPage, totalPosts, paginate, currentPage } = props;
  const pageNumber: any = [];
  //   console.log("6", postPerPage, totalPosts);

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  const renderCard = pageNumber.map((number: any) => {
    // console.log(number);
    return (
      <button
        key={number}
        className={currentPage == number ? "active" : "pagination-btn"}
        onClick={() => paginate(number)}
      >
        {number}
      </button>
    );
  });
  return <div className="pagination-container">{renderCard}</div>;
}
export default Pagination;
