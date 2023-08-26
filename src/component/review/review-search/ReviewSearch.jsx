import "./ReviewSearch.scss";
import { ReactComponent as MagnifyGlass } from "../../../assets/magnifying-glass-solid.svg";

const ReviewSearch = () => {
  return (
    <div className="review-search">
      <form className="review-search-form">
        <input type="text" name="title" placeholder="검색어를 입력해주세요" />
        <MagnifyGlass />
      </form>
    </div>
  );
};

export default ReviewSearch;
