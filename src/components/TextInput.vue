<template>
  <div :class="$style.root">
    <div
      v-if="icon"
      :class="$style.icon"
    >
      <Icon
        :name="icon"
        :size="16"
      />
    </div>

    <input
      ref="input"
      type="text"
      :value="modelValue"
      :class="$style.input"
      :placeholder="placeholder"
      @input.stop="$emit('update:modelValue', $event.target.value)"
    >
    <div
      :class="$style.clear"
      @click="onReset"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },

  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
  },

  emits: ['update:modelValue'],

  methods: {
    onReset() {
      this.$refs.input.value = ''
      this.$emit('update:modelValue', '')
    },
  },
})
</script>

<style lang="stylus" module>
$size = 32px

.root {
  display: inline-flex
  box-shadow: inset 0 0 0 1px #d9d9d9
  border-radius: 6px
  transition: box-shadow .2s ease
  width: 100%
  padding: 4px
  padding-left: 15px

  &:focus-within {
    box-shadow: inset 0 0 0 2px $colors.primary
  }
}

.icon {
  width: 31px
  height: $size
  display: flex
  align-items: center
  justify-content: start
}

.input {
  border: none
  flex-grow: 1
  font-size: 14px
  line-height: 18px
  padding: 0
  color: $colors.gray900
  -webkit-font-smoothing: auto

  &::placeholder {
    color: lighten($colors.gray600, 10%)
    transition: color .3s ease
    -webkit-font-smoothing: auto
  }

  &:focus {
    outline: none

    &::placeholder {
      color: lighten($colors.gray500, 40%)
    }
}

  &:not(:placeholder-shown) + .clear {
    opacity: 1
    cursor: pointer
  }
}

.clear {
  position: relative
  width: $size
  height: $size
  opacity: 0
  transition: opacity .1s ease

  &::after,
  &::before {
    display: inline-block;
    position: absolute;
    background: #c0c0c0;
    left: 50%;
    top: 50%;
    content: '';
    width: 16px;
    height: 2px;
    margin: -1px 0 0 -8px;
    border-radius: 1px;
    transition: background-color .2s ease;
  }

  &::after {
    transform: rotateZ(-45deg) scaleY(.95);
  }

  &::before {
    transform: rotateZ(45deg) scaleY(.95);
  }

  &:hover {
    &::after,
    &::before {
      background-color: #a8a8a8
    }
  }
}
</style>
