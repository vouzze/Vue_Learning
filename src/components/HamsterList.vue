<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <ul
    style="
      padding: 1em 2em;
      border-top: 2px solid rgba(255, 255, 255, 0.222);
      border-bottom: 2px solid rgba(255, 255, 255, 0.222);
      margin: 1em 0;
    "
  >
    <li style="background: rgba(78, 77, 77, 0.226); border-radius: .2em; margin: 1em 0; padding: .5em 1em; text-align: start;" v-for="item in items">
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
</template>
<style scoped></style>
