import { Application } from 'https://cdn.jsdelivr.net/npm/@splinetool/runtime@0.9.82/dist/runtime.js';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

app.load('https://prod.spline.design/Z2r7lh4b64Zj9kRm/scene.splinecode').then(() => {
    console.log('Scene loaded successfully');
}).catch((error) => {
    console.error('Error loading scene:', error);
});
