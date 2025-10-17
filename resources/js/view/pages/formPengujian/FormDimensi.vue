<template>
  <div>
    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label"></label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <label>Ukuran</label>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <label>Lulus</label>
          </label>
          <label class="radio radio-danger">
            <label>Tidak Lulus</label>
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <label>Alasan Penolakan</label>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <label>Kelebihan/Kekurangan</label>
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-lg-2 col-md-4 col-sm-6 col-form-label">Wheel Base(a)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="a" v-on:change="setMST" @focus="handleFocus('a')" v-model="identitaskendaraan.a"
            class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.a" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.a" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.a" :options="options" size="sm"></b-form-select>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_a" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Julur Depan(FOH)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="julurdepan" @focus="handleFocus('julurdepan')"
            v-model="identitaskendaraan.julurdepan" @input="checkJulurDepan" v-bind:style="dimensi.julurdepan == 0
              ? 'background-color: #DC143C;'
              : 'background-color: #F3F6F9;'
              " class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.julurdepan" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.julurdepan" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.julurdepan" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_julurdepan" class="form-control"
          placeholder="mm" />
      </div>
      <p class="text-danger" v-if="errors.julurdepan">
        {{ errors.julurdepan[0] }}
      </p>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Titip Berat Pengemudi(p)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="p" @focus="handleFocus('p')" v-model="identitaskendaraan.p" class="form-control"
            placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.p" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.p" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.p" :options="options" size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_p" class="form-control"
          placeholder="mm" />
      </div>
      <p class="text-danger" v-if="errors.p">{{ errors.p[0] }}</p>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Tinggi Kendaraan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="tinggikendaraan" @focus="handleFocus('tinggikendaraan')" v-bind:style="dimensi.tinggikendaraan == 0
            ? 'background-color: #DC143C;'
            : 'background-color: #F3F6F9;'
            " v-model="identitaskendaraan.tinggikendaraan" class="form-control" @input="checkTinggikendaraan"
            placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggikendaraan" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggikendaraan" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.tinggikendaraan" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_tinggikendaraan" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu I-II</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu1_2" @focus="handleFocus('jaraksumbu1_2')"
            v-model="identitaskendaraan.jaraksumbu1_2" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu1_2" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu1_2" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu1_2" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu1_2" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu II-III</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu2_3" @focus="handleFocus('jaraksumbu2_3')"
            v-model="identitaskendaraan.jaraksumbu2_3" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu2_3" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu2_3" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu2_3" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu2_3" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu III-IV</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu3_4" @focus="handleFocus('jaraksumbu3_4')"
            v-model="identitaskendaraan.jaraksumbu3_4" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu3_4" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu3_4" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu3_4" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu3_4" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 4">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu IV-V</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu4_5" @focus="handleFocus('jaraksumbu4_5')"
            v-model="identitaskendaraan.jaraksumbu4_5" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu4_5" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu4_5" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu4_5" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu4_5" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 5">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu V-VI</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu5_6" @focus="handleFocus('jaraksumbu5_6')"
            v-model="identitaskendaraan.jaraksumbu5_6" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu5_6" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu5_6" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu5_6" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu5_6" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 6">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu VI-VII</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu6_7" @focus="handleFocus('jaraksumbu6_7')"
            v-model="identitaskendaraan.jaraksumbu6_7" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu6_7" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu6_7" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu6_7" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu6_7" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 7">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu VII-VIII</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu7_8" @focus="handleFocus('jaraksumbu7_8')"
            v-model="identitaskendaraan.jaraksumbu7_8" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu7_8" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu7_8" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu7_8" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu7_8" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 8">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu VIII-IX</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu8_9" @focus="handleFocus('jaraksumbu8_9')"
            v-model="identitaskendaraan.jaraksumbu8_9" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu8_9" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu8_9" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu8_9" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu8_9" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 9">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu IX-X</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu9_10" @focus="handleFocus('jaraksumbu9_10')"
            v-model="identitaskendaraan.jaraksumbu9_10" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu9_10" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu9_10" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu9_10" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu9_10" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 10">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu X-XI</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu10_11" @focus="handleFocus('jaraksumbu10_11')"
            v-model="identitaskendaraan.jaraksumbu10_11" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu10_11" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu10_11" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu10_11" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu10_11" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jumlah_sumbu > 11">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu XI-XII</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraksumbu11_12" @focus="handleFocus('jaraksumbu11_12')"
            v-model="identitaskendaraan.jaraksumbu11_12" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu11_12" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu11_12" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraksumbu11_12" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraksumbu11_12" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Panjang Bak Muatan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="panjangbakatautangki" @focus="handleFocus('panjangbakatautangki')"
            v-model="identitaskendaraan.panjangbakatautangki" v-bind:style="dimensi.panjangbakatautangki == 0
              ? 'background-color: #DC143C;'
              : 'background-color: #F3F6F9;'
              " @input="checkPanjangBakTangki" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.panjangbakatautangki" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.panjangbakatautangki" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.panjangbakatautangki" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_panjangbakatautangki"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Titik Berat Muatan(q)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="q" v-on:change="setMST" @focus="handleFocus('q')" v-model="identitaskendaraan.q"
            class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.q" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.q" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.q" :options="options" size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_q" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('tempelan') ||
      identitaskendaraan.jenis.includes('kereta tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Titik Tumpu Tempelan(r)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="r" @focus="handleFocus('r')" v-model="identitaskendaraan.r" class="form-control"
            placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.r" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.r" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.r" :options="options" size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_r" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('tempelan') ||
      identitaskendaraan.jenis.includes('kereta tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak Sumbu Tempelan(b)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="b" @focus="handleFocus('b')" v-model="identitaskendaraan.b" class="form-control"
            placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.b" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.b" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.b" :options="options" size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_b" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Rear Overhang(ROH)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="julurbelakang" @focus="handleFocus('julurbelakang')"
            v-model="identitaskendaraan.julurbelakang" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.julurbelakang" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.julurbelakang" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.julurbelakang" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_julurbelakang" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Panjang Kendaraan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="panjangkendaraan" @focus="handleFocus('panjangkendaraan')"
            v-model="identitaskendaraan.panjangkendaraan" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.panjangkendaraan" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.panjangkendaraan" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.panjangkendaraan" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_panjangkendaraan" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Kendaraan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebarkendaraan" v-bind:style="identitaskendaraan.lebarkendaraan > 2550
            ? 'background-color: #DC143C;'
            : 'background-color: #F3F6F9;'
            " v-model="identitaskendaraan.lebarkendaraan" @focus="handleFocus('lebarkendaraan')" class="form-control"
            @input="checkLebarkendaraan" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarkendaraan" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarkendaraan" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebarkendaraan" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebarkendaraan" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Bak Muatan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebarbakatautangki" @focus="handleFocus('lebarbakatautangki')"
            v-model="identitaskendaraan.lebarbakatautangki" v-bind:style="dimensi.lebarbakatautangki == 0
              ? 'background-color: #DC143C;'
              : 'background-color: #F3F6F9;'
              " @input="checkLebarBakTangki" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarbakatautangki" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarbakatautangki" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebarbakatautangki" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebarbakatautangki"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Tinggi Bak Muatan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="tinggibakatautangki" @focus="handleFocus('tinggibakatautangki')"
            v-model="identitaskendaraan.tinggibakatautangki" v-bind:style="dimensi.tinggibakatautangki == 0
              ? 'background-color: #DC143C;'
              : 'background-color: #F3F6F9;'
              " @input="checkTinggiBakTangki" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggibakatautangki" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggibakatautangki" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.tinggibakatautangki" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_tinggibakatautangki"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('Tangki') ||
      identitaskendaraan.jenis.includes('Tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak antara dinding terluar bagian belakang kabin dengan
        dinding tangki bagian depan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jarakantaradindingterluar" @focus="handleFocus('jarakantaradindingterluar')"
            v-model="identitaskendaraan.jarakantaradindingterluar" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jarakantaradindingterluar" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jarakantaradindingterluar" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jarakantaradindingterluar" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jarakantaradindingterluar"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid">
      <label class="col-md-2 col-sm-6 col-form-label">Ground Clearence(GC)</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="groundclearance" @focus="handleFocus('groundclearance')"
            v-model="identitaskendaraan.groundclearance" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.groundclearance" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.groundclearance" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.groundclearance" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_groundclearance" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Pintu</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebarpintu" @focus="handleFocus('lebarpintu')"
            v-model="identitaskendaraan.lebarpintu" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarpintu" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarpintu" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebarpintu" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebarpintu" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Tinggi Pintu</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="tinggipintu" @focus="handleFocus('tinggipintu')"
            v-model="identitaskendaraan.tinggipintu" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggipintu" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggipintu" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.tinggipintu" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_tinggipintu" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Tinggi Anak Tangga</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="tinggianaktangga" @focus="handleFocus('tinggianaktangga')"
            v-model="identitaskendaraan.tinggianaktangga" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggianaktangga" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggianaktangga" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.tinggianaktangga" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_tinggianaktangga" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Anak Tangga</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebaranaktangga" @focus="handleFocus('lebaranaktangga')"
            v-model="identitaskendaraan.lebaranaktangga" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebaranaktangga" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebaranaktangga" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebaranaktangga" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebaranaktangga" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Lorong</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebarlorong" @focus="handleFocus('lebarlorong')"
            v-model="identitaskendaraan.lebarlorong" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarlorong" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarlorong" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebarlorong" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebarlorong" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Tinggi tempat Berdiri</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="tinggitempatberdiri" @focus="handleFocus('tinggitempatberdiri')"
            v-model="identitaskendaraan.tinggitempatberdiri" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggitempatberdiri" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.tinggitempatberdiri" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.tinggitempatberdiri" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_tinggitempatberdiri"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('BUS') ||
      identitaskendaraan.jenis.includes('SEDAN') ||
      identitaskendaraan.jenis.includes('TAXI KOTA') ||
      identitaskendaraan.jenis.includes('MOBIL PENUMPANG')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar tempat Duduk</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebartempatduduk" @focus="handleFocus('lebartempatduduk')"
            v-model="identitaskendaraan.lebartempatduduk" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebartempatduduk" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebartempatduduk" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebartempatduduk" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebartempatduduk" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('BUS') ||
      identitaskendaraan.jenis.includes('SEDAN') ||
      identitaskendaraan.jenis.includes('TAXI KOTA') ||
      identitaskendaraan.jenis.includes('MOBIL PENUMPANG')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak tempat Duduk</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jaraktempatduduk" @focus="handleFocus('jaraktempatduduk')"
            v-model="identitaskendaraan.jaraktempatduduk" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraktempatduduk" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jaraktempatduduk" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jaraktempatduduk" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jaraktempatduduk" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Pintu Darurat</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebarpintudarurat" @focus="handleFocus('lebarpintudarurat')"
            v-model="identitaskendaraan.lebarpintudarurat" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarpintudarurat" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarpintudarurat" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebarpintudarurat" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebarpintudarurat"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Panjang Akses Keluar Berupa Jendela</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" v-model="identitaskendaraan.panjangakseskeluar"
            @focus="handleFocus('panjangakseskeluar')" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" ref="panjangakseskeluar" v-on:change="hasilujidimensi"
              v-model="dimensi.panjangakseskeluar" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.panjangakseskeluar" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.panjangakseskeluar" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_panjangakseskeluar"
          class="form-control" placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid"
      v-if="identitaskendaraan.jenis.includes('BUS')">
      <label class="col-md-2 col-sm-6 col-form-label">Lebar Akses Keluar Berupa Jendela</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="lebarakseskeluar" @focus="handleFocus('lebarakseskeluar')"
            v-model="identitaskendaraan.lebarakseskeluar" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarakseskeluar" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.lebarakseskeluar" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.lebarakseskeluar" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_lebarakseskeluar" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('Tangki') ||
      identitaskendaraan.jenis.includes('Tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Jarak antar bumper belakang dengan bagian belakang
        tangki</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="jarakantarbumper" @focus="handleFocus('jarakantarbumper')"
            v-model="identitaskendaraan.jarakantarbumper" class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jarakantarbumper" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jarakantarbumper" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jarakantarbumper" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_jarakantarbumper" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('Tangki') ||
      identitaskendaraan.jenis.includes('Tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Volume</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="input-group">
          <input type="number" ref="volume" @focus="handleFocus('volume')" v-model="identitaskendaraan.volume"
            class="form-control" placeholder="Ukuran " />
          <div class="input-group-append">
            <span class="input-group-text">mm</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.volume" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.volume" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.volume" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <input type="number" v-on:change="hasilujidimensi" v-model="dimensi.nilai_volume" class="form-control"
          placeholder="mm" />
      </div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('Tangki') ||
      identitaskendaraan.jenis.includes('Tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Jenis Muatan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <input type="text" ref="jenismuatan" v-model="identitaskendaraan.jenismuatan" class="form-control"
          placeholder="Ukuran " />
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jenismuatan" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.jenismuatan" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.jenismuatan" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label"></div>
    </div>

    <div class="form-group row" style="margin: 0px; padding: 0px; border-bottom: 1px solid" v-if="
      identitaskendaraan.jenis.includes('Tangki') ||
      identitaskendaraan.jenis.includes('Tempelan tangki')
    ">
      <label class="col-md-2 col-sm-6 col-form-label">Berat Jenis Muatan</label>
      <div class="col-md-3 col-sm-6 col-form-label">
        <input type="text" ref="beratjenismuatan" v-model="identitaskendaraan.beratjenismuatan" class="form-control"
          placeholder="Ukuran " />
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.beratjenismuatan" value="1" />
            <span></span>
            Ya
          </label>
          <label class="radio radio-danger">
            <input type="radio" v-on:change="hasilujidimensi" v-model="dimensi.beratjenismuatan" value="0" />
            <span></span>
            Tidak
          </label>
        </div>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label">
        <b-form-select v-on:change="hasilujidimensi" v-model="dimensi.beratjenismuatan" :options="options"
          size="sm"></b-form-select>
      </div>
      <div class="col-md-2 col-sm-6 col-form-label"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      options: [
        { value: "1", text: "Sesuai" },
        { value: "0", text: "Tidak Sesuai" },
      ],
    };
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("pos1", {
      identifikasi: (state) => state.identifikasi,
      dimensi: (state) => state.dimensi,
      depan: (state) => state.depan,
      kanan: (state) => state.kanan,
      kiri: (state) => state.kiri,
      belakang: (state) => state.belakang,
      dalam: (state) => state.dalam,
      bawah: state => state.bawah,
      laikjalan: (state) => state.laikjalan,
      catatan: (state) => state.catatan,
      alasan: (state) => state.alasan,
      pendaftaran: state => state.pendaftaran,
      identitaskendaraan: state => state.identitaskendaraan,
    }),
  },
  methods: {
    ...mapMutations("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS","CHECK_HASILUJI"]),
    ...mapActions("pos1", ["submitCatatan", "getCatatan", "getAlasan"]),
    showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    lain() {
      if (this.catatan.rekomendasi == "Lain-lain") {
        this.lainlain = true;
      } else {
        this.lainlain = false;
      }
    },
    check(nama, hasil) {
      if (this.laikjalan.alatuji_kedalamanalurban < 1) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.catatan.pos = 1;
        this.catatan.status = 1;
        this.getCatatan(this.$route.params.id);
        this.$refs["my-modal"].show();
      }
    },
    setMST() {
      if (
        this.identitaskendaraan.jaraksumbu2_3 > 0 ||
        this.identitaskendaraan.jaraksumbu3_4 > 0
      ) {
        this.identitaskendaraan.mst = Math.ceil(
          parseInt(this.identitaskendaraan.beratsumbu2) +
          parseInt(
            this.identitaskendaraan.dayaangkutbarang *
            (this.identitaskendaraan.q /
              (2 * this.identitaskendaraan.a)),
          ),
        );
      } else if (this.identitaskendaraan.jaraksumbu1_2 > 0) {
        this.identitaskendaraan.mst = Math.ceil(
          parseInt(this.identitaskendaraan.beratsumbu2) +
          parseInt(
            this.identitaskendaraan.dayaangkutbarang *
            (this.identitaskendaraan.q /
              this.identitaskendaraan.a),
          ),
        );
      }
      var ambangbatasdepan = parseInt(this.identitaskendaraan.a) * 0.475;
      var ambangbatasbelakang =
        parseInt(this.identitaskendaraan.a) * 0.725;
      var statusFOH = 1;
      var statusROH = 1;
      if (this.identitaskendaraan.julurbelakang >= ambangbatasbelakang) {
        this.dimensi.julurbelakang = 0;
        statusROH = 0;
      }
      if (this.identitaskendaraan.julurdepan >= ambangbatasdepan) {
        this.dimensi.julurdepan = 0;
        statusFOH = 0;
      }
      if (statusFOH == 0 && statusROH == 0) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title:
            "Julur depan tidak lebih dari " +
            ambangbatasdepan.toFixed(2) +
            " mm & " +
            "Julur Belakang tidak lebih dari " +
            ambangbatasbelakang.toFixed(2) +
            " mm",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (statusFOH == 0) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title:
            "Julur depan tidak lebih dari " +
            ambangbatasdepan.toFixed(2) +
            " mm",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (statusROH == 0) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title:
            "Julur belakang tidak lebih dari " +
            ambangbatasbelakang.toFixed(2) +
            " mm",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    submit() {
      this.submitCatatan(this.$route.params.id).then(() => {
        Swal.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },

    checkPanjangknedaraan() {
      if (parseInt(this.identitaskendaraan.panjangkendaraan) > 18000) {
        this.dimensi.panjangkendaraan = 0;
        this.dimensi.nilai_panjangkendaraan = Math.abs(
          this.identitaskendaraan.panjangkendaraan - 18000,
        );
      } else {
        this.dimensi.panjangkendaraan = 1;
        this.dimensi.nilai_panjangkendaraan = 0;
      }
      this.hasilujidimensi();
    },
    checkLebarkendaraan() {
      if (parseInt(this.identitaskendaraan.lebarkendaraan) > 2550) {
        this.dimensi.lebarkendaraan = 0;
        this.dimensi.nilai_lebarkendaraan = Math.abs(
          this.identitaskendaraan.lebarkendaraan - 2550,
        );
      } else {
        this.dimensi.lebarkendaraan = 1;
        this.dimensi.nilai_lebarkendaraan = 0;
      }
      this.hasilujidimensi();
    },
    checkTinggikendaraan() {
      if (parseInt(this.identitaskendaraan.tinggikendaraan) > 4200) {
        if (
          parseInt(this.identitaskendaraan.tinggikendaraan) >
          parseInt(this.identitaskendaraan.lebarkendaraan * 1.7)
        ) {
          this.dimensi.tinggikendaraan = 0;
          this.dimensi.nilai_tinggikendaraan = Math.abs(
            this.identitaskendaraan.tinggikendaraan -
            this.identitaskendaraan.lebarkendaraan * 1.7,
          );
        }
      } else {
        this.dimensi.tinggikendaraan = 1;
        this.dimensi.nilai_tinggikendaraan = 0;
      }
      this.hasilujidimensi();
    },
    checkPanjangBakTangki() {
      if (
        parseInt(this.identitaskendaraan.panjangbakatautangki) >
        parseInt(this.identitaskendaraan.panjangkendaraan)
      ) {
        this.dimensi.panjangbakatautangki = 0;
        this.dimensi.nilai_panjangbakatautangki = Math.abs(
          this.identitaskendaraan.panjangbakatautangki -
          this.identitaskendaraan.panjangkendaraan,
        );
      } else {
        this.dimensi.panjangbakatautangki = 1;
        this.dimensi.nilai_panjangbakatautangki = 0;
      }
      this.hasilujidimensi();
    },
    checkLebarBakTangki() {
      if (
        parseInt(this.identitaskendaraan.lebarbakatautangki) >
        parseInt(this.identitaskendaraan.lebarkendaraan)
      ) {
        this.dimensi.lebarbakatautangki = 0;
        this.dimensi.nilai_lebarbakatautangki = Math.abs(
          this.identitaskendaraan.lebarbakatautangki -
          this.identitaskendaraan.lebarkendaraan,
        );
      } else {
        this.dimensi.lebarbakatautangki = 1;
        this.dimensi.nilai_lebarbakatautangki = 1;
      }
      this.hasilujidimensi();
    },
    checkTinggiBakTangki() {
      if (
        parseInt(this.identitaskendaraan.tinggibakatautangki) >
        parseInt(this.identitaskendaraan.tinggikendaraan)
      ) {
        this.dimensi.tinggibakatautangki = 0;
        this.dimensi.nilai_tinggibakatautangki = Math.abs(
          this.identitaskendaraan.tinggibakatautangki -
          this.identitaskendaraan.tinggikendaraan,
        );
      } else {
        this.dimensi.tinggibakatautangki = 1;
        this.dimensi.nilai_tinggibakatautangki = 0;
      }
      this.hasilujidimensi();
    },
    checkJulurDepan() {
      var ambangbatas = parseInt(this.identitaskendaraan.a) * 0.475;
      if (parseInt(this.identitaskendaraan.julurdepan) >= ambangbatas) {
        this.dimensi.julurdepan = 0;
        this.dimensi.nilai_julurdepan = Math.abs(
          ambangbatas.toFixed(2) - this.identitaskendaraan.julurdepan,
        );
      } else {
        this.dimensi.julurdepan = 1;
        this.dimensi.nilai_julurdepan = 0;
      }
      this.hasilujidimensi();
    },
    checkJulurBelakang() {
      var ambangbatas = parseInt(this.identitaskendaraan.a) * 0.725;
      if (this.identitaskendaraan.julurbelakang >= ambangbatas) {
        i.julurbelakang = 0;
        this.dimensi.nilai_julurdepan = Math.abs(
          ambangbatas.toFixed(2) -
          this.identitaskendaraan.julurbelakang,
        );
      } else {
        this.dimensi.julurbelakang = 1;
        this.dimensi.nilai_julurdepan = 0;
      }
      this.hasilujidimensi();
    },

    hasilujidimensi() {
      this.CHECK_HASILUJI();
    },
    handleFocus(field) {
      if (this.identitaskendaraan[field] === 0 || this.identitaskendaraan[field] === "0") {
        this.identitaskendaraan[field] = '';
      }
    },
  },
  watch: {},
  destroyed() {
    this.CLEAR_CATATAN();
  },
  created() {
    this.CLEAR_CATATAN();
    this.hasilujidimensi();
  },
  components: {},
};
</script>
