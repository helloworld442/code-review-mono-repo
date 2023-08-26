import { useEffect, useState } from "react";
import "./Header.scss";
import classNames from "classnames";
import { ReactComponent as User } from "../../../assets/user-regular.svg";
import { ReactComponent as Write } from "../../../assets/pen-to-square-regular.svg";

const Header = ({ isBackground }) => {
  const [scrollY, setScrollY] = useState(0);

  const onScrollHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, []);

  return (
    <header className="header">
      {/* 헤더 네비게이션 영역 */}
      <nav className={classNames("header-nav", { hide: scrollY > 50, isBackground })}>
        {/* 헤더 로고 */}
        <a href="/" className="header-link">
          별무리 스튜디오
        </a>

        {/* 헤더 매뉴 데스크 테블릿 버전*/}
        <ul className="header-menu">
          <li className="header-item">
            <a href="/write">글쓰기</a>
          </li>
          <li className="header-item">
            <a>회원가입</a>
          </li>
          <li className="header-item login">
            <a>로그인</a>
          </li>
        </ul>

        <ul className="header-mobile-menu">
          <li className="header-mobile-item">
            <a href="/write">
              <Write />
            </a>
          </li>
          <li className="header-mobile-item">
            <a>
              <User />
            </a>
          </li>
        </ul>
      </nav>

      {/* 헤더 배경화면 영역 */}
      <div className={classNames("header-background", { hide: scrollY > 50, isBackground })}>
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
