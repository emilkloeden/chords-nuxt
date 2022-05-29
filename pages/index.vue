<script setup>
useMeta({
    title: 'Chords - Nuxt!'
})
const config = useRuntimeConfig()
const { data } = await useFetch(`${config.apiUrl}/getAllSongs`)
</script>


<template>
    <header class="header">
        <LogoImage />
        <h1 class="heading2Xl">
            Chords - Nuxt!
        </h1>
    </header>
    <app-description />
    <section class="headingMd padding1px">
        <h2 class="headingLg">Chords</h2>
        <ul class="list">
            <li class="listItem" v-for="song in data.allSongsData">
                <NuxtLink :to="song.path">{{ song.artist }} - {{ song.title }}</NuxtLink>
            </li>
        </ul>
    </section>
</template>

<style>
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
}

.headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
}
</style>