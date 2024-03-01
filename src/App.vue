

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

/*
  li, a, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 21px;
    color: #333;
    text-decoration: none;
  }
  header {
    display: flex;
    padding: 30px 5%;
    background-color: #f7f7f7;
    align-items: center;
    justify-content: center;
  }

  .logo {
    cursor: pointer;
    height: 35px;
    margin-right: auto;
  }

  .nav-links {
    list-style: none;
    margin-bottom: 0px;
  }
 
 
  .nav-links li {
    display: inline-block;
    padding: 8px 20px;
  }

  .nav-links li a {
    transition: all 0.3s ease 0s;
  }
  .signin-button {
    background-color: #393939;
    border: none;
    padding: 8px 1rem;
    color: #edf0f1;
    font-size: 19px;
    font-weight: bold;
  }
  .signin-button:hover {
    background-color: #1d1d1d;
    transition: 0.3s ease 0.3;
  }
  .nav-buttons {
    color: #242424;
    text-decoration: none;
    font-weight: bold;
    padding: 8px;
  }
  .middle-section {
    flex: 1;
    margin: 0 20px;
    padding-left: 20px;
    padding-right: 20px;
    border: #353535;
  }
  input[type="text"] {
    width: 100%;
    border: #353535;
    font-size: 25px;
    padding: 30px;
    height: 45px;
    border: 1px solid #6e6e6e;
    outline: none;
  }
  footer {
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    background: #f7f7f7;
  }
  footer .container-footer {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  footer .container-footer .sec h2 {
    position: relative;
    color: #333;
    font-weight: 600;
    margin-bottom: 15px;
  }
  footer .container-footer .sec p {
    color: #555;
  }
  footer .container-footer .sci {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4,50px);
    gap: 30px;
  }
  footer .container-footer .sci li {
    list-style: none;
  }
  footer .container-footer .sci li a {
    display: inline;
    width: 50px;
    height: 50px;
    background: #333;
    display: grid;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 25px;
  }
  footer .container-footer .sci li a i {
    color: #fff;
    font-size: 20px;
  }
  footer .container-footer .quicklinks {
    position: relative;
  }
  footer .container-footer .quicklinks ul li {
    list-style: none;
  }
  footer .container-footer .quicklinks ul li a {
    color: #555;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
  }
  footer .container-footer .contact .info {
    position: relative;
  }
  footer .container-footer .contact .info li {
    display: grid;
    grid-template-columns: 30px 1fr;
    margin-bottom: 16px;
  }
  footer .container-footer .contact .info li span p {
    color: #555;
    font-size: 20px;
  }
   footer .container-footer .contact .info li a  {
    color: #333;
    text-decoration: none;
  }
  .copyrightText {
    width: 100%;
    background: #fff;
    padding: 20px 100px 30px;
    text-align: center;
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  .sci {
    padding-left: 0px;
  }
  @media (max-width: 991px) {
    footer {
      padding: 40px;
    }
    footer .container-footer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr); 
    grid-gap: 20px;
  }
  .copyrightText {
    padding: 20px 40px 30px;
  }
  @media (max-width: 768px) {
    footer .container-footer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1,1fr);
      grid-gap: 20px;
    }
  }
  }
  */
 
  

  


</style>
<template>
  <header>
  <!-- Jumbotron -->
  <div class="p-3 text-center bg-white border-bottom"  style="font-family: 'Montserrat', sans-serif;;">
    <div class="container" >
      <div class="row gy-3">
        <!-- Left elements -->
        <div class="col-lg-2 col-sm-4 col-4">
          <router-link to="/">
            <img :src="logoPath" height="35" />
          </router-link>
        </div>
        <!-- Left elements -->

        <!-- Center elements -->
        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
          <div class="d-flex justify-content-end">
            <!--<router-link to="/lisakuulutus">lisa</router-link>
            <router-link to="/offers">offer</router-link>
            <router-link to="/">Home</router-link>-->
             
            <router-link to="/offers" class="me-1 border py-1 px-3 nav-link d-flex align-items-center d-none d-md-flex" target="_self">
              <i class="fas fa-user-alt m-1 me-md-2 d-md-none"></i>
              <p class="d-none d-md-block mb-0">Pakkumised</p>
            </router-link>
            <a class="me-1 border py-1 px-3 nav-link d-flex align-items-center d-none d-md-flex" target="_blank">
              <i class="fas fa-user-alt m-1 me-md-2 d-md-none"></i>
              <p class="d-none d-md-block mb-0">Salvestatud</p>
            </a>
            <router-link to="/lisakuulutus" class="me-1 border py-1 px-3 nav-link d-flex align-items-center d-none d-md-flex" style="background-color: #cc2229;" target="_self">
              <i class="fas fa-heart m-1 me-md-2 d-md-none" style="color: white;"></i>
              <p class="d-none d-md-block mb-0" style="color: white;">Lisa kuulutus</p>
            </router-link>
            <a class="border py-1 px-3 nav-link d-flex align-items-center d-none d-md-flex" target="_blank">
              <i class="fas fa-shopping-cart m-1 me-md-2 d-md-none"></i>
              <p class="d-none d-md-block mb-0">Logi sisse</p>
            </a>
            <button class="btn rounded-0 d-md-none" style="border: 1px solid #acacac;"  type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <i class="fas fa-bars"></i>
            </button>
 
            <!--
            <a class="me-1 border py-1 px-3 nav-link d-flex align-items-center " target="_blank"><i class="fas fa-heart m-1 me-md-2"></i> Salvestatud </a>
            <a class="me-1 py-1 px-3 nav-link d-flex align-items-center " target="_blank" style="background-color: #cc2229; color: white;"><i class="fas fa-user-alt m-1 me-md-2"></i> Lisa kuulutus </a>
            <button class="border py-1 px-3 nav-link d-flex align-items-center" target="_blank"><i class="fas fa-heart m-1 me-md-2"></i>Logi sisse</button>
            -->
          </div>
        </div>
        <!-- Center elements -->

       <!-- Right elements -->
       <div class="col-lg-5 col-md-12 col-12">
          <div class="input-group float-center d-flex jusitfy-content-center flex-nowrap">
            <div class="form-outline w-100">
              <input placeholder="Otsi" type="search" id="form1" class="form-control rounded-0" />
            </div>
            <button type="button" class="btn shadow-0" style="background-color: #cc2229; color: white;">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <!-- Right elements -->
      </div>
    </div>
  </div>
<!-- Jumbotron -->

  <!-- Heading 
  <div class="bg-primary mb-4">
    <div class="container py-4">
      <h3 class="text-white mt-2">Men's wear</h3>
      
      <nav class="d-flex mb-2">
        <h6 class="mb-0">
          <a href="" class="text-white-50">Home</a>
          <span class="text-white-50 mx-2"> > </span>
          <a href="" class="text-white-50">Library</a>
          <span class="text-white-50 mx-2"> > </span>
          <a href="" class="text-white"><u>Data</u></a>
        </h6>
      </nav>
      
    </div>
  </div>
   -->
</header>
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header justify-content-end">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
    <div class="relative py-2" style="font-size: 20px;">
      <a class="d-flex align-items-center justify-content-between text-decoration-none" style="color: #242424;">
        <div class="d-flex gap-2 align-items-center">
          <i class="fas fa-table-cells"></i>
          <span>
            Minu kuulutused
          </span>
        </div>
        <div class="d-flex justify-content-end">
          <i class="fas fa-angle-right"></i>
        </div>
      </a>
    </div>
    <div class="relative py-2" style="font-size: 20px;">
      <a class="d-flex align-items-center justify-content-between text-decoration-none" style="color: #242424;">
        <div class="d-flex align-items-center gap-2">
          <i class="fas fa-heart"></i>
          <span>Minu lemmikud</span>
        </div>
        <div class="d-flex justify-content-end">
          <i class="fas fa-angle-right"></i>
        </div>
      </a>
    </div>
    <div class="relative py-2" style="font-size: 20px;">
      <a class="d-flex align-items-center justify-content-between text-decoration-none" style="color: #242424;">
        <div class="d-flex align-items-center gap-2">
          <i class="fas fa-user"></i>
          <span>Minu konto</span>
        </div>
        <div class="d-flex justify-content-end">
          <i class="fas fa-angle-right"></i>
        </div>
      </a>
    </div>
    <div class="d-flex gap-1 py-2">
      <button class="flex-grow-1" style="border: 1px solid red; color: red; background-color: white; font-weight: 600; padding: 6px 10px;">
        LOGI SISSE
      </button>
      <button class="flex-grow-1" style="border: 0px; background-color: red; color: white; font-weight: 600; padding: 6px 10px;">
        Lisa kuulutus
      </button>
    </div>
  </div>
</div>


<!--
<template class="page-home">
    <header>
    <img @click="goToHomePage" class="logo" src="https://img.auto24.ee/images/main_logo.svg?v2">
    <div class="middle-section">
      <input type="text" placeholder="Search for a car">
    </div>
    <nav>
      <ul class="nav-links">
        <li>
          <a href="/" class="nav-buttons">Home</a>
        </li>
        <li>
          <a href="/offers" class="nav-buttons">Lisa kuulutus</a>
        </li>
        <li>
          <a role="button" href="/signin">
            <button class="signin-button">Logi sisse</button>
          </a>
        </li>
      </ul>
    </nav>
  </header>

-->

  
  


  <!--
<router-link to="/">Home</router-link>
<router-link to="/profile">Profile</router-link>
<router-link to="/signin">Signin</router-link>
<router-link to="/signup">Signup</router-link>
<router-link to="/offers">Offers</router-link>
<router-link to="/forgotpassword">Forgotpassword</router-link>
  -->



    <router-view />

    <!-- Footer -->
<footer class="text-center text-lg-start text-muted bg-primary mt-3">
  <!-- Section: Links  -->
  <section class="" style="background-color: #242424;">
    <div class="container text-center text-md-start pt-4 pb-4">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-6 col-sm-4 col-lg-2">
          <!-- Links -->
          <h6 class="text-uppercase text-white fw-bold mb-2">
            Jälgi meid
          </h6>
          <ul class="list-unstyled mb-4">
            <li><a class="text-white-50" href="#">Instagram</a></li>
            <li><a class="text-white-50" href="#">Facebook</a></li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-6 col-sm-4 col-lg-2">
          <!-- Links -->
          <h6 class="text-uppercase text-white fw-bold mb-2">
            Info
          </h6>
          <ul class="list-unstyled mb-4">
            <li><a class="text-white-50" href="#">Müügivihjed</a></li>
            <li><a class="text-white-50" href="#">Kuulutamise hinnakiri</a></li>
            <li><a class="text-white-50" href="#">Reklaam</a></li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-6 col-sm-4 col-lg-2">
          <!-- Links -->
          <h6 class="text-uppercase text-white fw-bold mb-2">
            Oluline
          </h6>
          <ul class="list-unstyled mb-4">
            <li><a class="text-white-50" href="#">Kasutustingimused</a></li>
            <li><a class="text-white-50" href="#">Privaatsuspoliitika</a></li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-12 col-sm-12 col-lg-3">
          <!-- Links -->
          <h6 class="text-uppercase text-white fw-bold mb-2">Ole kursis</h6>
          <p class="text-white">Hoia ennast uute auto kuulutustega kursis</p>
          <div class="input-group mb-3">
            <input type="email" class="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
            <button class="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
              Join
            </button>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <div class="" style="background-color: #0f0f0f;">
    <div class="container">
      <div class="d-flex justify-content-between py-4 border-top">
        <!--- payment --->
        <div>
          <i class="fab fa-lg fa-cc-visa text-white"></i>
          <i class="fab fa-lg fa-cc-amex text-white"></i>
          <i class="fab fa-lg fa-cc-mastercard text-white"></i>
          <i class="fab fa-lg fa-cc-paypal text-white"></i>
        </div>
        <!--- payment --->

        <!--- language selector --->
        <div class="dropdown dropup">
          <a class="dropdown-toggle text-white" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i class="flag-united-kingdom flag m-0 me-1"></i>English </a>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
            <li>
              <a class="dropdown-item" href="#"><i class="flag-united-kingdom flag"></i>English <i class="fa fa-check text-success ms-2"></i></a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
            </li>
          </ul>
        </div>
        <!--- language selector --->
      </div>
    </div>
  </div>
</footer>
<!-- Footer -->
<!--
    <footer>
    <div class="container-footer">
      <div class="sec aboutus">
        <h2>Jälgi meid</h2>
        <p style="font-size: 18px;">Tere tulemast meie auto müügi ja rentimise platvormile! Oleme uhked, et saame pakkuda Eesti parimat keskkonda sõidukite ostmiseks, müümiseks ja rentimiseks. Meie platvormi külastab iga nädal mitu tuhat inimest, kes jagavad oma armastust autode vastu. Tutvu meie laia valikuga, leia endale unistuste sõiduk ning liitu meie kasvava kogukonnaga juba täna!</p>
        <ul class="sci">
          <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://www.tiktok.com/foryou"><i class="fa-brands fa-tiktok"></i></a></li>
          <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
      <div class="sec quicklinks">
        <h2>Ettevõttest</h2>
        <ul>
          <li><a href="#">KKK</a></li>
          <li><a href="#">Kasutustingimused</a></li>
          <li><a href="#">Privaatsustingimused</a></li>
          <li><a href="#">Tagastustingimused</a></li>
          <li><a href="#">Vajad abi</a></li>
        </ul>
      </div>
      <div class="sec quicklinks">
        <h2>Toimingud</h2>
        <ul>
          <li><a href="#">Sirvi autosid</a></li>
          <li><a href="#">Autoomanikule</a></li>
          <li><a href="#">Rentijale</a></li>
          <li><a href="#">Kindlustus</a></li>
          <li><a href="#">Kuulutamise Hinnakiri</a></li>
          <li><a href="#">Küpsised</a></li>
        </ul>
      </div>

      <div class="sec contact">
        <h2>Tekkis Küsimusi</h2>
        <ul class="info">
          <li>
            <span><i class="fa-solid fa-phone"></i></span><p><a
             href="tel:+37212345678">Tel: +372 1234 5678</a></p>
          </li>
          <li>
            <span><i class="fa-solid fa-envelope"></i></span>
            <p><a href="#">E-post: asdada@gmail.com</a></p>
          </li>
        </ul>
      </div>

    </div>
  </footer>
  <div class="copyrightText">
    <p>Copyright 2023. All Rights Reserved</p>
  </div>
-->

</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  import { computed, ref, Ref } from 'vue';
  

export default class  extends Vue {
  goToHomePage(): void {
    this.$router.push({ path: '/' });
  }
  data() {
    return {
      logoPath: require('@/pages/logo/AutoRing Main Logo.png')
    }
    
  }
  }
  


</script>







