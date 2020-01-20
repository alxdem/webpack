import Post from './Post';
import './styles/styles.css';
import json from './assets/json';

const post = new Post('Webpack Post Title');

console.log('Post to string: ', post.toString());
console.log('JSON: ', json);