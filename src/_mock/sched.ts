import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

// const POST_TITLES = [
//   'Whiteboard Templates By Industry Leaders',
//   'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
//   'Designify Agency Landing Page Design',
//   '✨What is Done is Done ✨',
//   'Fresh Prince',
//   'Six Socks Studio',
//   'vincenzo de cotiis’ crossing over showcases a research on contamination',
//   'Simple, Great Looking Animations in Your Project | Video Tutorial',
//   '40 Free Serif Fonts for Digital Designers',
//   'Examining the Evolution of the Typical Web Design Client',
//   'Katie Griffin loves making that homey art',
//   'The American Dream retold through mid-century railroad graphics',
//   'Illustration System Design',
//   'CarZio-Delivery Driver App SignIn/SignUp',
//   'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
//   'Tylko Organise effortlessly -3D & Motion Design',
//   'RAYO ?? A expanded visual arts festival identity',
//   'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
//   'Inside the Mind of Samuel date',
// /11/2023   'Portfolio Review: Is This Portfolio Too Creative?',
//   'Akkers van Margraten',
//   'Gradient Ticket icon',
//   'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
//   'How to Animate a SVG with border-image',
// ];

export const SCHEDULES = [
  {
    id: faker.string.uuid(),
    weekday: 'Domingo',
    eventType: 'Culto Solene',
    sched: [
      {
        id: faker.string.uuid(),
        date: '05/11/2023',
        conducting: 'Pb. João',
        preacher: 'Pr. Belmondo',
        tags: ['Santa ceia'],
      },
      {
        id: faker.string.uuid(),
        date: '12/11/2023',
        conducting: 'Dc. Elielson',
        preacher: 'Pr. Belmondo',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '19/11/2023',
        conducting: 'Pr. Belmondo',
        preacher: 'Sem. Alesson',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '26/11/2023',
        conducting: 'Pr. Belmondo',
        preacher: 'Sem. Alesson',
        tags: [],
      },
    ],
  },
  {
    id: faker.string.uuid(),
    weekday: 'Domingo',
    eventType: 'Escola Biblica Dominical',
    sched: [
      {
        id: faker.string.uuid(),
        date: '05/11/2023',
        conducting: 'Ir. Juliana',
        preacher: 'Pb. Sandro',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '12/11/2023',
        conducting: 'Pr. Sandro',
        preacher: 'Miss. Betânia',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '19/11/2023',
        conducting: 'Ir. Juliana',
        preacher: 'Pb. Sandro',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '26/11/2023',
        conducting: 'Pr. Sandro',
        preacher: 'Miss. Betânia',
        tags: [],
      },
    ],
  },
  {
    id: faker.string.uuid(),
    weekday: 'Terça-Feira',
    eventType: 'Doutrina & Oração',
    sched: [
      {
        id: faker.string.uuid(),
        date: '07/11/2023',
        conducting: 'Pr. Belmondo',
        preacher: 'Pr. Abimael',
        tags: ['Reforma'],
      },
      {
        id: faker.string.uuid(),
        date: '14/11/2023',
        conducting: 'Pr. Belmondo',
        preacher: 'Pr. Aurivan',
        tags: ['Reforma'],
      },
      {
        id: faker.string.uuid(),
        date: '21/11/2023',
        conducting: 'Pr. Belmondo',
        preacher: 'Pr. Melancia',
        tags: ['Reforma'],
      },
      {
        id: faker.string.uuid(),
        date: '28/11/2023',
        conducting: 'Pr. Belmondo',
        preacher: 'Pr. Jonathan',
        tags: ['Reforma'],
      },
    ],
  },
  {
    id: faker.string.uuid(),
    weekday: 'Quarta-Feira',
    eventType: 'Círculo de oração',
    sched: [
      {
        id: faker.string.uuid(),
        date: '01/11/2023',
        conducting: 'Ir. Edineide',
        preacher: 'Dc. Marcolino',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '08/11/2023',
        conducting: 'Ir. Edineide',
        preacher: 'Pr. João',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '14/11/2023',
        conducting: 'Ir. Edineide',
        preacher: 'Ir. Celina',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '22/11/2023',
        conducting: 'Ir. Edineide',
        preacher: 'Ir. Edineide',
        tags: [],
      },
      {
        id: faker.string.uuid(),
        date: '29/11/2023',
        conducting: 'Ir. Edineide',
        preacher: 'Pr. Belmondo',
        tags: [],
      },
    ],
  },
];

// export const sched = [...Array(23)].map((_, index) => ({
//   id: faker.string.uuid(),
//   cover: `/assets/images/covers/cover_${index + 1}.jpg`,
//   title: POST_TITLES[index + 1],
//   createdAt: faker.date.past(),
//   view: faker.number.int(99999),
//   comment: faker.number.int(99999),
//   share: faker.number.int(99999),
//   favorite: faker.number.int(99999),
//   author: {
//     name: faker.person.fullName(),
//     avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   },
// }));