<template>
  <div class="container">
    <Header anchor="#bottom">
      Ui kit
    </Header>

    <div class="row">
      <div class="col-md-4">
        <div class="mb-4">
          <h3 class="mb-3">
            Buttons
          </h3>
          <Button>Button</Button>
        </div>
      </div>

      <div class="col-md-4">
        <div class="mb-4">
          <h3 class="mb-3">
            Checkboxes
          </h3>

          <Checkbox
            class="me-1"
            modelValue="true"
          />

          <Checkbox />
        </div>
      </div>

      <div class="col-md-4">
        <div class="mb-4">
          <h3 class="mb-3">
            Dropdown
          </h3>

          <Dropdown>
            <template #trigger>
              <a class="color-primary">Dropdown</a>
            </template>

            <div class="text-center">
              contents
            </div>
          </Dropdown>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <h3 class="mb-3">
        Form
      </h3>

      <FormLabel>Form name</FormLabel>
      <Form>
        <div class="mb-3">
          <FormMultiselect
            v-model="model1"
            notFoundText="Not found"
            placeholder="placeholder"
            :items="['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']"
          />
        </div>

        <div class="mb-3">
          <FormMultiselect
            v-model="model2"
            notFoundText="Not found"
            disabled
            description="Disabled"
            :items="['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']"
          />
        </div>

        <div class="mb-3">
          <FormTextInput
            v-model="input1"
            label="Input label"
            :rules="[(v) => !v || v.length < 3 ? 'Error message' : undefined]"
          />
        </div>

        <div class="mb-3">
          <FormTextInput placeholder="Input label" />
        </div>

        <div class="mb-3">
          <FormTextInput
            v-model="input1"
            label="Input label"
            hintText="Hint text"
          />
        </div>

        <div class="mb-3">
          <FormTextInput
            v-model="input1"
            label="Input label"
            description="Field description"
          />
        </div>

        <div class="mb-3">
          <FormTextInput
            prefix="$"
            placeholder="Amount"
          />
        </div>
      </Form>
    </div>

    <div class="mb-4">
      <h3 class="mb-3">
        Tabs
      </h3>

      <Tabs
        :active="activeTab"
        :items="tabs"
        @change="activeTab = $event"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  FormLabel,
  FormTextInput,
  FormMultiselect,
  Tabs,
  Header,
} from '../components'

export default defineComponent({
  components: {
    Dropdown,
    Form,
    Button,
    Checkbox,
    FormLabel,
    FormTextInput,
    FormMultiselect,
    Tabs,
    Header,
  },

  data: () => ({
    input1: '',
    model1: [],
    model2: ['Item 1'],
    activeTab: undefined,
    tabs: [{ name: 'Tab 1' }, { name: 'Tab 2' }, { name: 'Tab 3' }],
  }),
})
</script>

<style lang="stylus" module>
.root {}
</style>
