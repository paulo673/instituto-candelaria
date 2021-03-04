import styled from 'styled-components'

export const Container = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #337b17;

  > div {
    height: 100%;
    width: 100%;
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ecf3e9;

    > div {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > div span {
      margin-left: 1rem;
    }

    > div span:nth-child(3) {
      height: 100%;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${props => props.theme.colors.button};
    }
  }
`
