<template>
  <div>
    <div class="form-group">
      <label for>Name</label>
      <input
        type="text"
        class="form-control"
        v-model="user.name"
      />
    </div>
    <div class="form-group">
      <label for>Username</label>
      <input
        type="text"
        class="form-control"
        v-model="user.username"
      />
    </div>
    <div class="form-group">
      <label for>Jabatan</label>
      <select class="form-control" v-model="user.jabatan">
        <option>---</option>
        <option>KEPALA UPT PKB</option>
        <option>KA. SUBBAG TU UPT PKB</option>
        <option>BENDAHARA PENERIMAAN</option>
        <option>ADMINISTRASI</option>
        <option>PENGUJI MAHIR</option>
        <option>PENGUJI PENYELIA</option>
        <option>PENGUJI</option>
      </select>
    </div>
    <div class="form-group">
      <label for>NIP</label>
      <input
        type="text"
        class="form-control"
        v-model="user.nip"
      />
    </div>
    <div class="form-group">
      <label for>NRP</label>
      <input
        type="text"
        class="form-control"
        v-model="user.nrp"
      />
    </div>
    <div class="form-group">
      <label for>Pangkat</label>
      <input
        type="text"
        class="form-control"
        v-model="user.pangkat"
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <div class="input-group">
          <input
          :type="showPass ? 'text' : 'password'"
          class="form-control form-control-lg"
          v-model="user.password"
          @input= "checkPassword"
          />
          <div class="input-group-append">
          <span class="input-group-text" @click="togglePass">
              <i :class="showPass ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
          </span>
          </div>
      <p class="text-danger">{{ pass }}</p>
      </div>
  </div>
    <div class="form-group">
      <label for>Role</label>
      <select class="form-control" v-model="user.role">
        <option>---</option>
        <option>ADMIN</option>
        <option>KEPALA</option>
        <option>PETUGAS</option>
        <option>PENGUJI</option>
      </select>
    </div>
    <hr>
    <div style="margin-top: 30px;margin-bottom: 40px;" class="text-right">
      <h3>Upload Tanda Tangan</h3>

      <!-- Input Upload -->
      <input type="file" @change="onFileChange" accept="image/*" />

      <!-- Preview -->
      <div v-if="preview" style="margin-top:10px;">
        <img :src="preview" style="width:200px; border-radius:8px;" />
      </div>

      <!-- Tombol Upload -->
      <button @click="uploadImage" :disabled="!file" class="btn btn-primary mt-3">
        Upload
      </button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  data() {
    return {
      pass: '',
      showPass: false,
      file: null,
      preview: null,
      url: '',
    };
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("user", {
      user: state => state.user,
      // pass: state => state.pass,
    }),
  },
  methods: {
    ...mapMutations("user", ["CLEAR_FORM"]),
    checkPassword(){
      const minLength = 8;
      const hasLowercase = /[a-z]/.test(this.user.password);
      const hasUppercase = /[A-Z]/.test(this.user.password);
      const hasNumber = /[0-9]/.test(this.user.password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.user.password);
      if(this.user.password.length <= minLength){
        this.pass = 'minimal 8 Digit';
      }else if(!hasLowercase){
        this.pass = 'harus menggunakan huruf kecil';
      }else if(!hasUppercase){
        this.pass = 'harus menggunakan huruf besar';
      }else if(!hasNumber){
        this.pass = 'harus menggunakan angka';
      }else if(!hasNumber){
        this.pass = 'harus menggunakan simbol';
      }else{
        this.pass = '';
      }
      if(this.user.password.length >= minLength && hasLowercase && hasUppercase && hasNumber && hasSymbol){
        this.pass= 'Password Kuat';
      }else{

      }
    },
    togglePass() {
        this.showPass = !this.showPass;
    },
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
        this.preview = URL.createObjectURL(selectedFile);
      }
    },
    async uploadImage() {
      if (!this.file) return alert("Pilih gambar terlebih dahulu!");

      const formData = new FormData();
      formData.append("image", this.file);

      try {
        const res = await axios.post("/user/upload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        Swal.fire({
          title: "",
          text: "Success!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.preview = `${this.url}/ttd/ttd-${this.user.uuid}.jpg`;
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to upload image.",
          icon: "error",
        });
      }
    },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
    const appUrlMeta = document.querySelector('meta[name="app-url"]');
    if (appUrlMeta) {
      this.url = appUrlMeta.getAttribute('content');
    }else{
      console.log('App Url not found');
    }
    this.preview = `${this.url}/ttd/ttd-${this.$route.params.id}.jpg`;
    console.log(this.preview);
  },
  components: {
  },
};
</script>

<style scoped>
.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>