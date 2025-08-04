# Vue Lib - Библиотека компонентов Vue 3

Простая и гибкая библиотека компонентов для Vue 3 с поддержкой TypeScript и SCSS тем.

## 🚀 Установка

```bash
npm install vue-lib
```

## 📦 Сборка библиотеки

```bash
# Установка зависимостей
npm install

# Сборка библиотеки
npm run build

# Разработка
npm run dev
```

## 🎯 Использование

### Импорт всей библиотеки

```javascript
import { createApp } from 'vue'
import VueLib from 'vue-lib'
import 'vue-lib/dist/vue-lib.css'

const app = createApp(App)
app.use(VueLib)
```

### Импорт отдельных компонентов

```javascript
import { SimpleButton } from 'vue-lib'
import 'vue-lib/dist/vue-lib.css'

export default {
  components: {
    SimpleButton
  }
}
```

### Использование в шаблоне

```vue
<template>
  <div>
    <!-- Базовое использование -->
    <SimpleButton text="Нажми меня" @click="handleClick" />
    
    <!-- Различные варианты -->
    <SimpleButton variant="primary" size="large">Основная кнопка</SimpleButton>
    <SimpleButton variant="secondary" size="medium">Вторичная кнопка</SimpleButton>
    <SimpleButton variant="success" size="small">Успех</SimpleButton>
    <SimpleButton variant="danger">Опасность</SimpleButton>
    <SimpleButton variant="warning">Предупреждение</SimpleButton>
    <SimpleButton variant="info">Информация</SimpleButton>
    
    <!-- Модификаторы -->
    <SimpleButton variant="primary" outlined>Контурная кнопка</SimpleButton>
    <SimpleButton variant="secondary" rounded>Округлая кнопка</SimpleButton>
    <SimpleButton variant="primary" disabled>Отключенная кнопка</SimpleButton>
    
    <!-- Комбинированные стили -->
    <SimpleButton 
      variant="success" 
      size="large" 
      rounded 
      outlined
      @click="handleSuccess"
    >
      Большая округлая контурная кнопка
    </SimpleButton>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('Кнопка нажата!')
}

const handleSuccess = () => {
  console.log('Успешное действие!')
}
</script>
```

## 🎨 Компоненты

### SimpleButton

Универсальный компонент кнопки с множеством вариантов стилизации.

#### Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цветовая схема кнопки |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Размер кнопки |
| `disabled` | `boolean` | `false` | Отключает кнопку |
| `text` | `string` | `''` | Текст кнопки (альтернатива слоту) |
| `outlined` | `boolean` | `false` | Контурный стиль кнопки |
| `rounded` | `boolean` | `false` | Округлые края кнопки |

#### События

| Событие | Параметры | Описание |
|---------|-----------|----------|
| `click` | `MouseEvent` | Срабатывает при клике на кнопку |

#### Слоты

| Слот | Описание |
|------|----------|
| `default` | Содержимое кнопки |

## 🎨 Темы и стили

### Импорт стилей

```javascript
// Импорт всех стилей
import 'vue-lib/dist/vue-lib.css'
```

### Кастомизация цветов

Библиотека использует SCSS переменные для цветов. Вы можете переопределить их:

```scss
// Переопределение цветовой палитры
$colors: (
  primary: #your-primary-color,
  secondary: #your-secondary-color,
  success: #your-success-color,
  danger: #your-danger-color,
  warning: #your-warning-color,
  info: #your-info-color
) !default;

// Импорт стилей библиотеки
@import 'vue-lib/src/styles/button-theme.scss';
```

### Кастомизация размеров

```scss
// Переопределение размеров
$sizes: (
  small: (
    padding: 0.2rem 0.4rem,
    font-size: 0.8rem,
    line-height: 1.4,
    border-radius: 0.15rem
  ),
  medium: (
    padding: 0.5rem 1rem,
    font-size: 1rem,
    line-height: 1.5,
    border-radius: 0.25rem
  ),
  large: (
    padding: 0.75rem 1.5rem,
    font-size: 1.5rem,
    line-height: 1.6,
    border-radius: 0.35rem
  )
) !default;
```

## 🖼️ Ресурсы и изображения

Библиотека включает в себя SVG иконки, которые можно импортировать:

```javascript
import { IconCheck, IconArrow } from 'vue-lib'

// Использование в компоненте
export default {
  data() {
    return {
      checkIcon: IconCheck,
      arrowIcon: IconArrow
    }
  }
}
```

```vue
<template>
  <div>
    <img :src="checkIcon" alt="Check" />
    <img :src="arrowIcon" alt="Arrow" />
  </div>
</template>
```

## 🔧 TypeScript поддержка

Библиотека полностью поддерживает TypeScript:

```typescript
import type { SimpleButtonProps } from 'vue-lib'

// Использование типов
const buttonProps: SimpleButtonProps = {
  variant: 'primary',
  size: 'large',
  disabled: false,
  outlined: true
}
```

## 📁 Структура проекта

```
vue-lib/
├── src/
│   ├── components/
│   │   └── SimpleButton.vue      # Компонент кнопки
│   ├── styles/
│   │   └── button-theme.scss     # SCSS тема
│   ├── assets/
│   │   ├── icon-check.svg        # SVG иконки
│   │   └── icon-arrow.svg
│   └── index.ts                  # Главный файл экспорта
├── dist/                         # Собранная библиотека
├── vite.config.ts               # Конфигурация Vite
├── package.json
└── README.md
```

## 🛠️ Разработка

```bash
# Клонирование репозитория
git clone <repository-url>
cd vue-lib

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка библиотеки
npm run build

# Предварительный просмотр
npm run preview
```

## 📝 Примеры использования

### Базовый пример

```vue
<template>
  <div class="button-examples">
    <h2>Примеры кнопок</h2>
    
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
  </div>
</template>

<script setup>
const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
const sizes = ['small', 'medium', 'large']

const handleClick = (variant) => {
  console.log(`Нажата кнопка: ${variant}`)
}
</script>

<style scoped>
.button-examples {
  padding: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
</style>
```

## 📄 Лицензия

MIT License

## 🤝 Вклад в проект

Приветствуются любые предложения и улучшения! Создавайте issues и pull requests.
