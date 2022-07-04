import styled from 'styled-components';

export const FilterBars = styled.div`
  align-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary}
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;

  h3 {
    color: #000000;
    font: 700 24px Neo Sans, sans-serif;
    padding: 32px;
    padding-left: 25%;
  }

  h4 {
    color: #333333;
    font: 700 16px Neo Sans, sans-serif;
    padding: 32px;
    padding-left: 25%;
  }

  label {
    display: flex;
    padding: 32px;
    padding-left: 25%;
  }

  input {
    margin-right: 8px;
  }
`;