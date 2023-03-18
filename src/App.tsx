import { Container } from "./components/Container/Container.component";
import { TemperatureNow } from "./components/Cards/TemperatureNow/TemperatureNow.component";
import { AirQuality } from "./components/Cards/AirQuality/AirQuality.component";

function App() {
  return (
    <Container>
      <TemperatureNow />
      <AirQuality />
    </Container>
  );
}

export default App;
