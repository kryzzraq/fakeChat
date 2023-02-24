import { defineStore } from "pinia";
import dayjs from "dayjs";

export const useConversationStore = defineStore("conversation", {
  state: () => ({
    conversation: [
      {
        user: {
          name: "Julia",
          urlAvatar: "alumn.jpg",
        },
        messageData: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae rerum incidunt non officiis.",
          isOwn: true,
          date: "2018-10-05T10:30:00",
          isFile: false,
          file: {
            title: "",
            name: "",
            type: "",
            size: "",
          },
        },
      },
      {
        user: {
          name: "Julia",
          urlAvatar: "alumn.jpg",
        },
        messageData: {
          text: "",
          isOwn: true,
          date: "2018-10-05T08:05:00",
          isFile: true,
          file: {
            title: "Name of project",
            name: "teamwork.pdf",
            type: "Documento PDF",
            size: "4,8MB",
          },
        },
      },
      {
        user: {
          name: "Julia",
          urlAvatar: "alumn.jpg",
        },
        messageData: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae rerum incidunt non officiis.",
          isOwn: true,
          date: "2018-10-05T08:20:00",
          isFile: false,
          file: {
            title: "",
            name: "",
            type: "",
            size: "",
          },
        },
      },
      {
        user: {
          name: "professor",
          urlAvatar: "prof.jpg",
        },
        messageData: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia aperiam.",
          isOwn: false,
          date: "2018-10-05T08:30:00",
          isFile: false,
          file: {
            title: "",
            name: "",
            type: "",
            size: "",
          },
        },
      },
      {
        user: {
          name: "professor",
          urlAvatar: "prof.jpg",
        },
        messageData: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia aperiam.",
          isOwn: false,
          date: "2018-10-05T08:00:00",
          isFile: false,
          file: {
            title: "",
            name: "",
            type: "",
            size: "",
          },
        },
      },
    ] as any[],
    modifiedConversation: [],
  }),
  actions: {
    addToConversaton(item: Object) {
      this.conversation.push(item);
    },
    orderConversation() {
      this.conversation.sort((a, b) => {
        if (dayjs(a.messageData.date).isAfter(dayjs(b.messageData.date))) {
          return 1;
        } else {
          return -1;
        }
      });
    },
  },
  getters: {
    getConversation: (state) => state.conversation,
  },
});
