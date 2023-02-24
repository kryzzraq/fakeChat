<template>
  <button
    :class="cssClass()"
    class="flex justify-center items-center"
    :disabled="disabled"
  >
    <span v-if="text">{{ text }}</span>
    <i v-if="icon" class="material-icons">{{ icon }}</i>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext } from "vue";
import { ButtonType, ButtonShape } from "./types/EBtnTypes.ts";

export default defineComponent({
  name: "EBtn",
  props: {
    disabled: {
      type: Boolean,
      default: (): boolean => false,
    },
    type: {
      type: String as PropType<ButtonType>,
      default: (): ButtonType => "primary",
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: (): ButtonShape => "normal",
    },
    text: {
      type: String,
      default: (): string => "",
    },
    icon: {
      type: String,
      default: (): String => "",
    },
  },
  setup(props: Record<string, any>, context: SetupContext) {
    const cssClass = () => {
      const cssClasses: string[] = [];

      if (props.type === "primary") {
        cssClasses.push("bg-blue-500 text-white hover:bg-blue-700");
      }

      if (props.type === "secondary") {
        cssClasses.push(
          "bg-white hover:bg-gray-200 hover:border-gray-700 text-gray-700"
        );
      }

      if (props.shape === "rounded") {
        cssClasses.push("rounded-full w-10 h-10");
      }

      if (props.shape === "normal") {
        cssClasses.push("p-2 rounded");
      }

      if (props.disabled) {
        cssClasses.push(
          "disabled disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        );
      }

      return cssClasses;
    };

    const onClick = (event) => {
      if (props.disabled) {
        return;
      }

      context.emit("click", event);
    };

    return {
      onClick,
      cssClass,
    };
  },
});
</script>

<style lang=""></style>
