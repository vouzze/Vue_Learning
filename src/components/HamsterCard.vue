<script setup>

defineProps({
    hamster: Object,
})
</script>

<template>
    <div @mouseenter="$emit('hamster-hover', hamster?.id)" @mouseleave="$emit('hamster-hover', hamster?.id)" class="hamster-card">
        <h2>{{ hamster?.name }}</h2>
        <p><b>Special Ability:</b> {{ hamster?.specialAbility }}</p>
        <img class="hamster" :src="hamster?.photo" :alt="hamster?.name">
    </div>
</template>

<style scoped>
.hamster {
    height: 150px;
    width: 150px;
    object-fit: contain;
}

.hamster-card {
    width: 200px;
    height: 300px;
    padding: 1em 2em;
    border-radius: .5em;
    list-style: none;
    background: rgba(255, 255, 255, 0.043);
}
</style>
