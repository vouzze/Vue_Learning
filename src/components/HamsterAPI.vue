<script setup>
import { computed, inject, ref, watch, watchEffect, onMounted, onUnmounted, onBeforeMount } from "vue";
import HamsterDirectiveInput from "./HamsterDirectiveInput.vue";
const axios = inject("axios");

const hamsterInput = ref("");
const hamsterUrl = ref("https://i.ytimg.com/vi/qo9wlXrAtYU/hqdefault.jpg");
const hamsterQueries = ref([]);
const message = "You can write only latin letters and not other characters";
const showMessage = ref(false);
const linkAPI = "https://api.unsplash.com/photos/random";
const accessKey = "rbden_URLoBf2DblYtLrLu6njZHt9ZfxcXegdivWxGg";
const hamsterQuery = computed(
  () => "hamster " + hamsterQueries.value?.join(" ")
);
function submitHamster() {
  if (!showMessage.value) {
    axios
      .get(linkAPI, {
        params: { client_id: accessKey, query: hamsterQuery.value },
      })
      .then((res) => (hamsterUrl.value = res.data.urls.full));
  }
}
watchEffect(() => {
  const temp = hamsterInput.value?.trim();
  if (temp?.length === 0) {
    showMessage.value = false;
  } else if (
    !temp
      ?.split(" ")
      .map((str) => /^[a-zA-Z]+$/.test(str))
      .includes(false)
  ) {
    showMessage.value = false;
    hamsterQueries.value = temp?.split(" ");
  } else {
    showMessage.value = true;
  }
});

onBeforeMount(() => console.log("HamsterAPI before mount"))
onMounted(() => console.log("HamsterAPI after mount"))
onUnmounted(() => console.log("HamsterAPI after unmount"))

</script>

<template>
  <div class="hamster-container">
    <div class="form-div">
      <h1>Hamster Zone</h1>
      <p>Please, specify what hamster you would like too see</p>
      <form @submit.prevent="submitHamster" action="get">
        <HamsterDirectiveInput
          type="text"
          id="hamster-input"
          name="hamster-input"
          v-model="hamsterInput"
          input-value="white fluffy"
        />
        <button>Get hamster pic</button>
      </form>
      <p v-show="showMessage" class="message">{{ message }}</p>
    </div>
    <img class="hamster-pic" :src="hamsterUrl" alt="Default hamster" />
  </div>
</template>

<style scoped>
.hamster-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5em;
  max-width: 100%;
}
.form-div {
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
}
.form-div form {
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
}
.form-div form input {
  flex: 1;
  padding: 0.5em 1em;
}

.form-div .message {
  position: absolute;
  bottom: -2.5em;
  font-size: 0.8em;
  left: 0;
  right: 0;
  color: rgb(218, 117, 117);
}
.hamster-pic {
  flex: 1;
  width: 0;
  max-width: 100%;
  max-height: 70vh;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.097), 0 0.5em 1em rgba(0, 0, 0, 0.152);
}

@media screen and (max-width: 1280px) {
  .hamster-container {
    flex-direction: column;
    gap: 3em;
  }
  .hamster-pic {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .form-div form {
    flex-direction: column;
  }
}
</style>
