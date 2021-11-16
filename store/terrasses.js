const initialState = () => {
  return {
    terrasses: [],
  }
}

export const mutations = {
  setTerrasses(state, terrasses) {
    state.terrasses = terrasses
  },
}

export const actions = {
  getTerrasses ({commit}) {
    console.log(this.$fire.firestore.collection('terrasses'))
    this.$fire.firestore.collection('terrasses')
      .get()
      .then((querySnapshot) => {
        const terrasses = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          terrasses.push(doc.data())
          commit('setTerrasses', terrasses)
        });
    })
  },
}


export const state = initialState