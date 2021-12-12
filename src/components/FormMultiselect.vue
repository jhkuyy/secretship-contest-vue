<template>
  <FormControlWrapper
    :filled="filled"
    :hintText="hintText"
    :description="description"
    :controlValue="modelValue"
    :controlValueRules="rules"
    :disabled="disabled"
  >
    <div
      :class="[
        $style.wrapper,
        disabled && $style.wrapper_disabled
      ]"
    >
      <div
        v-for="(item, index) in modelValue"
        :key="item"
        :class="$style.chip"
      >
        {{ item }}
        <button
          :class="$style.chipRemoveButton"
          @click="remove(index)"
        />
      </div>

      <input
        v-model="query"
        :class="$style.input"
        type="text"
        autocomplete="off"
        :placeholder="placeholder"
        @keydown="onInputKeydown"
        @keydown.enter.stop.prevent="select(focusedItemIndex)"
        @blur="onInputBlur"
        @focus="onInputFocus"
      >

      <div
        v-if="selectableItems.length > 0 || trimmedQuery !== ''"
        :class="$style.items"
      >
        <div
          v-for="(item, index) in selectableItems"
          :key="item"
          :class="{
            [$style.item]: true,
            [$style.item_focused]: focusedItemIndex === index
          }"
          @touchstart="focusItem(index)"
          @mouseenter="focusItem(index)"
          @click="select(index)"
        >
          {{ item }}
        </div>

        <div
          v-if="trimmedQuery !== '' && selectableItems.length === 0"
          :class="[$style.item, $style.item_notFound]"
        >
          {{ notFoundText }}
        </div>
      </div>
    </div>
  </FormControlWrapper>
</template>

<script>
import { defineComponent } from 'vue'

import FormControlWrapper from './FormControlWrapper.vue'

export default defineComponent({
  components: {
    FormControlWrapper,
  },

  props: {
    modelValue: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    rules: { type: Array, default: undefined },
    hintText: { type: String, default: undefined },
    description: { type: String, default: undefined },
    placeholder: { type: String, default: undefined },
    notFoundText: { type: String, default: '' },
    disabled: Boolean,
  },

  emits: ['update:modelValue'],

  data: () => ({
    query: '',
    focusedItemIndex: undefined,
  }),

  computed: {
    filled() {
      return this.modelValue.length > 0
    },

    trimmedQuery() {
      return this.query.trim()
    },

    selectableItems() {
      return this.items
        .filter((item) => !this.modelValue.includes(item))
        .filter((item) => this.trimmedQuery === '' || item.includes(this.trimmedQuery))
    },
  },

  methods: {
    remove(index) {
      const newValue = [...this.modelValue]
      newValue.splice(index, 1)
      this.$emit('update:modelValue', newValue)
    },

    select(index) {
      this.$emit('update:modelValue', [...this.modelValue, this.selectableItems[index]])
      this.focusItem(this.focusedItemIndex - 1)
      this.query = ''
    },

    focusItem(index) {
      this.focusedItemIndex = Math.max(0, Math.min(this.selectableItems.length - 1, index))
    },

    onInputBlur() {
      this.focusedItemIndex = undefined
    },
    onInputFocus() {
      this.focusedItemIndex = 0
    },
    onInputKeydown({ key, target: { value } }) {
      if (key === 'ArrowDown') this.focusItem(this.focusedItemIndex + 1)
      if (key === 'ArrowUp') this.focusItem(this.focusedItemIndex - 1)
      if (key === 'Backspace' && value === '' && this.filled) {
        this.remove(this.modelValue.length - 1)
      }
    },
  },
})
</script>

<style lang="stylus" module>
$chip-padding-x = 9px
$chip-height = 26px

.wrapper {
  padding: 8px 0 8px 12px
  display: flex
  flex-wrap: wrap
  align-items: center

  &_disabled {
    .chip {
      padding-right: $chip-padding-x
    }
    .chipRemoveButton {
      display: none
    }
  }
}

.input {
  border: none
  background: none
  min-width: 50px
  flex: 1 1 auto
  padding: 7px 0 7px 3px

  &:focus,
  &:focus-visible {
    outline: none

    + .items {
      opacity: 1
      visibility: visible
    }
  }
}

.chip {
  height: $chip-height
  font-size: 12px
  line-height: 16px
  font-weight: 600
  background-color: $colors.primary
  border-radius: 4px
  margin: 3px 6px 3px 0
  padding-left: $chip-padding-x
  color: $colors.white
  display: flex
  align-items: center
}

.chipRemoveButton {
  all: unset
  width: $chip-height
  height: $chip-height
  display: grid
  grid-template: 1fr / 1fr
  place-items: center

  &::before,
  &::after {
    grid-column: 1 / -1
    grid-row: 1 / -1
    background: $colors.white
    content: ''
    width: 13px
    height: 2px
    border-radius: 1px
  }

  &::before {
    transform: rotateZ(45deg) scale(0.95)
  }
  &::after {
    transform: rotateZ(-45deg) scale(0.95)
  }
}

.items {
  position: absolute
  top: calc(100% + 5px)
  left: 0
  right: 0
  background: $colors.white
  padding: 7px 0
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15)
  transition: all .2s ease
  max-height: 220px
  overflow: auto
  -webkit-overflow-scrolling: touch
  z-index: 10
  border-radius: 6px
  visibility: hidden
  opacity: 0

  .item {
    text-overflow: ellipsis
    overflow: hidden
    font-size: 14px
    line-height: 18px
    padding: 8px 15px
    cursor: pointer

    &_focused {
      background: $colors.gray100
    }

    &_notFound {
      color: $colors.gray500
      cursor: auto
    }
  }
}
</style>
