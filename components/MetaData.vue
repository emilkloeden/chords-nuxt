<script>
    export default {
        props: {
            tabAuthor: String,
            tabAuthorUrl: String, 
            originalUrl: String, 
            capoFret: Number
        }
    }
</script>

<template>
<div class="metadata">
<p v-if="tabAuthor">
Chords courtesy of <a v-if="tabAuthorUrl" :href="tabAuthorUrl">{{tabAuthor}}</a>
<span v-else>{{tabAuthor}}</span></p>
<p v-if="originalUrl">Original URL: <a :href="originalUrl" target="_balnk">{{originalUrl}}</a></p>
<div v-if="capoFret" class="highlight">Place capo on {{capoFret}}</div>
</div>
</template>

<style>
	.metadata {
		font-size: 0.6rem;
	}

	.highlight {
		color: var(--quaternary-color);
	}
</style>
