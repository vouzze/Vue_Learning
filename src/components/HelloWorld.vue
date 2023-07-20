<script setup>
import { onMounted, computed, reactive, ref } from "vue";
import HamsterCard from "./HamsterCard.vue";
onMounted(() => {
    console.log("HellOWorld mounted")
})
defineProps({
  msg: {type: String, default: "Hello World"},
});
const someDescription = "i like hamsters";
const hamsterImage =
  "https://www.pngarts.com/files/5/Hamster-PNG-Transparent-Image.png";
const hamsters = [
  {
    id: 1,
    name: "Small Hamster",
    specialAbility: "Tiny paws",
    photo:
      "https://www.pngarts.com/files/5/Cute-Hamster-PNG-High-Quality-Image.png",
    color: "#f39b58",
  },
  {
    id: 2,
    name: "Cute Hamster",
    specialAbility: "Charming eyes",
    photo: "https://www.pngarts.com/files/5/Hamster-PNG-High-Quality-Image.png",
    color: "#ff89b8",
  },
  {
    id: 3,
    name: "Weird Hamster",
    specialAbility: "Something is off about him...",
    photo: "https://www.pngarts.com/files/5/Hamster-PNG-Pic.png",
    color: "#89ffaa",
  },
];

const homs = ref([
  {
    id: 1,
    name: "Hom Nya",
    url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/2B16/production/_128203011_gettyimages-1368246978.jpg",
    price: 50,
  },
  {
    id: 2,
    name: "Hom Woof",
    url: "https://i.insider.com/60d0af793093db00197023c5?width=1136&format=jpeg",
    price: 150,
  },
  {
    id: 3,
    name: "Hom Fox",
    url: "https://www.burgesspetcare.com/wp-content/uploads/2020/09/Hamsters-01-scaled-1024x683.jpg",
    price: 90,
  },
  {
    id: 4,
    name: "Hom Pop",
    url: "https://i.ytimg.com/vi/J6ZY0aAPvDU/maxresdefault.jpg",
    price: 110,
  },
  {
    id: 5,
    name: "Hom Me",
    url: "https://www.omlet.co.uk/images/originals/checking-for-fleas.jpg",
    price: 100,
  },
]);
const chosenHamsterTypes = ref([])
const haveAHamster = ref();
const selectedHamster = ref()
const hamsterSpeciesQuiz = [{ option: "syrian", correct: false }, { option: "chinese", correct: false }, { option: "dwarf", correct: true },];
const wantToBeHamster = ref("no")

const state = reactive({
  yes: false,
  currentHamster: 0,
  isHovered: false,
  hoveredHamster: hamsters[0],
  hamsterForm: {
    answer1: "",
    answer2: "",
  },
});
function changeAnswer() {
  state.yes = !state.yes;
}
function nextHamster() {
  const tempHamster = state.currentHamster + 1;
  state.currentHamster = tempHamster >= hamsters.length ? 0 : tempHamster;
}
function prevHamster() {
  const tempHamster = state.currentHamster - 1;
  state.currentHamster = tempHamster < 0 ? hamsters.length - 1 : tempHamster;
}
function changeHoveredHamster(id) {
  state.isHovered = !state.isHovered;
  state.hoveredHamster = hamsters.find((ham) => ham.id == id);
}
function sendForm() {
  console.log("meow", state.hamsterForm.answer1, state.hamsterForm.answer2);
}
function onHomClick(hom) {
  hom.active = !hom?.active;
}
const hamsterDescription = computed(() => {
  return "And also " + someDescription;
});
const homClass = (hom) => {
  return hom.active ? "active" : "";
};
const totalHamsterPrice = computed(() => {
  return homs.value.filter(hom => hom.active).reduce((sum, hom) => sum + hom.price, 0);
});
const correctAnswer = computed(() => {
  return selectedHamster?.value ? selectedHamster.value.correct ? "correct" : "wrong" : "";
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <button :class="[state.yes ? 'hamster-button' : '']" type="button" @click="changeAnswer">
    change answer
  </button>
  <p>{{ hamsterDescription }}</p>
  <img class="hamster-img" :src="hamsterImage" alt="" />
  <div class="some-div">
    <p>Do you like hamsters?</p>
    <p v-if="state.yes" class="answer">Yes, of course</p>
    <p v-else="state.yes" class="answer">Absolutely!</p>
  </div>
  <div class="hamster-div">
    <button @click="prevHamster">{{ "<-" }}</button>
        <HamsterCard :hamster="hamsters[state.currentHamster]" @hamster-hover="changeHoveredHamster" />
        <button @click="nextHamster">{{ "->" }}</button>
  </div>
  <!-- <ul class="hamster-list">
    <li v-for="hamster in hamsters" :key="hamster.id" @mouseover="state.changecurrentHamster(hamster.name, hamster.color)"
      @mouseleave="state.changecurrentHamster('nothing')" class="hamster-card">
      <h2>{{ hamster.name }}</h2>
      <p><b>Special Ability:</b> {{ hamster.specialAbility }}</p>
      <img class="hamster" :src="hamster.photo" :alt="hamster.name">
    </li>
  </ul> -->
  <p>
    You are hovering over
    <span :style="{
      color: state.isHovered ? state.hoveredHamster?.color : 'white',
    }">{{ state.isHovered ? state.hoveredHamster?.name : "nothing" }}</span>
  </p>
  <form class="form" action="post" @submit.prevent="sendForm">
    <h2>Please, answer these important questions</h2>
    <div class="input-group">
      <label for="answer1">How much do you like hamsters?</label>
      <input name="answer1" type="text" v-model.trim="state.hamsterForm.answer1" />
    </div>
    <div class="input-group">
      <label for="answer2">What hamster is your favorite (on this page)?</label>
      <input answer2 type="text" v-model="state.hamsterForm.answer2" />
    </div>
    <button>Send 🐹</button>
  </form>
  <ul class="hom-list">
    <li v-for="hom in homs" :key="hom.id" @click.stop="() => onHomClick(hom)" :class="{ active: homClass(hom) }">
      <img :src="hom.url" :alt="hom.name" />
      <h3>{{ hom.name }}</h3>
      <p class="price">${{ hom.price }}</p>
    </li>
  </ul>
  <h2>Total: ${{ totalHamsterPrice }}</h2>
  <div class="ham-class">
    <p>What hamster would you prefer?</p>
    <div class="hamster-checkboxes">
      <div>
        <input id="small" type="checkbox" value="small" v-model="chosenHamsterTypes">
        <label for="small">small</label>
      </div>
      <div>
        <input type="checkbox" id="chubby" value="chubby" v-model="chosenHamsterTypes">
        <label for="chubby">chubby</label>
      </div>
      <div>
        <input type="checkbox" id="calm" value="calm" v-model="chosenHamsterTypes">
        <label for="calm">calm</label>
      </div>
    </div>
    <p>You have chosen: {{ chosenHamsterTypes }}</p>
  </div>
  <div class="ham-class">
    <p>Do you have a hamster?</p>
    <div class="hamster-checkboxes">
      <div>
        <input id="yes" type="radio" value="yes" v-model="haveAHamster">
        <label for="yes">yes</label>
      </div>
      <div>
        <input type="radio" id="no" value="no" v-model="haveAHamster">
        <label for="no">no</label>
      </div>
    </div>
    <p>You answered {{ haveAHamster }}</p>
  </div>
  <div class="ham-class">
    <p>What hamster species is it?</p>
    <img
      src="https://www.thesprucepets.com/thmb/qDF1cfjHWzXPpuWpzLPi1iVX1X0=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1157798585-41025aa3b70f4615b234fd9fb30d7d1b.jpg"
      alt="Hamster">
    <select v-model="selectedHamster">
      <option disabled value="">Select an answer</option>
      <option v-for="ham in hamsterSpeciesQuiz" :value="ham">{{ ham.option }}</option>
    </select>
    <p :class="{ correct: selectedHamster?.correct, wrong: selectedHamster && !selectedHamster.correct }">Your answer is {{
      correctAnswer }}</p>
  </div>
  <div class="ham-class">
    <p>Do you want to be a hamster?</p>
    <div class="hamster-checkboxes">
      <input id="want_to_be_hamster" type="checkbox" v-model="wantToBeHamster" true-value="yes" false-value="no">
      <label for="want_to_be_hamster">{{ wantToBeHamster }}</label>
    </div>
  </div>
</template>

<style scoped>
.ham-class {
  background: rgba(0, 0, 0, 0.39);
  padding: 1em 3em;
  margin: 2em auto;
  border-radius: .5em;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 500px;
}

.ham-class p.correct {
  color: rgb(128, 195, 128);
}

.ham-class p.wrong {
  color: rgb(201, 92, 92);
}

.ham-class img {
  max-width: 100%;
  max-height: 100%;
}

.hamster-checkboxes {
  display: flex;
  gap: 1em;
  justify-content: center;
}

.hamster-checkboxes div {
  display: flex;
  gap: .5em;
}

.hom-list {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 1em;
}

.hom-list li {
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  border-radius: 5px;
  padding: 0.5em;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.347);
  gap: 0.5em;
  cursor: pointer;
}

.active {
  background: rgba(0, 0, 0, 0.507);
}

.hom-list img {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.hom-list .price {
  color: rgb(155, 166, 176);
}

.form {
  display: grid;
  row-gap: 1em;
  border: 0.5em solid rgba(255, 255, 255, 0.043);
  border-radius: 0.5em;
  padding: 1em 2em;
}

.input-group {
  display: flex;
  justify-content: center;
  gap: 1em;
  text-align: start;
}

.input-group input {
  width: 100%;
  padding: 0 1em;
}

.answer {
  color: rgb(255, 67, 67);
}

.hamster-button {
  background: rgba(255, 0, 0, 0.479);
}

.hamster-div {
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamster {
  height: 150px;
  width: 150px;
  object-fit: contain;
}

.hamster-card {
  width: 200px;
  padding: 1em 2em;
  border-radius: 0.5em;
  list-style: none;
  background: rgba(255, 255, 255, 0.043);
}

.hamster-list {
  display: flex;
  gap: 1em;
  justify-content: center;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 0;
}

.hamster-img {
  max-width: 200px;
  max-height: 200px;
}

.some-div {
  background: rgba(0, 0, 0, 0.651);
  padding: 1em 2em;
  border-radius: 0.5em;
}</style>
