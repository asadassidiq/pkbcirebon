<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for>Nama Akun</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.name" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Email</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.email" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Telepon</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.telepon" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Provinsi</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.provinsi" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Kabupaten</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.kabupaten" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Kecamatan</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.kecamatan" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Kelurahan</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.kelurahan" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for>Alamat</label>
                <input type="text" class="form-control" disabled v-model="perseorangan.alamat" />
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
        ...mapState("perseorangan", {
            perseorangan: state => state.perseorangan,
        }),
    },
    methods: {
        ...mapMutations("perseorangan", ["CLEAR_FORM"]),
        ...mapActions("perseorangan", ["getPerseorangan"]),
    },
    destroyed() {
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_FORM();
        this.getPerseorangan();
    },
    components: {
    },
};
</script>