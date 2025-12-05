<template>
  <aside class="w-64 bg-gray-900 text-gray-200 flex flex-col py-6 px-4 border-r border-gray-800">
    <!-- Logo -->
    <div class="flex items-center gap-3 px-2 mb-8">
      <img src="/favicon.ico" class="w-8 h-8" alt="" />
      <span class="font-semibold text-lg tracking-wide">Pilgrims SaaS</span>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 space-y-1">
      <SidebarLink icon="fi-rr-dashboard" label="Dashboard" to="/" />
      <SidebarLink icon="fi-rr-users" label="Pilgrims" to="/" />
      <SidebarLink icon="fi-rr-building" label="Projects" to="/" />
      <SidebarLink icon="fi-rr-settings" label="Settings" to="/" />
    </nav>

    <!-- Footer -->
    <div class="mt-auto pt-6 border-t border-gray-800">
      <p class="text-sm text-gray-500 px-2">v1.0.0</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SidebarLink from './components/SidebarLink/SidebarLink.vue'
</script>
