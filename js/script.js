const {createApp} = Vue;

createApp()({
  Data(){

  
  return{
    email:'',
    apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail' ,
    }
  },


methods:{
  getApi(){
    axios.get(this.apiUrl).then(result => {
      console.log(result.data);
    })
  }

}


}).mount('#app');