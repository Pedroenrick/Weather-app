import {
  CardContainer,
  ContainerTemperature,
  Info,
  Location,
  Metrics,
  Temperature,
} from "./TemperatureNow.styles";
import pin from "../../../assets/pin.png";
import wind from "../../../assets/wind.png";
import rain from "../../../assets/rain.png";
import humidity from "../../../assets/humidity.png";

export function TemperatureNow(): JSX.Element {
  return (
    <CardContainer>
      <Location>
        <img src={pin} alt="pin icon location" />
        <strong>Bicas, MG</strong>
      </Location>
      <ContainerTemperature>
        <Temperature>
          18
          <div>
            22º <span>16º</span>
          </div>
        </Temperature>
        <div>ºC</div>
      </ContainerTemperature>
      <Metrics>
        <Info>
          <img src={wind} alt="wind icon" />
          <div>
            <p>Vento</p>
            <h5>
              {" "}
              17 <span>km/h</span>
            </h5>
          </div>
        </Info>
        <Info>
          <img src={humidity} alt="himidity icon" />
          <div>
            <p>Umidade</p>
            <h5>
              {" "}
              38 <span>%</span>
            </h5>
          </div>
        </Info>
        <Info>
          <img src={rain} alt="rain icon" />
          <div>
            <p>Chuva</p>
            <h5>
              {" "}
              10 <span>%</span>
            </h5>
          </div>
        </Info>
      </Metrics>
    </CardContainer>
  );
}
