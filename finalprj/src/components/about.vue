<template>
  <div class="about">
    <img src="../assets/pic.jpg">
      <div id="desc">
          <h1 class="objective">{{ title3 }}</h1>
          <h3><i>I.T. Specialist; Environmentalist</i></h3>
          <p>I.T. graduate seeking to be of assistance to make the world a better place for both humans and animals alike. Contribute greatly in making a change to the future of humanity and the environment by participating in similar ventures while simultaneously influencing others without any force.</p>
          <hr />
      </div>
    <div id="contacts">
        #1 Holy Angel St, Angeles, 2009 Pampanga &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; 09123456789 &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; mtlaus@student.hau.edu.ph
    </div>
  </div>
</template>

<script>
export default {
  name:'about',
  data (){
    return{
      title3:'Laus, Mark Angelo T.'
    }
  }
}
</script>

<style scoped>
  div {
    margin: 1% 10%;
  }
  img {
    height: 700px;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;  }
</style>