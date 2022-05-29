<script setup>
definePageMeta({
    layout: "artist"
})
const route = useRoute()
const { artist } = route.params
useMeta({
    title: `Chords - Nuxt - ${artist}`
})
const config = useRuntimeConfig()
let url = new URL(
    `${config.apiUrl}/getSongsByArtist`
);
url.search = new URLSearchParams({
    artist
});
const { data } = await useFetch(url)
</script>

<template>
    <NuxtLayout name="artist">
        <h1 class="headingXl">{{ artist }}</h1>
        <ul class="list">
            <li class="listItem" v-for="song in data.songs">
                <NuxtLink :to="song.path">{{ song.title }}</NuxtLink>
                <br />
            </li>
        </ul>
    </NuxtLayout>
</template>

<style>
.headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.listItem {
    margin: 0 0 1.25rem;
}
</style>