<script setup>
definePageMeta({
    layout: "artist"
})
const route = useRoute()
const { artist, song: title } = route.params
useHead({
    title: `Chords - Nuxt - ${artist} - ${title}`
})

let url = new URL(`${process.env.API_URL}/getSong`);
url.search = new URLSearchParams({
    artist,
    title
});
const { data } = await useFetch(url)
</script>


<template>
    <NuxtLayout name="artist">
        <h3 style="color: red;">{{ tabAuthor }}</h3>
        <h1 class="headingXl">{{ data.title }}</h1>
        <Song :content="data.content" />
        <!-- <NuxtLink class="lightText" :to="'/' + data.artist">{{ data.artist }}</NuxtLink> -->
    </NuxtLayout>
</template>

<style>
.lightText {
    color: var(--tertiary-color)
}
</style>