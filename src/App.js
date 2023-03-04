import Profile from './components/Profile';
import Search from './components/Search';
import TodayWeather from './components/TodayWeather';
import TodayAirQuality from './components/TodayAirQuality';
import TodayTemperature from './components/TodayTemperature';
import TomorrowWeather from './components/TomorrowWeather';

import './App.css';

function App() {
  return (
    <div className="App">
      <Profile />
      <Search />
      <TodayWeather />
      <TodayAirQuality />
      <TodayTemperature />
      <TomorrowWeather />
    </div>
  );
}

export default App;
