import styled from 'styled-components';

export const WineCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  display flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
  margin: 11px;
  padding: 16px;
  width: 300px;
  

  img {
    background-position: 50%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    display: block;
    height: 65%;
    margin-left: 24px;
    overflow: hidden;
    width: 75%;
  }

  h4 {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  h3 {
    align-items: center;
    color: #B6116E;
    display: flex;
    justify-content: center;
    padding-left: 4px;
    text-align: center;
  }

  p {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;