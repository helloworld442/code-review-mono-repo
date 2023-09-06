import { useEffect, useState } from "react";
import { css, keyframes, styled } from "styled-components";

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
    <StHeader isBackground={isBackground} $active={scrollY <= 50}>
      <StHeaderNav isBackground={isBackground} $active={scrollY <= 50}>
        <h2 className="header-nav-logo">
          <a href="/">별무리 스튜디오</a>
        </h2>
        <ul className="header-nav-menu">
          <li className="header-nav-item">
            <a href="/write">글쓰기</a>
          </li>
          <li className="header-nav-item">
            <a href="#">회원가입</a>
          </li>
          <li className="header-nav-item">
            <a href="#">로그인</a>
          </li>
        </ul>
      </StHeaderNav>
      <StHeaderArticle isBackground={isBackground} $active={scrollY <= 50}>
        <div className="header-aside-desc">
          <h2>코드리뷰 사이트 별무리</h2>
          <h4>서로 코드를 리뷰하는 사이트입니다</h4>
        </div>

        <span className="header-aside-plants">
          <span id="sun"></span>
          <span id="moon"></span>
        </span>
      </StHeaderArticle>
    </StHeader>
  );
};

const rotate_image = keyframes`
100% {
    transform: rotate(360deg);
  }
`;

const StHeader = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  background: #f8f8f7;
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.isBackground &&
    props.$active &&
    css`
      background: #403a6b;
    `}
`;

const StHeaderNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 36px;
  box-sizing: border-box;
  border-bottom: 2px solid #eee;
  color: #333;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  ${(props) =>
    props.isBackground &&
    props.$active &&
    css`
      border: none;
      color: #eee;
      background: transparent;
    `}

  .header-nav-logo {
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
  }

  .header-nav-item {
    display: inline-block;
    padding: 12px 24px;
    box-sizing: border-box;
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
  }
`;

const StHeaderArticle = styled.article`
  position: relative;
  bottom: 0;
  left: 50%;
  width: 1200px;
  height: 520px;
  display: none;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%);
  transition: all 0.5s ease-in-out;
  opacity: 0;

  ${(props) =>
    props.isBackground &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
    `}

  .header-aside-desc {
    h2 {
      margin-bottom: 36px;
      font-size: 3.2rem;
      font-weight: 400;
      color: #eee;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    h4 {
      font-size: 1.4rem;
      font-weight: 400;
      color: #eee;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  .header-aside-plants {
    display: inline-block;
    width: 350px;
    height: 350px;
    border: 3px solid #eee;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: 50% 50%;
    animation: ${rotate_image} 6s linear infinite;

    #sun {
      width: 250px;
      height: 250px;
      border-radius: 100%;
      background: #ffff00;
    }

    #moon {
      position: absolute;
      top: -18px;
      width: 36px;
      height: 36px;
      border-radius: 100%;
      background: #777;
    }
  }
`;

export { Header };
