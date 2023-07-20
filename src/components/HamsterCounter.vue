<script setup>
const props = defineProps(["counterId", "count"]);
const emits = defineEmits(["minus", "plus"]);
</script>
<template>
  <div class="counter-container">
    <h2>Hamster Counter {{ counterId }}</h2>
    <h1>{{ count }}</h1>
    <div class="btn-container">
      <button @click="$emit('minus')">-</button>
      <button @click="$emit('plus')">+</button>
    </div>
  </div>
</template>
<style scoped>
.counter-container {
    background: rgba(86, 94, 118, 0.162);
    margin: 1em auto;
    width: fit-content;
    padding: 1em 2em;
    border-radius: .5em;
}
.counter-container h1 {
    margin: .2em 0;
}
.btn-container {
  display: flex;
  justify-content: center;
  gap: 0.5em;
}
</style>
