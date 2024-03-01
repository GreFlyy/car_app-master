<style>
 
</style>

<template>
  <section class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-xl-8 col-lg-8 mb-4 m-auto">
        
<!--
<div class="tab-content py-4" id="nav-tabContent">
  <div class="tab-pane fade show active" id="step1">
    <h4>Step 1</h4>
    <div class="mb-3">
      <label for="first_name">Required field 1</label>
      <input type="text" class="form-control" id="first_name" required>
    </div>
    <div class="mb-3">
      <label for="first_name">Required field 2</label>
      <input type="text" class="form-control" id="first_name" required>
    </div>
    <div class="mb-3">
      <label for="first_name">Optional field</label>
      <input type="text" class="form-control" id="first_name">
    </div>
  </div>
  <div class="tab-pane fade" id="step2">
    <h4>Step 2</h4>
    <div class="mb-3">
      <label for="first_name">Required field 1</label>
      <input type="text" class="form-control" id="first_name" required>
    </div>
    <div class="mb-3">
      <label for="first_name">Optional field</label>
      <input type="text" class="form-control" id="first_name">
    </div>
    <div class="mb-3">
      <label for="first_name">Required field 2</label>
      <textarea rows="5" class="form-control" required></textarea>
    </div>
  </div>
  <div class="tab-pane fade" id="step3">
    <h4>Step 3</h4>
    <div class="mb-3">
      <label for="first_name">Required field 1</label>
      <input type="text" class="form-control-plaintext" value="Lorem ipsum dolor sit amet" id="first_name">
    </div>
    <div class="mb-3">
      <label for="first_name">Optional field</label>
      <input type="text" class="form-control-plaintext" value="Lorem ipsum dolor sit amet" id="first_name">
    </div>
    <div class="mb-3">
      <label for="first_name">Required field 2</label>
      <input type="text" class="form-control-plaintext" value="Lorem ipsum dolor sit amet" id="first_name">
    </div>
  </div>
</div>
<div class="row justify-content-between">
  <div class="col-auto"><button type="button" class="btn btn-secondary" data-enchanter="previous">Previous</button></div>
  <div class="col-auto">
    <button type="button" class="btn btn-primary" data-enchanter="next">Next</button>
    <button type="submit" class="btn btn-primary" data-enchanter="finish">Finish</button>
  </div>
</div>
-->    
         
        <div class="card mb-4 border shadow-0 rounded-0 shadow-sm py-3">
          <div class=" d-grid grid-cols-6" id="nav-tab" role="tablist" style="grid-auto-flow: column;">
            <button
      v-for="(step, index) in steps"
      :key="index"
      @click="setCurrentStep(index)"
      class="d-flex gap-1 align-items-center justify-content-center border-0 bg-white p-0"
      style="flex-direction: column;"
    >
    <span>{{ step.name }}</span>
      <span
        class="mt-2 d-flex items-center justify-content-center border p-4 justify-content-center text-center align-items-center"
        style="border-radius: 50%; width: 20px; height: 20px; box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2);"
        :id="'step' + (index + 1) + '-tab'"
        :data-step="index + 1"
        :href="'#step' + (index + 1)"
      >
        {{ index + 1 }}
      </span>
    </button>
              <!--
              <button class="d-flex gap-1 align-items-center justify-content-center border-0 bg-white p-0"  style="flex-direction: column;">
                <span>Andmed</span>
                <span class="mt-2 d-flex items-center justify-content-center border p-4 justify-content-center text-center align-items-center" style="border-radius: 50%; width: 20px; height: 20px; box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2);" id="step2-tab" data-step="2" href="#step2">2</span>
              </button>
              <button class="d-flex gap-1 align-items-center justify-content-center border-0 bg-white p-0" style="flex-direction: column;">
                <span>Varustus</span>
                <span class="mt-2 d-flex items-center justify-content-center border p-4 justify-content-center text-center align-items-center" style="border-radius: 50%; width: 20px; height: 20px; box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2);" id="step3-tab" data-step="3" href="#step3">3</span>
              </button>
              <button class="d-flex gap-1 align-items-center justify-content-center border-0 bg-white p-0" style="flex-direction: column;">
                <span>Kirjeldus</span>
                <span class="mt-2 d-flex items-center justify-content-center border p-4 justify-content-center text-center align-items-center" style="border-radius: 50%; width: 20px; height: 20px; box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2);" id="step4-tab" data-toggle="tab" href="#step4">4</span>
              </button>
              <button class="d-flex gap-1 align-items-center justify-content-center border-0 bg-white p-0" style="flex-direction: column;">
                <span>Pildid</span>
                <span class="mt-2 d-flex items-center justify-content-center border p-4 justify-content-center text-center align-items-center" style="border-radius: 50%; width: 20px; height: 20px; box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2);" id="step5-tab" data-toggle="tab" href="#step5">5</span>
              </button>
              <button class="d-flex gap-1 align-items-center justify-content-center border-0 bg-white p-0" style="flex-direction: column;">
                <span>Avalda</span>
                <span class="mt-2 d-flex items-center justify-content-center border p-4 justify-content-center text-center align-items-center" style="border-radius: 50%; width: 20px; height: 20px; box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2);" id="step6-tab" data-toggle="tab" href="#step6">6</span>
              </button> 
              -->   
          </div>
        </div>
        <div v-for="(step, index) in steps" :key="index" v-show="currentStep === index + 1" class="step-pane" :id="'step' + (index + 1)">
      {{ step.content }}

      <div v-if="index === 0">
        <div id="step1" class="">
          <div class="px-4 py-3 border">
          <h5 class="card-title">Vali kuulutamisetüüp</h5>
        </div>
        <div class="card rounded-0 mb-4" style="border-top: none;">
          <div class="p-4">
            <div class="row">
              <div class="col-lg-4 mb-3">
            
            
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Müügikuulutus <br />
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Rendikuulutus<br />
                      <small class="text-muted">1-2+ kuud</small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
               
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Lühiajaline rent<br />
                      <small class="text-muted">Kuni 4 nädalat</small>
                    </label>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border">
          <h5 class="card-title">Mida soovid kuulutada?</h5>
        </div>
        <div class="card rounded-0" style="border-top: none;">
          <div class="px-4 py-3">
            <div class="" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px;">
              <button class="border cursor-pointer flex items-center justify-center w-full gap-2 px-2 py-4 bg-white">
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Sõiduauto</p>
                </div>
              </button>
              <div role="radio" class="border cursor-pointer text-center w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-truck-monster"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Maastur</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-van-shuttle"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Kaubik</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-bus"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Buss</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-truck-moving"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Veoauto</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-trailer"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Haagis</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-motorcycle"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Mototehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-caravan"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Haagissuvila</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-rv"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Matkaauto</p>
                </div>
              </div>
              <div  class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-ship"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Veesõiduk</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Ehitustehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-tractor"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Agrotehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Metsatehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-snowplow"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Kommunaal</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style="; display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-truck-fast"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Võistlusõiduk</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-question"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Muu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="index === 1">
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true" aria-controls="panelsStayOpen-collapseTen">
        Sõiduki andmed
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTen">
      <div class="accordion-body">
        <form class="">
  <div class="row mb-3 pt-3 m-0 gap-2 d-flex"> 
    <label for="inputEmail3" class="col-sm-2 col-form-label d-flex gap-1">Mark
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <select class="form-select rounded-0"  aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
      <!--
      <input type="email" class="form-control rounded-0" id="inputEmail3">
      -->
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label d-flex gap-1">Keretüüp ja liik
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0 ">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Mudel
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <input type="text" class="form-control rounded-0" id="">
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Läbisõit
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">km</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0 align-items-center">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Hooldusraamat</label>
  <div class="col-sm-4 d-flex">
    <input type="checkbox" class="form-check-input rounded-0" style="width: 23px; height: 23px;" id="">
  </div>
</div>
<div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">VIN-kood
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <input type="text" class="form-control rounded-0" id="">
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Reg nr
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <input type="text" class="form-control rounded-0" id="">
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Käigukast
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Manuaal</option>
  <option value="2">Poolmanuaal</option>
  <option value="3">Automaat</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Vedav sild
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Kütus
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Mootori maht
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">l</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Mootori maht
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">cm³</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Mootori asetus
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <input placeholder="R4, V8, W12" type="text" class="form-control rounded-0" id="">
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Mootori info
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-4">
      <input placeholder="16V, TDI" type="text" class="form-control rounded-0" id="">
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label gap-1">Võimsus
      <strong class="text-danger">*</strong>
    </label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">kW</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kütusepaak</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">l</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kulu maanteel</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">l/100 km</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kulu linnas</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">l/100 km</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kulu keskmiselt</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">l/100 km</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">CO2</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">g/km</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Istekohti</label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Uste arv</label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Värv</label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
    <label for="inputEmail3" class="col-sm-2 col-form-label">Metallik</label>
  <div class="col-sm-4 d-flex">
    <input type="checkbox" class="form-check-input rounded-0" style="width: 23px; height: 23px;" id="">
  </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Tühimass</label>
    <div class="col-sm-4 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">kg</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Täismass</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">kg</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kandevõime</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">kg</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Piduriga haagis</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">kg</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Pidurita haagis</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">kg</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Teljevahe</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">mm</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Pikkus</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">mm</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Laius</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">mm</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kõrgus</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">mm</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Kiirendus 0-100</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">s</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Tippkiirus</label>
    <div class="col-sm-3 d-flex">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <input type="text" class="form-control rounded-0" id="inlineFormInputGroup">
        <div class="input-group-prepend">
          <div class="input-group-text rounded-0">km/h</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Masina asukoht</label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Toodud riigist</label>
    <div class="col-sm-4">
      <select class="form-select rounded-0" aria-label="Default select example">
  <option selected>Vali</option>
  <option value="1">Esivedu</option>
  <option value="2">Tagavedu</option>
  <option value="3">Nelikvedu</option>
</select>
    </div>
  </div>
  <div class="row mb-3 pt-3 m-0 align-items-center">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Vahetus võimalus</label>
  <div class="col-sm-4 d-flex">
    <input type="checkbox" class="form-check-input rounded-0" style="width: 23px; height: 23px;" id="">
  </div>
</div>
        </form>
      </div>
    </div>
  </div>
  </div>
    </div>
    <div v-if="index === 2">
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        Turva-ja ohutusvarustus
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <form>
          <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Roolivõimendi
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kesklukustus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      ABS pidurid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Automaatne seisupidur
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Turvapadi
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Turvapadja väljalülitamise süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Turvakardinad
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Juhi väsimuse tuvastamis süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Signalisatsioon
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Immobilisaator
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Stabiilsuskontroll
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pidurdusjõukontroll
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Veojõukontroll
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sõiduraja hoidmis süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sõiduraja vahetamise süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Liiklusmärkide lugemis süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Öise nägemise assistent
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pimenurga hoiatus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kokkupõrget hoiatav süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Jalakäija ohutusfunktsiooniga kapott
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Lisapidurituli
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Automaatpidurdussüsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Vihmasensor
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      ISOFIX lasteistme kinnitus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Integreeritud lapseiste
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Turvavööde eelpingutid esiistmetel
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Mägistardi abi
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Mägipidur
    </label>
  </div>
</div>
        </form>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Tuled
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Xenon
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Laser
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      LED
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Esitulede pesurid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kurvituled
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Päevasõidutulede automaatne lülitus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kaugtulede ümberlülitamise assistent
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Udutuled
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tuledekorrektor
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Lisatuled
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Valgustuspakett
    </label>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Rehvid ja veljed
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Suverehvid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Talverehvid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Valuveljed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Ilukilbid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tagavararatas
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Rehvirõhu kontrollsüsteem
    </label>
  </div>
</div>
      </div>
    </div>
    </div>
    <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        Rool
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Reguleeritav roolisammas
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Multifunkstionaalne rool
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Nahast rool
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sportrool
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Soojendusega rool
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Käiguvahetus roolilt
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Parempoolne rool
    </label>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
        Helisüsteem
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Stereo
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Helivõimendi
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kõlarid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Subwoofer
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      CD Box
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Apple CarPlay
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Android Auto
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      DVD
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Elektriline antenn
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Ekraan
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Navigatsiooniseade
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Autokompuuter
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Autotelefon
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Käed vabad süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      GSM antenn
    </label>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
        Sisustus
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Iluliistud salongis
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Taskud esiistme seljatoel
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Jalamatid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sahtlid esiistmete all
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pagasiruumi matt
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Topsihoidjad
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Nahkkattega käigukanginupp
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Nahkkattega käsipidurikang
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tume laepolster
    </label>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
        Istmed
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Nahkpolster
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Poolnahkpolster
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Veluurpolster
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tekstiilpolster
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Elektriliselt reguleeritavad istmed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Õhugareguleeritavad istmed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Istmed reguleeritava kõrgusega
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Istmesoojendused
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Reguleeritavad kumerusega seljatugi
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Massaažifunktsiooniga istmed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Ventileeritavad istmed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Käetugi ees
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Käetugi taga
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kaassõitja istme seljatugi allaklapitav
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tagaistme seljatugi allaklapitav
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Comfort istmed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sportistmed
    </label>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
        Mugavusvarustus
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kliimaseade
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Elektrilised välispeeglid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Virtuaalsed välispeeglid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Virtuaalne sisepeegel
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Elektrilised akende tõstukid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Toonitud klaasid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Katuseluuk
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Uste servosulgurid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Klaasist panoraamkatus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Võtmeta avamine
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Võtmeta käivitus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Püsikiiruse hoidja
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pakiruumi avamine elektriliselt
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Peeglid päikesesirmides
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Rulookardin tagaaknal
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Rulookardinad ustel
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Mootori eelsoojendus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Salongi eelsoojendus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Salongi lisasoojendus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Integreeritud väravapult
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Automaatselt tumenevad peeglid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Eraldi kliimaseade tagaistmetele
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Uste sisevalgustus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kohtvalgustid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Parkimisandurid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Parkimiskaamera
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Automaatse parkimise funktsioon
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Coming/Leaving-Home funktsioon
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Digitaalne näidikutepaneel
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Info kuvamine esiklaasile
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pakiruumi liugpõrand
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Elektrilised liuguksed
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Telefoni juhtmevaba laadimine
    </label>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
        Sportvarustus
      </button>
    </h2>
    <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tagaspoiler
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Esispoiler
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Spoileriring
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sportvedrustus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Sportsummuti
    </label>
  </div>
</div>
    </div>
    </div>
  </div>
  <div class="accordion-item mt-5 border rounded-0" style="box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);">
    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
        Muu varustus
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
      <div class="accordion-body">
        <div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Reguleeritav vedrustus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Õhkvedrustus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Start-stopp süsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Katusereelingud
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      12V pistikupesad
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Suusakott
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Jahutusega kindalaegas
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Rehviparanduskomplekt
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Välistemperatuuri mõõdik
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Topeltklaasid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Elektrilise soojendusega esiklaas
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tagaklaasi soojendus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Aknapesupihustite sulatus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pagasikate
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Salongi ja pakiruumi eraldusvõrk
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Pagasi võrk pakiruumis
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Kaubakinnituse konksud
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Tagaklaasi puhasti
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Paigaldatud tulekustuti
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Veokonks
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Haagise stabiliseerimissüsteem
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Reisiarvesti
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Esi- ja tagarataste porikummid
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Invavarustus
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      4-ratta pööramine
    </label>
  </div>
</div>
<div class="d-flex pt-3 m-0 align-items-center">
  <div class="form-check d-flex gap-3 align-items-center">
    <input class="form-check-input rounded-0" type="checkbox" value="" id="defaultCheck1" style="width: 23px; height: 23px;">
    <label class="form-check-label" for="defaultCheck1">
      Arvel kui N1 kaubik
    </label>
  </div>
</div>
    </div>
    </div>
  </div>

      </div>
    </div>
    <div v-if="index === 3">
      <div class="px-4 py-3 border">
          <h5 class="card-title">Mis on toote hind?</h5>
        </div>
        <div class="card rounded-0 mb-4" style="border-top: none;">
          <div class="py-3 px-4">
            <div class="col-12 col-md-auto" style="">
              <div class="d-flex gap-1 items-center">
                <label class="d-flex">
                Hind
              </label>
              <strong class="text-danger">*</strong>
              </div>
              <div class="d-flex w-full">
                <input placeholder="" type="text" class="form-control rounded-0" id="">
                <div class="input-group-prepend">
          <div class="input-group-text rounded-0" style="border-left:none;">€</div>
        </div>
              </div>
              <p class="text-danger">Hind peab olema positiivne</p>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border">
          <h5 class="card-title">Toote kirjeldus ja reklaamlause</h5>
        </div>
        <div class="card rounded-0" style="border-top: none;">
          <div class="px-4 py-3">
            <div class="col-12 col-md-auto" style="">
              <div class="d-flex gap-1 items-center">
                <label class="d-flex">
                Sisesta reklaamlause
              </label>
              <strong class="text-danger">*</strong>
              </div>
              <div class="d-flex w-full mb-4">
                <textarea class="w-100 border-gray-300 p-2 py-1" style="border: ;" type="number"></textarea>
              </div>
              <div class="d-flex gap-1 items-center">
                <label class="d-flex">
                Kirjelda toodet lähemalt
              </label>
              </div>
              <div class="d-flex w-full">
                <textarea class="w-100 border-gray-300 p-2 py-1" type="number"></textarea>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div v-if="index === 4">
      <div class="px-4 py-3 border">
          <h5 class="card-title">Lisa pilte oma tootest</h5>
        </div>
        <div class="card rounded-0 mb-4" style="border-top: none;">
          <div class="py-3 px-4">
            
          </div>
        </div>
    </div>
</div>
<!--
      <div id="step1" class="">
        <div class="card shadow-sm border rounded-0 mb-4">
          <div class="p-4">
   
            <h5 class="card-title mb-3">Vali kuulutamisetüüp</h5>

            <div class="row">
              <div class="col-lg-4 mb-3">
              
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Müügikuulutus <br />
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Rendikuulutus<br />
                      <small class="text-muted">1-2+ kuud</small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
               
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Lühiajaline rent<br />
                      <small class="text-muted">Kuni 4 nädalat</small>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="card shadow-sm border rounded-0">
          <div class="p-4">
            
           
            <h5 class="card-title mb-3">Mida soovid kuulutada?</h5>
            <div class="" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px;">
              <button class="border cursor-pointer flex items-center justify-center w-full gap-2 px-2 py-4 bg-white">
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Sõiduauto</p>
                </div>
              </button>
              <div role="radio" class="border cursor-pointer text-center w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-truck-monster"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Maastur</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-van-shuttle"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Kaubik</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-bus"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Buss</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-truck-moving"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Veoauto</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-trailer"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Haagis</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-motorcycle"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Mototehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-caravan"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Haagissuvila</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-rv"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Matkaauto</p>
                </div>
              </div>
              <div  class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-ship"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Veesõiduk</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Ehitustehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-tractor"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Agrotehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Metsatehnika</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-snowplow"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Kommunaal</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style="; display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-truck-fast"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Võistlusõiduk</p>
                </div>
              </div>
              <div role="radio" class="border cursor-pointer text-center  w-full flex-col gap-2 px-2 py-4 justify-center" style=" display: flex; flex-direction: column;">
                <div>
                  <i class="fa-solid fa-question"></i>
                </div>
                <div class="text-sm">
                  <p class="m-0" style="font-size: 14px; font-weight: 500;">Muu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
        <div class="float-end mt-4">
          <button class=" btn btn-light border me-2 rounded-0">Tagasi</button>
          <button class=" btn shadow-0 border rounded-0" style="background-color: #cc2229; color: white;">Edasi</button>
        </div>
      
      </div>
    </div>
  </div>
  </section>
        <!-- Checkout -->
        



</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";


@Options({
    components: {
     
    },
   
   
})
export default class lisakuulutus extends Vue {
  currentStep = 1;
  steps = [
    { name: "Üldine",
     
     },
    { name: "Üldandmed", },
    { name: "Lisad" },
    { name: "Kirjeldus" },
    { name: "Pildid" },
    { name: "Avalda", content: "Step 6 content" },
    // Add more steps here if needed
  ];

  setCurrentStep(index: number): void {
    this.currentStep = index + 1;
  }

     
    }
  

    

 



</script>
