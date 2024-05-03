<template>
  <UiContainer class="pb-10">
    <UiContainer class="py-16 text-center lg:py-24">
      <slot name="headline">
        <p v-if="headline" class="font-semibold text-primary">{{ headline }}</p>
      </slot>
      <slot name="title">
        <h2 class="mb-4 mt-2 text-4xl font-bold lg:mb-6 lg:mt-3 lg:text-5xl">{{ title }}</h2>
      </slot>
      <slot name="description">
        <p class="mx-auto max-w-[768px] text-lg text-muted-foreground lg:text-xl">
          {{ description }}
        </p>
      </slot>
      <div class="mt-5 flex w-full flex-col-reverse justify-center gap-3 lg:w-auto lg:flex-row">
        <slot />
      </div>
    </UiContainer>
    <section class="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-10">
      <template v-for="member in members" :key="member.name">
        <div class="flex w-44 flex-col items-center">
          <UiAvatar
            class="mb-5 h-24 w-24 shadow-2xl shadow-primary/20 transition-all hover:shadow-primary"
            :src="member.avatar"
          />
          <p class="text-lg font-semibold">{{ member.name }}</p>
          <p class="text-primary">{{ member.role }}</p>
          <div class="mt-2 flex gap-2">
            <NuxtLink :to="member.github" v-if="member.github">
              <Icon name="mdi:github" class="h-6 w-6 transform-gpu hover:scale-110" />
            </NuxtLink>
            <NuxtLink :to="member.twitter" v-if="member.twitter">
              <Icon name="mdi:twitter" class="h-6 w-6 transform-gpu hover:scale-110" />
            </NuxtLink>
            <NuxtLink :to="`mailto:${member.email}`" v-if="member.email">
              <Icon name="mdi:email" class="h-6 w-6 transform-gpu hover:scale-110" />
            </NuxtLink>
          </div>
        </div>
      </template>

      <!-- <template v-for="member in members" :key="member.name">
        <div class="flex w-44 flex-col items-center">
          <UiAvatar class="mb-5 h-24 w-24 ring-1 ring-ring/20" :src="member.avatar" />
          <p class="text-lg font-semibold">{{ member.name }}</p>
          <p class="text-primary">{{ member.role }}</p>
          <div class="mt-2 flex gap-2">
            <NuxtLink :to="member.github" v-if="member.github">
              <Icon name="mdi:github" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink :to="member.twitter" v-if="member.twitter">
              <Icon name="mdi:twitter" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink :to="`mailto:${member.email}`" v-if="member.email">
              <Icon name="mdi:email" class="h-5 w-5" />
            </NuxtLink>
          </div>
        </div>
      </template> -->
    </section>
    <section class="pt-20">
      <p class="mb-8 text-center text-lg text-muted-foreground">
        We also want to give special thanks to our contributors in Github.
      </p>
      <NuxtLink to="https://github.com/ciderapp/cider/graphs/contributors" target="_blank">
        <img src="https://contrib.rocks/image?repo=ciderapp/cider&columns=20" />
      </NuxtLink>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
  <template>
  <UiContainer class="py-16 lg:py-24">
    <div class="mx-auto max-w-[760px]">
      <div class="text-center">
        <UiBadge variant="outline" class="gap-2 px-3 py-1.5 text-sm font-normal"
          ><Icon name="material-symbols:nest-remote" class="h-4 w-4 text-primary" />Remote</UiBadge
        >
      </div>
      <h2 class="mb-4 mt-3 text-center text-3xl font-semibold lg:mb-5 lg:mt-7 lg:text-4xl">
        Take full control, right from your phone
      </h2>
      <p class="mx-auto max-w-[760px] text-center text-lg text-muted-foreground lg:text-xl">
        Native UI for iOS & Android. Seamlessly control your Cider Instances without interruptions
        or delays.
      </p>
      <div class="mt-8 flex justify-center gap-8">
        <NuxtLink to="https://testflight.apple.com/join/bI48Y8FL">
          <UiButton variant="outline">
            <Icon name="logos:apple-app-store" />
            Get from TestFlight
          </UiButton>
        </NuxtLink>
        <NuxtLink to="https://cdn.cider.sh/cider-remote-0.3.0-b2.apk">
          <UiButton variant="outline">
            <Icon name="logos:android-icon" />
            Download APK
          </UiButton>
        </NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-y-12 py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:py-20">
      <div class="flex flex-col gap-10 lg:gap-12">
        <template v-for="(f, i) in features1" :key="i">
          <div class="group flex flex-col">
            <div class="flex h-12 w-12 items-center justify-center rounded-md border">
              <Icon
                :name="f.icon"
                class="h-5 w-5 transition-colors group-hover:text-primary lg:h-6 lg:w-6"
              />
            </div>
            <h3
              class="mt-4 text-balance text-lg font-semibold lg:mt-5 lg:text-xl"
              v-text="f.title"
            />
            <p class="mt-1 text-balance text-muted-foreground lg:mt-2" v-text="f.description" />
          </div>
        </template>
      </div>
      <div class="order-last col-span-full lg:order-none lg:col-span-1">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img
          src="/remote.png"
          alt="Features section nine image"
          class="mx-auto h-[360px] w-[400px] object-cover object-top lg:h-[640px] lg:w-full lg:object-contain"
        />
      </div>
      <div class="flex flex-col gap-10 lg:gap-12">
        <template v-for="(f, i) in features2" :key="i">
          <div class="group flex flex-col">
            <div class="flex h-12 w-12 items-center justify-center rounded-md border">
              <Icon
                :name="f.icon"
                class="h-5 w-5 transition-colors group-hover:text-primary lg:h-6 lg:w-6"
              />
            </div>
            <h3
              class="mt-4 text-balance text-lg font-semibold lg:mt-5 lg:text-xl"
              v-text="f.title"
            />
            <p class="mt-1 text-balance text-muted-foreground lg:mt-2" v-text="f.description" />
          </div>
        </template>
      </div>
    </div>
    <div>
      <p class="text-center text-sm text-gray-500">
        * Requires Cider v2.2.0 or later, and a device running iOS 14.0 or later, or Android 5.0 or
        later.
      </p>
      <p class="text-center text-sm text-gray-500">
        * Cider Remote is currently in beta, and may contain bugs or issues. Please report any
        problems you encounter.
      </p>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  definePageMeta({ title: "About Us" });
  useSeoMeta({
    title: "About Us",
    description:
      "Get to know the team behind Cider, a group of passionate developers dedicated to making the best experience for Apple Music on every platform.",
    ogDescription:
      "Get to know the team behind Cider, a group of passionate developers dedicated to making the best experience for Apple Music on every platform.",
    ogUrl: "https://cider.sh/about",
  });
  const features1 = [
    {
      icon: "heroicons:puzzle-piece-solid",
      title: "Native UI",
      description:
        "Leverage the power and performance of native UI for iOS and Android. Writing natively allows for a more seamless experience and a cohesive design language.",
    },
    {
      icon: "heroicons:rectangle-group-solid",
      title: "Multi-instance support",
      description:
        "Have multiple Cider instances? No problem. Remote allows you to switch between instances with ease, so you can control all your music from one place.",
      link: { text: "Learn more", url: "#" },
    },
  ];
  const features2 = [
    {
      icon: "heroicons:adjustments-horizontal",
      title: "Real-time control",
      description: `No more delays or interruptions. With Remote, you can control your Cider instance with speed and precision, right from your phone.`,
    },
    {
      icon: "heroicons:bolt",
      title: "Many MANY more planned features",
      description:
        "We're constantly working on new features and improvements for Remote. Stay tuned for updates and new releases.",
    },
  ];
</script>


  const headline = "About Us";
  const title = "Meet the Team";
  const description =
    "The Cider team is a group of passionate developers who are dedicated to making the best experience for Apple Music on every platform";

  const sponsors = [
    { text: "Jetbrains", icon: "logos:jetbrains" },
    {
      text: "MacStadium",
      icon: "MacStadiumLogo",
    },
    { text: "Company Three", icon: "logos:airbnb" },
    { text: "Company Four", icon: "logos:akamai" },
  ];
  interface CollectiveMember {
    name: string;
    github?: string;
    role?: string;
    roles?: string[];
    projects?: string[];
    avatar?: string;
    twitter?: string;
    email?: string;
    quote?: string;
    color?: string;
    songId?: string;
    songTimestamp?: number;
  }

  const members: CollectiveMember[] = [
    {
      name: "cryptofyre",
      github: "https://github.com/cryptofyre",
      role: "FOUNDER",
      roles: [
        "Founder",
        "Development Lead",
        "Apple Music Electron Veteran",
        "Cider 1.x Lead",
        "Cider 2.x Lead",
      ],
      projects: ["ame", "cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/33162551?v=4",
      twitter: "https://twitter.com/cryptofyre",
      email: "cryptofyre@cider.sh",
      quote: `Void the premonition, take action within oneself.`,
      color: "#CD001A",
      songId: "1608897620",
    },
    {
      name: "Core",
      github: "https://github.com/coredev-uk",
      role: "LEAD DEVELOPER",
      roles: [],
      projects: ["ame", "cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/64542347?v=4",
      twitter: "https://twitter.com/core_hdd",
      email: "core@cider.sh",
      quote: "Apple who?",
      color: "#fe5433",
      songId: "1649798129",
      songTimestamp: 98,
    },
    {
      name: "Quacksire",
      github: "https://github.com/quacksire",
      role: "DEVELOPER",
      roles: [],
      projects: ["ame", "cider-1", "cider-2", "connect"],
      avatar: "https://avatars.githubusercontent.com/u/19170969?v=4",
      twitter: "https://twitter.com/duckdoquack",
      email: "quacksire@cider.sh",
      quote: `idk`,
      color: "rgb(100,149,237)",
      songId: "1482041827",
    },
    {
      name: "booploops",
      github: "https://github.com/booploops",
      role: "LEAD DEVELOPER",
      roles: [],
      projects: ["ame", "cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/49113086?v=4",
      twitter: "https://twitter.com/boopl00ps",
      email: "booploops@cider.sh",
      color: "#4032a8",
      songId: "1692195758",
      songTimestamp: 40,
    },
    {
      name: "vapormusic",
      github: "https://github.com/vapormusic",
      role: "DEVELOPER",
      roles: [],
      projects: ["ame", "cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/27716185?v=4",
      quote: `eh`,
      color: "#000000",
      songId: "1440838060",
    },
    {
      name: "Maikiwi",
      github: "https://github.com/maikirakiwi",
      role: "LEAD DEVELOPER",
      roles: [],
      projects: ["cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/74925636?v=4",
      twitter: "https://twitter.com/notmaikiwi",
      quote: `I cook black magic for your ears.`,
      email: "maikiwi@cider.sh",
      color: "#46647d",
      songId: "1585332602",
    },
    {
      name: "yazninja",
      github: "https://github.com/yazninja",
      role: "LEAD DEVELOPER",
      roles: [],
      projects: ["cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/71800112?v=4",
      twitter: "https://twitter.com/YazNinjaa",
      email: "yazninja@cider.sh",
      quote: `appl-ifying everything I use. It is more a disease than a hobby.`,
      songId: "452373171",
      songTimestamp: 24,
      color: "#d6aa68",
    },
    {
      name: "GamingLiamStudios",
      github: "https://github.com/GamingLiamStudios",
      role: "DEVELOPER",
      roles: [],
      projects: ["cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/58615717?v=4",
      twitter: "https://twitter.com/GLStudios_",
      email: "gls@cider.sh",
      quote: `you like jazz?`,
      songId: "1673536432",
      songTimestamp: 106,
    },
    {
      name: "Amaru",
      github: "https://github.com/Amaru8",
      role: "DEVELOPER",
      roles: [],
      projects: ["cider-1", "cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/52407090?v=4",
    },
    {
      name: "lockieluke",
      github: "https://github.com/lockieluke",
      role: "LEAD DEVELOPER",
      roles: [],
      projects: ["cider-1", "cider-2", "cider-macos"],
      avatar: "https://avatars.githubusercontent.com/u/25424409?v=4",
      quote: `mum i did it!`,
      color: "rgb(110, 204, 175)",
      songId: "1122773680",
      songTimestamp: 69,
    },
    {
      name: "d3rpp",
      github: "https://github.com/d3rpp",
      role: "LEAD DEVELOPER",
      roles: [],
      projects: ["cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/45675641?v=4",
      twitter: "https://twitter.com/d3rpp_dev",
      email: "d3rpp@cider.sh",
      quote: "look mum, I'm in the credits!",
      color: "#212121",
      songId: "1590796506",
    },
    {
      name: "Swiftzerr",
      github: "https://github.com/Swiftzerr",
      role: "DEVELOPER",
      roles: [],
      projects: ["cider-2", "connect"],
      avatar: "https://avatars.githubusercontent.com/u/67812203?v=4",
      twitter: "https://twitter.com/swiftzerr",
      quote: `Does the spotify stuff`,
      color: "rgb(200, 162, 200)",
      songId: "302987569",
    },
    {
      name: "Numinous",
      github: "https://github.com/StupeFied",
      role: "DEVELOPER",
      roles: [],
      projects: ["cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/89881655?v=4",
      twitter: "https://twitter.com/personwhoisran",
      quote: `Like a sailor seeing the shore disappear, I watch my past recede, reduced to the ashes of memory.`,
      color: "rgb(41, 181, 219)",
      songId: "1591640885",
    },
    {
      name: "Monochromish",
      github: "https://github.com/Monochromish",
      role: "DEVELOPER",
      roles: [],
      projects: ["cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/79590499?v=4",
      twitter: "https://twitter.com/MonochromishDev",
      email: "monochromish@cider.sh",
      quote: `dithered emotions`,
      color: "#211657",
      songId: "1215409141",
    },
    {
      name: "SoNothing",
      github: "https://github.com/SoNothingMC",
      role: "DEVELOPER",
      roles: [],
      projects: ["cider-2"],
      avatar: "https://avatars.githubusercontent.com/u/32032824?v=4",
      twitter: "https://twitter.com/SoNotng",
      email: "sonothing@cider.sh",
      quote: `bigrat.monster`,
      color: "#211657",
      songId: "1704786170",
    },
  ];
</script>
