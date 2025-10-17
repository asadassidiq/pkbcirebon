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
    <div class="form-group row">
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PETUGAS'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="pf" v-model="user.pf" />
                    <span></span>
                    Pendaftaran
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PETUGAS' || user.role == 'KEPALA UPT'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="ct" v-model="user.ct" />
                    <span></span>
                    Cetak
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="ft" v-model="user.ft" />
                    <span></span>
                    Foto
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p1" v-model="user.p1" />
                    <span></span>
                    Uji Visual
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p2" v-model="user.p2" />
                    <span></span>
                    Emisi
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p3" v-model="user.p3" />
                    <span></span>
                    Speedometer
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p4" v-model="user.p4" />
                    <span></span>
                    Bagian Bawah
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p5" v-model="user.p5" />
                    <span></span>
                    Kebisingan
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p6" v-model="user.p6" />
                    <span></span>
                    Rem
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p7" v-model="user.p7" />
                    <span></span>
                    Sideslip
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="p8" v-model="user.p8" />
                    <span></span>
                    Lampu
                </label>
            </div>
        </div>
        <div class="col-3 col-form-label" v-if="user.role == 'ADMIN' || user.role == 'PENGUJI'">
            <div class="checkbox-list">
                <label class="checkbox">
                    <input type="checkbox"  name="v1" v-model="user.v1" />
                    <span></span>
                    Verifikator
                </label>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      pass: '',
      showPass: false,
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
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
  },
  components: {
  },
};
</script>