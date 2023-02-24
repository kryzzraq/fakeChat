<template>
  <div v-if="!isFile" class="flex items-center my-3" :class="position">
    <div v-if="!ownMessage && urlAvatar" class="mx-3">
      <e-avatar :src="urlAvatar" />
    </div>
    <div class="px-4 py-2 rounded-lg block max-w-2xl" :class="isOwnMessage">
      <span class="block">
        <slot></slot>
      </span>
      <span class="block text-xs mt-2">
        <slot name="date"></slot>
      </span>
    </div>
    <div v-if="ownMessage && urlAvatar" class="mx-3">
      <e-avatar :src="urlAvatar" />
    </div>
  </div>
  <div v-else-if="isFile">
    <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="mx-5 flex justify-between items-center">
      <div>
        <span class="text-sm block uppercase font-bold">
          {{ fileName }}
        </span>
        <span class="text-blue-500 font-semibold">
          {{ urlFile }}
        </span>
        <span class="block">
          <span class="inline-block mr-4">
            {{ fileProps }} ({{ fileSize }})
          </span>
          <span class="inline-block">
            <slot name="date"></slot>
          </span>
        </span>
      </div>
      <a class="text-blue-500 hover:cursor-pointer hover:text-blue-700 p-1">
        <i class="material-icons text-4xl">cloud_download</i>
      </a>
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import eAvatar from "@/components/EAvatar/EAvatar.vue";

export default defineComponent({
  name: "ChatPill",
  props: {
    ownMessage: {
      type: Boolean,
      default: () => false,
    },
    isFile: {
      type: Boolean,
      default: () => false,
    },
    fileName: {
      type: String,
      default: () => "",
    },
    urlFile: {
      type: String,
      default: () => "",
    },
    fileProps: {
      type: String,
      default: () => "",
    },
    fileSize: {
      type: String,
      default: () => "",
    },
    urlAvatar: {
      type: String,
      default: () => "",
    },
  },
  components: {
    eAvatar,
  },
  setup(props: Record<string, any>) {
    const isOwnMessage = computed(() => {
      if (props.ownMessage) return "bg-blue-500 text-white rounded-br-none";

      return "bg-gray-200 text-black rounded-bl-none";
    });

    const position = computed(() => {
      if (props.ownMessage) return "self-end";

      return "self-start";
    });

    return {
      isOwnMessage,
      position,
    };
  },
});
</script>

<style lang="css" scoped></style>
