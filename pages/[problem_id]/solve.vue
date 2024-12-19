<script setup lang="ts">
const code = ref("")
const options = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}
</script>

<template>
    <div class="level is-mobile">
      <div class="level-item content">
        <h1>문제 영역</h1>
      </div>
      <div class="level-item" style="min-height: 30em">
        <ClientOnly>
          <VueMonacoEditor
              theme="vs-dark"
              v-model="code"
              language="javascript"
              :options="options"
              lang="ko"
              height="50em"
              width="50em"
          />
        </ClientOnly>
      </div>
    </div>
</template>

<style scoped>

</style>