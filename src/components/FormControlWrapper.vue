<template>
  <div>
    <div
      :class="{
        [$style.body]: true,
        [$style.body_filled]: filled,
        [$style.body_withValidationError]: validationError
      }"
    >
      <slot :hasValidationError="!isValid" />

      <div
        v-if="label"
        :class="$style.label"
        :data-label="label"
      />

      <div
        v-if="description"
        :class="$style.description"
      >
        <div :class="$style.descriptionThumb" />
        <div :class="$style.descriptionTooltip">
          <div :class="$style.descriptionBubbleBackdrop" />
          {{ description }}{{ description }}{{ description }}{{ description }}
        </div>
      </div>
    </div>

    <div
      v-if="hintText || validationError"
      :class="$style.messages"
    >
      <transition
        mode="out-in"
        :enterFromClass="$style.fadeTransition_inactive"
        :leaveToClass="$style.fadeTransition_inactive"
        :enterActiveClass="$style.fadeTransition_active"
        :leaveActiveClass="$style.fadeTransition_active"
      >
        <div v-if="hintText && !validationError">
          {{ hintText }}
        </div>
        <div
          v-else-if="validationError"
          :class="$style.errorMessage"
        >
          {{ validationError }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue'

import { useValidation } from '../composables'

export default defineComponent({
  props: {
    filled: Boolean,
    label: { type: String, default: undefined },
    hintText: { type: String, default: undefined },
    description: { type: String, default: undefined },
    controlValue: { type: null, default: undefined },
    controlValueRules: { type: Array, default: () => [] },
  },

  setup(props) {
    const { controlValue, controlValueRules } = toRefs(props)
    const { isValid, validationError } = useValidation(controlValue, controlValueRules)

    return {
      isValid,
      validationError,
    }
  },
})
</script>

<style lang="stylus" module>
$padding = 15px
$font-size = 14px
$line-height = 18px
$height = $line-height + $padding * 2
$label-downscale-multiplier = 0.93

.body {
  border-radius: 6px
  transition: box-shadow .2s ease
  box-shadow: inset 0 0 0 1px $colors.gray400
  position: relative
  display: grid
  grid-template: 1fr / 1fr
  font-size: $font-size
  line-height: $line-height
  min-height: $height

  > :first-child {
    grid-row-start: 1
    grid-column-start: 1
  }

  &:focus-within {
    box-shadow: inset 0 0 0 2px $colors.primary

    .label::after {
      color: $colors.primary
    }
  }

  &_withValidationError {
    box-shadow: inset 0 0 0 1px $colors.danger
  }

  &_filled,
  &:focus-within {
    .label {
      &::before {
        transform: scaleX(1)
      }
      &::after {
        transform: 'translateY(%s) scale(%s)' % (($height  / -2) $label-downscale-multiplier)
        top: 0
      }
    }
  }

  &_withDescription {
    padding-right: $height
  }
}

.label {
  pointer-events: none
  align-self: center
  padding $padding
  grid-column: 1 / -1
  grid-row: 1 / -1

  &::before {
    $label-padding = 5px
    content: attr(data-label)
    transform: scaleX(0)
    background: white
    height: 2px
    position: absolute
    top: 0
    color: transparent
    transition: transform .2s ease
    transform-origin: $label-padding 0
    padding: 0 $label-padding
    font-size: 100% * $label-downscale-multiplier
    left: $padding - $label-padding
  }

  &::after {
    color: $colors.gray600
    content: attr(data-label)
    display: block
    transform-origin: left
    transition: all .2s ease
  }
}

.messages {
  display: grid
  grid-template: 1fr / 1fr
  padding: 10px 5px 0 $padding
  font-size: 13px
  color: $colors.gray600
}

.errorMessage {
  color: $colors.danger
  font-weight: 500
}

.fadeTransition {
  &_active {
    transition: opacity .1s ease
  }
  &_inactive {
    opacity: 0
  }
}

.description {
  width: $height
  height: $height
  grid-row-start: 1
  display: grid
  place-items: center

  // TODO: make mobile work?
  &:hover {
    .descriptionTooltip {
      transform: translateY(0px)
      opacity: 1
      visibility: visible
    }
  }
}
.descriptionThumb {
  width: 20px
  height: 20px
  border-radius: 50%
  background: $colors.gray500
}

.descriptionTooltip {
  position: absolute
  justify-self: end
  align-self: end
  width: max-content
  max-width: 300px
  max-width: 'min(350px, calc(100vw - 30px))' % ()
  transform: translateY(-10px)
  z-index: 1
  text-align: center
  padding: 11px 15px 10px
  color: $colors.white
  transition: all .2s ease
  transition-delay: 0.25s
  opacity: 0
  visibility: hidden
  bottom: 100%
}

.descriptionBubbleBackdrop {
  position: absolute
  left: 0
  right: 0
  top: 0;
  bottom: 0
  border-radius: 8px
  background-color: $colors.gray900
  opacity: 0.85
  z-index: -1

  &::before {
    content: ''
    position: absolute
    display: inline-block
    width: 18px
    height: 8px
    margin-top: -1px
    right: 15px
    top: 100%
    background: inherit
    clip-path: polygon(0 0, 100% 0, 50% 100%)
  }
}
</style>
