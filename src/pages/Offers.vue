
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@400;500&display=swap');
  /*.price-section {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;;
  }
  */
 

</style>

<template>
    <section class="">
  <div class="container mt-5" style="font-family: 'Montserrat', sans-serif;; max-width: 1400px;">
    <div class="row">
      <!-- sidebar -->
      <div class="col-lg-3">
        <!-- Toggle button -->
        <button
                class="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
          <span>Show filter</span>
        </button>
        <!-- Collapsible wrapper -->
        <div class="collapse card d-lg-block mb-5 border-0 " id="navbarSupportedContent">
          <div class="accordion accordion-style rounded-0"  id="accordionExample">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                       Kuulutusetüüp
                    </button>
                  </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(kuulutusetuup, index) in kuulutusetuubid" :key="index">
                <input class="form-check-input" v-model="selectedOptionsKuulutusetuup" :value="kuulutusetuup.value" type="radio"  :id="'flexCheckChecked1' + index" />
                  <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ kuulutusetuup.label }}</label>
                  <span class="badge badge-secondary float-end">120</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Keretüüp
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(keretyyp, index) in keretyybid" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsKeretyyp" type="checkbox" :value="keretyyp.value" :id="'flexCheckChecked1' + index" />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ keretyyp.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Mark
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(mark, index) in margid" :key="index">
                <input class="form-check-input rounded-0" type="checkbox" v-model="selectedOptionsMark" :value="mark.value" :id="'flexCheckChecked1' + index" />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ mark.label }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Kerevärv
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(interjoor, index) in interjoorid" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsInterjoor" :value="interjoor.value" type="checkbox"  :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ interjoor.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>        
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Kütus
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(kytus, index) in kytused" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsKytus" type="checkbox" :value="kytus.value" :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ kytus.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>   
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Vedavsild
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(vedavsild, index) in vedavadsillad" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsVedavsild" type="checkbox" :value="vedavsild.value" :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ vedavsild.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Käigukast
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div> 
              <div class="form-check" v-for="(kaigukast, index) in kaigukastid" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsKaigukast" type="checkbox" :value="kaigukast.value" :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ kaigukast.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            Meelelahutus
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(meelelahutus, index) in meelelahutused" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsMeelelahutus" type="checkbox" value="meelelahutus.value" :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ meelelahutus.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            Uste arv
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(uks, index) in uksed" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsUks" type="checkbox" :value="uks.value" :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ uks.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
            Asukoht
          </button>
        </h2>
        <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div>
              <div class="form-check" v-for="(asukoht, index) in asukohad" :key="index">
                <input class="form-check-input rounded-0" v-model="selectedOptionsAsukoht" type="checkbox" :value="asukoht.value" :id="'flexCheckChecked1' + index"  />
                <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ asukoht.label }}</label>
                <span class="badge badge-secondary float-end">120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
            Hind
          </button>
        </h2>
        <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div class="row mb-3">
              <div class="col-6">
                <p class="mb-0">
                   Min
                </p>
                <div class="form-outline">
                  <input placeholder="min" type="number" id="typeNumber" class="form-control" />
                </div>
                </div>
                  <div class="col-6">
                    <p class="mb-0">
                       Max
                    </p>
                  <div class="form-outline">
                    <input placeholder="max" type="number" id="typeNumber" class="form-control" />
                  </div>
                </div>
                </div>
                <button type="button" class="btn btn-white w-100 border rounded-0 border-secondary">apply</button>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
            Läbisõit
          </button>
        </h2>
        <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div class="row mb-3">
              <div class="col-6">
                <p class="mb-0">
                   Min
                </p>
                <div class="form-outline">
                  <input placeholder="min" type="number" id="typeNumber" class="form-control" />
                </div>
                </div>
                  <div class="col-6">
                    <p class="mb-0">
                      Max
                    </p>
                    <div class="form-outline">
                      <input placeholder="max" type="number" id="typeNumber" class="form-control" />
                    </div>
                 </div>
               </div>
              <button type="button" class="btn btn-white w-100 border rounded-0 border-secondary">apply</button>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
            Aasta
          </button>
        </h2>
        <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
          <div class="accordion-body">
            <div class="row mb-3">
              <div class="col-6">
                <p class="mb-0">
                   Min
                </p>
                <div class="form-outline">
                  <input placeholder="min" type="number" id="typeNumber" class="form-control" />
                </div>
                </div>
                  <div class="col-6">
                    <p class="mb-0">
                      Max
                    </p>
                    <div class="form-outline">
                      <input placeholder="max" type="number" id="typeNumber" class="form-control" />
                    </div>
                 </div>
               </div>
               <button type="button" class="btn btn-white w-100 border rounded-0 border-secondary">apply</button>
          </div>
        </div>
      </div>
    </div>
            <!--
            <div class="accordion-item">
              
              <h2 class="accordion-header" id="headingNull" >
                <button
                        data-mdb-collapse-init
                        class="accordion-button text-dark bg-light rounded-0"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseNull"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseNull"
                        >
                  Kuulutusetüüp
                </button>
              </h2>
              
          
              <div id="panelsStayOpen-collapseNull" class="accordion-collapse collapse" aria-labelledby="headingNull">
                <div class="accordion-body">
                  <div>
                     
                    <div class="form-check" v-for="(kuulutusetuup, index) in kuulutusetuubid" :key="index">
                      <input class="form-check-input" v-model="selectedOptionsKuulutusetuup" :value="kuulutusetuup.value" type="radio"  :id="'flexCheckChecked1' + index" />
                      <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ kuulutusetuup.label }}</label>
                      <span class="badge badge-secondary float-end">120</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          -->
          <!--
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                        data-mdb-collapse-init
                        class="accordion-button text-dark bg-light rounded-0"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                        >
                  Keretüüp
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                <div class="accordion-body">
                  <div>
                    <div class="form-check" v-for="(keretyyp, index) in keretyybid" :key="index">
                      <input class="form-check-input rounded-0" v-model="selectedOptionsKeretyyp" type="checkbox" :value="keretyyp.value" :id="'flexCheckChecked1' + index" />
                      <label class="form-check-label" :for="'flexCheckChecked1' + 'index'">{{ keretyyp.label }}</label>
                      <span class="badge badge-secondary float-end">120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              -->
              <div>
                <button type="button"  class="p-2 rounded-0 mt-2 relative inline-flex items-center justify-content-center border text-sm d-flex width-full w-100" style="color: white; background-color: #cc2229;">Otsi</button>
              </div>
          </div>
        </div>
      </div>
      <!-- sidebar -->
      <!-- content -->
      <div class="col-lg-9">
        <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong class="d-block py-2">42 leitud</strong>
          <div class="ms-auto">
            <select class="form-select d-inline-block w-auto border rounded-0">
              <option value="0">Uuemad enne</option>
              <option value="1">Vanemad enne</option>
              <option value="2">Kallimad enne</option>
              <option value="3">Odavamad enne</option>
              <option value="4">Mark A-Z</option>
              <option value="5">Mark Z-A</option>
              <option value="6">Aasta kasvav</option>
              <option value="7">Aasta kahanev</option>
              <option value="8">Läbisõit kasvav</option>
              <option value="9">Läbisõit kahanev</option>
            </select>
            <div class="btn-group shadow-0 border rounded-0">
              <a href="#" class="btn btn-light" title="List view">
                <i class="fa fa-bars fa-lg"></i>
              </a>
              <a href="#" class="btn btn-light " title="Grid view">
                <i class="fa fa-th fa-lg"></i>
              </a>
            </div>
          </div>
        </header>
<!--siit algab esimene row-->
        <div v-for="(car, index) in displayedPorts" :key="car.id" class="row justify-content-center mb-3">
          <div class="col-md-12">
            <div class="card shadow-0 border rounded-0" >
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-xl-4 col-md-4 flex-column ">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0" >
                      <div :id="'carousel' + index" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPF2W4eqRzFAjjwM5hkJLiliWd8CyvN3GFw&usqp=CAU" class="d-block w-100" alt="">
                          </div>
                          <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPF2W4eqRzFAjjwM5hkJLiliWd8CyvN3GFw&usqp=CAU" class="d-block w-100" alt="">
                          </div>
                          <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPF2W4eqRzFAjjwM5hkJLiliWd8CyvN3GFw&usqp=CAU" class="d-block w-100" alt="">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel' + index" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carousel' + index" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col  p-2 d-flex flex-column" >
                    <div class="information-section mt-auto d-flex cursor-pointer align-items-center gap-2">
                      <h2 class="mb-1" style="font-size: 21px; font-weight: 600;">{{car.mark}} {{ car.model }}</h2> <!--siia laheb auto pealkiri-->
                      <div style="font-size: 15px; color: rgb(214, 69, 69); margin-left: auto;">UUS</div>
                    </div>
                    
                    <div class="flex-row mt-auto" style="color: rgb(126, 126, 126); font-weight: 500;">
                      Viimsi vald, Harju maakond
                    </div>

                    <div class="text mt-auto mb-md-0" style="font-size: 23px; font-weight: 600;">
                     {{car.price}} &euro;
                    </div>
<!--
                    <div class="text mb-md-0 mt-auto text-uppercase" style="font-size: 14px; font-weight: 600; color:rgb(214, 69, 69) ;">
                      Uus auto väikse läbisõiduga. Autol on kehtiv garantii
                    </div>
-->
                    <div class="information-section mt-auto justify-content-between d-flex cursor-pointer items-center gap-2" style="font-size: 14px; font-weight: 600;">
                      <div>{{ car.mileage }}km</div>
                      <div>{{ car.year }}</div>
                      <div>{{ car.transmission }}</div>
                      <div>{{ car.fuel }}</div>
                    </div>

                    <div class="information-section mt-auto d-flex cursor-pointer items-center gap-2" style="font-size: 14px; color: rgb(126, 126, 126);">
                      <div>Kermo Vares</div>
                      <div>Porto Franco OÜ</div>
                      <div class="" style="font-size: 14px; margin-left:auto;"> Salvesta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--siin loppeb esimene row-->

        <hr />

        <!-- Pagination -->
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link rounded-0">Previous</a>
             </li>
             <li class="page-item"><a class="page-link" href="#">1</a></li>
             <li class="page-item"><a class="page-link" href="#">2</a></li>
             <li class="page-item"><a class="page-link" href="#">3</a></li>
             <li class="page-item">
            <a class="page-link rounded-0" href="#">Next</a>
          </li>
        </ul>
      </nav>
        <!-- Pagination -->
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Collapse, initMDB } from 'mdb-ui-kit';
initMDB({ Collapse });
import { ICarAdd } from "../models/ICarAdd"


export default class Offers extends Vue {
 data() {
  return {
    selectedOptionsMark: [] as string[],
    selectedOptionsAsukoht: [] as string[],
    selectedOptionsUks: [] as string[],
    selectedOptionsMeelelahutus: [] as string[],
    selectedOptionsKaigukast: [] as string[],
    selectedOptionsVedavsild: [] as string[],
    selectedOptionsKuulutuseTuup: [] as string[],
    filtersSelected: false,
    
  }
 }
 
 displayedPorts: ICarAdd[] = []
 
 ports: ICarAdd[] = []
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

    selectedOptionsMark: { label: string; value: string }[] = [];

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

    kuulutusetuubid: {label: string; value:string}[] = [
      {label: "Müük", value: "Müük"},
      {label: "Rent", value: "Rent"},
      {label: "Ost", value: "Ost"},
    ];

    selectedOptionsKuulutusetuup: { label: number; value: number }[] = [];

    mounted(): void {
      this.createCars()
      this.displayedPorts = this.ports
    }

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
        id: i.toString(),
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
  


 
}

</script>
