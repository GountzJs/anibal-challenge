<!-- BaseInput.vue -->
<script lang="ts" setup>
defineOptions({
  name: 'InputOutline',
  inheritAttrs: false,
})

defineProps({
  modelValue: [String, Number],
  error: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-wrapper">
    <input
      class="input"
      :value="modelValue"
      v-bind="$attrs"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <span v-if="error" class="msg-error">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input {
  border-radius: 8px;
  border: none;
  outline: 1px solid var(--gray-light);
  font-size: 18px;
  font-weight: var(--font-regular);
  padding: 14px 16px;
  width: 100%;
  &:focus {
    outline: 2px solid var(--black);
  }
}

.msg-error {
  color: red;
  font-weight: var(--font-regular);
}
</style>
