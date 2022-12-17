import {generatePosts} from './data.js';
import {generateImage} from './render-image.js';
import {renderFileUpload} from './upload-image.js';

generateImage(generatePosts());
renderFileUpload();
