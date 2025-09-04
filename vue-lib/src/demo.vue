<template>
  <div class="demo-container">
    <h1>SimpleButton Component Demo</h1>
    
    <section>
      <h2>Variants</h2>
      <div class="button-group">
        <SimpleButton :variant="$CProps.ButtonVariants.PRIMARY">Primary</SimpleButton>
        <SimpleButton :variant="$CProps.ButtonVariants.SECONDARY">Secondary</SimpleButton>
        <SimpleButton :variant="$CProps.ButtonVariants.SUCCESS">Success</SimpleButton>
        <SimpleButton :variant="$CProps.ButtonVariants.DANGER">Danger</SimpleButton>
        <SimpleButton :variant="$CProps.ButtonVariants.WARNING">Warning</SimpleButton>
        <SimpleButton :variant="$CProps.ButtonVariants.INFO">Info</SimpleButton>
      </div>
    </section>

    <section>
      <h2>Sizes</h2>
      <div class="button-group">
        <SimpleButton :size="$CProps.ButtonSizes.SMALL">Small</SimpleButton>
        <SimpleButton :size="$CProps.ButtonSizes.MEDIUM">Medium</SimpleButton>
        <SimpleButton :size="$CProps.ButtonSizes.LARGE">Large</SimpleButton>
      </div>
    </section>

    <section>
      <h2>Modifiers</h2>
      <div class="button-group">
        <SimpleButton :outlined="true">Outlined</SimpleButton>
        <SimpleButton :rounded="true">Rounded</SimpleButton>
        <SimpleButton :disabled="true">Disabled</SimpleButton>
      </div>
    </section>

    <section>
      <h2>Combined</h2>
      <div class="button-group">
        <SimpleButton :variants="$CProps.ButtonVariants.DANGER"></SimpleButton>

        <SimpleButton 
          :variant="$CProps.ButtonVariants.SUCCESS" 
          :size="$CProps.ButtonSizes.LARGE" 
          :rounded="true"
        >
          Large Success Rounded
        </SimpleButton>
        <SimpleButton 
          :variant="$CProps.ButtonVariants.DANGER" 
          :size="$CProps.ButtonSizes.SMALL" 
          :outlined="true"
        >
          Small Danger Outlined
        </SimpleButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SimpleButton from './components/SimpleButton.vue'

export default defineComponent({
  name: 'Demo',
  components: {
    SimpleButton
  }
})
</script>

<style scoped>
.demo-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: #666;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style>