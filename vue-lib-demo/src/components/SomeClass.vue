```vue src/components/SomeClass.vue
<template>
  <div class="some-class">
    <div v-for="msg in messages" :key="msg.id" class="some-class__item">
      <span class="some-class__text">{{ msg.text }}</span>
      <div class="some-class__actions">
        <button type="button" class="some-class__btn edit" @click="onEdit(msg)">Edit</button>
        <button type="button" class="some-class__btn delete" @click="onDelete(msg)">Delete</button>
      </div>
    </div>
    <p v-if="!messages?.length" class="some-class__empty">No messages.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { PropType } from 'vue';

interface Message {
  id: string | number;
  text: string;
}

@Options({
  name: 'SomeClass'
})
export default class SomeClass extends Vue {
  @Prop({
    type: Array as PropType<Message[]>,
    required: true
  })
  readonly messages!: Message[];

  @Emit('edit')
  protected onEdit(message: Message): Message {
    return message;
  }

  @Emit('delete')
  protected onDelete(message: Message): Message {
    return message;
  }
}
</script>

<style scoped lang="scss">
.some-class {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.some-class__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}
.some-class__text {
  flex: 1;
  margin-right: 1rem;
  word-break: break-word;
}
.some-class__actions {
  display: flex;
  gap: 0.5rem;
}
.some-class__btn {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: opacity 0.15s;
}
.some-class__btn.edit {
  background: #e0f7fa;
  color: #00695c;
}
.some-class__btn.delete {
  background: #ffebee;
  color: #c62828;
}
.some-class__btn:hover {
  opacity: 0.85;
}
.some-class__empty {
  color: #777;
  font-style: italic;
  text-align: center;
}
</style>
