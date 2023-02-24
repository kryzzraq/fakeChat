<template>
  <div>
    <header class="w-full">
      <nav class="bg-blue-100 px-2 py-2.5">
        <div class="container flex items-center justify-between mx-auto">
          <span class="text-xl font-semibold">Chat</span>
          <div id="navbar-default">
            <ul class="p-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/laura-martin-vicente/"
                  class="hover:text-blue-700"
                  >Contact me!</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div
      class="flex justify-center items-center mt-9 flex-col"
      @click="openModal()"
    >
      <e-avatar src="prof.jpg" size="large" />
      <span class="mt-1 tracking-wide">Chat con el profesor</span>
    </div>

    <e-modal v-if="showModal" @close="showModal = false">
      <template #title> Chat con el profesor </template>

      <template #default>
        <div class="chat_conversation flex flex-col">
          <chat-pill
            v-for="(message, index) in modifiedConversation"
            :urlAvatar="message.user.urlAvatar"
            :ownMessage="message.messageData.isOwn"
            :key="index"
            :isFile="message.messageData.isFile"
            :fileName="message.messageData.file.title"
            :urlFile="message.messageData.file.name"
            :fileProps="message.messageData.file.type"
            :fileSize="message.messageData.file.size"
          >
            <template #default>
              {{ message.messageData.text }}
            </template>

            <template #date>
              {{ formatDate(message.messageData.date) }}
            </template>
          </chat-pill>
        </div>
      </template>

      <template #footer>
        <chat-input
          v-model="textToUpdload"
          @onAddItemToConversation="addItemToConversation($event)"
        ></chat-input>
      </template>
    </e-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useConversationStore } from "@/stores/conversation.ts";

import eAvatar from "@/components/EAvatar/EAvatar.vue";
import chatPill from "@/components/EChatPill/EChatPill.vue";
import chatInput from "@/components/EChatInput/EChatInput.vue";
import eModal from "@/components/EModal/EModal.vue";

import dayjs from "dayjs";

export default defineComponent({
  components: {
    eAvatar,
    chatPill,
    chatInput,
    eModal,
  },
  setup() {
    const store = useConversationStore();

    const modifiedConversation = ref(store.getConversation);

    const showModal = ref(false);

    const textToUpdload = ref<string>("");

    const addItemToConversation = () => {
      if (textToUpdload.value == "") return;

      store.addToConversaton({
        user: {
          name: "Julia",
          urlAvatar: "alumn.jpg",
        },
        messageData: {
          text: textToUpdload.value,
          isOwn: true,
          date: dayjs(),
          isFile: false,
          file: {
            title: "",
            name: "",
            type: "",
            size: "",
          },
        },
      });
      textToUpdload.value = "";
    };

    const formatDate = (date) => {
      return dayjs(date).locale("es").format("DD MMM YYYY / HH:mm");
    };

    onMounted(() => {
      store.orderConversation();
    });

    const openModal = () => {
      showModal.value = true;
    };

    return {
      openModal,
      showModal,
      modifiedConversation,
      textToUpdload,
      addItemToConversation,
      formatDate,
    };
  },
});
</script>
<style scoped></style>
