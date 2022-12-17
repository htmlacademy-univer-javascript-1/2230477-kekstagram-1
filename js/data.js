import {randomNum} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Сергей', 'Мария', 'Иван', 'Аиша', 'Алексей', 'Артем', 'Полина', 'Дарья', 'Юрий'];

const DESCRIPTIONS = ['Ну я', 'Я', 'Это я', 'Ну как я вам'];

export const EFFECTS = [
  'none', 'effects__preview--sepia', 'effects__preview--marvin',
  'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--chrome',
];

export const EFFECT_OPTIONS = {
  'sepia': {
    'noui': {
      range: {
        'min':0,
        'max':1,
      },
      step:0.1,
      format: {
        from: (value) => parseFloat(value).toFixed(1),
        to: (value) => value,
      },
      start:1
    },
    filter: (value) => `sepia(${value})`
  },

  'chrome': {
    'noui': {
      range: {
        'min':0,
        'max':1,
      },
      step:0.1,
      format: {
        from: (value) => parseFloat(value).toFixed(1),
        to: (value) => value,
      },
      start:1
    },
    filter: (value) => `grayscale(${value})`
  },

  'marvin': {
    'noui': {
      range: {
        'min':0,
        'max':100,
      },
      step:1,
      format: {
        from: (value) => parseInt(value,10),
        to: (value) => `${value}%`,
      },
      start:100
    },
    filter: (value) => `invert(${value})`
  },

  'phobos': {
    'noui': {
      range: {
        'min':0,
        'max':3,
      },
      step: 0.1,
      format: {
        from: (value) => parseFloat(value).toFixed(1),
        to: (value) => `${parseFloat(value).toFixed(1)}px`,
      },
      start: 3
    },
    filter: (value) => `blur(${value})`
  },
  'heat': {
    'noui': {
      range: {
        'min':1,
        'max':3,
      },
      step: 0.1,
      format: {
        from: (value) => parseFloat(value).toFixed(1),
        to: (value) => value,
      },
      start:3
    },
    filter: (value) => `brightness(${value})`
  },
};

const createComment = (commentId) => ({
  id: commentId,
  avatar:  `img/avatar-${randomNum(1, 6)}.svg`,
  message: MESSAGES[randomNum(0, MESSAGES.length - 1)],
  name: NAMES[randomNum(0, NAMES.length - 1)]
});

const generateComments = (commentsNum) => {
  const comments = [];
  for (let i = 1; i <= commentsNum; i++) {
    comments.push(createComment(randomNum(1, 1000000)));
  }
  return comments;
};

const createPost = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[randomNum(1, DESCRIPTIONS.length - 1)],
  likes: randomNum(15, 200),
  comments: generateComments(randomNum(1, 10))
});

export const generatePosts = () => {
  const posts = [];
  for (let i = 1; i <= 25; i++) {
    posts.push(createPost(i));
  }
  return posts;
};
