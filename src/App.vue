<script setup>
import {
  computed,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
  provide,
} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Hamstemon from "./components/Hamstemon.vue";
import HamsterAPI from "./components/HamsterAPI.vue";
import HamsterCounter from "./components/HamsterCounter.vue";
import HamsterProps from "./components/HamsterProps.vue";
import HamsterInput from "./components/HamsterInput.vue";
import HamsterList from "./components/HamsterList.vue";
import HamsterAsync from "./components/HamsterAsync.vue";
const pokemon = ref({
  photo:
    "https://i.pinimg.com/736x/69/b9/9a/69b99a419102d3cefcdb075a740c08b2.jpg",
  name: "Hamsteritta",
  hp: 25,
  mp: 50,
});
const modelValue = ref("");
const inputValue = ref("");
const componentTabs = { HelloWorld, HamsterAPI };
const currentTab = ref("HelloWorld");
const componentRef = ref(null);
const buttonRef = ref(null);
const hamsterValue = ref("I like seeds");
onMounted(() => {
  console.log("App mounted");
  // componentRef.value.focus()
});
onUpdated(() => {
  console.log("App updated");
  // console.warn("meow", componentRef)
});
onUnmounted(() => {
  console.log("App unmounted");
});
const showHamstemon = ref(true);
const hamsterCounts = ref([0, 0, 0]);
function toggleHamstemon() {
  showHamstemon.value = !showHamstemon.value;
}
function attackHamstemon() {
  let currentHp = pokemon?.value?.hp;
  if (currentHp && currentHp - 5 >= 0) {
    pokemon.value.hp = currentHp - 5;
    console.log(pokemon.value.hp);
  } else {
    buttonRef.value.focus();
  }
}
function countPlus(id) {
  console.log("meow", hamsterCounts.value[id]);
  const newCount = hamsterCounts.value[id] + 1;
  if (newCount <= 20) {
    hamsterCounts.value[id]++;
  }
}
function countMinus(id) {
  console.warn("ham", hamsterCounts.value[id]);
  const newCount = hamsterCounts.value[id] - 1;
  if (newCount >= 0) {
    hamsterCounts.value[id]--;
  }
}
function updateInputValue(value) {
  modelValue.value = value;
}
function updateHamsterValue(value) {
  hamsterValue.value = value;
}
const sexEmoji = (sex) => (sex === "Female" ? "♀️" : "♂️");
provide("hamsterValue", { hamsterValue, updateHamsterValue });
</script>

<template>
  <img
    class="image"
    src="https://www.pngarts.com/files/5/Hamster-PNG-Image.png"
    alt=""
  />
  <img
    class="image"
    src="https://www.pngarts.com/files/5/Hamster-Download-PNG-Image.png"
    alt=""
  />
  <h1>{{ $t("message.hello", { name: "hamsssta" }) }}</h1>
  <h2>{{ $t("message.hamster") }}</h2>
  <!-- <HelloWorld msg="Hamsters are the best ❤️" /> -->

  <!-- <button ref="buttonRef" class="app-button" @click="toggleHamstemon">Click me to toggle Hamstemon</button>
  <Hamstemon v-if="showHamstemon" :pokemon="pokemon" />
  <button  ref="componentRef" class="app-button" @click="attackHamstemon">Attack poor hamstemon ;-;</button> -->

  <!-- <HamsterAPI /> -->

  <!-- <h1>Hamster Counters</h1>
  <HamsterCounter
    v-for="(count, id) in hamsterCounts"
    :key="id"
    :counterId="id"
    :count="count"
    @plus="() => countPlus(id)"
    @minus="() => countMinus(id)"
  /> -->

  <!-- <button v-for="tab in componentTabs" @click="currentTab = tab.__name">{{ tab.__name }}</button>
  <component :is="componentTabs[currentTab]" msg="Hamster says MEOW"></component> -->
  <!-- <HamsterProps /> -->
  <!-- <HamsterInput class="back" :model-value="modelValue" @update:model-value="updateInputValue"
    v-model:hamster-input="inputValue" meow="meow" /> -->
  <!-- <HamsterList :items="[{ name: 'Hamstery Hams', age: 20, sex: 'Female' }, { name: 'Hamsterson Hammer', age: 32, sex: 'Male' }, { name: 'Hamsie Hamsters', age: 26, sex: 'Female' }]">
    <template #item="{name, age, sex}">
      <h3>Name: {{ name }}</h3>
      <p>Age: {{ age }}</p>
      <p>Sex: {{ sexEmoji(sex) }}</p>
    </template>
  </HamsterList> -->
  <!-- <HamsterAsync /> -->
</template>

<style scoped>
.image {
  max-height: 200px;
}

.app-button {
  margin: 2em auto;
  display: block;
}

.back {
  background: rgba(82, 79, 92, 0.311);
  border-radius: 0.5em;
  padding: 1em 2em;
  box-shadow: 0 1em 0.5em rgba(0, 0, 0, 0.064),
    0 0.5em 0.2em rgba(0, 0, 0, 0.141);
}
</style>
