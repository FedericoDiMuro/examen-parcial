
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formState: {},
      formData : this.getInicialData(),
      expenses: [ ],
      nameLengthMin : 3,
      nameLengthMax: 15,
      presupuesto: 10000,
      total: 0
    }
  },
  computed: {
    getColor: function () {
      return {
        color:  this.total > this.presupuesto ? 'red' : this.total < 1000 ? 'green': this.total > 1000 && this.total < 5000 ? 'magenta' : this.total > 5000 ? 'orange' : 'red'
      }
    },
    getTotal: function(){
      let total = 0
      this.expenses.forEach(element => {
        total = total + element.import
      });
      return {
        total
      }
    }
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        name: '',
        description: '',
        import: ''
      }
    },
    send() {
      let today = new Date();
      let expense = this.formData;
      expense.hour = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      this.total = this.total + expense.import
      this.expenses.push(expense)
      this.formData = this.getInicialData()
      this.formState._reset()
    }
  }
}


