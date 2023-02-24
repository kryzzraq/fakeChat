<template>
  <div
    class="fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0"
  >
    <div class="relative w-full max-w-4xl">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex items-start justify-between p-4 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">
            <slot name="title"></slot>
          </h3>

          <e-btn
            icon="close"
            type="secondary"
            class="p-0"
            @click="closeModal()"
          >
            ></e-btn
          >
        </div>
        <div class="p-6 space-y-6 overflow-y-auto max-h-128" id="chat_body">
          <slot></slot>
        </div>

        <div class="p-3 space-x-2 border-t border-gray-200 rounded-b">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import EBtn from "@/components/EBtn/EBtn.vue";

export default defineComponent({
  name: "eModal",
  props: {},
  components: {
    EBtn,
  },
  setup(props: Record<string, any>, context: SetupContext) {
    const closeModal = () => {
      context.emit("close");
    };
    return {
      closeModal,
    };
  },
});
</script>
