import styled from "styled-components";

export const AirQualityContainer = styled.section`
  font-weight: 700;
  text-align: center;
  display: grid;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: center;
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.colors["celcius-color"]};
  }

  > p:first-of-type {
    font-size: 1.8rem;
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.colors["air-quality-color"]};
  }

 > p:last-of-type {
    margin-top: 0.4rem;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors["stats-text-color"]};
  }
`;

export const InfoAir = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
  padding: 0 1.6rem 1.6rem;
`;

export const AirQualityInfo = styled.div`
 flex: 1;
    p { 
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors["air-quality-color"]};
    }

    small {
      font-size: 1.2rem;
        color: ${({ theme }) => theme.colors["stats-text-color"]};
    }
`;
