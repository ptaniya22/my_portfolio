import html from './assets/images/skills/html.svg';
import css from './assets/images/skills/css.svg';
import sass from './assets/images/skills/sass.svg';
import js from './assets/images/skills/js.svg';
import react from './assets/images/skills/react.svg';
import router from './assets/images/skills/react-router.svg';
import redux from './assets/images/skills/redux.svg';
import query from './assets/images/skills/react-query.svg';
import zustand from './assets/images/skills/zustand.png';
import typeScript from './assets/images/skills/typescript.svg';

export default [
  {
    id: 1,
    name: 'HTML',
    img: html,
    percent: '80%',
    // branch: null,
  },
  {
    id: 2,
    name: 'CSS',
    img: css,
    percent: '80%',
    branch: [
      {
        id: 1,
        name: 'Sass',
        img: sass,
        percent: '50%',
      },
    ],
  },
  {
    id: 3,
    name: 'Java Script',
    img: js,
    percent: '80%',
    // branch: null,
  },
  {
    id: 4,
    name: 'React',
    img: react,
    percent: '70%',
    branch: [
      {
        id: 1,
        name: 'React Router',
        img: router,
        percent: '70%',
      },
      {
        id: 2,
        name: 'Redux Toolkit',
        img: redux,
        percent: '60%',
      },
      {
        id: 3,
        name: 'React Query',
        img: query,
        percent: '40%',
      },
      {
        id: 4,
        name: 'Zustand',
        img: zustand,
        percent: '40%',
      },
    ],
  },
  {
    id: 5,
    name: 'Type Script',
    img: typeScript,
    percent: '40%',
  },
];
