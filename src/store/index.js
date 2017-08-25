export default {
  isDebug: true,
  state: {
    inputData: {},
    currentNumADM: ''
  },
  setNumADM(newValue){
    if (this.isDebug) console.log('setNumADM вызвано c ', newValue);
    this.state.currentNumADM = newValue;
  },
  setInputData(newValue){
    if (this.isDebug) {
      console.log('setInputData вызвано c');
      console.log(newValue);

    }
    this.state.inputData = newValue;
  },
}
