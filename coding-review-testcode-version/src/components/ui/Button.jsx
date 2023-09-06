import { css, styled } from "styled-components";

const Button = ({ children, size, fullWidth, primary, ...rest }) => {
  return (
    <StButton size={size} fullWidth={fullWidth} primary={primary} {...rest}>
      {children}
    </StButton>
  );
};

const StButton = styled.button`
  padding: 12px 24px;
  box-sizing: border-box;
  border: 4px solid rgb(64, 58, 107, 1);
  border-radius: 8px;
  font-weight: 400;
  font-family: "Jua", sans-serif;
  color: #fff;
  background: rgb(64, 58, 107, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 2.2rem;
      width: 300px;
      height: 80px;
    `};

  ${(props) =>
    props.size === "medium" &&
    css`
      font-size: 1.4rem;
      width: 130px;
      height: 50px;
    `};

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 1.25rem;
      width: 90px;
      height: 56px;
    `};

  ${(props) =>
    props.primary &&
    css`
      border: 4px solid rgb(64, 58, 107, 1);
      color: #403a6b;
      background: #fff;

      &:hover {
        color: #fff;
        background: rgb(64, 58, 107, 1);
      }
    `};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      height: 80px;
    `}
`;

export { Button };
