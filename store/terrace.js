const initialState = () => {
  return {
    terrace: {},
  }
}

export const mutations = {
  setTerrace(state, terrace) {
    state.terrace = terrace
  },
}

export const actions = {
  getTerrace ({commit}, payload) {
    console.log(payload)
    this.$fire.firestore.collection('terraces').doc(payload.terraceID)
      .get()
      .then((doc) => {
        commit('setTerrace', { id: doc.id, ...doc.data()})
    })
  },
}


export const state = initialState