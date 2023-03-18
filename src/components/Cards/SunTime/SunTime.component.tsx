import {
  Chart,
  SunChart,
  SunChartWrapper,
  SunTimeContainer,
  Time,
  TimeNow,
} from "./SunTime.styles";
import sunTime from "../../../assets/sun-time.png";
import sunChart from "../../../assets/sun-chart.png";

export function SumTime(): JSX.Element {
  return (
    <SunTimeContainer>
      <h2>
        {" "}
        <img src={sunTime} alt="sun icon" />
        Horário do sol
      </h2>
      <SunChartWrapper>
        <SunChart position={15}>
          <Chart position={15}>
            <img src={sunChart} alt="sun chart image" />
          </Chart>
          <TimeNow>17:00</TimeNow>
        </SunChart>
      </SunChartWrapper>
      <Time>
        <time>6:00</time>
        <time>18:10</time>
      </Time>
    </SunTimeContainer>
  );
}
