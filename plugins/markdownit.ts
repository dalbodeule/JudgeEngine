import { defineNuxtPlugin } from '#app';

import mdit from 'markdown-it';
import mditHighlightjs from 'markdown-it-highlightjs';

export default defineNuxtPlugin(_nuxtApp => {
    const renderer = mdit();
    renderer.use(mditHighlightjs);

    return {
        provide: {
            mdRenderer: renderer
        }
    }
});