import { styled } from "styled-components";

const Footer = () => {
  return <StFooter>Copyright © 2023. CodeReview All Rights Reserved.</StFooter>;
};

const StFooter = styled.footer`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  border-top: 2px solid #eee;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(64, 58, 107, 0.5);
  background: #fff;
  text-align: center;
`;

export { Footer };
