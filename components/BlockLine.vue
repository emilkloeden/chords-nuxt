<script>
import { chordifyLine, getKnownChords } from '@emilkloeden/chordify';
export default {
    props: {
        line: String
    },
    methods: {
        chordifyLine, getKnownChords
    }
}

</script>

<template>
    <span class="block" v-text="line" />
</template>

<style>
span.block {
    color: var(--tertiary-color);
    font-size: 0.7rem;
    font-style: italic;
}
</style>
