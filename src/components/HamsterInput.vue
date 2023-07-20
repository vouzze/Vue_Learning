<script setup>
import { computed, inject } from "vue";
import HamsterButton from "./HamsterButton.vue";

const props = defineProps(["modelValue", "hamsterInput"]);
const emit = defineEmits(["update:modelValue", "update:hamsterInput"]);
const { hamsterValue } = inject("hamsterValue", "");
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <div>
    <p>Write your opinions about hamsters</p>
    <textarea v-model="value"></textarea>
    <p>Your opinions: {{ modelValue }}</p>
    <br />
    <p>Write a compliment to a hamster</p>
    <input
      type="text"
      :value="hamsterInput"
      @input="$emit('update:hamsterInput', $event.target.value)"
    />
    <p>Your compliment: {{ hamsterInput }}</p>
    <br />
    <p>Attributes: {{ $attrs }}</p>
    <div
      style="display: flex; gap: 1em; justify-content: center; flex-wrap: wrap"
    >
      <HamsterButton hamster-value="Pat Hamster">
        Pat Hamster
        <template #emoji> 🐹 </template>
      </HamsterButton>
      <HamsterButton v-slot="{ message }" hamster-value="Ham Ham"
        >Ham Ham {{ message }}</HamsterButton
      >
      <HamsterButton hamster-value="Button Click Me"
        >Button Click Me</HamsterButton
      >
      <HamsterButton hamster-value="" />
    </div>
    <p>Hamster value: {{ hamsterValue }}</p>
  </div>
</template>
<style scoped></style>
