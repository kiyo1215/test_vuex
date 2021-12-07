import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
    teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ]
  },
  mutations: {
    increment(state) {
      state.sum++;
    }
  }
})

