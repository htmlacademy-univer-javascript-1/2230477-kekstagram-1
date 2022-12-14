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

const createComment = (commentId) => ({
  id: commentId,
  avatar:  `img/avatar-${randomNum(1, 6)}.svg`,
  message: MESSAGES[randomNum(1, MESSAGES.length - 1)],
  name: NAMES[randomNum(1, NAMES.length - 1)]
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
