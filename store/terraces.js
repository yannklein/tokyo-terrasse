const initialState = () => {
  return {
    terraces: [],
  }
}

export const mutations = {
  setTerraces(state, terraces) {
    state.terraces = terraces
  },
}

export const actions = {
  getTerraces ({commit}) {
    // console.log(this.$fire.firestore.collection('terraces'))
    this.$fire.firestore.collection('terraces')
      .get()
      .then((querySnapshot) => {
        const terraces = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          terraces.push({ id: doc.id, ...doc.data()})
          commit('setTerraces', terraces)
        });
    })
  },
}

export const state = initialState