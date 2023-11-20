<template>
    <div>
      <!-- Ensure the chat is rendered client-side -->
      <client-only>
        <nuxt-facebook-chat :options="options" />
      </client-only>
    </div>
  </template>
  
  <script setup lang="ts">
  import { NuxtFacebookChatOptions } from 'nuxt-facebook-chat';
  
  // Define your chat options
  const options: NuxtFacebookChatOptions = {
    pageId: "123896774150882",  // Your Facebook Page ID
    locale: "en_EN",            // Set the locale for the chat
    themeColor: "#E04040",      // Customize the chat theme color
  };
  </script>