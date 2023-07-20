<script setup>
import { computed } from "vue";

const props = defineProps({
    hamsterQualities: Array,
    response: {
        type: String,
        validator(val) {
            return ["Thinking...", "Yes", "No"].includes(val);
        },
        default: " ",
    },
});
const emits = defineEmits({ decide: (hams, count) => count > 0 });
const countQualities = computed(() => props?.hamsterQualities?.length);
</script>
<template>
    <button @click="$emit('decide', hamsterQualities, countQualities)">
        Find out
    </button>
    <h3 style="margin: 1em 0">{{ response }}</h3>
</template>
<style scoped></style>
