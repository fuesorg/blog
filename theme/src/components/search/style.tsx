import styled from "styled-components";

export const SearchBox = styled.div<{ readonly open: boolean }>`
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  width: 400px;
  background-color: #fff;
  left: -332px;
  top: 48px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .03), 0 3px 46px rgba(0, 0, 0, .1);

  &::before {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    position: absolute;
    top: -8px;
    right: 38px;
    transform: rotate(45deg);
  }
`;

export const SearchInput = styled.input`
  background-color: #fff;
  display: block;
  width: 100%;
  border: 0;
  padding: 15px;
  outline: none;
  border-radius: 5px;
`;

export const ResultsTitle = styled.h5`
  padding: 5px 15px;
  background-color: #000;
  margin: 0;
  color: #fff;
`;

export const SearchResults = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  overflow-y: auto;
  white-space: pre-wrap;
`;