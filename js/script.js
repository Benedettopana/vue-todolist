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
      new:{
        activity: '',
        done: false
      },
      state: null,
    }
  },

  methods:{
    addTask(){
      if(this.newTask.length >= 4){
        this.new.activity = this.newTask;
        this.todoList.unshift(this.new);
        this.newTask = '';
        this.errorMsg = '';
        this.isError = false;
      }else{
        this.errorMsg = 'Attenzione! Il testo deve avere almeno 5 caratteri';
        this.isError = true;
      }

      console.log(this.todoList);
    },

    changeStatus(indice){
      // Cambio lo stato della mia task
      this.todoList[indice].done = !this.todoList[indice].done;
    },

    eliminaTask(indice){
      // Controllo se la mia task è stata fatta e la elimino
      if(this.todoList[indice].done) this.todoList.splice(indice, 1);
      else alert('Attenzione!! finisci prima la tua task!');
    },
  }
}).mount('#app');