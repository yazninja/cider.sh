<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup lang="ts">
  const route = useRoute();
  useHead({
    meta: [
      { property: "og:title", content: `${route.meta.title} - Cider Collective` },
      { property: "twitter:title", content: `${route.meta.title} - Cider Collective` },
    ],
  });
</script>
