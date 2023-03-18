import styled from "styled-components";
import { AirQualityContainer } from "../AirQuality/AirQuality.styles";
import { SunTimeProps } from "./SinTime.types";

export const SunTimeContainer = styled(AirQualityContainer)``;

export const SunChartWrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  height: 11rem;
`;

export const SunChart = styled.div<SunTimeProps>`
  position: relative;
  margin: auto;
  width: 21.6rem;
  height: 21.6rem;

  &::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    background: ${({ theme }) => theme.colors["sunrise-color"]};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin: -0.6rem;
    transform: rotate(
        calc(1deg * (((100 - ${({ position }) => position}) / -100) * 180))
      )
      translate(10.6rem);
  }
`;

export const Chart = styled.div<SunTimeProps>`
    width: 21.6rem;
    height: 10.8rem;
    overflow: hidden;


  img {
    position: absolute;
    top: 0;
    left: -1%;
  }

  &::before {
    content: "";
    height: 21.6rem;
    width: 21.6rem;
    display: block;
    border-radius: 50%;
    background: linear-gradient(
      180deg,
      rgba(251, 219, 96, 0.2) 0%,
      rgba(251, 219, 96, 0) 101.89%
    );

    mask: ${({ theme }) => theme.colors.mask};
    -webkit-mask: ${({ theme }) => theme.colors.mask}; 

    rotate: calc(1.8deg * ${({ position }) => position});
  }
`;

export const TimeNow = styled.time`
    position: absolute;
    top: 25%;
    left: 50%;
    color: ${({ theme }) => theme.colors["text-color"]};
    font-size: 1.4rem;
    font-weight: 700;

    transform: translate(-50%);
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 27.6rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors["text-color"]};
  margin: 1rem auto 0;
  padding: 0 1.6rem 1.6rem;
`;