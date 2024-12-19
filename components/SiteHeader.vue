<script setup lang="ts">
import type { Ref } from "vue";

const show: Ref<boolean> = ref(false)
const router = useRouter()
const { loggedIn, user, session, clear } = useUserSession()

const config = useRuntimeConfig()
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <img src="" alt="">&nbsp; {{ config.public.name }}
      </NuxtLink>
    </div>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="show = !show">
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
    </a>
    <div class="navbar-menu" :class="show ? 'is-active' : ''">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <NuxtLink class="navbar-item" to="/auth/login">로그인</NuxtLink>
      </div>
    </div>
  </nav>
</template>