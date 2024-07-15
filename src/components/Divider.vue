<script setup>
import { computed } from 'vue';

const props = defineProps({
  direction: {
    type: String,
    default: 'horizontal',
    validator: value => ['horizontal', 'vertical'].includes(value)
  },
  inset: {
    type: Boolean,
    default: false
  },
  thickness: {
    type: String,
    default: '1px'
  },
  color: {
    type: String,
    default: '#000'
  },
  length: {
    type: String,
    default: '100%'
  },
  margin: {
    type: String,
    default: '0'
  }
});

const styleObject = computed(() => {
  return {
    borderWidth: props.thickness,
    borderColor: props.color,
    backgroundColor: props.color,
    width: props.direction === 'horizontal' ? props.length : props.thickness,
    height: props.direction === 'horizontal' ? props.thickness : props.length,
    margin: props.margin
  };
})
</script>

<template>
  <div :class="['divider', props.direction, { inset }]" :style="styleObject"></div>
</template>

<style scoped>
.divider {
  border-style: solid;
  border-color: currentColor;
}

.horizontal {
  border-width: 0 0 1px 0;
}

.vertical {
  border-width: 0 1px 0 0;
}

.inset.horizontal {
  margin-left: 16px;
}

.inset.vertical {
  margin-top: 16px;
}
</style>
