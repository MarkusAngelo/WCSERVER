<template>
  <div id="app">
    <div class="alert alert-primary" role="alert">
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#resume" role="button" aria-expanded="false" aria-controls="resume">
          <h1>{{ msg }}</h1>
        </a>
      <div class="collapse" id="resume">
        <div class="card card-body">
          <profile></profile>
          <education></education>
          <skills></skills>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Education from './components/Education'
import Profile from './components/Profile'
import Skills from './components/Skills'

export default {
  name: 'app',
  components: {
    Education,
    Profile,
    Skills
  },
  data(){
    return {
      msg: 'RESUME'
    }
  }
}
</script>

<style>
      img {
        border-radius: 50%;
        width: 20%;
        height: 10%;
        float: left;
      }
      #pic {
        width: 70%;
      }
      #desc {
        float: left;
        width: 70%;
        text-align: left;
        margin-left: 2%;
      }
      .header {
        color: rgb(66, 141, 202);
      }
      .school {
        display: block;
        margin-left: 10%;
        width: 80%;
      }

      h2 {
        text-indent: 5%;
      }

      #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 2%;
        }

      ul {
        padding: 0;
      }

      li {
        display: inline-block;
        margin: 0 10px;
    }
</style>
