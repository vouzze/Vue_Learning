<script setup>
import { ref } from "vue";
import HamsterGrandchild from "./HamsterGrandchild.vue";

const chosenHams = ref([]);
const response = ref(null);
const hamChosen = (ham) => chosenHams?.value?.includes(ham);
function decide(hams, count) {
  response.value = "Thinking...";
  setTimeout(() => {
    response.value =
      count === 0 || (count > 2 && !hams?.includes("loving")) ? "No" : "Yes";
  }, 1000);
}
</script>
<template>
  <h1>Hamsters Are Precious</h1>
  <p style="margin: 2em 0">Hamsters should be: {{ chosenHams }}</p>
  <div class="block-container">
    <div
      v-for="ham in ['kind', 'loving', 'calm', 'active', 'caring']"
      :class="['c-container', { active: hamChosen(ham) }]"
    >
      <input
        :id="'c_' + ham"
        class="c-input"
        type="checkbox"
        :value="ham"
        v-model="chosenHams"
      />
      <label class="c-label" :for="'c_' + ham">{{ ham }}</label>
    </div>
  </div>
  <h3 style="margin: 3em 0 2em">Are you ready to become a hamster owner?</h3>
  <HamsterGrandchild
    :hamster-qualities="chosenHams"
    :response="response"
    @decide="decide"
  />
</template>
<style scoped>
.block-container {
  display: flex;
  gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
}
.c-container {
  background: rgba(74, 75, 84, 0.378);
  position: relative;
  width: 10em;
  padding: 0.5em 2em;
  border-radius: 0.2em;
}

.c-container.active {
  background: rgb(67, 70, 88);
}

.c-input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
}

.c-label {
  text-transform: capitalize;
}
</style>
