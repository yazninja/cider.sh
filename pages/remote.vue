<template>
  <div>
    <div class="flex flex-col items-center px-6 pb-8 pt-24 dark:text-white lg:px-8">
      <h1
        class="text-center text-6xl font-bold leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl xl:text-8xl"
      >
        <div>Cider</div>
        <div class="text-remote-cont">
          <span class="text-remote">R</span>
          <span class="text-remote">e</span>
          <span class="text-remote">m</span>
          <span class="text-remote">o</span>
          <span class="text-remote">t</span>
          <span class="text-remote">e</span>
        </div>
      </h1>
      <br />
      <h2 class="text-center text-2xl font-semibold tracking-tight lg:text-3xl xl:text-4xl">
        <div>B E T A</div>
      </h2>
      <br />
      <img class="w-screen md:w-7/12" src="/remote.png" alt="Cider Remote" />
      <br />
      <p
        class="text-center text-4xl font-bold tracking-tight dark:text-white lg:text-center lg:text-5xl xl:text-6xl"
      >
        Take full control, right from your phone
      </p>
      <p class="mx-auto mt-4 text-center text-xl text-gray-500 lg:max-w-3xl lg:text-xl">
        Written in SwiftUI & Kotlin, Remote is a native iOS & Android app that allows you to
        seamlessly control your Cider instance without any interruptions or delays. With its
        user-friendly interface, you can effortlessly manage playback and enjoy an unparalleled
        experience with speed and precision.
      </p>
      <br />
      <p class="text-center text-sm text-gray-500">
        * Requires Cider v2.2.0 or later, and a device running iOS 14.0 or later, or Android 5.0 or
        later.
      </p>
      <p class="text-center text-sm text-gray-500">
        * Cider Remote is currently in beta, and may contain bugs or issues. Please report any
        problems you encounter.
      </p>
      <br />
      <NuxtLink to="https://testflight.apple.com/join/bI48Y8FL">
        <button class="btn bg-none">Get from TestFlight</button>
      </NuxtLink>
      <NuxtLink to="https://cdn.cider.sh/cider-remote-0.3.0-b2.apk">
        <button class="btn bg-none">Download APK</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Remote",
    description:
      "Take full control of your Cider instance with Remote, a native iOS & Android app.",
    ogDescription:
      "Take full control of your Cider instance with Remote, a native iOS & Android app.",
    ogImage: "/client-images/remote.png",
    ogUrl: "https://cider.sh/remote",
  });
</script>

<style scoped lang="scss">
  .text-remote-cont {
    background: linear-gradient(90deg, rgb(255 38 84 / var(--tw-text-opacity)), #a4158d);
    background-clip: text;
    -webkit-background-clip: text;
    display: flex;
    transition: all 0.5s ease-in-out;
    gap: 1px;
    padding: 0 5px;
  }
  @media (min-width: 640px) {
    .text-remote-cont:hover {
      gap: 20px;
    }
  }

  .text-remote {
    -webkit-text-fill-color: transparent;
    color: transparent;
    user-select: none;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 640px) {
    th:nth-last-child(-n + 2),
    td:nth-last-child(-n + 2) {
      display: none;
    }
  }
</style>
