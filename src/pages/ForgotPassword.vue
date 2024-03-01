<template>
    <form class="container forms">
        <div class="form login">
          <div class="form-content">
            <h1 class="pealkiri">Reset Password</h1>
            <form action="#">
                <p class="reset-sentence">Forgot your password? Enter your email to reset it.</p>
                <div class="field input-field">
                    <input v-model="email" type="text" placeholder="Email" id="email" class="input">
                </div>
                <div class="field button-field">
                    <button>Reset Password</button>
                </div>
            </form>
          </div>
        </div>

        <!--Signup form-->
        <!--
             <div class="form signup">
          <div class="form-content">
            <h1 class="pealkiri">Sign Up</h1>
            <form action="#">
                <div class="field input-field">
                    <input type="name" placeholder="Name" class="input">
                </div>

                <div class="field input-field">
                    <input type="email" placeholder="Email" class="password">
                </div>

                <div class="field input-field">
                    <input type="password" placeholder="Password" class="password">
                </div>


                <div class="field button-field">
                    <button>Sign Up</button>
                </div>

                <div class="form-link">
                    <span>Already have an account? <a href="#" class="link login-link" >Log in</a></span>
                </div>
            </form>
          </div>

          <div class="line"></div>

          <div class="media-options">
            <a href="#" class="field google">
                <span>Login with Google</span>
            </a>
          </div>

        </div>

        -->

    </form>
       
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src


@Options({
    components: {
        HelloWorld,
    },
    name: "ForgotPassword",
    data() {
        return {
            email: '',
            modalActive: '',
            modalMessage: "",
        };
    },
   
})
export default class Home extends Vue {}
</script>

<style scoped>
    .reset-sentence {
        text-align: center;
    }
</style>