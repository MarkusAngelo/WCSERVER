<template>
  <div class="blog">
    <img src="../assets/plant.jpg"/>
    <div class="text">
    <h1>{{ title2 }} </h1>  
    </div>
    <p>
      Preservation of Natural Habitat was a movement begun by Juan dela Cruz and continued by Mark Angelo Laus. It hopes to create a better world for animals and environment alike; ranging from mammals to fishes, reptiles to birds, and more. Anyone can contribute to fulfill our goal. Donations, based on the amount, will help us in providing the tools and facilities we need to meet our goal, whereas becoming a member will let you experience first-hand how things work around and how it feels to accommodate animals. Listed below are the things you could do as a volunteer.
    </p>
    <ul>
      <li>Learn about animal behaviours, classes, and much more.</li>
      <li>Plant trees and seeds for the foreseeable green future for in-land creatures.</li>
      <li>Clean beaches, shores, and other bodies of water from trash and garbage.</li>
      <li>Spread the message on why nature and habitats must be preserved by communicating with others</li>
      <li>and Much more!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'blog',
  data (){
    return{
      title2:'Preservation of Natural Habitat'
    }
  }
}
</script>

<style scoped>
  div {
    margin: 0 10%;
  }

  .blog {
    position: relative;
  }

  h1 {
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