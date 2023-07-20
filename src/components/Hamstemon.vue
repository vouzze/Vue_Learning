<script setup>
import { onMounted, onUnmounted, onUpdated, ref, toRefs } from 'vue';

const props = defineProps(['pokemon'])
const { photo, name, hp, mp } = toRefs(props?.pokemon)
onMounted(() => {
    console.log(props)
    console.log("Hamstemon mounted")
})
onUpdated(() => {
    console.log("Hamstemon updated")
})
onUnmounted(() => {
    console.log("Hamstemon unmounted")
})
</script>

<template>
    <div class="pokemon-card">
        <img class="pokemon-photo" :src="photo" alt="">
        <h2 class="pokemon-name">{{ name }}</h2>
        <p class="pokemon-stat hp">{{ hp }}</p>
        <p class="pokemon-stat mp">{{ mp }}</p>
    </div>
</template>

<style scoped>
.pokemon-card {
    background: rgba(0, 0, 0, 0.562);
    max-width: 400px;
    border-radius: .5em;
    margin: 0 auto;
    border: 2px solid rgba(137, 137, 137, 0.551);
    box-shadow: 0 .1em 1em rgba(255, 255, 255, 0.086);
    padding: 1em;
    position: relative;
}

.pokemon-photo {
    width: 100%;
    max-height: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: .1em;
}

.pokemon-name {
    font-size: 2em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-shadow: 0 .1em .3em rgba(255, 255, 255, 0.512);
    text-transform: uppercase;
}

.pokemon-stat {
    position: absolute;
    top: 1.5em;
    font-size: 1.5em;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.407);
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hp {
    left: 1.5em;
    color: rgb(188, 255, 88);
}

.mp {
    right: 1.5em;
    color: rgb(130, 200, 240);
}
</style>