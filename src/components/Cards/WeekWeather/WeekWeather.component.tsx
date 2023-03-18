import { Day, WeekWeatherContainer } from "./WeekWeather.styles";
import weather from "../../../assets/week-weather-icons/weather.png";
import sun from "../../../assets/week-weather-icons/sun.png";
import rain from "../../../assets/week-weather-icons/rain.png";
import tunder from "../../../assets/week-weather-icons/tunder.png";
import cloudy from "../../../assets/week-weather-icons/cloudy.png";

export function WeekWeather(): JSX.Element {
  return (
    <WeekWeatherContainer>
      <Day>
        <h4>Amanhã</h4>
        <img src={weather} alt="clouds icon" />
        <p>
          27º <span>22º</span>
        </p>
      </Day>

      <Day>
        <h4>Segunda</h4>
        <img src={sun} alt="sun icon" />
        <p>
          32º <span>27º</span>
        </p>
      </Day>

      <Day>
        <h4>Terça</h4>
        <img src={rain} alt="rain icon" />
        <p>
          22º <span>16º</span>
        </p>
      </Day>

      <Day>
        <h4>Quarta</h4>
        <img src={tunder} alt="tunder icon" />
        <p>
          21º <span>16º</span>
        </p>
      </Day>

      <Day>
        <h4>Quinta</h4>
        <img src={cloudy} alt="cloudy icon" />
        <p>
          27º <span>24º</span>
        </p>
      </Day>
      <Day>
        <h4>Sexta</h4>
        <img src={sun} alt="sun icon" />
        <p>
          27º <span>24º</span>
        </p>
      </Day>
    </WeekWeatherContainer>
  );
}
