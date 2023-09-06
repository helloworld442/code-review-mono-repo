import { styled } from "styled-components";

const Tag = ({ title }) => {
  return <StTag>{title}</StTag>;
};

const StTag = styled.span`
  display: inline-block;
  padding: 8px 12px;
  box-sizing: border-box;
  border: 3px solid #e8e8e8;
  border-radius: 8px;
  font-size: 0.925rem;
  font-weight: 400;
  color: #eee;
  background: rgb(64, 58, 107, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { Tag };
