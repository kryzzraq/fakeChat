<template>
  <div class="flex">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="addItemToConversation()"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 mx-3"
    />
    <span class="mx-3">
      <e-btn @click="addItemToConversation()" shape="rounded" icon="send" />
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import EBtn from "@/components/EBtn/EBtn.vue";

export default defineComponent({
  name: "chatInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "onAddItemToConversation"],
  components: {
    EBtn,
  },
  setup(props: Record<string, any>, context: SetupContext) {
    const addItemToConversation = () => {
      context.emit("onAddItemToConversation", props.modelValue);
    };
    return {
      addItemToConversation,
    };
  },
});
</script>
