<script setup>
    definePageMeta({
        layout: "artist"
    })
    const route = useRoute()
    const { artist, song: title } = route.params
    useHead({
        title: `Chords - Nuxt - ${artist} - ${title}`
    })
    const config = useRuntimeConfig()
    let url = new URL(`${config.apiUrl}/getSong`);
    url.search = new URLSearchParams({
        artist,
        title
    });
    const { data, error, pending } = await useFetch(url)
</script>

<template>
    <NuxtLayout name="artist">
        <Spinner v-if="pending" />
        <Error v-else-if="error" />
        <div v-else>
            <h3 style="color: red;">{{ tabAuthor }}</h3>
            <h1 class="headingXl">{{ data.title }}</h1>
            <MetaData 
                :tabAuthor="data.tabAuthor"
                :tabAuthorUrl="data.tabAuthorUrl"
                :originalUrl="data.originalUrl"
                :capoFret="data.capoFret" />
            <Song :content="data.content" />
            <!-- <NuxtLink class="lightText" :to="'/' + data.artist">{{ data.artist }}</NuxtLink> -->
        </div>
    </NuxtLayout>
</template>

<style>
    .lightText {
        color: var(--tertiary-color)
    }
</style>