<script lang="ts" setup>
defineOptions({
  name: 'ButtonComponent',
})

type Props = {
  type?: 'button' | 'submit'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  loading: false,
})

const emit = defineEmits(['click'])

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button :type="type" class="btn" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background-color: var(--primary);
  border: none;
  cursor: pointer;
  padding: 14px 28px;
  color: var(--white);
  font-size: 20px;
  font-weight: var(--font-semibold);
  border-radius: 50px;
  transition: all 0.3s ease;
  will-change: transform;
  &:not(:disabled):hover {
    transform: scale(1.05);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
