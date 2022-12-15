import {generatePosts} from './data.js';
import {generateImage} from './renderImage.js';
import {renderFileUpload} from './uploadImage.js';

generateImage(generatePosts());
renderFileUpload();
