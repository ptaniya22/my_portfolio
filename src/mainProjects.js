import { Router } from 'react-router-dom';
import clock from './assets/images/clock.jpg';
import GoTrip from './assets/images/GoTrip.jpg';
import js_middle from './assets/images/js_middle.jpg';
import router_toolkit from './assets/images/router_toolkit.jpg';
import weather from './assets/images/weather.jpg';

export default [
  {
    id: 1,
    name: 'Часы + Секундомер',
    img: clock,
    link: 'https://ptaniya22.github.io/clock/',
    text: 'Проект отображает текущее время в двух форматах. Так же имеется секундомер с функциями остановки и очистки',
    language: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 2,
    name: 'Прогноз погоды',
    img: weather,
    text: 'Проект отображает прогноз погоды любого города по внешнему API. Недельный прогноз и подробный прогноз на данные сутки',
    link: 'https://ptaniya22.github.io/weather/',
    language: ['JavaScript', 'HTML', 'CSS', 'React', 'Redux Toolkit'],
  },
  {
    id: 3,
    name: 'Сайт туристического магазина GoTrip',
    img: GoTrip,
    link: 'https://ptaniya22.github.io/GoTrip/',
    text: 'Верстка страницы по макету туристического магазина GoTrip',
    language: ['HTML', 'CSS'],
  },
  {
    id: 4,
    name: 'Min Max Middle',
    img: js_middle,
    link: 'https://ptaniya22.github.io/js_middle/',
    text: 'Задача по поиску минимального, максимального, среднего значений среди заданных трех чисел',
    language: 'JavaScript, HTML, CSS',
  },
  {
    id: 5,
    name: 'Redux Toolkit & Router',
    img: router_toolkit,
    link: 'https://ptaniya22.github.io/router_toolkit/',
    text: 'Проект отображает данные с учебного API с подробным описанием выбранного элемента. С применением библиотек Router и Redux Toolkit.',
    language: 'JavaScript, HTML, CSS, React, Redux Toolkit, Router',
  },
];
