import styled from 'styled-components';

export const FilterBars = styled.div`
  align-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary}
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 20%;

  h3 {
    font: 700 16px Neo Sans, sans-serif;
    padding: 32px;
    padding-left: 25%;
  }

  h4 {
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