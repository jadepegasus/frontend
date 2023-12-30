import { io } from 'socket.io-client';
import { host } from './env';

// "undefined" means the URL will be computed from the `window.location` object


export const socket = io('https://frontend-social-r1ky.onrender.com');