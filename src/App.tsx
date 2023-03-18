import { Container } from "./components/Container/Container.component";
import { TemperatureNow } from "./components/Cards/TemperatureNow/TemperatureNow.component";
import { AirQuality } from "./components/Cards/AirQuality/AirQuality.component";
import { SumTime } from "./components/Cards/SunTime/SunTime.component";

function App() {
  return (
    <Container>
      <TemperatureNow />
      <AirQuality />
      <SumTime />
    </Container>
  );
}

export default App;
