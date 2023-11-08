import styled, { css, keyframes } from "styled-components";

export const Title = styled.h1`
  color: #000;
  ${(props) =>
    props.theme === "dark" &&
    css`
      background: green;
    `}
`;
export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f;
  border-radius: 3px;
`;
export const TomatoButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  border-color: tomato;
  color: tomato;
`;
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);
export const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
