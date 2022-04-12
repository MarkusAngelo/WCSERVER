<template>
  <div class="home">
    <img src="../assets/forest.jpg"/>
    <div class="text"> 
      <h1>{{ title }} </h1>
          <p>Welcome to BOTANIA, where each member will contribute to our overall goal: The Preservation of Natural Habitat! Learn more about our project in Blog! Gaze at the many animals whose habitats we've help preserved over the past few years in Gallery! Become a member of Nature through going through the Contacts of our page! Learn more about the main contributor of this project in About!</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'home',
  data (){
    return{
      title:"Let's Preserve!"
    }
  }
}
</script>

<style scoped>
  .home {
    position: relative;
    text-align: center;
  }

  h1, p {
    color: white;
  }

  img {
    height: 600px;
    width: 100%;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>