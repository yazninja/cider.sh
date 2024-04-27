<template>
  <UiContainer class="py-4 lg:py-8">
    <p class="mb-8 text-center text-muted-foreground">
      Cider was built using these amazing frameowks and libraries
    </p>
    <div class="flex flex-wrap items-center justify-center gap-5">
      <template v-for="n in companies" :key="n.text">
        <div>
          <span class="sr-only">{{ n.text }}</span>
          <Icon :name="n.icon" class="h-24 w-24" />
        </div>
      </template>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  const companies = [
    { text: "Quasar", icon: "vscode-icons:file-type-quasar" },
    { text: "Vue", icon: "logos:vue" },
    { text: "Socket.io", icon: "logos:socket-io" },
    { text: "Tauri", icon: "logos:tauri" },
    { text: "Electron", icon: "logos:electron" },
  ];
</script>
