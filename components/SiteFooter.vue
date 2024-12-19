<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <footer class="footer" style="margin-top: 40px;">
    <div class="content has-text-centered">
      <p>{{ config.public.name }} The source code is licensed <a href="https://opensource.org/license/agpl-v3" target="_blank">AGPL-3.0</a></p>
      <p>Copyright 2024. <a href="https://mori.space/">dalbodeule</a> all rights reserved.</p>
      <p>Mail: webmaster@mori.space</p>
      <p>Fax: +82-504-480-6498</p>
    </div>
  </footer>
</template>