<style>
/*
    .container {
    margin-top: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    max-width: 430px;
    width: 100%;
    padding: 30px;
}


.pealkiri {
    font-size: 28px;
    font-weight: 600;
    color: #292929;
    text-align: center;
}
form {
   margin-top: 30px; 
}
.form .field {
    position: relative;
    height: 45px;
    width: 100%;
    margin-top: 20px;
    border-radius: 4px;
}
.field input,
.field button{
    height: 100%;
    width: 100%;
    border: 1px solid #535353;
    border-radius: 4px;
} 
.field input {
    padding: 0 15px;
    font-size: 16px;
    font-weight: 400;
}
.field button {
    background-color: #292929;
    color: #fff;
    cursor: pointer;
    transition: all 0.3 ease;
}
.field button:hover {
    background-color: #181818;
}
.form-link {
    text-align: center;
    margin-top: 10px;
}
.form-link span,
.form-link a {
   font-size: 14px; 
   font-weight: 400;
   color: #292929;
}
.form a {
    text-decoration: none;
    color: #0171d3;
}
.form-content a:hover {
    text-decoration: underline;
}
.line {
    width: 100%;
    position: relative;
    border: 1px solid #d4d4d4;
    margin: 36px 0;
}
.line::before {
    content: 'Or';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: #292929;
    padding: 0 15px;
}
.media-options a {
    display: flex;
    background-color: #fff;
    border: 1px solid #292929;
    align-items: center;
    justify-content: center;
}
a.google {
    color: #292929;
    font-weight: 600;
}
*/
</style>

<template>
   <form  class="container forms">
    <div class="form signup">
          <div class="form-content">
            <h1 class="pealkiri">Sign Up</h1>
            <form id="signup-form" @submit.prevent="signupRequest">
                <div class="field input-field">
                    <input v-model="firstName"  type="text" placeholder="First Name" class="input" required>
                </div>

                <div class="field input-field">
                    <input v-model="lastName" type="text" placeholder="Last Name" class="input" required>
                </div>

                <div class="field input-field">
                    <input v-model="email" type="text" placeholder="Email" id="email" required>
                </div>

                <div class="field input-field">
                    <input v-model="password" type="password" placeholder="Password" class="password">
                </div>

                <div class="error"></div>


                <div class="field button-field">
                    <button type="submit">Sign Up</button>
                </div>

                <div class="form-link">
                    <span>Already have an account? <a href="/signin" class="link login-link" >Sign in</a></span>
                </div>
            </form>
          </div>

          <div class="line"></div>

          <div class="media-options">
            <a href="#" class="field google">
                <button @click="googleSignIn">Sign Up with Google</button>
            </a>
          </div>
        </div>
   </form>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import firebase from "firebase/app";
import "firebase/auth";
import { error } from "jquery";
import db from '../firebase/firebaseinit'
import { collection, addDoc } from "firebase/firestore";







@Options({
    components: {
        HelloWorld,
    },
    
    
   
    /*
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    methods: {
        handleSubmit(){

            const data = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            }

            console.log(data);
        }
    }
    */
   
})


export default class Signup extends Vue {
    
    }
    
</script>