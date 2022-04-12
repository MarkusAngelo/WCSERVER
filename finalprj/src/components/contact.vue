<template>
  <div class="contact">
    <img src="../assets/leaves.jpg"/>
    <div id="desc">
    <h1>{{ title4 }} </h1>  
    <hr/>
      <ul>
        <h3>Location</h3>
        <li>#1 Holy Angel St, Angeles, 2009 Pampanga</li>
        <h3>Contact Numbers</h3>
        <li>(63) 997-854-2589</li>
        <li>(63) 945-325-7869</li>
        <h3>E-Mail</h3>
        <li>botania@gmail.com</li>
        <h3>Social Media</h3>
        <li>Facebook: Botania: Preservation of Natural Habitat</li>
        <li>Twitter: @botaniaPreserves</li>
        <li>LinkedIn: Botania</li>
      </ul>
    </div>
   
  </div>
</template>

<script>
export default {
  name:'contact',
  data (){
    return{
      title4:'Contact Us!'
    }
  }
}
</script>

<style scoped>
  .contact {
    position: relative;
  }
  #desc {
    position: absolute;
    top: 30%;
    left: 28%;
    transform: translate(0%, -50%);
  }
  img {
    height: 800px;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  li {
    list-style-type: none;
  }
</style>