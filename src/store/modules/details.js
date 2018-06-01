const state = {
  stepper: {}
}
const mutations = {
  addStepper (state) {
    state.stepper.stepper++
  },
  minusStepper (state) {
    state.stepper.stepper--
  }
}

export default {
  state,
  mutations
}
