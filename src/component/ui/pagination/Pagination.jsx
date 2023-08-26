import classNames from "classnames";
import "./Pagination.scss";

const Pagination = ({
  currPage,
  totalPages,
  itemPerPages,
  onClickPages,
  onClickPrevPages,
  onClickNextPages,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / itemPerPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination-list">
        <li
          className={classNames("pagination-item", { notActive: currPage <= 1 })}
          onClick={onClickPrevPages}
        >
          &lt;
        </li>
        {pageNumbers.map((pageNumber, i) => (
          <li
            key={i}
            className={classNames("pagination-item", { active: currPage === i + 1 })}
            onClick={() => onClickPages(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        <li
          className={classNames("pagination-item", {
            notActive: currPage >= Math.ceil(totalPages / itemPerPages),
          })}
          onClick={onClickNextPages}
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export { Pagination };
