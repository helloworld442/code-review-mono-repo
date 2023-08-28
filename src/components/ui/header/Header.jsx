import { useEffect, useState } from "react";
import "./Header.scss";
import classNames from "classnames";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScrollHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, []);

  return (
    <header className={classNames("header", { active: scrollY > 50 })}>
      <nav
        data-testid="header-nav"
        className={classNames("header-nav", { active: scrollY > 50 })}
      >
        <h2 className="header-nav-logo">별무리 스튜디오</h2>
        <ul className="header-nav-menu">
          <li className="header-nav-item">
            <a href="#">글쓰기</a>
          </li>
          <li className="header-nav-item">
            <a href="#">회원가입</a>
          </li>
          <li className="header-nav-item">
            <a href="#">로그인</a>
          </li>
        </ul>
      </nav>

      <aside
        data-testid="header-aside"
        className={classNames("header-aside", { active: scrollY > 50 })}
      >
        <div className="header-aside-desc">
          <h2>코드리뷰 사이트 별무리</h2>
          <h4>서로 코드를 리뷰하는 사이트입니다</h4>
        </div>
        <span className="header-aside-plants">
          <span id="sun"></span>
          <span id="moon"></span>
        </span>
      </aside>
    </header>
  );
};

export { Header };
