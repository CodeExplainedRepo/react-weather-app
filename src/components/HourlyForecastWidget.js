import { useContext } from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherContext from '../context/weather.context';

function HourlyForecastWidget({ data }) {
  const { units } = useContext(WeatherContext);
  const { date, icon, summary, temperature, precipitation, wind } =
    data;

  // date format
  const locale = navigator.language;
  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date()),
    time: new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date().setMinutes(0)),
  };
  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date).setMinutes(0)),
  };
  const midnightTime = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date().setHours(0, 0, 0, 0));

  weather_date.day =
    weather_date.day === now_date.day &&
    weather_date.time === now_date.time
      ? 'Now'
      : weather_date.time === midnightTime
      ? weather_date.day
      : '';

  return (
    <div className='widget'>
      <div className='day'>{weather_date.day}</div>
      <div className='time'>{weather_date.time}</div>
      <div className='icon-temp'>
        <div className='icon'>
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className='temperature'>
          {Math.round(temperature)} {units.temperature}
        </div>
      </div>
      <div className='precipitation'>
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
      <div className='wind'>
        <div className='speed'>
          {Math.round(wind.speed)} {units.wind_speed}
        </div>
        <div
          className='dir'
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <i className='bi bi-send-fill'></i>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecastWidget;
