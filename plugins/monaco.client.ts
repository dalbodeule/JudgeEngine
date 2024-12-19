import { install as VueMonacoEditorPlugin, loader } from '@guolao/vue-monaco-editor'
import * as monaco from "monaco-editor"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueMonacoEditorPlugin, {
        monaco: monaco
    })
})
