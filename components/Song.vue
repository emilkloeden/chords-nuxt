<script>
import { isChordLine, isBlockLine } from '@emilkloeden/chordify';

export default {
    props: {
        content: String
    },
    methods: {
        isChordLine, isBlockLine, isEmpty: (line) => {line.trim() == ""}
    }
}
</script>
<template>
<pre class="song"><span v-for="line in content.split('\n')">
<span v-if="isBlockLine(line)"><BlockLine :line="line" /></span><span v-else-if="isEmpty(line)">HAHHA</span><span v-else-if="isChordLine(line)"><ChordLine :line="line" /></span><span v-else>{{ line }}</span></span></pre>
</template >
<style>
.song {
    font-family: 'Inconsolata', 'Space Mono', monospace;
    font-size: 1rem;
}
</style>