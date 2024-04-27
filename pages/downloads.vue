<template>
  <UiContainer class="relative py-16 lg:py-24">
    <div class="max-w-[760px]">
      <p class="font-semibold text-primary">Downloads</p>
      <h2 class="mb-4 mt-3 text-3xl font-semibold lg:mb-5 lg:text-4xl">
        Simple, transparent pricing
      </h2>
      <p class="text-lg text-muted-foreground lg:text-xl">
        We believe Cider should be accessible to all companies, no matter the size.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-y-10 py-10 lg:grid-cols-3 lg:gap-8 lg:gap-y-12 lg:py-20">
      <template v-for="(p, i) in prices" :key="i">
        <UiCard
          class="overflow-hidden"
          :class="[i == prices.length - 2 ? 'border-primary shadow-lg' : '']"
        >
          <UiCardContent class="flex w-full flex-col items-center">
            <!-- <h3 class="text-4xl/loose font-semibold lg:text-5xl/snug">${{ p.price }}/mth</h3> -->
            <h3 class="text-4xl/loose font-semibold lg:text-5xl/snug">{{ p.title }}</h3>
            <p class="mt-2 text-muted-foreground">{{ p.subtitle }}</p>

            <ul class="flex w-full flex-col items-center gap-4 px-5 py-8 lg:items-start">
              <li v-for="(perk, k) in p.perks" :key="k" class="flex items-center gap-3">
                <Icon
                  name="solar:check-circle-bold-duotone"
                  class="h-6 w-6 shrink-0 text-green-500"
                />
                <span class="opacity-80">{{ perk }}</span>
              </li>
            </ul>
          </UiCardContent>
          <UiCardFooter class="flex-col gap-3">
            <UiButton class="w-full"> Get started </UiButton>
            <UiButton variant="outline" class="w-full"> Contact sales </UiButton>
          </UiCardFooter>
        </UiCard>
      </template>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  const prices = [
    {
      icon: "heroicons:bolt",
      title: "Cider Classic",
      subtitle: "[DEPRECATED]",
      price: 10,
      perks: ["Free and open-source", "Community Plugins", "Community Themes"],
    },
    {
      icon: "heroicons:bolt",
      title: "Cider",
      price: 20,
      perks: [
        "Discord, Spotify, Last.FM Integrations",
        "Audio Enhancement (Cider Audio)",
        "Cider Remote Support",
        "Blazingly Fast",
        "Tons of Customization Options",
        "Community Plugins",
        "Community Themes",
      ],
    },
    {
      icon: "heroicons:bolt",
      title: "Cider Nightly",
      subtitle: "For those daring to live on the edge. Includes early access to new features",
      price: 40,
      perks: ["All features in Cider", "Early access to new features"],
    },
  ];
</script>
