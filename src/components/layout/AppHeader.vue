<template>
  <header class="h-16 bg-white shadow-sm flex items-center justify-between px-6">
    <!-- Left: Page title placeholder -->
    <div>
      <BaseInput placeholder="Search" />
    </div>

    <!-- Right: User menu -->
    <div class="flex items-center gap-4">
      <!-- Notifications -->
      <button class="relative text-gray-500 hover:text-gray-700 transition">
        <i class="fi fi-rr-bell text-xl"></i>
      </button>

      <!-- Avatar -->
      <div class="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
        <img src="https://i.pravatar.cc/300" alt="avatar" class="w-full h-full object-cover" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { BaseInput } from '../common'
</script>
