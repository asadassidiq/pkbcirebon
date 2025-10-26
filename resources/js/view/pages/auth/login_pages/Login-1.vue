<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot',
      }"
      id="kt_login"
    >
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-column flex-row-auto"
        style="background-color: #0000cd"
      >
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="#" class="text-center mb-10">
            <img src="media/logos/logo-light.png" class="max-h-70px" alt="" />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
            style="color: #ffffff"
          >
            Fast Service, Trustworthy, <br />Transparent
          </h3>
        </div>
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>
      <!--begin::Aside-->
      <!--begin::Content-->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
      >
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Welcome to SIM PKB
                </h3>
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark"
                  >Username</label
                >
                <div
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="username"
                    ref="username"
                    v-model="form.username"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                    >Password</label
                  >
                </div>
                <div class="position-relative">
                  <div
                    id="example-input-group-2"
                    label=""
                    label-for="example-input-2"
                  >
                    <input
                      class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                      :type="showPassword ? 'text' : 'password'"
                      name="password"
                      ref="password"
                      v-model="form.password"
                      autocomplete="off"
                    />
                  </div>
                  <button
                    type="button"
                    @click="togglePassword"
                    class="btn btn-sm btn-light position-absolute"
                    style="
                      top: 50%;
                      right: 10px;
                      transform: translateY(-50%);
                      z-index: 2;
                    "
                  >
                    <i
                      :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"
                    ></i>
                  </button>
                </div>
              </div>
              <div class="form-group">
                <vue-recaptcha
                  ref="recaptcha"
                  type="invisible"
                  :sitekey="recaptchaSitekey"
                  @verify="onCaptchaVerified"
                  @expired="onCaptchaExpired"
                />
              </div>
              <div class="form-group">
                <div class="g-recaptcha" :data-sitekey="recaptchaSitekey"></div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_login_signin_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <!--end::Signin-->
        </div>
        <!--begin::Content footer-->
        <div
          class="d-flex justify-content-lg-start justify-content-center align-items-end py-1 py-lg-0"
        >
          <div style="display: flex; gap: 20px; align-items: center">
            <img
              src="img/kota.png"
              style="width: 70px; height: auto; object-fit: contain"
            />
            <img
              src="img/dishub.jpg"
              style="width: 70px; height: auto; object-fit: contain"
            />
          </div>
        </div>
        <!--end::Content footer-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState, mapMutations } from "vuex";
import { LOGIN, LOGOUT, REGISTER } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      loadingpage: false,
      showPassword: false,
      recaptchaSitekey: process.env.MIX_RECAPTCHA_SITE_KEY ?? "",
      form: {
        username: "",
        password: "",
      },
    };
  },
  components: { VueRecaptcha },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
      user: (state) => state.auth.user,
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return "" + "media/svg/illustrations/login-visual-4.svg";
    },
  },
  mounted() {
    const meta = document.querySelector('meta[name="recaptcha-sitekey"]');
    if (meta) {
      this.recaptchaSitekey = meta.getAttribute("content");
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    document.head.appendChild(script);

    const signin_form = KTUtil.getById("kt_login_signin_form");

    this.fv = formValidation(signin_form, {
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: "Username is required",
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    this.fv.on("core.form.valid", () => {
      var username = this.form.username;
      var password = this.form.password;
      const recaptcha = grecaptcha.getResponse();
      // clear existing errors
      this.$store.dispatch(LOGOUT);
      if (!recaptcha) {
        Swal.fire({
          title: "",
          text: "Please complete the CAPTCHA",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false,
        });
        return;
      }
      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { username, password, recaptcha })
          // go to which page after successfully login
          .then(() => {
            if (this.errors == "Unauthorized") {
              Swal.fire({
                title: "",
                text: "Username atau Password Salah",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
                heightAuto: false,
              });
            } else if (
              this.user.jabatan == "KEPALA UPT PKB" &&
              this.user.ct == true
            ) {
              this.$router.push({ name: "monitoring.data" });
            } else if (this.user.v1 == true) {
              this.$router.push({ name: "verif.data" });
            } else if (this.user.pf == true) {
              this.$router.push({ name: "pendaftaran.data" });
            } else if (this.user.p1 == true) {
              this.$router.push({ name: "pos1.data" });
            } else if (this.user.p2 == true) {
              this.$router.push({ name: "pos2.data" });
            } else if (this.user.p3 == true) {
              this.$router.push({ name: "pos3.data" });
            } else if (this.user.p4 == true) {
              this.$router.push({ name: "pos4.data" });
            } else if (this.user.p5 == true) {
              this.$router.push({ name: "pos5.data" });
            } else if (this.user.p6 == true) {
              this.$router.push({ name: "pos6.data" });
            } else if (this.user.p7 == true) {
              this.$router.push({ name: "pos7.data" });
            } else if (this.user.p8 == true) {
              this.$router.push({ name: "pos8.data" });
            } else if (this.user.ct == true) {
              this.$router.push({ name: "datapengujian.data" });
            } else {
              this.$router.push({ name: "login" });
            }
          })

          .catch(() => {
            if (this.errors == "Unauthorized") {
              Swal.fire({
                title: "",
                text: "Username atau Password Salah",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
                heightAuto: false,
              });
            }
          });
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right",
        );
      }, 2000);
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
      });
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp",
      );
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    onCaptchaVerified: function (recaptchaToken) {
      this.loadingpage = true;
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>
