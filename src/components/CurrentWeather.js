import {getCurrentWeather} from '../api'
function CurrentWeather(){
    const data = getCurrentWeather();
    const {
        cloud_cover,
        feels_like,
        humidity,
        icon_num,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind,
    } = data;

    return(
        <>
        <div className="CurrentWeather">
            <div className='temperature'>
                <div className='weather-icon'>
                    <img alt='Weather icon' />
                </div>
            </div>
            <div className='other-info'>
                    
            </div>
        </div>
        </>
    )
}

export default CurrentWeather