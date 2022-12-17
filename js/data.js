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

export const errorPhotos = Array.from({length:25}).map((value, index) => ({
  id: index + 1,
  url: 'photos/error.jpg',
  description: 'Ошибка загрузки фотографии',
  likes: '-',
  comments: []
}));

