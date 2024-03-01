<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@400;500&display=swap');
.card:hover .card-title {
    color: red;
  }



  .card-body {
    transition: color 0.3s ease;
  }

/*
    .grid-container {
        max-width: 90%;
        margin: 0 auto;
        margin-top: 5%;
        display: grid;
        column-gap: 0.5%;
        margin-bottom: 2%;
    }
    .filter-panel {
        background-color: rgb(26, 143, 143);
        box-sizing: border-box;
        height: 100%;
        border: 1px solid #e6e6e6;
    }
    .grid-item {
        box-sizing: border-box; 
        margin: 0;
        padding: 0px 0px 5px 5px;
        vertical-align: top;
    }
    .browse-grid {
       display: grid;
       grid-template-columns: repeat(4,1fr);
       grid-template-columns: repeat(auto-fill, minmax(25%, 1fr)); /* Adjust minmax value as needed 
       width: 100%;
       align-items: start;
       align-content: flex-start;
       height: 100%;
    }
    .smart-grid {
        display: flex;
        grid-template-columns: 1fr 4fr;
    }
    .content-accordion {
      
    }
    .question {
      display: flex;
      justify-content: space-between;
      padding: 14px;
      width: 100%;
    }
    
    .title-question {
      margin: 1.4rem 0rem;
      font-size: 24px;
      font-weight: 600;
      color: #333;
      font-family: 'Montserrat', sans-serif;;
    }

    .search-button {
      font-family: 'Montserrat', sans-serif;;
      background-color: black;
      color: white;
      justify-content: center;
      padding:10px 40px 10px 40px;
      font-size: 25px;
      border-radius: 3px;
      width: 100%;
    }

    .search {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 10px;
    }

    .question-btn {
      font-size: 1.5rem;
      background: transparent;
      border-color: transparent;
      cursor: pointer;
    }

    .up-icon {
      display: none;
    }
    .answer {
      font-size: 1.2rem;
      line-height: 1.8;
      display: none;
      padding: 16px;
      justify-content: center;
      align-items: center;
      max-height: 500px;
      overflow-y: auto;
    }
    .answer::-webkit-scrollbar {
      width: 12px;
    }
    .answer::-webkit-scrollbar-thumb {
      background-color: #e6e6e6; 
      border-radius: 8px; 
}
    .question-answer {
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
    }
    .dd-checkbox {
      align-items: center;
      display: flex;
    }
    .dd-label {
      cursor: pointer;
      margin: 0;
      padding: 0 0 0 20px;
      font-size: 25px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;;
    }
    .input-checkbox {
      height: 30px;
      width: 30px;
      border-radius: 5px;
      border: 1px solid;
      align-items: center;
      justify-content: center;
    }
    .color-pallet {
      border: 1px solid #bfbfbf;
      border-radius: 50%;
      display: inline-block;
      height: 24px;
      width: 24px;
      margin-right: 10px;
    }
    .custom-select {
      justify-content: center;
      display: flex;
      padding: 0px 16px 16px 16px ;
      justify-content: space-between;
      flex-basis: 50%;
    }
    .input-number {
      padding: 12px 12px;
      width: 100%;
      border: 1px solid #e6e6e6;
      font-family: 'Montserrat', sans-serif;;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
    }
    .flex-container {
      display: flex;
      align-items: center;
    }
    .pealis-tekst {
      padding-left: 20px;
      font-family: 'Montserrat', sans-serif;;
      font-size: 20px;
    }
   
   .pagination-button:hover {
    background-color: #ffffff;
   }
   .seperator {
    padding: 5px;
   }
   .browsetoggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
    width: 100%;
    overflow-x: auto;
   }
   .sort-select {
    padding: 16px;
    font-size: 23px;
    font-family: 'Montserrat', sans-serif;;
    border-radius: 5px;
    
   }
   .filter-row {
    margin-right: 5px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;;
    padding: 10px;
    border: 1px solid #333;
   }
   .nupp-otsas {
    margin-left: auto;
   }
   .kinni-nupp {
    background: none;
    border: none;
    font-family: 'Montserrat', sans-serif;;
    height: 10px;
    width: 10px;
    padding: 2px;
   }
   .card-body {
    padding: 0px;
   }
   

   .heart-icon {
    position: absolute;
    top: 10px; 
    right: 10px; 
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
   }

.card-text {
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;;
}

.card-year {
  font-size: 23px;
  font-family: 'Montserrat', sans-serif;;
}

.card-price {
  font-family: 'Montserrat', sans-serif;;
  font-size: 25px;
  font-weight: 600;
}
.search-filter-bar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 2px 6px 0 #e6e6e6;
  height: 86px;
  position: sticky;
  top: 0;
  z-index: 10;
}
.filter-button {
  flex: 1;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  font-family: 'Montserrat', sans-serif;;
  font-size: 19px;
}
.sort-button {
  flex: 1;
  background-color: #fff;
  border-right: none;
  border: 1px solid #e6e6e6;
  font-family: 'Montserrat', sans-serif;;
  font-size: 19px;
}

@media screen and (max-width: 768px) {
  .browse-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
  }
}


@media screen and (max-width: 768px) {
    .filter-panel {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .grid-container {
        max-width: 100%;
        padding: 0px 30px 30px 30px;
    }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .browse-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .grid-container {
    max-width: 100%;
    margin: none;
    padding: 30px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .filter-panel {
    display: none;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1800px) {
  .browse-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1201px) and (max-width: 1800px) {
  .grid-container {
    max-width: 100%;
    margin: none;
    padding: 20px;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1800px) {
  .filter-panel {
    display: none;
  }
}

@media screen and (min-width: 1801px) and (max-width: 2200px) {
  .filter-panel {
    display: none;
  }
}

@media screen and (min-width: 1801px) and (max-width: 2200px) {
  .grid-container {
    max-width: 100%;
    margin: none;
    padding: 30px;
  }
}


@media screen and (min-width: 1801px) and (max-width: 2200px) { 
  .browse-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.input-number::-webkit-inner-spin-button,
.input-number::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.clear-section {
  margin-top: 5px;
  text-align: center;
}
.clear-button {
  border: none;
  background:none;
  font-size: 23px;
  font-family: 'Montserrat', sans-serif;;
  font-weight: 500;
}
*/


#carouselExampleInterval {
  max-width: 1320px;
  margin: auto;
}

#carouselExampleInterval .carousel-inner {
  max-height: 350px;
}

#carouselExampleInterval .carousel-item {
  width: 100%;
}

#carouselExampleInterval .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}





</style>

<template>
  
  <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="4000" >
      <img src="https://cdn.motor1.com/images/mgl/wl4o6m/s3/volvo-ex90-excellence-das-exterieur.jpg" class="d-block w-100"  alt="Wild Landscape"/>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100"  alt="Camera"/>
    </div>
    <div class="carousel-item" data-mdb-interval="4000">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Exotic Fruits"/>
    </div>
    <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>


  <!-- Jumbotron -->

<!-- Products -->
<section>
  <div class="container my-5">
    <!--siitalgab esimene-->
  <div class="d-flex w-full justify-content-between">
    <h3 class="">Müügikuulutused</h3>
    <div>
      <button class="border" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style="">
       <span class="" aria-hidden="true">&#11164;</span>
       <span class="visually-hidden">Previous</span>
      </button>
      <button class="border" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
       <span class="" aria-hidden="true">&#11166;</span>
       <span class="visually-hidden">Next</span>
      </button>
    </div>
</div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row" style="background-color: white;">
        <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row" style="background-color: white;">
        <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top"/>
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
        <!--
        <div class="card w-100 my-2 shadow-2-strong rounded-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      -->
      
      <div class="d-flex justify-content-end w-full">
        <a class="link-text mt-2" style="font-size: 17px; font-weight: 600; color: #cc2229; text-decoration: none; cursor: pointer;">Kõik müügi kuulutused -></a>
      </div>
    </div>


</section>
<!-- Products -->

<!-- Products -->
<section>
  <div class="container my-5">
    <div class="d-flex w-full justify-content-between">
      <h3>Rendikuulutused</h3>
      <div>
      <button class="border" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev" style="">
       <span class="" aria-hidden="true">  &#11164;</span>
       <span class="visually-hidden">Previous</span>
      </button>
      <button class="border" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
       <span class="" aria-hidden="true">&#11166;</span>
       <span class="visually-hidden">Next</span>
      </button>
    </div>
</div>
<div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row" style="background-color: white;">
        <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row" style="background-color: white;">
        <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top"/>
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 ">
        <div class="card w-100 my-2 shadow-2-strong">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruGogQ04TtHxYPHDbfh5EGTIMDz_hJgacw&usqp=CAU" class="card-img-top" style="" />
          <div class="card-body d-flex flex-column" >
            <div class="d-flex justify-content-between">
              <h5 class="card-title m-0">Volvo XC 60</h5>
              <p class="m-0" style="color: #cc2229;">UUS</p>
            </div>
            <div class="mt-2" style="color: gray;">Viimsi vald</div>
            <div class="d-flex justify-content-between mt-2" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="price card-text mt-2" style="font-size: 20px; font-weight: 600;">790.50</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
      <div class="d-flex justify-content-end w-full">
        <a class=" mt-2" style="font-size: 17px; font-weight: 600; color: #cc2229; text-decoration: none; cursor: pointer;">Kõik rendi kuulutused -></a>
      </div>
    </div>
  </div>
</section>
<!-- Products -->

<!-- Feature -->
<section class="mt-5" style="background-color: #242424;">
  <div class="container text-dark pt-3">
    <header class="pt-4 pb-3" style="color:white;">
      <h3>Miks AutoRing</h3>
    </header>

    <div class="row mb-4">
      <div class="col-lg-4 col-md-6">
        <figure class="d-flex align-items-center mb-4">
          <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i class="fas fa-camera-retro fa-2x fa-fw text-primary floating"></i>
          </span>
          <figcaption class="info" style="color: white;">
            <h6 class="title">Reasonable prices</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
          </figcaption>
        </figure>
        <!-- itemside // -->
      </div>
      <!-- col // -->
      <div class="col-lg-4 col-md-6">
        <figure class="d-flex align-items-center mb-4">
          <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i class="fas fa-star fa-2x fa-fw text-primary floating"></i>
          </span>
          <figcaption class="info" style="color: white;">
            <h6 class="title">Best quality</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
          </figcaption>
        </figure>
        <!-- itemside // -->
      </div>
      <!-- col // -->
      <div class="col-lg-4 col-md-6">
        <figure class="d-flex align-items-center mb-4">
          <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i class="fas fa-plane fa-2x fa-fw text-primary floating"></i>
          </span>
          <figcaption class="info" style="color: white;">
            <h6 class="title">Worldwide shipping</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
          </figcaption>
        </figure>
        <!-- itemside // -->
      </div>
      <!-- col // -->
      <div class="col-lg-4 col-md-6">
        <figure class="d-flex align-items-center mb-4">
          <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i class="fas fa-users fa-2x fa-fw text-primary floating"></i>
          </span>
          <figcaption class="info" style="color: white;">
            <h6 class="title">Customer satisfaction</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
          </figcaption>
        </figure>
        <!-- itemside // -->
      </div>
      <!-- col // -->
      <div class="col-lg-4 col-md-6">
        <figure class="d-flex align-items-center mb-4">
          <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i class="fas fa-thumbs-up fa-2x fa-fw text-primary floating"></i>
          </span>
          <figcaption class="info" style="color: white;">
            <h6 class="title">Happy customers</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
          </figcaption>
        </figure>
        <!-- itemside // -->
      </div>
      <!-- col // -->
      <div class="col-lg-4 col-md-6">
        <figure class="d-flex align-items-center mb-4">
          <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i class="fas fa-box fa-2x fa-fw text-primary floating"></i>
          </span>
          <figcaption class="info" style="color: white;"> 
            <h6 class="title">Thousand items</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
          </figcaption>
        </figure>
        <!-- itemside // -->
      </div>
      <!-- col // -->
    </div>
  </div>
  <!-- container end.// -->
</section>
<!-- Feature -->

<!-- Blog -->
<section class="mt-5 mb-4">
  <div class="container text-dark">
    <header class="mb-4 d-flex justify-content-between">
      <h3>Hiljuti vaadatud</h3>
      <div>
      <button class="border" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev" style="">
       <span class="" aria-hidden="true"> &#11164;  </span>
       <span class="visually-hidden">Previous</span>
      </button>
      <button class="border" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
       <span class="" aria-hidden="true">&#11166;</span>
       <span class="visually-hidden">Next</span>
      </button>
    </div>
    </header>
<!--Siit algab-->
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <article class="border mb-3">
          <a href="#" class="img-fluid">
            <img class="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_La9o4H5e8B7XSrQjZALPk7nfomC4f4hAg&usqp=CAU" style="object-fit: cover;" height="160" />
          </a>
          <a class=" text-muted small d-block p-2" style="text-decoration: none;">
            <div class="d-flex justify-content-between mb-1">
              <h6 class="mb-0">Volvo XC 60</h6>
              <p class="mb-0">UUS</p>
            </div>
            <div class="d-flex justify-content-between" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="mb-0" style="font-size: 20px; font-weight: 600;">790.50</p>
          </a>
        </article>
      </div>
      <!--Siin loppeb-->
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <article class="border mb-3">
          <a href="#" class="img-fluid">
            <img class="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_La9o4H5e8B7XSrQjZALPk7nfomC4f4hAg&usqp=CAU" style="object-fit: cover;" height="160" />
          </a>
          <a class=" text-muted small d-block p-2" style="text-decoration: none;">
            <div class="d-flex justify-content-between mb-1">
              <h6 class="mb-0">Volvo XC 60</h6>
              <p class="mb-0">UUS</p>
            </div>
            <div class="d-flex justify-content-between" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="mb-0" style="font-size: 20px; font-weight: 600;">790.50</p>
          </a>
        </article>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <article class="border mb-3">
          <a href="#" class="img-fluid">
            <img class="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_La9o4H5e8B7XSrQjZALPk7nfomC4f4hAg&usqp=CAU" style="object-fit: cover;" height="160" />
          </a>
          <a class=" text-muted small d-block p-2" style="text-decoration: none;">
            <div class="d-flex justify-content-between mb-1">
              <h6 class="mb-0">Volvo XC 60</h6>
              <p class="mb-0">UUS</p>
            </div>
            <div class="d-flex justify-content-between" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="mb-0" style="font-size: 20px; font-weight: 600;">790.50</p>
          </a>
        </article>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <article class="border mb-3">
          <a href="#" class="img-fluid">
            <img class="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_La9o4H5e8B7XSrQjZALPk7nfomC4f4hAg&usqp=CAU" style="object-fit: cover;" height="160" />
          </a>
          <a class="text-muted small d-block p-2" style="text-decoration: none;">
            <div class="d-flex justify-content-between mb-1">
              <h6 class="mb-0">Volvo XC 60</h6>
              <p class="mb-0">UUS</p>
            </div>
            <div class="d-flex justify-content-between" style="font-weight: 600;">
              <div>1423km</div>
              <div>2019</div>
              <div>Automaat</div>
              <div>Diisel</div>
            </div>
            <p class="mb-0" style="font-size: 20px; font-weight: 600;">790.50</p>
          </a>
        </article>
      </div>
    </div>
  </div>
</section>
<!-- Blog -->
     <!--
<div class="container pt-5 ">
    <div class="row">
    <div class="col-md-8 order-md-2 col-lg-9">
      <div class="container-fluid">
        <div class="row">
          <div v-for="port of ports" :key="port.id" class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card h-100 border-0">
              <div class="card-img-top">
                <img src="https://via.placeholder.com/240x240/5fa9f8/efefef" class="img-fluid mx-auto d-block" alt="Card image cap">
              </div>
              <div class="card-body text-center">
                <h4 class="card-title">
                  <a href="product.html" class=" font-weight-bold text-dark text-uppercase small"> Product name</a>
                </h4>
                <h5 class="card-price small text-warning">
                  <i>
                    <s>$199</s> $99</i>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>







<section class="main-section">    
    <div class="grid-container">
  
      <div class="search-filter-bar">
        <button class="sort-button">Sorteeri</button>
        <button class="filter-button">Filtreeri</button>
      </div>
      
    <div class="browsetoggle">
      <div v-for="(option, index) in selectedOptions" :key="index" class="filter-row">
        {{option}}
        <button class="kinni-nupp" @click="removeFilter(option)"><i class="fa-solid fa-xmark"></i></button>
    </div>
    </div>
    
      <div class="smart-grid">
        <div class="filter-panel">
          <div class="content-accordion">
            <div class="question-answer" ref="accordionKuulutusetuup">
              <div class="question" @click="toggleAccordionUsingArray(8, 'accordionKuulutusetuup')">
                <h3 class="title-question">
                  Kuulutusetüüp
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(kuulutusetuup, index) in kuulutusetuubid" :key="index">
                  <input  v-model="selectedOptionsKuulutusetuup" :value="kuulutusetuup.value" class="input-checkbox" type="radio" :id="'kuulutusetuubid_' + index" name="scales"/>
                  <label class="dd-label" :for="'kuulutusetuubid_' + index">
                    {{ kuulutusetuup.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionKeretyyp">
              <div class="question" @click="toggleAccordionUsingArray(0, 'accordionKeretyyp')">
                <h3 class="title-question">
                  Keretüüp
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(keretyyp, index) in keretyybid" :key="index">
                  <input v-model="selectedOptionsKeretyyp" :value="keretyyp.value" class="input-checkbox" type="checkbox" :id="'keretyybid_' + index" name="scales"/>
                  <label class="dd-label" :for="'keretyybid_' + index">
                    {{ keretyyp.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionMark">
              <div class="question" @click="toggleAccordionUsingArray(1, 'accordionMark')">
                <h3 class="title-question">
                  Mark
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(mark, index) in margid" :key="index">
                  <input v-model="selectedOptions" :value="mark.value" :id="'margid_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" for="'margid_' + index">
                    {{ mark.label }} ({{ markCounts[mark.value] || 0 }})
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionInterjoor">
              <div class="question" @click="toggleAccordionUsingArray(2, 'accordionInterjoor')">
                <h3 class="title-question">
                  Kerevärv 
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(interjoor, index) in interjoorid" :key="index">
                  <input v-model="selectedOptionsInterjoor" :value="interjoor.value" :id="'interjoorid_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'interjoorid_' + index">
                    <div class="color-pallet" :style="`background: ${interjoor.color}`"></div>
                    {{ interjoor.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionKytus">
              <div class="question" @click="toggleAccordionUsingArray(3, 'accordionKytus')">
                <h3 class="title-question">
                  Kütus
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(kytus, index) in kytused" :key="index">
                  <input v-model="selectedOptionsKytus" :value="kytus.value" :id="'kytused_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'kytused_' + index">
                    {{ kytus.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionVedavsild">
              <div class="question" @click="toggleAccordionUsingArray(4, 'accordionVedavsild')">
                <h3 class="title-question">
                  Vedavsild
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(vedavsild, index) in vedavadsillad" :key="index">
                  <input v-model="selectedOptionsVedavsild" :value="vedavsild.value" :id="'vedavadsillad_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'vedavadsillad_' + index">
                    {{ vedavsild.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionKaigukast">
              <div class="question" @click="toggleAccordionUsingArray(5, 'accordionKaigukast')">
                <h3 class="title-question">
                  Käigukast
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(kaigukast, index) in kaigukastid" :key="index">
                  <input v-model="selectedOptionsKaigukast" :value="kaigukast.value" :id="'kaigukastid_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'kaigukastid_' + index">
                    {{ kaigukast.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionMeelelahutus">
              <div class="question" @click="toggleAccordionUsingArray(6, 'accordionMeelelahutus')">
                <h3 class="title-question">
                  Meelelahutus
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(meelelahutus, index) in meelelahutused" :key="index">
                  <input v-model="selectedOptionsMeelelahutus" :value="meelelahutus.value" :id="'meelelahutused_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'meelelahutused_' + index">
                    {{ meelelahutus.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionUks">
              <div class="question" @click="toggleAccordionUsingArray(7, 'accordionUks')">
                <h3 class="title-question">
                  Uste arv
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(uks, index) in uksed" :key="index">
                  <input v-model="selectedOptionsUks" :value="uks.value" :id="'uksed_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'uksed_' + index">
                    {{ uks.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer" ref="accordionAsukoht">
              <div class="question" @click="toggleAccordionUsingArray(9, 'accordionAsukoht')">
                <h3 class="title-question">
                  Asukoht
                </h3>
                <button class="question-btn">
                  <span class="up-icon">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span class="down-icon">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
              </div>
              <div class="answer">
                <div class="dd-checkbox" v-for="(asukoht, index) in asukohad" :key="index">
                  <input v-model="selectedOptionsAsukoht" :value="asukoht.value" :id="'asukohad_' + index" class="input-checkbox" type="checkbox" name="scales"/>
                  <label class="dd-label" :for="'asukohad_' + index">
                    {{ asukoht.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer">
              <span class="pealis-tekst">Läbisõidumõõdiku näit (km)</span>
              <div class="flex-container">
                <div class="custom-select">
                  <input type="number" v-model="sortingOptions.minMileage" class="input-number" placeholder="min" @input="handleMinMileageInput">
                </div>
                <div class="seperator">-</div>
                <div class="custom-select">
                  <input type="number" v-model="sortingOptions.maxMileage" class="input-number" placeholder="max" @input="handleMaxMileageInput">
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer">
              <span class="pealis-tekst">Aasta</span>
              <div class="flex-container">
                <div class="custom-select">
                  <input type="number" v-model="sortingOptions.minYear" class="input-number" placeholder="min" @input="handleMinYearInput">
                </div>
                <div class="seperator">-</div>
                <div class="custom-select">
                  <input type="number" v-model="sortingOptions.maxYear" class="input-number" placeholder="max" @input="handleMaxYearInput">
                </div>
              </div>
            </div>
          </div>
          <div class="content-accordion">
            <div class="question-answer">
              <span class="pealis-tekst">Hind €</span>
              <div class="flex-container">
                <div class="custom-select">
                  <input type="number" v-model="sortingOptions.minPrice" placeholder="min" class="input-number" @input="handleMinPriceInput">
                </div>
                <div class="seperator">-</div>
                <div class="custom-select">
                  <input type="number" v-model="sortingOptions.maxPrice" placeholder="max" class="input-number" @input="handleMaxPriceInput">
                </div>
              </div>
            </div>
          </div>
          <div class="search">
              <button @click="onSearchClick" class="search-button">Otsi ({{ totalPorts }})</button>
          </div>
          <div class="clear-section">
            <button @click="clearFilters" class="clear-button">Puhasta väljad</button>
          </div>
                  
        </div>

        <div class="nupp-otsas">
        <div class="sort-select">
          <select>
          <option disabled value="">Sorteeri</option>
          <option value="Alates kallimast">Alates kallimast</option>
          <option value="Alates odavamast">Alates odavamast</option>
          <option value="Väikseim läbisõit">Väikseim läbisõit</option>
          <option value="Suurim läbisõit">Suurim läbisõit</option>
          <option value="Alates uuemast">Alates uuemast</option>
          <option value="Alates vanemast">Alates vanemast</option>
          </select>
      </div>
      </div>
       

          <div class="browse-grid">
            <div v-for="port in displayedPorts"  :key="port.id" class="grid-item"> 
              <div class="card" style="border-color: rgb(187, 187, 187); border-radius: 1px; padding: 3px;">
                <div class="card-text">{{ port }}</div> 
                <img :src="port.url" class="card-img-top" alt="Car Image">
                <div class="card-body">
                  <div class="card-text">{{ port.mark }}</div>
                  <div class="card-year">{{ port.year }}</div>
                  <div class="card-price">{{ port.price }} €</div>
                </div>
                <div class="heart-container">
                 <button class="heart-icon" ><i class="fa-regular fa-heart"></i></button>
                </div>
             </div>
           </div>
         </div>
        </div>
      </div>
      <div>
      </div>
      <div id="App">
        <pagination
      :totalPages="totalPages"
      :perPage="perPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange">
      </pagination>
      </div>
</section>   
-->
 

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { ICarAdd } from "../models/ICarAdd"
import Pagination from "../pages/Pagination.vue";
import { Carousel, initMDB } from "mdb-ui-kit";


initMDB({ Carousel });

/*
@Options({
  components: {
        HelloWorld,
        Pagination,
    },
    name: 'App',
    data () {
      return {
        currentPage: 1,
        totalPages: 10,
        maxVisibleButtons: 5,
        selectedOptions: [] as string[],
        selectedOptionsAsukoht: [] as string[],
        selectedOptionsUks: [] as string[],
        selectedOptionsMeelelahutus: [] as string[],
        selectedOptionsKaigukast: [] as string[],
        selectedOptionsVedavsild: [] as string[],
        selectedOptionsKuulutuseTuup: [] as string[],
        sortingOptions: {
          minPrice: null as number | null,
          maxPrice: null as number | null,
          minYear: null as number | null,
          maxYear: null as number | null,
          minMileage: null as number | null,
          maxMileage: null as number | null,
        },
        ports: [] as ICarAdd[],
        perPage: 32,
      };
    },
    methods: {
     
      removeOption(selectedOptions: string, optionToRemove: string) {
    this[selectedOptions] = this[selectedOptions].filter((option: string) => option !== optionToRemove);

    this.removeOption('selectedOptions', optionToRemove);
  },
  
    clearFilters() {
      this.selectedOptionsUks = [];
      this.selectedOptionsAsukoht = [];

      this.sortingOptions.minYear = null;
      this.sortingOptions.maxYear = null;
      this.sortingOptions.minPrice = null;
      this.sortingOptions.maxPrice = null;
    },
    mounted() {
        this.onSearchClick();
    },
    onPageChange(page: number) {
      console.log(page)
      this.currentPage = page;
    },
    filterCarsByPrice(ports: ICarAdd[]): ICarAdd[] {
      let minPrice = this.sortingOptions.minPrice;
      let maxPrice = this.sortingOptions.maxPrice;

      if (minPrice !== null && maxPrice !== null) {
        return ports.filter((port: ICarAdd) => port.price >= minPrice && port.price <= maxPrice);
      } else if (minPrice != null) {
        return ports.filter((port: ICarAdd) => port.price >= minPrice);
      } else if (maxPrice != null) {
        return ports.filter((port: ICarAdd) => port.price <= maxPrice);
      }
      return ports;
    },
    filterCarsByYear(ports: ICarAdd[]): ICarAdd[] {
      let minYear = this.sortingOptions.minYear;
      let maxYear = this.sortingOptions.maxYear;
      console.log("ports.length")
      console.log(ports.length)

      if (minYear != null && maxYear != null) {
        return ports.filter((port: ICarAdd) => port.year >= minYear && port.year <= maxYear);
      } else if (minYear != null) {
        return ports.filter((port: ICarAdd) => port.year >= minYear);
      } else if (maxYear != null) {
        return ports.filter((port: ICarAdd) => port.year <= maxYear);
      }
      return ports;
    },
    filterCarsByMileage(ports: ICarAdd[]): ICarAdd[] {
      let minMileage = this.sortingOptions.minMileage;
      let maxMileage = this.sortingOptions.maxMileage

      if (minMileage != null && maxMileage != null) {
        return ports.filter((port: ICarAdd) => port.mileage >= minMileage && port.mileage <= maxMileage);
      } else if (minMileage != null) {
        return ports.filter((port: ICarAdd) => port.mileage >= minMileage);
      } else if (maxMileage != null) {
        return ports.filter((port: ICarAdd) => port.mileage <= maxMileage);
      }
      return ports;
    },
    onSearchClick(): void {
  

  this.displayedPorts = this.filteredPorts.slice();
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredPorts.length / this.perPage);      
    },
    handleMinPriceInput() {
      // Prevent going to negative values
      if (this.sortingOptions.minPrice < 0) {
        this.sortingOptions.minPrice = 0;
      }
    },
    handleMaxPriceInput() {
      // Prevent going to negative values
      if (this.sortingOptions.maxPrice < 0) {
        this.sortingOptions.maxPrice = 0;
      }
    },
    handleMinYearInput() {
      // Prevent going to negative values
      if (this.sortingOptions.minYear < 0) {
        this.sortingOptions.minYear = 0;
      }
    },
    handleMaxYearInput() {
      // Prevent going to negative values
      if (this.sortingOptions.maxYear < 0) {
        this.sortingOptions.maxYear = 0;
      }
    },
    handleMinMileageInput() {
      //Prevent going negative
      if(this.sortingOptions.minMileage < 0) {
        this.sortingOptions.minMileage = 0;
      }
    },
    handleMaxMileageInput() {
      // Prevent going to negative values
      if (this.sortingOptions.maxMileage < 0) {
        this.sortingOptions.maxMileage = 0;
      }
    }
  },
  computed: {
    displayedPorts(): ICarAdd[] {
    const startIndex = (this.currentPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;


    if (this.selectedOptions.length === 0 || this.selectedOptionsAsukoht.length === 0 ||
     this.selectedOptionsUks.length === 0 || this.selectedOptionsMeelelahutus.length === 0 ||
     this.selectedOptionsKaigukast.length === 0 || this.selectedOptionsKytus.length === 0 ||
     this.selectedOptionsInterjoor.length === 0 || this.selectedOptionsKeretyyp.length === 0 ||
     this.selectedOptionsKuulutusetuup.length === 0) {
      return this.displayedPorts.slice(startIndex, endIndex);
    } else {
      const filteredPorts = this.filteredPorts.filter((port: ICarAdd) => 
      this.selectedOptions.includes(port.mark) &&
      this.selectedOptionsAsukoht.includes(port.location) &&
      this.selectedOptionsUks.includes(port.doorCount) &&
      this.selectedOptionsMeelelahutus.includes(port.entertainment) &&
      this.selectedOptionsKaigukast.includes(port.transmission) &&
      this.selectedOptionsVedavsild.includes(port.vedavsild) &&
      this.selectedOptionsKytus.includes(port.fuel) &&
      this.selectedOptionsInterjoor.includes(port.color) &&
      this.selectedOptionsKeretyyp.includes(port.bodyType) &&
      this.selectedOptionsKuulutusetuup.includes(port.adType)
      );
    
      return filteredPorts.slice(startIndex, endIndex);
    }
      /*
      if (this.selectedOptions.length === 0) {
        return this.displayedPorts;
      } else {
        return this.displayedPorts.filter((port: ICarAdd) => this.selectedOptions.includes(port.mark));
      }
      */
     /*
    },
    filteredPorts(): ICarAdd[] {
      let filteredPorts: ICarAdd[] = [...this.ports];  
/*
      // Filter cars by bodytype
      if(this.selectedOptions.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptions.includes(port.bodyType));
      }
      */
     // Filter cars by adtype 
     /*
     if (this.selectedOptionsKuulutusetuup.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsKuulutusetuup.includes(port.adType));
      }
     // Filter cars by bodytype
     if (this.selectedOptionsKeretyyp.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsKeretyyp.includes(port.bodyType));
      }
     //Filter cars by color
     if (this.selectedOptionsInterjoor.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsInterjoor.includes(port.color));
      }
     //Filter cars by fuel
     if (this.selectedOptionsKytus.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsKytus.includes(port.fuel));
      }
      //Filter cars by vedavsild
      if (this.selectedOptionsVedavsild.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsVedavsild.includes(port.vedavsild));
      }
      //Filter cars by kaigukast
      if (this.selectedOptionsKaigukast.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsKaigukast.includes(port.transmission));
      }
     //Filter cars by entertainment
     if (this.selectedOptionsMeelelahutus.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsMeelelahutus.includes(port.entertainment));
      }
      // Filter cars by selected doors
      if (this.selectedOptionsUks.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsUks.includes(port.doorCount));
      }
     // Filter cars by selected locations
      if (this.selectedOptionsAsukoht.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptionsAsukoht.includes(port.location));
      }
       // Filter cars by selected marks
      if (this.selectedOptions.length > 0) {
        filteredPorts = filteredPorts.filter((port: ICarAdd) => this.selectedOptions.includes(port.mark));
      }

       // Filter cars by price
       if (this.sortingOptions.minPrice != null || this.sortingOptions.maxPrice != null) {
        filteredPorts = this.filterCarsByPrice(filteredPorts);
       }

       //Filter cars by mileage
       if (this.sortingOptions.minMileage != null || this.sortingOptions.maxMileage != null) {
        filteredPorts = this.filterCarsByMileage(filteredPorts);
       }


        // Filter cars by year
      if (this.sortingOptions.minYear != null || this.sortingOptions.maxYear != null) {
        filteredPorts = this.filterCarsByYear(filteredPorts);
      }

      // Sort by price and year
      filteredPorts.sort((a: ICarAdd, b: ICarAdd) => {
        if (a.price != b.price) {
          return a.price - b.price;
        } else if (a.year != b.year) {
          return a.year - b.year;
        } else {
          return a.mileage - b.mileage
        }
      });
      return filteredPorts
        // Update the displayed ports
        /*
        this.displayedPorts = [...filteredPorts];
        this.currentPage = 1;
        
        
    },
    perPage(): number {
      return 32;
    },
    totalPorts(): number {
      return this.displayedPorts.length;
    },
    totalPages(): number {
      return Math.ceil(this.filteredPorts.length / this.perPage);
    },/*
    showPorts(): ICarAdd[] {
    const startIndex = (this.currentPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    
    let filteredPorts = this.selectedOptions.length === 0
      ? this.displayedPorts
      : this.displayedPorts.filter((port: ICarAdd) => this.selectedOptions.includes(port.mark));

    return filteredPorts.slice(startIndex, endIndex);
    },
    
    // Counts how many car marks are displayed
    markCounts(): Record<string, number> {
      const counts: Record<string, number> = {};

      for (const port of this.ports) {
      if (counts[port.mark]) {
        counts[port.mark]++;
      } else {
        counts[port.mark] = 1;
      }
    }

    return counts;
    } 
  },
  
})
*/ 
export default class Home extends Vue {
  /*
  currentPage!: number;
  displayedPorts: ICarAdd[] = []

  onPageChange(page: number): void {
    this.currentPage = page;
  }
*/
  
    /*ports: ICarAdd[] = [
        {id:'1', mark:'Volvo', year:2020, price: 43654,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'2', mark:'Volvo', year:2021, price: 85649,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'3', mark:'Volvo', year:1990, price: 12313,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'4', mark:'BMW', year:1995, price: 85675,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'5', mark:'Honda', year:2024, price: 12312,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'6', mark:'Nissan', year:2012, price: 18354,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'7', mark:'Ford', year:2011, price: 21546,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'8', mark:'Ferrari', year:2008, price: 3215,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'9', mark:'Volvo', year:2007, price: 32168,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'10', mark:'Jeep', year:2005, price: 3215,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'11', mark:'Mercedes', year:2019, price: 51685,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'12', mark:'Peugeot', year:2003, price: 12662,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'13', mark:'Bentley', year:2017, price: 32165,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'14', mark:'Bentley', year:2023, price: 21556,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'15', mark:'Peugeot', year:2009, price: 16549,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'16', mark:'Ferrari', year:2005, price: 15466,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'17', mark:'Ford', year:2014, price: 11663,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'18', mark:'Nissan', year:2013, price: 10000,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'19', mark:'BMW', year:2018, price: 48654,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'20', mark:'Hyundai', year:2000, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'21', mark:'Jeep', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'22', mark:'Mercedes', year:2015, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'23', mark:'Peugeot', year:2009, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'24', mark:'Jeep', year:2002, price: 7441,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'25', mark:'BMW', year:2020, price: 90000,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'26', mark:'Nissan', year:2000, price: 15454,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'27', mark:'Ferrari', year:1999, price: 1200000,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'28', mark:'Volvo', year:2020, price: 21542,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'29', mark:'Ferrari', year:2021, price: 43654,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'30', mark:'Volvo', year:2020, price: 8564,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'31', mark:'Volvo', year:2020, price: 12313,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'32', mark:'Volvo', year:2020, price: 85675,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'33', mark:'Volvo', year:2020, price: 12312,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'34', mark:'Volvo', year:2020, price: 34535,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'35', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'36', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'37', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'38', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'39', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'40', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'41', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'42', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'43', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'44', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'45', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'46', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'47', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'48', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'49', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'50', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'51', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'52', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'53', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'54', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'55', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'56', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'57', mark:'Volvo', year:2020, price: 10234,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'58', mark:'Jeep', year:2014, price: 5616,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'59', mark:'Peugeot', year:2001, price: 5146,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},
        {id:'60', mark:'Peugeot', year:2010, price: 15423,url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs"},

    ]; 
    ports: ICarAdd[] = []
    keretyybid: { label:string, value: string, selected: boolean}[] = [
      { label: "Sedaan", value: "Sedaan", selected: false},
      { label: "Luukpära", value: "Luukpära", selected: false},
      { label: "Universaal", value: "Universaal", selected: false},
      { label: "Mahtuniversaal", value: "Mahtuniversaal", selected: false},
      { label: "Kupee", value: "Kupee", selected: false},
      { label: "Kabriolett", value: "Kabriolett", selected: false},
      { label: "Pikap", value: "Pikap", selected: false},
      { label: "Limusiin", value: "Limusiin", selected: false},
      { label: "Lahtine", value: "Lahtine", selected: false},
      { label: "Väikekaubik", value: "Väikekaubik", selected: false},
      { label: "Kaubik", value: "Kaubik", selected: false},
      { label: "Veok", value: "Veok", selected: false},
    ];

  selectedOptionsKeretyyp: { label: string; value: string }[] = [];

    margid: { label:string, value:string}[] = [
      { label: "Volvo", value: "Volvo"},
      { label: "BMW", value: "BMW"},
      { label: "Toyota", value: "Toyota"},
      { label: "Mercedes", value: "Mercedes"},
      { label: "Porsche", value: "Porsche"},
      { label: "Hyundai", value: "Hyundai"},
      { label: "Nissan", value: "Nissan"},
      { label: "Jeep", value: "Jeep"},
      { label: "Lexus", value: "Lexus"},
      { label: "Peugeot", value: "Peugeot"},
      { label: "Ford", value: "Ford"},
      { label: "Bentley", value: "Bentley"},
    ];

    selectedOptions: { label: string; value: string }[] = [];

    interjoorid: { label:string; color: string; value: string}[] = [
      { label: "Valge", color: "#fff", value: "Valge"},
      { label: "Must", color: "#000", value: "Must"},
      { label: "Beež", color: "#faf0e6", value: "Beež"},
      { label: "Sinine", color: "#0000FF", value: "Sinine"},
      { label: "Pruun", color: "#964B00", value: "Pruun"},
      { label: "Kuldne", color: "#FFD700", value: "Kuldne"},
      { label: "Hall", color: "#808080", value: "Hall"},
      { label: "Roheline", color: "#008000", value: "Roheline"},
      { label: "Oranž", color: "#FFA500", value: "Oranž"},
      { label: "Roosa", color: "#FFC0CB", value: "Roosa"},
      { label: "Lilla", color: "#800080", value: "Lilla"},
      { label: "Punane", color: "#FF0000", value: "Punane"},
      { label: "Hõbe", color: "#C0C0C0", value: "Hõbe"},
      { label: "Kollane", color: "#FFFF00", value: "Kollane"},
    ];

    selectedOptionsInterjoor: { label: string; value: string }[] = [];

    kytused: {label:string; value:string}[] = [
      {label: "Diisel", value: "Diisel"},
      {label: "Bensiin", value: "Bensiin"},
      {label: "Elekter", value: "Elekter"},
      {label: "Vesinik", value: "Vesinik"},
      {label: "Etanool", value: "Etanool"},
      {label: "Hübriid", value: "Hübriid"},
      {label: "Pistikhübriid", value: "Pistikhübriid"},
      {label: "CNG (surugaas)", value: "CNG (surugaas)"},
      {label: "LPG (vedelgaas)", value: "LPG (vedelgaas)"},
      {label: "LNG (veeldatud maagaas)", value: "LNG (veeldatud maagaas)"},
    ];

    selectedOptionsKytus: { label: string; value: string }[] = [];

    vedavadsillad: {label: string; value: string}[] = [
      {label: "Esivedu", value: "Esivedu"},
      {label: "Tagavedu", value: "Tagavedu"},
      {label: "Nelikvedu", value: "Nelikvedu"},
    ];

    selectedOptionsVedavsild: { label: string; value: string }[] = [];

    kaigukastid: {label: string; value: string}[] = [
      {label: "Automaat", value: "Automaat"},
      {label: "Manuaal", value: "Manuaal"},
      {label: "Poolmanuaal", value: "Poolmanuaal"},
    ];

    selectedOptionsKaigukast: { label: string; value: string }[] = [];


    meelelahutused: {label: string; value: string}[] = [
      {label: "Bluetooth", value: "Bluetooth"},
      {label: "Apple CarPlay", value: "Apple CarPlay"},
      {label: "Android Auto", value: "Android Auto"},
      {label: "USB Port", value: "USB Port"},
      {label: "Preemium helisüsteem", value: "Preemium helisüsteem"},
      {label: "Tagaistme meelelahutus", value: "Tagaistme meelelahutus"},
    ];

    selectedOptionsMeelelahutus: { label: string; value: string }[] = [];

    uksed: {label: number; value: number}[] = [
      {label: 2 , value: 2 },
      {label: 3 , value: 3 },
      {label: 4 , value: 4 },
      {label: 5 , value: 5 },
      {label: 6 , value: 6 },
    ];

    selectedOptionsUks: { label: number; value: number }[] = [];

    kuulutusetuubid: {label: string; value:string}[] = [
      {label: "Müük", value: "Müük"},
      {label: "Rent", value: "Rent"},
    ];

    selectedOptionsKuulutusetuup: { label: number; value: number }[] = [];

    valitud_tyyp: string | undefined = undefined

    asukohad: {label: string; value: string}[] = [
      {label: "Tallinn", value: "Tallinn"},
      {label: "Tartu", value: "Tartu"},
      {label: "Pärnu", value: "Pärnu"},
      {label: "Harjumaa", value: "Harjumaa"},
      {label: "Hiiumaa", value: "Hiiumaa"},
      {label: "Ida-Virumaa", value: "Ida-Virumaa"},
      {label: "Jõgevamaa", value: "Jõgevamaa"},
      {label: "Järvamaa", value: "Järvamaa"},
      {label: "Läänemaa", value: "Läänemaa"},
      {label: "Lääne-Virumaa", value: "Lääne-Virumaa"},
      {label: "Põlvamaa", value: "Põlvamaa"},
      {label: "Pärnumaa", value: "Pärnumaa"},
      {label: "Raplamaa", value: "Raplamaa"},
      {label: "Saaremaa", value: "Saaremaa"},
      {label: "Tartumaa", value: "Tartumaa"},
      {label: "Haapsalu", value: "Haapsalu"},
      {label: "Valgamaa", value: "Valgamaa"},
      {label: "Viljandimaa", value: "Viljandimaa"},
      {label: "Võrumaa", value: "Võrumaa"},
      {label: "Välismaa", value: "Välismaa"},
    ];

    selectedOptionsAsukoht: { label: string; value: string }[] = [];

    

    accordionOpen: boolean[] = new Array(this.keretyybid.length).fill(false);

    mounted(): void {
      this.createCars()
      this.displayedPorts = this.ports
    }

    toggleAccordion(index: number): void {
      this.accordionOpen[index] = !this.accordionOpen[index];
    }

    toggleAccordionUsingArray(index: number, refName: string): void {
      this.toggleAccordion(index);
    const accordion = this.$refs[refName] as HTMLElement;

    if (accordion) {
      const answer = accordion.querySelector('.answer') as HTMLElement;
      const upIcon = accordion.querySelector('.up-icon') as HTMLElement;
      const downIcon = accordion.querySelector('.down-icon') as HTMLElement;

      if (answer && upIcon && downIcon) {
        if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block';
          upIcon.style.display = 'block';
          downIcon.style.display = 'none';
        } else {
          answer.style.display = 'none';
          upIcon.style.display = 'none';
          downIcon.style.display = 'block';
        }
      }
    }
  }

  removeFilter(optionToRemove: {label: string; value:string}) {
    // Kustutab filtri kui x-i vajutada
    this.selectedOptions = this.selectedOptions.filter((option, index) => {
      return option != optionToRemove 
    });
    this.selectedOptionsAsukoht = this.selectedOptionsAsukoht.filter((option, index) => {
      return option != optionToRemove 
    });
    
  }
  // Siit algab

  createCars() {
    let marks = ['Volvo', 'BMW', "Ford"]
    let model = ['XC60', 'Fiesta', 'Golf']
    let doorCount = ['2', '4', '1','3']
    let color = ['Punane', 'Sinine', 'Valge', 'Must']
    let vedavsild = ['Esivedu', 'Nelikvedu', 'Tagavedu']
    let transmission = ['Manuaal', 'Automaat', 'Poolmanuaal']
    let location = ['Tallinn', 'Tartu', 'Haapsalu', 'Rakvere']
    let adType = ['Müük', 'Rent']
    let fuel = ['Diisel', 'Bensiin', 'Elekter']
    let bodyType = ['Sedaan', 'Kupee', 'Universaal', 'Lahtine']
    let entertainment = ['Apple CarPlay', 'Bluetooth', 'USB Ports', 'Android Auto']
    
    for (let i = 0; i < 60; i++) {
      let car: ICarAdd = {
        id: "123",
        mark: marks[Math.floor(Math.random()*marks.length)],
        year: Math.floor(Math.random() * (2023 - 1975) + 1975),
        price: Math.floor(Math.random() * (100000 - 2500) + 2500),
        mileage: Math.floor(Math.random() * (1000000 - 0) + 0),
        url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206990_001_ALT100/crocs",
        model: model[Math.floor(Math.random()*model.length)],
        doorCount: Math.floor(Math.random() * (6 - 2) + 2),
        color: color[Math.floor(Math.random()*color.length)],
        vedavsild: vedavsild[Math.floor(Math.random()*vedavsild.length)],
        transmission: transmission[Math.floor(Math.random()*transmission.length)],
        location: location[Math.floor(Math.random()*location.length)],
        adType: adType[Math.floor(Math.random()*adType.length)],
        fuel: fuel[Math.floor(Math.random()*fuel.length)],
        bodyType: bodyType[Math.floor(Math.random()*bodyType.length)],
        entertainment: entertainment[Math.floor(Math.random()*entertainment.length)],
      }
      this.ports.push(car)
    }
  }

*/
}

  
</script>
