<template>
  <div class="gallery">
    <h1>{{ title5 }} </h1>  

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/rabbit.jpg" class="d-block w-100" alt="rabbit">
        </div>
        <div class="carousel-item">
          <img src="../assets/cat.jpg" class="d-block w-100" alt="cat">
        </div>
        <div class="carousel-item">
          <img src="../assets/dove.jpg" class="d-block w-100" alt="bird">
        </div>
        <div class="carousel-item">
          <img src="../assets/frog.jpg" class="d-block w-100" alt="frog">
        </div>
        <div class="carousel-item">
          <img src="../assets/deer.jpg" class="d-block w-100" alt="deer">
        </div>
        <div class="carousel-item">
          <img src="../assets/owl.jpg" class="d-block w-100" alt="owl">
        </div>
        <div class="carousel-item">
          <img src="../assets/fish.jpg" class="d-block w-100" alt="fish">
        </div>
        <div class="carousel-item">
          <img src="../assets/bat.jpg" class="d-block w-100" alt="bat">
        </div>
        <div class="carousel-item">
          <img src="../assets/swan.jpg" class="d-block w-100" alt="swan">
        </div>
        <div class="carousel-item">
          <img src="../assets/penguin.jpg" class="d-block w-100" alt="penguin">
        </div>
        <div class="carousel-item">
          <img src="../assets/butterfly.jpg" class="d-block w-100" alt="butterfly">
        </div>
        <div class="carousel-item">
          <img src="../assets/wolf.jpg" class="d-block w-100" alt="wolf">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name:'gallery',
  data (){
    return{
      title5:'Gallery'
    }
  }
}
</script>

<style scoped>
  * {
    text-align: center;
  }
  img {
    height: 600px;
    width: 400px;
  }
</style>