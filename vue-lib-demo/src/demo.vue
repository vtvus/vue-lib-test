<template>
  <div class="demo-app">
    <h1>Vue Lib Demo</h1>

    <section>
      <h1>Messages</h1>
      <SomeClass :messages="messages"></SomeClass>
    </section>

    <section>
      <h1>Messages Facing Decorator</h1>
      <SomeClassFacing :messages></SomeClassFacing>
    </section>
    
    <section class="demo-section">
      <h2>Варианты кнопок</h2>
      <div class="button-group">
        <SimpleButton 
          v-for="variant in variants" 
          :key="variant"
          :variant="variant"
          @click="handleClick(variant)"
        >
          {{ variant }}
        </SimpleButton>
      </div>
    </section>

    <section class="demo-section">
      <h2>Размеры кнопок</h2>
      <div class="button-group">
        <SimpleButton 
          v-for="size in sizes" 
          :key="size"
          :size="size"
          variant="primary"
        >
          {{ size }}
        </SimpleButton>
      </div>
    </section>

    <section class="demo-section">
      <h2>Контурные кнопки</h2>
      <div class="button-group">
        <SimpleButton 
          v-for="variant in variants" 
          :key="variant"
          :variant="variant"
          outlined
        >
          {{ variant }}
        </SimpleButton>
      </div>
    </section>

    <section class="demo-section">
      <h2>Округлые кнопки</h2>
      <div class="button-group">
        <SimpleButton variant="primary" rounded>Primary</SimpleButton>
        <SimpleButton variant="success" rounded outlined>Success</SimpleButton>
        <SimpleButton variant="danger" rounded size="large">Danger</SimpleButton>
      </div>
    </section>

    <section class="demo-section">
      <h2>Отключенные кнопки</h2>
      <div class="button-group">
        <SimpleButton variant="primary" disabled>Disabled</SimpleButton>
        <SimpleButton variant="secondary" outlined disabled>Disabled Outlined</SimpleButton>
      </div>
    </section>

    <section class="demo-section">
      <h2>Иконки</h2>
      <div class="icon-group">
        <img :src="IconCheck" alt="Check" class="icon" />
        <img :src="IconArrow" alt="Arrow" class="icon" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SimpleButton from 'vue-lib'
import { IconCheck, IconArrow } from 'vue-lib'
import SomeClass from './components/SomeClass.vue'
import SomeClassFacing from './components/SomeClassFacing.vue'

const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const
const sizes = ['small', 'medium', 'large'] as const

const messages = [
  {id: 1, text: "text some class"},
  {id: 2, text: "some another classes"},
]

const handleClick = (variant: string) => {
  console.log(`Нажата кнопка: ${variant}`)
}
</script>

<style scoped>
.demo-app {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  margin-bottom: 1rem;
  color: #333;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.icon-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
  color: #333;
}
</style>