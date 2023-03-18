import styled from "styled-components";
import temp from "../../../assets/temp.png";
import cloud from "../../../assets/weather.png";

export const CardContainer = styled.section`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  background: url(${temp});
  border-radius: 1rem;
  position: relative;

  &::before {
    content: "";
    background: url(${cloud}) no-repeat;
    position: absolute;
    width: 17.6rem;
    height: 17.6rem;
    top: -5.6rem;
    left: -5.6rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  padding: 3.2rem 3.2rem 0;
  gap: 0.4rem;

  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["secondary-text-color"]};
  }
`;

export const ContainerTemperature = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem;
  font-weight: 700;
  gap: 0.4rem;

  div {
    :nth-child(2) {
      margin-top: 1.5rem;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors["celcius-color"]};
    }
  }
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.4rem;
  font-size: 8.8rem;
  color: ${({ theme }) => theme.colors["text-color"]};

  div {
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.colors["secondary-text-color"]};
    }
  }
`;

export const Metrics = styled.div`
  padding: 1.2rem;
  display: flex;
  gap: 0.8rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  flex: 1;
  padding: 1.2rem 1.6rem;
  background: rgba(102, 96, 200, 0.6);
  border-radius: 0.6rem;

  div{
    color: ${({ theme }) => theme.colors["stats-text-color"]};

    span, p{
        font-size: 1.2rem;
    }

    h5{
        font-size: 1.8rem;
        display: flex;
        align-items: baseline;
        gap: 0.4rem;
    }
  }
`;
