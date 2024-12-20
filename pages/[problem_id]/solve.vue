<script setup lang="ts">

const code = ref("")
const content = ref("")
const language = ref("c")

const test = async() => {
  content.value = await $fetch("https://raw.githubusercontent.com/JanGuillermo/vue3-markdown-it/refs/heads/master/README.md")
}

onMounted(async() => {
  await test()
})

</script>

<template>
  <div>
    <div class="flex flex-row">
      <select v-model="language">
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="kotlin">Kotlin</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="ruby">Ruby</option>
        <option value="rust">Rust</option>
      </select>
    </div>
    <div class="flex flex-row">
      <section class="flex-1 max-h-[80vh] overflow-y-auto prose" v-html="$mdRenderer.render(content)"/>
      <div class="flex-1">
        <MonacoEditor
          v-model="code"
          v-bind:lang="language"
          :options="{
            theme: 'light',
            showDeprecated: true,
            tabCompletion: 'on',
            colorDecorators: true,
            fontFamily: 'Nanum Gothic Coding',
            fontSize: 14,
          }"
          class="min-h-[80vh]"
          @load="_ => {
            useMonaco()?.editor?.remeasureFonts()
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>