<template>
  <div>
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- Delete the toast that you don't need -->
    <!-- <UiToastToaster /> -->
    <!-- <UiVueSonner /> -->
    <!-- <UiNotivue /> -->
  </div>
</template>
<script setup lang="ts">
  useSeoMeta({
    title: `Home`,
    titleTemplate: "%s | Cider Collective",
    description:
      "A community-ran and maintained software company focused on creating the best experience for end users. Home of Cider, Connect, Remote.",
    ogDescription:
      "A community-ran and maintained software company focused on creating the best experience for end users. Home of Cider, Connect, Remote.",
    ogImage: "/og.png",
    twitterCard: "summary_large_image",
    twitterSite: "@UseCider",
    ogType: "website",
    ogSiteName: "Cider Collective",
    ogUrl: "https://cider.sh",
    themeColor: "#e83057",
  });
</script>
