import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text};
  }
`;