<template>
  <header
    class="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container flex h-14 items-center justify-between">
      <div class="flex items-center gap-10">
        <div>
          <a class="flex items-center" href="/">
            <img src="/CC24-transparent.svg" class="h-8 w-8" />
            <span class="hidden font-bold sm:inline-block">Cider Collective</span>
          </a>
        </div>
        <UiNavigationMenu>
          <UiNavigationMenuList>
            <UiNavigationMenuItem>
              <UiNavigationMenuTrigger title="Products" />
              <UiNavigationMenuContent>
                <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    alt="Beach"
                    class="h-full w-full rounded-md object-cover"
                  />
                  <ul class="flex flex-col gap-2">
                    <li
                      v-for="(item, i) in beachAmenities"
                      :key="i"
                      class="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p class="mb-1 font-semibold leading-none text-foreground">
                        {{ item.title }}
                      </p>
                      <p class="line-clamp-2 text-muted-foreground">{{ item.description }}</p>
                    </li>
                  </ul>
                </div>
              </UiNavigationMenuContent>
            </UiNavigationMenuItem>
            <UiNavigationMenuItem>
              <UiNavigationMenuLink asChild>
                <UiButton variant="ghost">Documentation</UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
            <UiNavigationMenuItem>
              <UiNavigationMenuLink asChild>
                <UiButton variant="ghost">Marketplace</UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
          </UiNavigationMenuList>
        </UiNavigationMenu>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="mr-2 hidden h-9 min-w-[300px] items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-normal text-muted-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:flex"
          type="button"
        >
          <Icon name="uil:search" />
          Search...
          <kbd
            class="pointer-events-none ml-auto inline-flex h-6 min-h-[20px] select-none items-center gap-1 rounded-md border border-border bg-muted px-1.5 font-sans text-[11px] font-medium"
          >
            Ctrl+K
          </kbd>
        </button>
        <div class="social-icons flex items-center gap-3">
          <NuxtLink v-for="link in socialLinks" :key="link.url" :to="link.url" target="_blank">
            <Icon :name="link.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
  .social-icons .icon {
    width: auto;
    height: 1.75rem;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
</style>

<script lang="ts" setup>
  const socialLinks = [
    {
      url: "https://github.com/ciderapp/",
      icon: "simple-icons:github",
    },
    {
      url: "https://x.com/useCider",
      icon: "simple-icons:x",
    },

    { url: "https://discord.gg/applemusic", icon: "simple-icons:discord" },
    {
      url: "https://opencollective.com/cider",
      icon: "simple-icons:opencollective",
    },
  ];
  const beachAmenities = [
    {
      title: "Cider Nightly",
      description: "Experimental Cider builds that are exclusively available to our donators",
    },
    {
      title: "Cider Stable",
      description: "Available for Windows, macOS, and Linux!",
    },
    {
      title: "Cider Classic (Deprecated)",
      description: "The original Cider project. No longer in active development",
    },
  ];
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/components/alertdialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/components/hovercard",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/components/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/components/scrollarea",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/components/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/components/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
</script>
