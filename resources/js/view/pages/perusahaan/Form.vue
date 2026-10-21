<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for>Nama Akun</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.name" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Nama Badan Usaha</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.nama_badan_usaha" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Email</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.email" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Telepon</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.telepon" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Provinsi</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.provinsi" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Kabupaten</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.kabupaten" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Kecamatan</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.kecamatan" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Kelurahan</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.kelurahan" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Alamat</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.alamat" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>File Formulir</label>
                <input type="text" class="form-control" disabled v-model="perusahaan.file_formulir" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("perusahaan", {
            perusahaan: state => state.perusahaan,
        }),
    },
    methods: {
        ...mapMutations("perusahaan", ["CLEAR_FORM"]),
        ...mapActions("perusahaan", ["getPerusahaan"]),
    },
    destroyed() {
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_FORM();
        this.getPerusahaan();
    },
    components: {
    },
};
</script>