<template>

  <section class="src-components-choice">
    <table class="table table-bordered">
        <thead>
          <tr class="">
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr> 
        </thead>
        <tbody>
          <tr class="" v-for="(punto, index) in puntos" :key="index">
            <td> {{punto.pregunta}} </td>
            <td> {{punto.respuesta}} </td>
          </tr>
        </tbody>
      </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        puntos: [
          { 
            pregunta: 1,
            respuesta: "d"
          },
          { 
            pregunta: 2,
            respuesta: "c y d"
          },
          { 
            pregunta: 3,
            respuesta: "b"
          },
          
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-choice {

  }
</style>
