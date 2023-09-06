import "./ReviewRank.scss";

const ReviewRank = () => {
  return (
    <div className="review-rank">
      <h2 className="review-rank-title">유저 랭킹</h2>
      <ul className="review-rank-list">
        <li className="review-rank-item">
          <span className="rank-item-profile"></span>
          <h4>김민승</h4>
        </li>
      </ul>
    </div>
  );
};

export { ReviewRank };
