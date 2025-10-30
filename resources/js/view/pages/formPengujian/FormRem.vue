<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Jumlah Sumbu</h3>
        </div>
        <div class="col-sm-12">
            <div class="form-group">
                <input type="number" min="2" class="form-control form-control-lg" name="jumlah_sumbu" placeholder="Jumlah Sumbu" v-model="identitaskendaraan.jumlah_sumbu" />
            </div>
        </div>
        <div class="col-sm-12">
            <h3>Berat Sumbu</h3>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>Berat Sumbu 1 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu1"
                    @focus="$event.target.select()" placeholder="berat sumbu 1" readonly
                    v-model="identitaskendaraan.beratsumbu1" />
                <p class="text-danger" v-if="errors.beratsumbu1">{{ errors.beratsumbu1[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>Berat Sumbu 2 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu2"
                    @focus="$event.target.select()" placeholder="berat sumbu 2" readonly
                    v-model="identitaskendaraan.beratsumbu2" />
                <p class="text-danger" v-if="errors.beratsumbu2">{{ errors.beratsumbu2[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 3">
            <div class="form-group">
                <label>Berat Sumbu 3 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu3"
                    @focus="$event.target.select()" placeholder="berat sumbu 3" readonly
                    v-model="identitaskendaraan.beratsumbu3" />
                <p class="text-danger" v-if="errors.beratsumbu3">{{ errors.beratsumbu3[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 4">
            <div class="form-group">
                <label>Berat Sumbu 4 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu4"
                    @focus="$event.target.select()" placeholder="berat sumbu 4" readonly
                    v-model="identitaskendaraan.beratsumbu4" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 5">
            <div class="form-group">
                <label>Berat Sumbu 5 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu5"
                    @focus="$event.target.select()" placeholder="berat sumbu 5" readonly
                    v-model="identitaskendaraan.beratsumbu5" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 6">
            <div class="form-group">
                <label>Berat Sumbu 6 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu6"
                    @focus="$event.target.select()" placeholder="berat sumbu 6" readonly
                    v-model="identitaskendaraan.beratsumbu6" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 7">
            <div class="form-group">
                <label>Berat Sumbu 7 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu7"
                    @focus="$event.target.select()" placeholder="berat sumbu 7" readonly
                    v-model="identitaskendaraan.beratsumbu7" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 8">
            <div class="form-group">
                <label>Berat Sumbu 8 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu4"
                    @focus="$event.target.select()" placeholder="berat sumbu 8" readonly
                    v-model="identitaskendaraan.beratsumbu8" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 9">
            <div class="form-group">
                <label>Berat Sumbu 9 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu4"
                    @focus="$event.target.select()" placeholder="berat sumbu 9" readonly
                    v-model="identitaskendaraan.beratsumbu9" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 10">
            <div class="form-group">
                <label>Berat Sumbu 10 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu10"
                    @focus="$event.target.select()" placeholder="berat sumbu 10" readonly
                    v-model="identitaskendaraan.beratsumbu10" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 11">
            <div class="form-group">
                <label>Berat Sumbu 11 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu11"
                    @focus="$event.target.select()" placeholder="berat sumbu 11" readonly
                    v-model="identitaskendaraan.beratsumbu11" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 12">
            <div class="form-group">
                <label>Berat Sumbu 12 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="beratsumbu12"
                    @focus="$event.target.select()" placeholder="berat sumbu 12" readonly
                    v-model="identitaskendaraan.beratsumbu12" />
            </div>
        </div>
        <div class="col-sm-12">
            <h3>Berat Sumbu UJI</h3>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>Berat Sumbu 1 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats1"
                    @focus="handleFocus('berats1')" placeholder="berat sumbu 1" v-model="laikjalan.berats1"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS1 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
                <p class="text-danger" v-if="errors.beratsumbu1">{{ errors.beratsumbu1[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>Berat Sumbu 2 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats2"
                    @focus="handleFocus('berats2')" placeholder="berat sumbu 2" v-model="laikjalan.berats2"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS2 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
                <p class="text-danger" v-if="errors.beratsumbu2">{{ errors.beratsumbu2[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 3">
            <div class="form-group">
                <label>Berat Sumbu 3 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats3"
                    @focus="handleFocus('berats3')" placeholder="berat sumbu 3" v-model="laikjalan.berats3"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS3 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
                <p class="text-danger" v-if="errors.beratsumbu3">{{ errors.beratsumbu3[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 4">
            <div class="form-group">
                <label>Berat Sumbu 4 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats4"
                    @focus="handleFocus('berats4')" placeholder="berat sumbu 4" v-model="laikjalan.berats4"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS4 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 5">
            <div class="form-group">
                <label>Berat Sumbu 5 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats5"
                    @focus="handleFocus('berats6')" placeholder="berat sumbu 5" v-model="laikjalan.berats5"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS5 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 6">
            <div class="form-group">
                <label>Berat Sumbu 6 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats6"
                    @focus="handleFocus('berats6')" placeholder="berat sumbu 6" v-model="laikjalan.berats6"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS6 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 7">
            <div class="form-group">
                <label>Berat Sumbu 7 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats7"
                    @focus="handleFocus('berats7')" placeholder="berat sumbu 7" v-model="laikjalan.berats7"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS7 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 8">
            <div class="form-group">
                <label>Berat Sumbu 8 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats8"
                    @focus="handleFocus('berats8')" placeholder="berat sumbu 8" v-model="laikjalan.berats8"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS8 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 9">
            <div class="form-group">
                <label>Berat Sumbu 9 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats9"
                    @focus="handleFocus('berats9')" placeholder="berat sumbu 9" v-model="laikjalan.berats9"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS9 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 10">
            <div class="form-group">
                <label>Berat Sumbu 10 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats10"
                    @focus="handleFocus('berats10')" placeholder="berat sumbu 10" v-model="laikjalan.berats10"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS10 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 11">
            <div class="form-group">
                <label>Berat Sumbu 11 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats11"
                    @focus="handleFocus('berats11')" placeholder="berat sumbu 11" v-model="laikjalan.berats11"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS11 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 12">
            <div class="form-group">
                <label>Berat Sumbu 12 (Kg)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="berats12"
                    @focus="handleFocus('berats12')" placeholder="berat sumbu 12" v-model="laikjalan.berats12"
                    @input="checkBeratSumbu"
                    v-bind:style="checkS12 === false ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'" />
            </div>
        </div>

        <div class="col-sm-12">
            <h3>KEMAMPUAN REM UTAMA</h3>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>GAYA REM KIRI S1</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="gayaremkiri1"
                    @focus="handleFocus('gayaremkiri1')" v-model="laikjalan.gayaremkiri1" :disabled="laikjalan.berats1 <= 0"
                    v-bind:style="laikjalan.berats1 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS1" />
                <p class="text-danger" v-if="errors.effsumbu1">{{ errors.effsumbu1[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>GAYA REM KANAN S1</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="gayaremkanan1" v-model="laikjalan.gayaremkanan1" @focus="handleFocus('gayaremkanan1')"
                    :disabled="laikjalan.berats1 <= 0"
                    v-bind:style="laikjalan.berats1 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS1" />
                <p class="text-danger" v-if="errors.effsumbu2">{{ errors.effsumbu2[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>EFF REM S1 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="effsumbu1"
                    readonly @focus="$event.target.select()" v-model="pengujian.effsumbu1"
                    v-bind:style="pengujian.effsumbu1 < 50 || pengujian.effsumbu1 > 100 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
                <p class="text-danger" v-if="errors.effsumbu1">{{ errors.effsumbu1[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>PENYIMPANGAN REM S1 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_remutamaselisihgayapengeremanrodakirikanan1" readonly @focus="$event.target.select()"
                    v-model="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1"
                    v-bind:style="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1 > 8 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
                <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1">{{
                    errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>GAYA REM KIRI S2</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="gayaremkiri2"
                    @focus="handleFocus('gayaremkiri2')"
                    v-model="laikjalan.gayaremkiri2"
                    v-bind:style="laikjalan.berats2 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS2" />
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>GAYA REM KANAN S2</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="gayaremkanan2" @focus="handleFocus('gayaremkanan2')" :disabled="laikjalan.berats2 <= 0"
                    v-model="laikjalan.gayaremkanan2"
                    v-bind:style="laikjalan.berats2 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS2" />
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>EFF REM S2 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="effsumbu2"
                    readonly v-model="pengujian.effsumbu2" @focus="$event.target.select()"
                    v-bind:style="pengujian.effsumbu2 < 50 || pengujian.effsumbu2 > 100 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
                <p class="text-danger" v-if="errors.effsumbu2">{{ errors.effsumbu2[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form-group">
                <label>PENYIMPANGAN REM S2 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_remutamaselisihgayapengeremanrodakirikanan2" readonly @focus="$event.target.select()"
                    v-model="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2"
                    v-bind:style="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2 > 8 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
                <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2">{{
                    errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 3">
            <div class="form-group">
                <label>GAYA REM KIRI S3</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="gayaremkiri3"
                    @focus="handleFocus('gayaremkiri3')" v-model="laikjalan.gayaremkiri3" :disabled="laikjalan.berats3 <= 0"
                    v-bind:style="laikjalan.berats3 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS3" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 3">
            <div class="form-group">
                <label>GAYA REM KANAN S3</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="gayaremkanan3" v-model="laikjalan.gayaremkanan3" @focus="handleFocus('gayaremkanan3')"
                    :disabled="laikjalan.berats3 <= 0"
                    v-bind:style="laikjalan.berats3 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS3" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 3">
            <div class="form-group">
                <label>EFF REM S3 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="effsumbu3"
                    readonly @focus="$event.target.select()" v-model="pengujian.effsumbu3" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 3">
            <div class="form-group">
                <label>PENYIMPANGAN REM S3 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="width"
                    readonly @focus="$event.target.select()"
                    v-model="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3"
                    v-bind:style="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3 > 8 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
                <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3">{{
                    errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 4">
            <div class="form-group">
                <label>GAYA REM KIRI S4</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="gayaremkiri4"
                    @focus="handleFocus('gayaremkiri4')" v-model="laikjalan.gayaremkiri4" :disabled="laikjalan.berats4 <= 0"
                    v-bind:style="laikjalan.berats4 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS4" />
                <p class="text-danger" v-if="errors.effsumbu3">{{ errors.effsumbu3[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 4">
            <div class="form-group">
                <label>GAYA REM KANAN S4</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="gayaremkanan4" @focus="handleFocus('gayaremkanan4')" :disabled="laikjalan.berats4 <= 0"
                    v-model="laikjalan.gayaremkanan4"
                    v-bind:style="laikjalan.berats4 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS4" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 4">
            <div class="form-group">
                <label>EFF REM S4 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="effsumbu4"
                    readonly @focus="$event.target.select()" v-model="pengujian.effsumbu4" />
                <p class="text-danger" v-if="errors.effsumbu4">{{ errors.effsumbu4[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 4">
            <div class="form-group">
                <label>PENYIMPANGAN REM S4 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_remutamaselisihgayapengeremanrodakirikanan4" readonly @focus="$event.target.select()"
                    v-model="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4"
                    v-bind:style="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4 > 8 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
                <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4">{{
                    errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4[0] }}</p>
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 5">
            <div class="form-group">
                <label>GAYA REM KIRI S5</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="gayaremkiri5"
                    @focus="handleFocus('gayaremkiri5')" v-model="laikjalan.gayaremkiri5" :disabled="laikjalan.berats5 <= 0"
                    v-bind:style="laikjalan.berats5 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS5" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 5">
            <div class="form-group">
                <label>GAYA REM KANAN S5</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="gayaremkanan5" @focus="handleFocus('gayaremkanan5')" :disabled="laikjalan.berats5 <= 0"
                    v-model="laikjalan.gayaremkanan5"
                    v-bind:style="laikjalan.berats5 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS5" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 5">
            <div class="form-group">
                <label>EFF REM S5 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="effsumbu5"
                    readonly @focus="$event.target.select()" v-model="pengujian.effsumbu5" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 5">
            <div class="form-group">
                <label>PENYIMPANGAN REM S5 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_remutamaselisihgayapengeremanrodakirikanan5" readonly @focus="$event.target.select()"
                    v-model="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5"
                    v-bind:style="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5 > 8 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 6">
            <div class="form-group">
                <label>GAYA REM KIRI S6</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="gayaremkiri6"
                    @focus="handleFocus('gayaremkiri6')" v-model="laikjalan.gayaremkiri6" :disabled="laikjalan.berats6 <= 0"
                    v-bind:style="laikjalan.berats6 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS6" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 6">
            <div class="form-group">
                <label>GAYA REM KANAN S6</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="gayaremkanan6" @focus="handleFocus('gayaremkanan6')" :disabled="laikjalan.berats6 <= 0"
                    v-model="laikjalan.gayaremkanan6"
                    v-bind:style="laikjalan.berats6 > 0 ? 'background-color: #F3F6F9;' : 'background-color: #f5c842;'"
                    @input="countEffS6" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 6">
            <div class="form-group">
                <label>EFF REM S6 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="effsumbu6"
                    readonly @focus="$event.target.select()" v-model="pengujian.effsumbu6" />
            </div>
        </div>
        <div class="col-sm-3" v-if="identitaskendaraan.jumlah_sumbu >= 6">
            <div class="form-group">
                <label>PENYIMPANGAN REM S6 (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_remutamaselisihgayapengeremanrodakirikanan6" readonly @focus="$event.target.select()"
                    v-model="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6"
                    v-bind:style="laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6 > 8 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group">
                <label>Total Eff Rem (%)</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="totalgayarem"
                    @focus="$event.target.select()" readonly v-model="pengujian.totalgayarem"
                    v-bind:style="pengujian.totalgayarem < 50 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group">
                <label>Total Gaya Rem (Kg)</label>
                <input type="number" min="0" name="alatuji_remutamatotalgayapengereman" readonly
                    class="form-control  form-control-lg"
                    v-model="laikjalan.alatuji_remutamatotalgayapengereman" />
            </div>
        </div>

        <div class="col-sm-3">
            <div class="form-group">
                <label>Gaya Rem Parkir Kiri</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_gayapengeremanparkirkiri" @focus="handleFocus('alatuji_gayapengeremanparkirkiri')"
                    v-model="laikjalan.alatuji_gayapengeremanparkirkiri" v-on:change="countEffParkir" />
            </div>
        </div>

        <div class="col-sm-3">
            <div class="form-group">
                <label>Gaya Rem Parkir Kanan</label>
                <input type="number" min="0" class="form-control  form-control-lg"
                    name="alatuji_gayapengeremanparkirkanan" @focus="handleFocus('alatuji_gayapengeremanparkirkanan')"
                    v-model="laikjalan.alatuji_gayapengeremanparkirkanan" v-on:change="countEffParkir" />
            </div>
        </div>

        <div class="col-sm-3">
            <div class="form-group">
                <label>Eff Rem Parkir</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="alatuji_remparkirtangan"
                    readonly @focus="$event.target.select()" v-model="laikjalan.alatuji_remparkirtangan"
                    v-bind:style="laikjalan.alatuji_remparkirtangan < 12 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'" />
            </div>
        </div>

        <div class="col-sm-3">
            <div class="form-group">
                <label>Total Rem Parkir</label>
                <input type="number" min="0" class="form-control  form-control-lg" name="alatuji_remparkirtotalgayapengereman"
                    readonly @focus="$event.target.select()" v-model="laikjalan.alatuji_remparkirtotalgayapengereman" />
            </div>
        </div>

        <div class="col-3 col-form-label">
            <label><b>Alasan Kiri</b></label>
            <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_remkiri == '0'"
                @click="showModal('Rem Kiri', '-')">
                <i class="far fa-window-close"></i>
            </button>
        </div>
        <div class="col-3 col-form-label">
            <label><b>Alasan Kanan</b></label>
            <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_remkanan == '0'"
                @click="showModal('Rem Kanan', '-')">
                <i class="far fa-window-close"></i>
            </button>
        </div>

        <div class="col-3 col-form-label">
            <label><b>Alasan Rem Parkir</b></label>
            <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_remparkir == '0'"
                @click="showModal('Rem Parkir', 'Tangan : ' + laikjalan.alatuji_remparkirtangan + '%, Kaki : ' + laikjalan.alatuji_remparkirkaki + '%')">
                <i class="far fa-window-close"></i>
            </button>
        </div>

        <b-modal ref="my-modal" title="Catatan Penolakan" @ok="submit">
            <div class="form-group">
                <input type="text" class="form-control  form-control-lg"
                    style="text-transform: uppercase;" v-model="catatan.nama" disabled />
                <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
            </div>
            <div class="form-group row">
                <div class="col-12 col-form-label">
                    <div class="checkbox-list">
                        <label class="checkbox" v-for="item in alasan" :key="item.id">
                            <input type="checkbox" :id="item.id" :value="item.alasanpenolakan"
                                v-model="catatan.alasan" />
                            <span></span>
                            {{ item.alasanpenolakan }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleSelect1">Rekomendasi Perbaikan <span class="text-danger">*</span></label>
                <select class="form-control" id="exampleSelect1" v-model="catatan.rekomendasi" @change="lain">
                    <option>Perbaikan</option>
                    <option>Penggantian</option>
                    <option>Penyetelan</option>
                    <option>Lain-lain</option>
                </select>
                <input type="text" class="form-control  form-control-lg"
                    style="text-transform: uppercase;" v-model="catatan.rekomendasi" v-if="lainlain" />
            </div>
        </b-modal>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";
export default {
    data() {
        return {
            lainlain: false,
            checkS1: true,
            checkS2: true,
            checkS3: true,
            checkS4: true,
            checkS5: true,
            checkS6: true,
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("pos4", {
            laikjalan: state => state.laikjalan,
            pengujian: state => state.pengujian,
            catatan: state => state.catatan,
            alasan: state => state.alasan,
            pendaftaran: state => state.pendaftaran,
            identitaskendaraan: state => state.identitaskendaraan,
            urlApp: state => state.urlApp
        }),
    },
    methods: {
        ...mapMutations("pos4", ["CLEAR_FORM", "CLEAR_CATATAN","CHECK_HASILUJI"]),
        ...mapActions("pos4", ["submitCatatan", "getCatatan", "getAlasan","getBrake","submitBrake"]),
        showModal(nama, hasil) {
            this.CLEAR_CATATAN();
            this.catatan.nama = nama;
            this.catatan.hasiluji = hasil;
            this.catatan.pos = 4;
            this.catatan.status = '1';
            this.getAlasan();
            this.getCatatan(this.$route.params.id);
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        lain() {
            if (this.catatan.rekomendasi == 'Lain-lain') {
                this.lainlain = true
            } else {
                this.lainlain = false
            }
        },
        check(nama, hasil) {
            if (this.laikjalan.alatuji_remparkirtangan < 12) {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            }
        },
        checkBeratSumbu() {
            if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
                this.checkS1 = true;
                this.countEffS1();
            } else if (this.identitaskendaraan.beratsumbu1 > this.laikjalan.berats1) {
                var selisih = this.identitaskendaraan.beratsumbu1 - this.laikjalan.berats1;
                var validasi = this.identitaskendaraan.beratsumbu1 * 0.1;
                if (selisih < validasi) {
                    this.checkS1 = false;
                } else if (selisih == validasi) {
                    this.checkS1 = true;
                } else {
                    this.checkS1 = true;
                }
                this.countEffS1();
            } else if (this.identitaskendaraan.beratsumbu1 < this.laikjalan.berats1) {
                var selisih = this.laikjalan.berats1 - this.identitaskendaraan.beratsumbu1;
                var validasi = this.identitaskendaraan.beratsumbu1 * 0.1;
                if (selisih < validasi) {
                    this.checkS1 = false;
                } else if (selisih == validasi) {
                    this.checkS1 = true;
                } else {
                    this.checkS1 = true;
                }
                this.countEffS1();
            } else if (this.identitaskendaraan.beratsumbu1 === this.laikjalan.berats1) {
                this.checkS1 = true;
                this.countEffS1();
            } else {
                this.countEffS1();
                this.checkS1 = false;
            }

            if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
                this.checkS2 = true;
                this.countEffS2();
            } else if (this.identitaskendaraan.beratsumbu2 > this.laikjalan.berats2) {
                var selisih = this.identitaskendaraan.beratsumbu2 - this.laikjalan.berats2;
                var validasi = this.identitaskendaraan.beratsumbu2 * 0.1;
                if (selisih < validasi) {
                    this.checkS2 = false;
                } else if (selisih == validasi) {
                    this.checkS2 = true;
                } else {
                    this.checkS2 = true;
                }
                this.countEffS2();
            } else if (this.identitaskendaraan.beratsumbu2 < this.laikjalan.berats2) {
                var selisih = this.laikjalan.berats2 - this.identitaskendaraan.beratsumbu2;
                var validasi = this.identitaskendaraan.beratsumbu2 * 0.1;
                if (selisih < validasi) {
                    this.checkS2 = false;
                } else if (selisih == validasi) {
                    this.checkS2 = true;
                } else {
                    this.checkS2 = true;
                }
                this.countEffS2();
            } else if (this.identitaskendaraan.beratsumbu2 === this.laikjalan.berats2) {
                this.checkS2 = true;
                this.countEffS2();
            } else {
                this.checkS2 = false;
                this.countEffS2();
            }

            if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
                this.checkS3 = true;
                this.countEffS3();
            } else if (this.identitaskendaraan.beratsumbu3 > this.laikjalan.berats3) {
                var selisih = this.identitaskendaraan.beratsumbu3 - this.laikjalan.berats3;
                var validasi = this.identitaskendaraan.beratsumbu3 * 0.1;
                if (selisih < validasi) {
                    this.checkS3 = false;
                } else if (selisih == validasi) {
                    this.checkS3 = true;
                } else {
                    this.checkS3 = true;
                }
                this.countEffS3();
            } else if (this.identitaskendaraan.beratsumbu3 < this.laikjalan.berats3) {
                var selisih = this.laikjalan.berats3 - this.identitaskendaraan.beratsumbu3;
                var validasi = this.identitaskendaraan.beratsumbu3 * 0.1;
                if (selisih < validasi) {
                    this.checkS3 = false;
                } else if (selisih == validasi) {
                    this.checkS3 = true;
                } else {
                    this.checkS3 = true;
                }
                this.countEffS3();
            } else if (this.identitaskendaraan.beratsumbu3 === this.laikjalan.berats3) {
                this.checkS3 = true;
                this.countEffS3();
            } else {
                this.checkS3 = false;
                this.countEffS3();
            }

            if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
                this.checkS4 = true;
                this.countEffS4();
            } else if (this.identitaskendaraan.beratsumbu4 > this.laikjalan.berats4) {
                var selisih = this.identitaskendaraan.beratsumbu4 - this.laikjalan.berats4;
                var validasi = this.identitaskendaraan.beratsumbu4 * 0.1;
                if (selisih < validasi) {
                    this.checkS4 = false;
                } else if (selisih == validasi) {
                    this.checkS4 = true;
                } else {
                    this.checkS4 = true;
                }
                this.countEffS4();
            } else if (this.identitaskendaraan.beratsumbu4 < this.laikjalan.berats4) {
                var selisih = this.laikjalan.berats4 - this.identitaskendaraan.beratsumbu4;
                var validasi = this.identitaskendaraan.beratsumbu4 * 0.1;
                if (selisih < validasi) {
                    this.checkS4 = false;
                } else if (selisih == validasi) {
                    this.checkS4 = true;
                } else {
                    this.checkS4 = true;
                }
                this.countEffS4();
            } else if (this.identitaskendaraan.beratsumbu4 === this.laikjalan.berats4) {
                this.checkS4 = true;
                this.countEffS4();
            } else {
                this.checkS4 = false;
                this.countEffS4();
            }

            if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
                this.checkS5 = true;
                this.countEffS5();
            } else if (this.identitaskendaraan.beratsumbu5 > this.laikjalan.berats5) {
                var selisih = this.identitaskendaraan.beratsumbu5 - this.laikjalan.berats5;
                var validasi = this.identitaskendaraan.beratsumbu5 * 0.1;
                if (selisih < validasi) {
                    this.checkS5 = false;
                } else if (selisih == validasi) {
                    this.checkS5 = true;
                } else {
                    this.checkS5 = true;
                }
                this.countEffS5();
            } else if (this.identitaskendaraan.beratsumbu5 < this.laikjalan.berats5) {
                var selisih = this.laikjalan.berats5 - this.identitaskendaraan.beratsumbu5;
                var validasi = this.identitaskendaraan.beratsumbu5 * 0.1;
                if (selisih < validasi) {
                    this.checkS5 = false;
                } else if (selisih == validasi) {
                    this.checkS5 = true;
                } else {
                    this.checkS5 = true;
                }
                this.countEffS5();
            } else if (this.identitaskendaraan.beratsumbu5 === this.laikjalan.berats5) {
                this.checkS5 = true;
                this.countEffS5();
            } else {
                this.checkS5 = false;
                this.countEffS5();
            }

            if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
                this.checkS6 = true;
                this.countEffS6();
            } else if (this.identitaskendaraan.beratsumbu6 > this.laikjalan.berats6) {
                var selisih = this.identitaskendaraan.beratsumbu6 - this.laikjalan.berats6;
                var validasi = this.identitaskendaraan.beratsumbu6 * 0.1;
                if (selisih < validasi) {
                    this.checkS6 = false;
                } else if (selisih == validasi) {
                    this.checkS6 = true;
                } else {
                    this.checkS6 = true;
                }
                this.countEffS6();
            } else if (this.identitaskendaraan.beratsumbu6 < this.laikjalan.berats6) {
                var selisih = this.laikjalan.berats6 - this.identitaskendaraan.beratsumbu6;
                var validasi = this.identitaskendaraan.beratsumbu6 * 0.1;
                if (selisih < validasi) {
                    this.checkS6 = false;
                } else if (selisih == validasi) {
                    this.checkS6 = true;
                } else {
                    this.checkS6 = true;
                }
                this.countEffS6();
            } else if (this.identitaskendaraan.beratsumbu6 === this.laikjalan.berats6) {
                this.checkS6 = true;
                this.countEffS6();
            } else {
                this.checkS6 = false;
                this.countEffS6();
            }
        },
        countEffS1() {
            if (this.laikjalan.berats1 < 0 || this.laikjalan.berats1 === null) {
                this.laikjalan.berats1 = 0;
            }

            if (this.laikjalan.gayaremkiri1 < 0 || this.laikjalan.gayaremkiri1 === null) {
                this.laikjalan.gayaremkiri1 = 0;
            }
            if (this.laikjalan.gayaremkanan1 < 0 || this.laikjalan.gayaremkanan1 === null) {
                this.laikjalan.gayaremkanan1 = 0;
            }

            var kiri = 0; var kanan = 0; var total = 0;
            if (this.laikjalan.berats1 > 0) {
                kiri = this.laikjalan.gayaremkiri1;
                kanan = this.laikjalan.gayaremkanan1;
                total = parseInt(kiri) + parseInt(kanan);
                this.pengujian.effsumbu1 = Math.ceil((total / this.laikjalan.berats1) * 100);
            }
            kiri = this.laikjalan.gayaremkiri1;
            kanan = this.laikjalan.gayaremkanan1;
            total = parseInt(kiri) + parseInt(kanan);


            if (this.pengujian.effsumbu1 > 0) {
                this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1 = Math.ceil((Math.abs(kiri - kanan) / this.laikjalan.berats1) * 100);
                this.totEffRem();
            }

            this.hasiluji();
        },
        countEffS2() {
            if (this.laikjalan.berats2 < 0 || this.laikjalan.berats2 === null) {
                this.laikjalan.berats2 = 0;
            }

            if (this.laikjalan.gayaremkiri2 < 0 || this.laikjalan.gayaremkiri2 === null) {
                this.laikjalan.gayaremkiri2 = 0;
            }
            if (this.laikjalan.gayaremkanan2 < 0 || this.laikjalan.gayaremkanan2 === null) {
                this.laikjalan.gayaremkanan2 = 0;
            }

            var kiri = 0; var kanan = 0; var total = 0;
            if (this.laikjalan.berats2 > 0) {
                kiri = this.laikjalan.gayaremkiri2;
                kanan = this.laikjalan.gayaremkanan2;
                total = parseInt(kiri) + parseInt(kanan);
                this.pengujian.effsumbu2 = Math.ceil((total / this.laikjalan.berats2) * 100);
                console.log(total+" /"+this.laikjalan.berats2)
            }

            if (this.pengujian.effsumbu2 > 0) {
                this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2 = Math.ceil((Math.abs(kiri - kanan) / this.laikjalan.berats2) * 100);
                this.totEffRem();
            }
            this.hasiluji();
        },
        countEffS3() {
            if (this.laikjalan.berats3 < 0 || this.laikjalan.berats3 === null) {
                this.laikjalan.berats3 = 0;
            }

            if (this.laikjalan.gayaremkiri3 < 0 || this.laikjalan.gayaremkiri3 === null) {
                this.laikjalan.gayaremkiri3 = 0;
            }
            if (this.laikjalan.gayaremkanan3 < 0 || this.laikjalan.gayaremkanan3 === null) {
                this.laikjalan.gayaremkanan3 = 0;
            }

            var kiri = 0; var kanan = 0; var total = 0;
            if (this.laikjalan.berats3 > 0) {
                kiri = this.laikjalan.gayaremkiri3;
                kanan = this.laikjalan.gayaremkanan3;
                total = parseInt(kiri) + parseInt(kanan);
                this.pengujian.effsumbu3 = Math.ceil((total / this.laikjalan.berats3) * 100);
            }

            if (this.pengujian.effsumbu3 > 0) {
                this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3 = Math.ceil((Math.abs(kiri - kanan) / this.laikjalan.berats3) * 100);
                this.totEffRem();
            }
            this.hasiluji();
        },
        countEffS4() {
            if (this.laikjalan.berats4 < 0 || this.laikjalan.berats4 === null) {
                this.laikjalan.berats4 = 0;
            }
            ``
            if (this.laikjalan.gayaremkiri4 < 0 || this.laikjalan.gayaremkiri4 === null) {
                this.laikjalan.gayaremkiri4 = 0;
            }
            if (this.laikjalan.gayaremkanan4 < 0 || this.laikjalan.gayaremkanan4 === null) {
                this.laikjalan.gayaremkanan4 = 0;
            }

            var kiri = 0; var kanan = 0; var total = 0;
            if (this.laikjalan.berats4 > 0) {
                kiri = this.laikjalan.gayaremkiri4;
                kanan = this.laikjalan.gayaremkanan4;
                total = parseInt(kiri) + parseInt(kanan);
                this.pengujian.effsumbu4 = Math.ceil((total / this.laikjalan.berats4) * 100);
            }

            if (this.pengujian.effsumbu4 > 0) {
                this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4 = Math.ceil((Math.abs(kiri - kanan) / this.laikjalan.berats4) * 100);
                this.totEffRem();
            }
            this.hasiluji();
        },
        countEffS5() {
            if (this.laikjalan.berats5 < 0 || this.laikjalan.berats5 === null) {
                this.laikjalan.berats5 = 0;
            }
            ``
            if (this.laikjalan.gayaremkiri5 < 0 || this.laikjalan.gayaremkiri5 === null) {
                this.laikjalan.gayaremkiri5 = 0;
            }
            if (this.laikjalan.gayaremkanan5 < 0 || this.laikjalan.gayaremkanan5 === null) {
                this.laikjalan.gayaremkanan5 = 0;
            }

            var kiri = 0; var kanan = 0; var total = 0;
            if (this.laikjalan.berats5 > 0) {
                kiri = this.laikjalan.gayaremkiri5;
                kanan = this.laikjalan.gayaremkanan5;
                total = parseInt(kiri) + parseInt(kanan);
                this.pengujian.effsumbu5 = Math.ceil((total / this.laikjalan.berats5) * 100);
            }

            if (this.pengujian.effsumbu5 > 0) {
                this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5 = Math.ceil((Math.abs(kiri - kanan) / this.laikjalan.berats5) * 100);
                this.totEffRem();
            }
            this.hasiluji();
        },
        countEffS6() {
            if (this.laikjalan.berats6 < 0 || this.laikjalan.berats6 === null) {
                this.laikjalan.berats6 = 0;
            }
            ``
            if (this.laikjalan.gayaremkiri6 < 0 || this.laikjalan.gayaremkiri6 === null) {
                this.laikjalan.gayaremkiri6 = 0;
            }
            if (this.laikjalan.gayaremkanan6 < 0 || this.laikjalan.gayaremkanan6 === null) {
                this.laikjalan.gayaremkanan6 = 0;
            }

            var kiri = 0; var kanan = 0; var total = 0;
            if (this.laikjalan.berats6 > 0) {
                kiri = this.laikjalan.gayaremkiri6;
                kanan = this.laikjalan.gayaremkanan6;
                total = parseInt(kiri) + parseInt(kanan);
                this.pengujian.effsumbu6 = Math.ceil((total / this.laikjalan.berats6) * 100);
            }

            if (this.pengujian.effsumbu6 > 0) {
                this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6 = Math.ceil((Math.abs(kiri - kanan) / this.laikjalan.berats6) * 100);
                this.totEffRem();
            }
            this.hasiluji();
        },
        countEffParkir() {
            if (this.laikjalan.berats1 < 0 || this.laikjalan.berats1 === null) {
                this.laikjalan.berats1 = 0;
            }
            if (this.laikjalan.berats2 < 0 || this.laikjalan.berats2 === null) {
                this.laikjalan.berats2 = 0;
            }
            if (this.laikjalan.berats3 < 0 || this.laikjalan.berats3 === null) {
                this.laikjalan.berats3 = 0;
            }
            if (this.laikjalan.berats4 < 0 || this.laikjalan.berats4 === null) {
                this.laikjalan.berats4 = 0;
            }
            if (this.laikjalan.berats5 < 0 || this.laikjalan.berats5 === null) {
                this.laikjalan.berats5 = 0;
            }
            if (this.laikjalan.berats6 < 0 || this.laikjalan.berats6 === null) {
                this.laikjalan.berats6 = 0;
            }
            var totalBeratSumbu = parseInt(this.laikjalan.berats1) + parseInt(this.laikjalan.berats2) + parseInt(this.laikjalan.berats3) + parseInt(this.laikjalan.berats4) + parseInt(this.laikjalan.berats5) + parseInt(this.laikjalan.berats6);
            this.laikjalan.alatuji_remparkirtotalgayapengereman = parseInt(this.laikjalan.alatuji_gayapengeremanparkirkiri) + parseInt(this.laikjalan.alatuji_gayapengeremanparkirkanan);
            this.laikjalan.alatuji_remparkirtangan = Math.ceil((this.laikjalan.alatuji_remparkirtotalgayapengereman / totalBeratSumbu) * 100);
            this.hasiluji();
        },
        totEffRem() {
            var i = 0;
            if (this.pengujian.effsumbu1 < 0 || this.pengujian.effsumbu1 === null) {
                this.pengujian.effsumbu1 = 0;
            }
            if (this.pengujian.effsumbu2 < 0 || this.pengujian.effsumbu2 === null) {
                this.pengujian.effsumbu2 = 0;
            }
            if (this.pengujian.effsumbu3 < 0 || this.pengujian.effsumbu3 === null) {
                this.pengujian.effsumbu3 = 0;
            }
            if (this.pengujian.effsumbu4 < 0 || this.pengujian.effsumbu4 === null) {
                this.pengujian.effsumbu4 = 0;
            }
            if (this.pengujian.effsumbu5 < 0 || this.pengujian.effsumbu5 === null) {
                this.pengujian.effsumbu5 = 0;
            }
            if (this.pengujian.effsumbu6 < 0 || this.pengujian.effsumbu6 === null) {
                this.pengujian.effsumbu6 = 0;
            }

            if (this.pengujian.effsumbu1 > 0) {
                i = 1;
            }
            if (this.pengujian.effsumbu2 > 0) {
                i = 2;
            }
            if (this.pengujian.effsumbu3 > 0) {
                i = 3;
            }
            if (this.pengujian.effsumbu4 > 0) {
                i = 4;
            }
            if (this.pengujian.effsumbu5 > 0) {
                i = 5;
            }
            if (this.pengujian.effsumbu6 > 0) {
                i = 6;
            }

            if (i == 1) {
                this.pengujian.totalgayarem = this.pengujian.effsumbu1;
                this.laikjalan.alatuji_remutamatotalgayapengereman = parseInt(this.laikjalan.gayaremkiri1) + parseInt(this.laikjalan.gayaremkanan1);
            } else if (i == 2) {
                this.pengujian.totalgayarem = (parseInt(this.pengujian.effsumbu1) + parseInt(this.pengujian.effsumbu2)) / i;
                this.laikjalan.alatuji_remutamatotalgayapengereman = parseInt(this.laikjalan.gayaremkiri1) + parseInt(this.laikjalan.gayaremkanan1) + parseInt(this.laikjalan.gayaremkiri2) + parseInt(this.laikjalan.gayaremkanan2);
            } else if (i == 3) {
                this.pengujian.totalgayarem = (parseInt(this.pengujian.effsumbu1) + parseInt(this.pengujian.effsumbu2) + parseInt(this.pengujian.effsumbu3)) / i;
                this.laikjalan.alatuji_remutamatotalgayapengereman = parseInt(this.laikjalan.gayaremkiri1) + parseInt(this.laikjalan.gayaremkanan1) + parseInt(this.laikjalan.gayaremkiri2) + parseInt(this.laikjalan.gayaremkanan2) + parseInt(this.laikjalan.gayaremkiri3) + parseInt(this.laikjalan.gayaremkanan3);
            } else if (i == 4) {
                this.pengujian.totalgayarem = (parseInt(this.pengujian.effsumbu1) + parseInt(this.pengujian.effsumbu2) + parseInt(this.pengujian.effsumbu3) + parseInt(this.pengujian.effsumbu4)) / i;
                this.laikjalan.alatuji_remutamatotalgayapengereman = parseInt(this.laikjalan.gayaremkiri1) + parseInt(this.laikjalan.gayaremkanan1) + parseInt(this.laikjalan.gayaremkiri2) + parseInt(this.laikjalan.gayaremkanan2) + parseInt(this.laikjalan.gayaremkiri3) + parseInt(this.laikjalan.gayaremkanan3) + parseInt(this.laikjalan.gayaremkiri4) + parseInt(this.laikjalan.gayaremkanan4);
            } else if (i == 5) {
                this.pengujian.totalgayarem = (parseInt(this.pengujian.effsumbu1) + parseInt(this.pengujian.effsumbu2) + parseInt(this.pengujian.effsumbu3) + parseInt(this.pengujian.effsumbu4)+ parseInt(this.pengujian.effsumbu5)) / i;
                this.laikjalan.alatuji_remutamatotalgayapengereman = parseInt(this.laikjalan.gayaremkiri1) + parseInt(this.laikjalan.gayaremkanan1) + parseInt(this.laikjalan.gayaremkiri2) + parseInt(this.laikjalan.gayaremkanan2) + parseInt(this.laikjalan.gayaremkiri3) + parseInt(this.laikjalan.gayaremkanan3) + parseInt(this.laikjalan.gayaremkiri4) + parseInt(this.laikjalan.gayaremkanan4) + parseInt(this.laikjalan.gayaremkiri5) + parseInt(this.laikjalan.gayaremkanan5);
            } else if (i == 4) {
                this.pengujian.totalgayarem = (parseInt(this.pengujian.effsumbu1) + parseInt(this.pengujian.effsumbu2) + parseInt(this.pengujian.effsumbu3) + parseInt(this.pengujian.effsumbu4) + parseInt(this.pengujian.effsumbu5) + parseInt(this.pengujian.effsumbu6)) / i;
                this.laikjalan.alatuji_remutamatotalgayapengereman = parseInt(this.laikjalan.gayaremkiri1) + parseInt(this.laikjalan.gayaremkanan1) + parseInt(this.laikjalan.gayaremkiri2) + parseInt(this.laikjalan.gayaremkanan2) + parseInt(this.laikjalan.gayaremkiri3) + parseInt(this.laikjalan.gayaremkanan3) + parseInt(this.laikjalan.gayaremkiri4) + parseInt(this.laikjalan.gayaremkanan4) + parseInt(this.laikjalan.gayaremkiri5) + parseInt(this.laikjalan.gayaremkanan5) + parseInt(this.laikjalan.gayaremkiri6) + parseInt(this.laikjalan.gayaremkanan6);
            }

        },
        submit() {
            this.submitCatatan(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    confirmButtonClass: "btn btn-secondary"
                });
            });
        },
        hasiluji() {
            this.CHECK_HASILUJI();
        },
        handleFocus(field) {
            if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0" ) {
                this.laikjalan[field] = '';
            }
        },
        sendData(){
            // const data = {
            //     noregistrasikendaraan: this.identitaskendaraan.noregistrasikendaraan,
            //     tipe: this.identitaskendaraan.tipe,
            //     thpembuatan: this.identitaskendaraan.thpembuatan,
            //     merek:this.identitaskendaraan.merek,
            //     beratkosong:this.identitaskendaraan.beratkosong,
            //     jenis:this.identitaskendaraan.jenis,
            // };
            // axios.post(this.urlApp+'vehicle',data)
            //     .then(response => {
            //         // console.log('Data kendaraan:', response.data);
            //     })
            //     .catch(error => {
            //         console.error('Terjadi kesalahan:', error);
            //     });
            this.submitBrake().then(() => {
                Swal.fire({
                    title: "",
                    text: "Success send Data",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        },
        getData(){
            this.getBrake().then(() => {
                this.totEffRem();
                this.countEffParkir();
                this.checkBeratSumbu();
                Swal.fire({
                    title: "",
                    text: "Success Ambil Data",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        },
    },
    destroyed() {
        this.CLEAR_CATATAN();
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_CATATAN();
        this.CLEAR_FORM();
        setTimeout(() => {
        this.totEffRem();
        this.countEffParkir();
        this.checkBeratSumbu();
        }, 1000);
    },
    components: {
    },
};
</script>