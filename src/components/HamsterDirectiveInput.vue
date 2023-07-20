<script setup>
const props = defineProps(['inputValue'])
const vFocus = {
  mounted: (el, binding) => {
    console.log(binding)
    if (binding.value) {
      el.value = binding.value;
    }
    el.focus();
  },
};
</script>
<template>
  <input v-focus:hamster.meow="inputValue" />
</template>
<style scoped></style>
