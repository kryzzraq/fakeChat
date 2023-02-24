<template>
  <img
    :class="['avatar rounded-full', cssClasses()]"
    :src="getSrc()"
    alt="Rounded avatar"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AvatarSize } from "./types/AvatarTypes";

export default defineComponent({
  name: "eAvatar",
  props: {
    size: {
      type: String as PropType<AvatarSize>,
      default: (): AvatarSize => "small",
    },
    src: {
      type: String,
      default: () => "",
      required: true,
    },
  },
  setup(props: Record<string, any>) {
    const cssClasses = () => {
      if (props.size === "small") {
        return "w-12 h-12";
      }

      if (props.size === "normal") {
        return "w-16 h-16";
      }

      if (props.size === "large") {
        return "w-20 h-20";
      }
    };

    const getSrc = () => {
      return `http://127.0.0.1:5173/src/assets/img/${props.src}`;
    };

    return {
      cssClasses,
      getSrc,
    };
  },
});
</script>

<style lang="css" scoped>
.avatar {
  object-fit: cover;
}
</style>
