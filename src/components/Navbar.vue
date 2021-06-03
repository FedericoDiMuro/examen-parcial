<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
            <router-link to = "/">
                <a class="navbar-brand" href="#">Inicio</a>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <router-link to = "/Gastos">
                        <a class="nav-link" href="#">Gastos</a>
                        </router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to = "/Preguntas">
                        <a class="nav-link" href="#">Preguntas</a>
                        </router-link>
                    </li>

                </ul>
            </div>
        </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
