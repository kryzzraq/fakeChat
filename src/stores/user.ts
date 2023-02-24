import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      name: "Julia",
      surname: "García",
      avatar: "alumn.jpg",
      email: "example@example.es",
      id: 1,
    },
  }),
});
