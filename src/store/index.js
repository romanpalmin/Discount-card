export default {
  isDebug: true,
  state: {
    inputData: {},
    currentNumADM: '',
    ws: 'planshet',
    /*ws: 'planshet_kl',*/
    ip: '10.10.182.11'
    /*ip: '10.100.50.248'*/
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
