import { v4 as generateId } from 'uuid';
const projects = [
  {
    id: generateId(),
    title: 'AQI Africa',
    description:
      'This is a simple web application that consumes the open weather API targeting specifically the air pollution data. This is live data from all major cities in all African countries.',
    image:
      'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/12/1355682/6b9bcf2814aaf8b114e264e8a5019122-original.png',

    technologies: ['React', 'Redux', 'tailwindCSS', 'Javascript'],
    github: 'https://github.com/John-Kibirige/aqi-africa',
    liveLink: 'https://luxury-begonia-7d2330.netlify.app/',
  },

  {
    id: generateId(),
    title: 'Space Travelers Hub',
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    image:
      'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/6e/1355680/2ca2a76e7b120f664b4cfe8f4e8a347e-original.png',
    technologies: ['React', 'Redux', 'SASS', 'Javascript'],
    github: 'https://github.com/muskan2532150/Space-Travelers-Hub',
    liveLink: 'https://muskan2532150.github.io/Space-Travelers-Hub/',
  },
  {
    id: generateId(),
    title: 'Tic Tac Toe',
    description:
      'This is a tic tac toe game. It is set to be multiple players for now with additions soon to be made such that one is able to play with the computer.',
    image:
      'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/4e/1355688/66ed165685c5ed166f68e47caf9440e2-original.png',
    technologies: ['React', 'Javascript', 'SAAS'],
    github: 'https://github.com/John-Kibirige/tic-tac-toe',
    liveLink: 'https://john-kibirige.github.io/tic-tac-toe/',
  },
  {
    id: generateId(),
    title: 'Mental Health Global Summit',
    description:
      'This is a capstone project for the HTML and CSS Module at Microverse. It is a basic conference website with two pages, mainly the home page and the about page.',
    image: 'https://i.postimg.cc/XJHBWhhs/mental-health-summit.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/John-Kibirige/capstone-one',
    liveLink: 'https://john-kibirige.github.io/capstone-one/',
  },
  {
    id: generateId(),
    title: 'Awesome Books',
    description:
      'A basic website that allows users to add and remove books from a list. The book app stores all the added books to Local storage so that they can persist when the user closes the app',
    image: 'https://i.postimg.cc/NGGf7pV0/awesome-Books.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://john-kibirige.github.io/awesome-books/',
    github: 'https://github.com/John-Kibirige/awesome-books',
  },
  {
    id: generateId(),
    title: 'Todo List App',
    description:
      'This is a simple todo list app to help you plan and manage your time effectively, by writing down all the tasks that you have in a given day',
    image: 'https://i.postimg.cc/wvjMv2Y3/todo-list.png',
    technologies: ['HTML', 'SASS', 'Javascript'],
    github: 'https://github.com/John-Kibirige/copy-to-do-list',
    liveLink: 'https://john-kibirige.github.io/to-do-list/',
  },
];

export default projects;
