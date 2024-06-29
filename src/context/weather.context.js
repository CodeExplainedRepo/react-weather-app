import { createContext, useEffect, useState } from 'react';
import {
  DEFAULT_PLACE,
  MEASUREMENT_SYSTEMS,
  UNITS,
} from '../constants';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);

      const cw = await getWeatherData(
        'current',
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);
      setUnits(UNITS[cw.units]);

      const hf = await getWeatherData(
        'hourly',
        place.place_id,
        measurementSystem
      );
      setHourlyForecast(hf.hourly.data);

      const df = await getWeatherData(
        'daily',
        place.place_id,
        measurementSystem
      );
      setDailyForecast(df.daily.data);

      setLoading(false);
    }
    _getWeatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
