import { AirQualityContainer, AirQualityInfo, InfoAir } from "./AirQuality.styles";
import leaf from "../../../assets/leaf.png";

export function AirQuality(): JSX.Element {
  return (
    <AirQualityContainer>
      <h2>
        <img src={leaf} alt="leaf icon" />
        Qualidade do ar
      </h2>
      <p>Boa</p>
      <p>21</p>
      <InfoAir>
        <AirQualityInfo>
            <p>12.9</p>
            <small>PM2.5</small>
        </AirQualityInfo>
        <AirQualityInfo>
            <p>12.9</p>
            <small>PM10</small>
        </AirQualityInfo>
        <AirQualityInfo>
            <p>2.1</p>
            <small>SO₂</small>
        </AirQualityInfo>
        <AirQualityInfo>
            <p>1.4</p>
            <small>NO₂</small>
        </AirQualityInfo>
        <AirQualityInfo>
            <p>21.2</p>
            <small>O₃</small>
        </AirQualityInfo>
        <AirQualityInfo>
            <p>0.7</p>
            <small>CO</small>
        </AirQualityInfo>
      </InfoAir>
    </AirQualityContainer>
  );
}
