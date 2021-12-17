import classes from './severalDaysForecast.module.scss';
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";
import Modal from "../UI/Modal/Modal";
import ForecastItem from "../ForecastItem/ForecastItem";
import { getWeekdayDate, getMonthDayDate, getIconPath } from "../../utils/js";
import {useState} from "react";
import {useSelector} from "react-redux";

const SeveralDaysForecast = () => {
    const forecast = useSelector(store => store.cityReducer.forecast);

    const [modalShown, setModalShown] = useState(null);

    const renderForecast = () => forecast.map(day => (
        <li className={classes['forecast-item']} key={day.dt} onClick={() => setModalShown(day.dt)}>
            <div className={classes['day']}>
                <div>{getWeekdayDate(day.dt)}</div>
                <div>{getMonthDayDate(day.dt)}</div>
            </div>
            <img src={getIconPath(day)} alt={day.weather[0].description} width={60} height={60} />
            <div>
                <span>{Math.round(day.temp.max)}&#176;C</span>
                &nbsp;/&nbsp;
                <span>{Math.round(day.temp.min)}&#176;C</span>
            </div>
            <Modal isShown={modalShown === day.dt} closeModal={() => setModalShown(null)}>
                <ForecastItem forecast={day} />
            </Modal>
        </li>
    ));

    if (!forecast) return <LoadingIndicator />

    return (
        <section className={classes['forecast']}>
            <ul className={classes['forecast-list']}>
                {renderForecast()}
            </ul>
        </section>
    );
};

export default SeveralDaysForecast;