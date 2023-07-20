<script setup>
import { inject, onMounted, onUnmounted, onBeforeMount } from 'vue';
const props = defineProps(['hamsterValue'])
const { updateHamsterValue } = inject('hamsterValue', () => { })
onBeforeMount(() => console.log("HamsterButton before mount"))
onMounted(() => console.log("HamsterButton after mount"))
onUnmounted(() => console.log("HamsterButton after unmount"))
</script>
<template>
    <button @click="() => updateHamsterValue(hamsterValue)" class="hamster-button">
        <slot message="Love">Meow</slot>
        <slot name="emoji">😻</slot>
    </button>
</template>
<style scoped>
.hamster-button {
    background: linear-gradient(90deg, rgba(255, 174, 203, 1) 0%, rgb(253, 194, 212) 56%, rgb(254, 210, 196) 100%);
    color: rgb(234, 73, 100);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 800;
    border-radius: .5em;
    background-size: 400% 400%;
    background-position: 0%;
    outline: none;
    border: 2px solid rgb(208, 68, 91);
    box-shadow: 0 .2em 0 rgb(243, 137, 154), 0 .4em 0 rgb(193, 227, 249), 0 .5em 0 rgb(248, 218, 130);
    margin: 1em 0;
    animation: background-gradient 3s ease-in-out infinite;
    animation-play-state: paused;
}

.hamster-button:hover {
    animation-play-state: running;
}

.hamster-button:active {
    box-shadow: 0 .1em 0 rgb(243, 137, 154), 0 .3em 0 rgb(193, 227, 249), 0 .4em 0 rgb(248, 218, 130), 0 .5em 0 rgb(255, 174, 203);
    border-color: rgb(243, 137, 154);
}

@keyframes background-gradient {
    0% {
        background-position: 0%;
    }

    50% {
        background-position: 100%;
    }

    100% {
        background-position: 0%;
    }
}
</style>