<script setup>
import { defineAsyncComponent } from "vue";
import HamsterButton from "./HamsterButton.vue";
import HamsterLoading from "./HamsterLoading.vue";

const AsyncComponent = defineAsyncComponent({
  loader: () => import("./HamsterAPI.vue"),
  loadingComponent: HamsterLoading,
  errorComponent: HamsterLoading
});
</script>
<template>
  <h1>Hamsters Rule The World</h1>
  <HamsterButton>Hamster Button</HamsterButton>
  <AsyncComponent />
</template>
<style scoped></style>
