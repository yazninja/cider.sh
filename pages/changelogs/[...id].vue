<template>
  <div class="flex flex-col">
    <!-- Main content -->
    <main class="container grid grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
      <!-- Left sidebar with page links -->
      <div
        class="sticky top-14 z-20 hidden h-[calc(100dvh-57px)] border-r text-card-foreground lg:block"
      >
        <UiScrollArea class="h-[calc(100dvh-57px)] bg-background px-2 py-5" orientation="vertical">
          <p class="text-md mb-8 font-semibold">Client Releases</p>
          <DocsNavlink :links="data" />
        </UiScrollArea>
      </div>
      <!-- Page content -->
      <div class="xl:grid xl:grid-cols-[1fr,250px] xl:gap-5">
        <!-- Page content -->
        <div
          class="prose prose-lg prose-rose mx-auto w-full min-w-0 max-w-none py-5 dark:prose-invert lg:prose-base prose-headings:scroll-mt-16 prose-headings:tracking-tight prose-h2:mt-6 prose-h2:border-b prose-h2:pb-3 first:prose-h2:mt-10 prose-a:decoration-primary prose-a:underline-offset-2 hover:prose-a:text-primary prose-pre:text-lg lg:prose-pre:text-base"
        >
          <div v-if="page.image">
            <img
              :src="
                'https://github.com/ciderapp/changes/blob/main/1.client-releases/images/' +
                page.image +
                '?raw=true'
              "
              :alt="page.title"
              class="mb-5 w-full overflow-hidden rounded-md border border-foreground/60 object-cover shadow-lg"
            />
          </div>
          <ContentDoc />
        </div>
        <!-- Table of contents for current page -->
        <aside
          v-if="toc && toc.links.length && toc.links"
          class="sticky top-14 z-20 hidden h-[calc(100dvh-57px)] overflow-y-auto border-l bg-background text-card-foreground xl:block"
        >
          <div class="p-5">
            <p class="mb-5 text-sm font-semibold">Page contents</p>
            <DocsToclink :set-active="setActive" :active-id="activeId" :links="toc.links" />
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import { useActiveScroll } from "vue-use-active-scroll";

  const { toc, navigation, page } = useContent();

  const { data } = await useAsyncData<any>("changelogs", () =>
    queryContent("/changelogs/client-releases").sort({ releaseNo: -1, $numeric: true }).find()
  );

  // const filteredNavigation = computed(() =>
  //   navigation.value
  //     .filter((n: any) => n._path == "/changelogs")[0]
  //     .children.filter((n: any) => n._path == "/changelogs/client-releases")[0]
  //     .children.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // );
  // console.log("FN:", filteredNavigation.value);

  const targets = computed(() =>
    toc.value.links.flatMap(({ id, children = [] }: any) => [
      id,
      ...children.map(({ id }: { id: string }) => id),
    ])
  );

  const { activeId, setActive } = useActiveScroll(targets, {
    replaceHash: true,
    overlayHeight: 80,
  });
</script>
