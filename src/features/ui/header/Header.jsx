import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      {/* 헤더 네비게이션 영역 */}
      <nav className="header-nav">
        {/* 헤더 로고 */}
        <a className="header-link">별무리 스튜디오</a>

        {/* 헤더 매뉴 */}
        <ul className="header-menu">
          <li className="header-item">글쓰기</li>
          <li className="header-item">회원가입</li>
          <li className="header-item">로그인</li>
        </ul>
      </nav>

      {/* 헤더 배경화면 영역 */}
      <div className="header-background">
        {/* 헤더 소개글 영역 */}
        <div className="header-title-area">
          <h2 className="header-intro-main-title">코드리뷰 사이트 별무리</h2>
          <h4 className="header-intro-sub-title">서로 코드를 리뷰하는 사이트입니다</h4>
        </div>

        {/* 헤더 행성 아이콘 영역 */}
        <span className="header-plant-icons">
          <span id="sun"></span>
          <span id="moon"></span>
        </span>
      </div>
    </header>
  );
};

export { Header };
