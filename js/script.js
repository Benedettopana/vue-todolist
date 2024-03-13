const { createApp } = Vue;

createApp({
  data(){
    return{
      todoList:[
        {
          activity: 'Fare la spesa',
          done: false,
        },
        {
          activity: 'Studiare Vue',
          done: true,
        },
        {
          activity: 'Ripassare CSS',
          done: true,
        },
        {
          activity: 'Ripasso HTML',
          done: false,
        },
        
      ],
      newTask:'',
      errorMsg:'',
      isError: false,
      over: 'overline',
    }
  },

  methods:{
    addTask(){
      if(this.newTask.length >= 5){
        this.todoList.unshift(this.newTask);
        this.newTask = '';
        this.errorMsg = '';
        this.isError = false;
      }else{
        this.errorMsg = 'Attenzione! Il testo deve avere almeno 5 caratteri';
        this.isError = true;
      }
    },

    eliminaTask(indice){
      this.todoList.splice(indice, 1);
    },
  }
}).mount('#app');