import {renderImages} from './render-image.js';
import {renderFileUpload} from './upload-image.js';
import {getData} from './api.js';

getData(renderImages);
renderFileUpload();
