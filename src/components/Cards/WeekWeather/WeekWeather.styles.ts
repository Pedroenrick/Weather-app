import styled from "styled-components";

export const WeekWeatherContainer = styled.section`
  display: flex;
  gap: 1.2rem;
  padding: 4rem;

  @media (min-width: 1200px) {
    grid-column: 2/4;
  }
`;

export const Day = styled.div`
  flex: 1;
  display: grid;
  justify-items: center;
  gap: 1.6rem;

  h4 {
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["celcius-color"]};
  }

  p {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["text-color"]};

    span {
      color: ${({ theme }) => theme.colors["secondary-text-color"]};
    }
  }
`;
