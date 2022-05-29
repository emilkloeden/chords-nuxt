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
    <span v-for="chord in chordifyLine(line)">{{ ' '.repeat(chord.precedingSpaces) }}<span class="chord" :data-finger-positioning="getKnownChords().get(chord.chord)">{{ chord.chord }}</span></span>
</template>

<style>
.chord {
    /* font-size: 3rem; */
    color: var(--primary-color);
    font-weight: bold;

    position: relative;
    /* /* border-bottom: 1px dashed var(--primary-color); */
}

.chord:before {
    content: attr(data-finger-positioning);
    position: absolute;
    transform: translateY(-50%);

    z-index: 10;

    width: 100px;
    padding: 10px;
    border-radius: 20px;
    background: var(--primary-color);
    color: var(--secondary-color);
    text-align: center;
    font-size: 0.6rem;

    opacity: 0;
    transition: 0.3s opacity;
}

.chord:hover:before {
    opacity: 0.9;
}
</style>
