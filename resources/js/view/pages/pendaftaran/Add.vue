<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div class="wizard wizard-1" id="kt_wizard_v1" data-wizard-state="step-first" data-wizard-clickable="true">
        <!--begin: Wizard Nav-->
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div class="wizard-step" data-wizard-type="step" data-wizard-state="current">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">1. Pendaftaran</h3>
              </div>
              <i class="wizard-arrow flaticon2-next" v-if="pendaftaran.kodepenerbitans_id < 11"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step" v-if="pendaftaran.kodepenerbitans_id < 11">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-lorry"></i>
                <h3 class="wizard-title">2. Identitas</h3>
              </div>
              <i class="wizard-arrow flaticon2-next" v-if="pendaftaran.kodepenerbitans_id < 11"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step" v-if="pendaftaran.kodepenerbitans_id < 11">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-position"></i>
                <h3 class="wizard-title">3. Data Kendaraan</h3>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard Identitas-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-sm-12 col-xsm-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tanggal Pendaftaran</label>
                      <b-form-datepicker id="tglpendaftaran" v-model="pendaftaran.tglpendaftaran"
                        locale="id"></b-form-datepicker>
                      <p class="text-danger" v-if="errors.tglpendaftaran">{{ errors.tglpendaftaran[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jenis Pendaftaran</label>
                      <select class="form-control" v-model="pendaftaran.kodepenerbitans_id">
                        <option selected="selected" value="1">Uji Pertama</option>
                        <option value="2">Uji Berkala</option>
                        <option value="3">Rusak</option>
                        <option value="4">Hilang</option>
                        <option value="5">Numpang Uji Masuk</option>
                        <option value="9">Numpang Uji Keluar</option>
                        <option value="6">Mutasi Masuk</option>
                        <option value="10">Mutasi Keluar</option>
                        <option value="7">Uji Ulang</option>
                        <option value="8">Rubah Bentuk</option>
                      </select>
                      <p class="text-danger" v-if="errors.kodepenerbitans_id">{{ errors.kodepenerbitans_id[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> No Seri</label>
                      <input type="number" min="1" class="form-control  form-control-lg" placeholder="No Seri "
                        v-model="pendaftaran.noantrian" />
                    </div>
                  </div>
                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '4'">
                    <div class="form-group">
                      <label> No Surat Kehilangan</label>
                      <input type="text" class="form-control  form-control-lg" name="nosuratkehilangan"
                        ref="nosuratkehilangan" placeholder=" No Surat Kehilangan"
                        v-model="pendaftaran.nosuratkehilangan" />
                      <p class="text-danger" v-if="errors.nosuratkehilangan">{{ errors.nosuratkehilangan[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '9' || pendaftaran.kodepenerbitans_id == '10' || pendaftaran.kodepenerbitans_id == '11' || pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label> No Surat</label>
                      <!-- <div class="input-group"> -->
                      <input type="text" class="form-control  form-control-lg" v-model="pendaftaran.nosurat"
                        placeholder="No Surat" />
                      <!-- <div class="input-group-append">
                          <button class="btn btn-info" type="button" v-on:click="setSurat">Set</button>
                        </div> -->
                      <!-- </div> -->
                      <p class="text-danger" v-if="errors.nosurat">{{ errors.nosurat[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '2' || pendaftaran.kodepenerbitans_id == '3' || pendaftaran.kodepenerbitans_id == '4' || pendaftaran.kodepenerbitans_id == '5' || pendaftaran.kodepenerbitans_id == '7' || pendaftaran.kodepenerbitans_id == '9' || pendaftaran.kodepenerbitans_id == '10'">
                    <div class="form-group">
                      <label> No Uji</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase" name="nouji"
                        placeholder="No Uji" @change="caridata()" v-model="pendaftaran.nouji" />
                      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
                    </div>
                    <div class="form-group" v-if="pendaftaran.kodepenerbitans_id == '6'">
                      <label> No Uji</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase" name="nouji"
                        placeholder="No Uji" v-model="pendaftaran.nouji" />
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Nama Pemohon</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="Nama Pemohon"
                        v-model="pendaftaran.namapemohon" />
                      <p class="text-danger" v-if="errors.namapemohon">{{ errors.namapemohon[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Alamat Pemohon</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="Alamat Pemohon"
                        v-model="pendaftaran.alamatpemohon" />
                      <p class="text-danger" v-if="errors.alamatpemohon">{{ errors.alamatpemohon[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> No Telp Pemohon</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="No Telp Pemohon"
                        v-model="pendaftaran.notelp" />
                      <p class="text-danger" v-if="errors.notelp">{{ errors.notelp[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '9' || pendaftaran.kodepenerbitans_id == '10'">
                    <div class="form-group">
                      <label> Kepada</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="Kepada"
                        v-model="pendaftaran.kepada" />
                      <p class="text-danger" v-if="errors.kepada">{{ errors.kepada[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '9' || pendaftaran.kodepenerbitans_id == '10'">
                    <div class="form-group">
                      <label> Tujuan</label>
                      <vSelect label="nama" :options="kotas" v-model="pendaftaran.tujuan" @input="setKotaTujuan">
                      </vSelect>
                      <p class="text-danger" v-if="errors.tujuan">{{ errors.tujuan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '10'">
                    <div class="form-group">
                      <label> No Kendaraan Baru</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase"
                        placeholder="No Kendaraan Baru" v-model="pendaftaran.nokendaraanbaru" />
                      <p class="text-danger" v-if="errors.nokendaraanbaru">{{ errors.nokendaraanbaru[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '10'">
                    <div class="form-group">
                      <label> Nama Pemilik Baru</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="Nama Pemilik Baru "
                        v-model="pendaftaran.namapemilikbaru" />
                      <p class="text-danger" v-if="errors.namapemilikbaru">{{ errors.namapemilikbaru[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '10'">
                    <div class="form-group">
                      <label> Alamat Pemilik Baru</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="Alamat Pemilik Baru "
                        v-model="pendaftaran.alamatpemilikbaru" />
                      <p class="text-danger" v-if="errors.alamatpemilikbaru">{{ errors.alamatpemilikbaru[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == 2 || pendaftaran.kodepenerbitans_id == 3 || pendaftaran.kodepenerbitans_id == 4 || pendaftaran.kodepenerbitans_id == 7 || pendaftaran.kodepenerbitans_id == 9 || pendaftaran.kodepenerbitans_id == 10">
                    <div class="form-group">
                      <label>Tanggal Habis Uji</label>
                      <b-form-datepicker id="tglhbsuji" v-model="pendaftaran.tglhbsuji" locale="id"
                        :disabled="true"></b-form-datepicker>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == 2 || pendaftaran.kodepenerbitans_id == 3 || pendaftaran.kodepenerbitans_id == 4 || pendaftaran.kodepenerbitans_id == 7 || pendaftaran.kodepenerbitans_id == 9 || pendaftaran.kodepenerbitans_id == 10">
                    <div class="form-group">
                      <label>Tanggal Terakhir Uji</label>
                      <b-form-datepicker id="tglterakhiruji" v-model="pendaftaran.tglterakhiruji" locale="id"
                        :disabled="true"></b-form-datepicker>
                    </div>
                  </div>

                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label> No Surat dari Pemohon</label>
                      <div class="form-group">
                        <input type="text" class="form-control  form-control-lg" v-model="pendaftaran.nosuratdari"
                          placeholder="No Surat Dari" />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id > 10">
                    <div class="form-group">
                      <label> No Uji</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase" name="nouji"
                        placeholder="No Uji" @change="caridata()" v-model="pendaftaran.nouji"
                        v-if="pendaftaran.kodepenerbitans_id == 12" />
                      <input type="text" class="form-control  form-control-lg text-uppercase" name="nouji"
                        placeholder="No Uji" v-else v-model="pendaftaran.nouji" />
                      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '12' || pendaftaran.kodepenerbitans_id == '11'">
                    <div class="form-group">
                      <label>No Kendaraan</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase"
                        name="noregistrasikendaraan" placeholder=" No Kendaraan"
                        v-model="pendaftaran.noregistrasikendaraan" />
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '11' || pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label> Nama</label>
                      <input type="text" class="form-control  form-control-lg" name="nama" placeholder="nama"
                        v-model="pendaftaran.nama" />
                    </div>
                  </div>

                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label> Alamat</label>
                      <input type="text" class="form-control  form-control-lg" name="alamat" placeholder="alamat"
                        v-model="pendaftaran.alamat" />
                    </div>
                  </div>

                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label>No Mesin</label>
                      <input type="text" class="form-control  form-control-lg" name="nomesin" placeholder="No Mesin"
                        style="text-transform: uppercase;" v-model="pendaftaran.nomesin" />
                    </div>
                  </div>
                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '12'">
                    <label>No Rangka</label>
                    <div class="input-group">
                      <input type="text" class="form-control  form-control-lg" name="norangka"
                        style="text-transform: uppercase;" ref="norangka" placeholder=" No Rangka"
                        v-model="pendaftaran.norangka" />
                      <span class="input-group-text" id="basic-addon2"><a href="javascript:void(0)"
                          @click="getDataVTA(pendaftaran.norangka)"
                          class="btn btn-sm btn-light-success font-weight-bold">
                          <i class="flaticon2-search"></i> Cek Data
                        </a></span>
                    </div>
                  </div>

                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '11'">
                    <div class="form-group">
                      <label>Jenis <span class="text-danger" v-if="pendaftaran.jenislama">{{ pendaftaran.jenislama
                          }}</span></label>
                      <vSelect label="vehicle_type_name" ref="jenis" :options="jenis" v-model="pendaftaran.jenis"
                        @input="setSubVehicle" :disabled="!jenis.length"></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4" v-if="pendaftaran.kodepenerbitans_id == '11'">
                    <div class="form-group">
                      <label>Model <span class="text-danger" v-if="pendaftaran.model">{{ pendaftaran.model
                          }}</span></label>
                      <vSelect label="vehicle_sub_name" ref="subjenis" :options="subjenis"
                        v-model="pendaftaran.subjenis" @input="setSubVehicleid" :disabled="!subjenis.length"></vSelect>
                      <p class="text-danger" v-if="errors.model">{{ errors.model[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '11' || pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label>Merek<span class="text-danger" v-if="pendaftaran.mereklama">{{ pendaftaran.mereklama
                          }}</span> </label>
                      <vSelect label="vehicle_brand_name" ref="merek" :options="mereks" v-model="pendaftaran.merek"
                        @input="setType" :disabled="!mereks.length"></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '11' || pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label>Tipe <span class="text-danger" v-if="pendaftaran.tipelama">{{ pendaftaran.tipelama
                          }}</span></label>
                      <vSelect label="vehicle_varian_type_name" ref="tipes" :options="tipes" v-model="pendaftaran.tipe"
                        @input="setVarian" :disabled="!tipes.length"></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '11' || pendaftaran.kodepenerbitans_id == '12'">
                    <div class="form-group">
                      <label> Kepada</label>
                      <input type="text" class="form-control  form-control-lg" placeholder="Kepada"
                        v-model="pendaftaran.kepada" />
                      <p class="text-danger" v-if="errors.kepada">{{ errors.kepada[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '12' || pendaftaran.kodepenerbitans_id == '11'">
                    <div class="form-group">
                      <label v-if="pendaftaran.kodepenerbitans_id == '11'">Tujuan Kab/Kota</label>
                      <label v-else>Kab/Kota</label>
                      <vSelect label="nama" :options="kotas" v-model="pendaftaran.tujuan" @input="setKotaTujuan">
                      </vSelect>
                    </div>
                  </div>

                  <div class="col-sm-12"
                    v-if="pendaftaran.kodepenerbitans_id == '5' || pendaftaran.kodepenerbitans_id == '6'">
                    <a href="javascript:void(0)" @click="getCheckUji"
                      class="btn btn-sm btn-light-success font-weight-bold" style="width: 100%;">
                      <i class="flaticon2-search"></i> Cek Data
                    </a>
                  </div>
                </div>

              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Datakendaraan 2-->
              <div class="pb-5" data-wizard-type="step-content" v-if="pendaftaran.kodepenerbitans_id < 11">
                <div class="row">
                  <div class="col-sm-6"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label> No Uji</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase" name="nouji"
                        placeholder="No Uji" v-model="pendaftaran.nouji" />
                      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>No Kendaraan</label>
                      <input type="text" class="form-control  form-control-lg text-uppercase"
                        name="noregistrasikendaraan" placeholder=" No Kendaraan"
                        v-model="pendaftaran.noregistrasikendaraan" />
                      <p class="text-danger" v-if="errors.noregistrasikendaraan">{{ errors.noregistrasikendaraan[0] }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Nama</label>
                      <input type="text" class="form-control  form-control-lg" name="nama" placeholder=" nama"
                        v-model="pendaftaran.nama" />
                      <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label> No Identitas</label>
                      <input type="text" class="form-control  form-control-lg" name="noidentitaspemilik"
                        placeholder=" No Identitas" v-model="pendaftaran.noidentitaspemilik" />
                      <p class="text-danger" v-if="errors.noidentitaspemilik">{{ errors.noidentitaspemilik[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Alamat</label>
                      <input type="text" class="form-control  form-control-lg" name="alamat" placeholder=" Alamat"
                        v-model="pendaftaran.alamat" />
                      <p class="text-danger" v-if="errors.alamat">{{ errors.alamat[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kabupaten</label>
                      <vSelect label="nama" :options="kotas" v-model="pendaftaran.kota" @input="setKota"></vSelect>
                      <p class="text-danger" v-if="errors.kota">{{ errors.kota[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kecamatan</label>
                      <vSelect label="nama" :options="kecamatans" v-model="pendaftaran.kecamatan" @input="setKecamatan"
                        :disabled="disabled1 == 1"></vSelect>
                      <p class="text-danger" v-if="errors.kecamatan">{{ errors.kecamatan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kelurahan</label>
                      <vSelect label="nama" :options="kelurahans" v-model="pendaftaran.kelurahan" @input="setKelurahan"
                        :disabled="disabled2 == 1"></vSelect>
                      <p class="text-danger" v-if="errors.Kelurahan">{{ errors.Kelurahan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>No SRUT</label>
                      <input type="text" class="form-control  form-control-lg" name="nosertifikatreg"
                        placeholder=" No SRUT" v-model="pendaftaran.nosertifikatreg" />
                      <p class="text-danger" v-if="errors.nosertifikatreg">{{ errors.nosertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>Tanggal SRUT</label>
                      <b-form-datepicker id="tglsertifikatreg" v-model="pendaftaran.tglsertifikatreg"
                        locale="id"></b-form-datepicker>
                      <p class="text-danger" v-if="errors.tglsertifikatreg">{{ errors.tglsertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tanggal STNK terbit</label>
                      <b-form-datepicker id="tgl_registrasikendaraan" v-model="pendaftaran.tgl_registrasikendaraan"
                        locale="id"></b-form-datepicker>
                      <p class="text-danger" v-if="errors.tgl_registrasikendaraan">{{ errors.tgl_registrasikendaraan[0]
                      }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>SK Rancang Bangun</label>
                      <input type="text" class="form-control  form-control-lg" name="rancang"
                        placeholder="SK Rancang Bangun" v-model="pendaftaran.rancang" />
                      <p class="text-danger" v-if="errors.rancang">{{ errors.rancang[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tahun Pembuatan</label>
                      <input type="number" min="0" class="form-control  form-control-lg" name="thpembuatan"
                        placeholder="Tahun Pembuatan" v-model="pendaftaran.thpembuatan"
                        @focus="handleFocus('julurdepan')" />
                      <p class="text-danger" v-if="errors.thpembuatan">{{ errors.thpembuatan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label class="text-danger">Merek<span class="text-success" v-if="pendaftaran.mereklama">{{
                        pendaftaran.mereklama }}</span> </label>
                      <vSelect label="vehicle_brand_name" ref="merek" :options="mereks" v-model="pendaftaran.merek"
                        @input="setType" :disabled="!mereks.length"></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label class="text-danger">Tipe <span class="text-success" v-if="pendaftaran.tipelama">{{
                        pendaftaran.tipelama }}</span></label>
                      <vSelect label="vehicle_varian_type_name" ref="tipes" :options="tipes" v-model="pendaftaran.tipe"
                        @input="setVarian" :disabled="!tipes.length"></vSelect>
                      <p class="text-danger" v-if="errors.tipe">{{ errors.tipe[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <label class="text-danger">Varian</label>
                        <vSelect label="vehicle_varian_name" ref="varian" :options="varians"
                          v-model="pendaftaran.varian" @input="setVarianid" :disabled="!varians.length"></vSelect>
                      </div>
                      <p class="text-danger" v-if="errors.varian">{{ errors.varian[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label class="text-danger">Jenis <span class="text-success" v-if="pendaftaran.jenislama">{{
                        pendaftaran.jenislama }}</span></label>
                      <vSelect label="vehicle_type_name" ref="jenis" :options="jenis" v-model="pendaftaran.jenis"
                        @input="setSubVehicle" :disabled="!jenis.length"></vSelect>
                      <p class="text-danger" v-if="errors.jenis">{{ errors.jenis[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>Model <span class="text-danger" v-if="pendaftaran.model">{{ pendaftaran.model
                          }}</span></label>
                      <vSelect label="vehicle_sub_name" ref="subjenis" :options="subjenis"
                        v-model="pendaftaran.subjenis" @input="setSubVehicleid" :disabled="!subjenis.length"></vSelect>
                      <p class="text-danger" v-if="errors.model">{{ errors.model[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>Isi Silinder</label>
                      <input type="number" min="0" class="form-control  form-control-lg" name="isisilinder"
                        placeholder=" Isi Silinder" v-model="pendaftaran.isisilinder"
                        @focus="handleFocus('isisilinder')" />
                      <p class="text-danger" v-if="errors.isisilinder">{{ errors.isisilinder[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>Daya Motor Penggerak</label>
                      <input type="number" min="0" class="form-control  form-control-lg" name="dayamotorpenggerak"
                        placeholder=" Daya Motor Penggerak" v-model="pendaftaran.dayamotorpenggerak"
                        @focus="handleFocus('dayamotorpenggerak')" />
                      <p class="text-danger" v-if="errors.dayamotorpenggerak">{{ errors.dayamotorpenggerak[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Nomer Mesin</label>
                      <input type="text" class="form-control  form-control-lg" name="nomesin" placeholder="Nomer Mesin"
                        style="text-transform: uppercase;" v-model="pendaftaran.nomesin" />
                      <p class="text-danger" v-if="errors.nomesin">{{ errors.nomesin[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label>Nomer Rangka</label>
                    <div class="input-group">
                      <input type="text" class="form-control  form-control-lg" name="norangka"
                        style="text-transform: uppercase;" ref="norangka" placeholder=" No Rangka"
                        v-model="pendaftaran.norangka" />
                      <span class="input-group-text" id="basic-addon2"><a href="javascript:void(0)"
                          @click="getDataVTA(pendaftaran.norangka)"
                          class="btn btn-sm btn-light-success font-weight-bold">
                          <i class="flaticon2-search"></i> Cek Data
                        </a></span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label class="text-danger">Bahan Bakar</label>
                      <vSelect label="fuel_name" ref="bahanbakar" :options="fuels" v-model="pendaftaran.bahanbakar"
                        @input="setFuel"></vSelect>
                      <p class="text-danger" v-if="errors.bahanbakar">{{ errors.bahanbakar[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>Penggunaan</label>
                      <select class="form-control" v-model="pendaftaran.peruntukan">
                        <option value="UMUM" selected="selected">UMUM</option>
                        <option value="TIDAK UMUM">TIDAK UMUM</option>
                        <option value="PEMERINTAH">PEMERINTAH</option>
                      </select>
                      <p class="text-danger" v-if="errors.peruntukan">{{ errors.peruntukan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id == '5' || pendaftaran.kodepenerbitans_id == '6'">
                    <div class="form-group">
                      <label>Daerah Asal</label>
                      <vSelect label="area_name" ref="kodewilayahasal" :options="kodewilayahs"
                        v-model="pendaftaran.wilayahasal" @input="setAreaFrom"></vSelect>
                    </div>
                  </div>

                  <div class="col-sm-4"
                    v-if="pendaftaran.kodepenerbitans_id < 12 || pendaftaran.kodepenerbitans_id > 12">
                    <div class="form-group">
                      <label>Warna</label>
                      <input type="text" class="form-control  form-control-lg" name="warna" placeholder="Warna"
                        style="text-transform: uppercase;" v-model="pendaftaran.warna" />
                      <p class="text-danger" v-if="errors.warna">{{ errors.warna[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> No TMK</label>
                      <input type="number" min="1" class="form-control  form-control-lg" placeholder="No TMK "
                        v-model="pendaftaran.tmk" />
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Pendaftaran 3-->
              <div class="pb-5" data-wizard-type="step-content" v-if="pendaftaran.kodepenerbitans_id < 11">
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1 d-flex flex-row justify-content-center gap-2 mb-4"
                      role="tab">
                      <b-button v-b-toggle.accordion-1 class="mr-2" variant="outline-primary"
                        :class="{ 'active': isActive }">Ukuran Utama</b-button>
                      <b-button v-b-toggle.accordion-2 class="mr-2" variant="outline-primary">Dimensi Bak /
                        Tangki</b-button>
                      <b-button v-b-toggle.accordion-3 class="mr-2" variant="outline-primary">Jarak Sumbu</b-button>
                      <b-button v-b-toggle.accordion-4 class="mr-2" variant="outline-primary">Berat Kosong</b-button>
                      <b-button v-b-toggle.accordion-5 class="mr-2" variant="outline-primary">Daya Angkut</b-button>
                      <b-button v-b-toggle.accordion-6 class="mr-2" variant="outline-primary">Catatan Rubah
                        Bentuk</b-button>
                    </b-card-header>

                    <!-- Accordion 1 Content -->
                    <b-collapse id="accordion-1" visible accordion="my-accordion" @show="isActive = true"
                      @hide="isActive = false" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Panjang Kendaraan (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="panjangkendaraan" min="0"
                                placeholder="Panjang Kendaraan" v-model="pendaftaran.panjangkendaraan"
                                @focus="('panjangkendaraan')" :readonly="isLocked('panjangkendaraan')" />
                              <p class="text-danger" v-if="errors.panjangkendaraan">
                                {{ errors.panjangkendaraan[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Lebar Kendaraan (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="lebarkendaraan" min="0"
                                placeholder="Lebar Kendaraan" v-model="pendaftaran.lebarkendaraan"
                                @focus="handleFocus('lebarkendaraan')" :readonly="isLocked('lebarkendaraan')" />
                              <p class="text-danger" v-if="errors.lebarkendaraan">
                                {{ errors.lebarkendaraan[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Tinggi Kendaraan (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="tinggikendaraan" min="0"
                                placeholder="Tinggi Kendaraan" v-model="pendaftaran.tinggikendaraan"
                                @focus="handleFocus('tinggikendaraan')" :readonly="isLocked('tinggikendaraan')" />
                              <p class="text-danger" v-if="errors.tinggikendaraan">
                                {{ errors.tinggikendaraan[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Julur Belakang(mm)</label>
                              <input type="number" class="form-control form-control-lg" name="julurbelakang" min="0"
                                v-model="pendaftaran.julurbelakang" @focus="handleFocus('julurbelakang')"
                                :readonly="isLocked('julurbelakang')" />
                              <p class="text-danger" v-if="errors.julurbelakang">
                                {{ errors.julurbelakang[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Julur Depan(mm)</label>
                              <input type="number" class="form-control form-control-lg" name="julurdepan" min="0"
                                v-model="pendaftaran.julurdepan" @focus="handleFocus('julurdepan')"
                                :readonly="isLocked('julurdepan')" />
                              <p class="text-danger" v-if="errors.julurdepan">
                                {{ errors.julurdepan[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Jenis Rumah-rumah</label>
                              <input type="text" class="form-control form-control-lg" name="bahan"
                                v-model="pendaftaran.bahan" :readonly="isLocked('bahan')" />
                              <p class="text-danger" v-if="errors.bahan">
                                {{ errors.bahan[0] }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>

                    <!-- Accordion 2 Content -->
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Panjang Bak atau Tangki Muatan (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="panjangbakatautangki"
                                min="0" placeholder="Panjang Bak atau Tangki Muatan"
                                v-model="pendaftaran.panjangbakatautangki" @focus="handleFocus('panjangbakatautangki')"
                                :readonly="isLocked('panjangbakatautangki')" />
                              <p class="text-danger" v-if="errors.panjangbakatautangki">
                                {{ errors.panjangbakatautangki[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Lebar Bak atau Tangki Muatan (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="lebarbakatautangki"
                                min="0" placeholder="Lebar Bak atau Tangki Muatan"
                                v-model="pendaftaran.lebarbakatautangki" @focus="handleFocus('lebarbakatautangki')"
                                :readonly="isLocked('lebarbakatautangki')" />
                              <p class="text-danger" v-if="errors.lebarbakatautangki">
                                {{ errors.lebarbakatautangki[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Tinggi Bak atau Tangki Muatan (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="tinggibakatautangki"
                                min="0" placeholder="Tinggi Bak atau Tangki Muatan"
                                v-model="pendaftaran.tinggibakatautangki" @focus="handleFocus('tinggibakatautangki')"
                                :readonly="isLocked('tinggibakatautangki')" />
                              <p class="text-danger" v-if="errors.tinggibakatautangki">
                                {{ errors.tinggibakatautangki[0] }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>

                    <!-- Accordion 3 Content -->
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label class="text-danger">Jumlah Sumbu</label>
                              <input type="number" class="form-control form-control-lg" name="jumlah_sumbu" min="2"
                                placeholder="Jumlah Sumbu" v-model="pendaftaran.jumlah_sumbu"
                                @focus="handleFocus('jumlah_sumbu')" :readonly="isLocked('jumlah_sumbu')" />
                              <p class="text-danger" v-if="errors.jumlah_sumbu">
                                {{ errors.jumlah_sumbu[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Jarak Sumbu I-II (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu1_2" min="0"
                                placeholder="Jarak Sumbu I-II (mm)" v-model="pendaftaran.jaraksumbu1_2"
                                @focus="handleFocus('jaraksumbu1_2')" :readonly="isLocked('jaraksumbu1_2')" />
                              <p class="text-danger" v-if="errors.jaraksumbu1_2">
                                {{ errors.jaraksumbu1_2[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 2">
                            <div class="form-group">
                              <label>Jarak Sumbu II-III (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="height"
                                placeholder="Jarak Sumbu II-III (mm)" min="0" v-model="pendaftaran.jaraksumbu2_3"
                                @focus="handleFocus('jaraksumbu2_3')" :readonly="isLocked('jaraksumbu2_3')" />
                              <p class="text-danger" v-if="errors.jaraksumbu2_3">
                                {{ errors.jaraksumbu2_3[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 3">
                            <div class="form-group">
                              <label>Jarak Sumbu III-IV (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="length"
                                placeholder="Jarak Sumbu III-IV (mm)" min="0" v-model="pendaftaran.jaraksumbu3_4"
                                @focus="handleFocus('jaraksumbu3_4')" :readonly="isLocked('jaraksumbu3_4')" />
                              <p class="text-danger" v-if="errors.jaraksumbu3_4">
                                {{ errors.jaraksumbu3_4[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 4">
                            <div class="form-group">
                              <label>Jarak Sumbu IV-V (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu4_5"
                                placeholder="Jarak Sumbu IV-V (mm)" min="0" v-model="pendaftaran.jaraksumbu4_5"
                                @focus="handleFocus('jaraksumbu4_5')" :readonly="isLocked('jaraksumbu4_5')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 5">
                            <div class="form-group">
                              <label>Jarak Sumbu V-VI (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu5_6"
                                placeholder="Jarak Sumbu V-VI (mm)" min="0" v-model="pendaftaran.jaraksumbu5_6"
                                @focus="handleFocus('jaraksumbu5_6')" :readonly="isLocked('jaraksumbu5_6')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 6">
                            <div class="form-group">
                              <label>Jarak Sumbu VI-VII (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu6_7"
                                placeholder="Jarak Sumbu VI-VII (mm)" min="0" v-model="pendaftaran.jaraksumbu6_7"
                                @focus="handleFocus('jaraksumbu6_7')" :readonly="isLocked('jaraksumbu6_7')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 7">
                            <div class="form-group">
                              <label>Jarak Sumbu VII-VIII (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu7_8"
                                placeholder="Jarak Sumbu VII-VIII (mm)" min="0" v-model="pendaftaran.jaraksumbu7_8"
                                @focus="handleFocus('jaraksumbu7_8')" :readonly="isLocked('jaraksumbu7_8')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 8">
                            <div class="form-group">
                              <label>Jarak Sumbu VIII-IX (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu8_9"
                                placeholder="Jarak Sumbu VIII-IX (mm)" min="0" v-model="pendaftaran.jaraksumbu8_9"
                                @focus="handleFocus('jaraksumbu8_9')" :readonly="isLocked('jaraksumbu8_9')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 9">
                            <div class="form-group">
                              <label>Jarak Sumbu IX-X (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu9_10"
                                placeholder="Jarak Sumbu IX-X (mm)" min="0" v-model="pendaftaran.jaraksumbu9_10"
                                @focus="handleFocus('jaraksumbu9_10')" :readonly="isLocked('jaraksumbu9_10')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 10">
                            <div class="form-group">
                              <label>Jarak Sumbu X-XI (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu10_11" min="0"
                                placeholder="Jarak Sumbu X-XI (mm)" v-model="pendaftaran.jaraksumbu10_11"
                                @focus="handleFocus('jaraksumbu10_11')" :readonly="isLocked('jaraksumbu10_11')" />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="pendaftaran.jumlah_sumbu > 11">
                            <div class="form-group">
                              <label>Jarak Sumbu XI-XII (mm)</label>
                              <input type="number" class="form-control form-control-lg" name="jaraksumbu11_12" min="0"
                                placeholder="Jarak Sumbu XI-XII (mm)" v-model="pendaftaran.jaraksumbu11_12"
                                @focus="handleFocus('jaraksumbu11_12')" :readonly="isLocked('jaraksumbu11_12')" />
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Wheelbase (mm)</label>
                              <input type="number" name="a" class="form-control form-control-lg"
                                placeholder="Wheelbase (mm)" v-model="pendaftaran.a" @focus="handleFocus('a')"
                                :readonly="isLocked('a')" />
                              <p class="text-danger" v-if="errors.a">
                                {{ errors.a[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>P (mm)</label>
                              <input type="number" class="form-control form-control-lg" placeholder="P (mm)" name="p"
                                min="0" v-model="pendaftaran.p" @focus="handleFocus('p')" :readonly="isLocked('p')" />
                              <p class="text-danger" v-if="errors.p">
                                {{ errors.p[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Q(mm)</label>
                              <input type="number" class="form-control form-control-lg" placeholder="Q (mm)" name="q"
                                min="0" v-model="pendaftaran.q" @focus="handleFocus('q')" :readonly="isLocked('q')" />
                              <p class="text-danger" v-if="errors.q">
                                {{ errors.q[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>R(mm)</label>
                              <input type="number" class="form-control form-control-lg" placeholder="R (mm)" name="r"
                                min="0" v-model="pendaftaran.r" @focus="handleFocus('r')" :readonly="isLocked('r')" />
                              <p class="text-danger" v-if="errors.r">
                                {{ errors.r[0] }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>

                    <!-- Accordion 4 Content -->
                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 1(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu1" min="0"
                                v-model="pendaftaran.beratsumbu1" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu1')" :readonly="isLocked('beratsumbu1')" />
                              <p class="text-danger" v-if="errors.beratsumbu1">
                                {{ errors.beratsumbu1[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 2(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu2" min="0"
                                v-model="pendaftaran.beratsumbu2" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu2')" :readonly="isLocked('beratsumbu2')" />
                              <p class="text-danger" v-if="errors.beratsumbu2">
                                {{ errors.beratsumbu2[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 3(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu3" min="0"
                                v-model="pendaftaran.beratsumbu3" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu3')" :readonly="isLocked('beratsumbu3')" />
                              <p class="text-danger" v-if="errors.beratsumbu3">
                                {{ errors.beratsumbu3[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 4(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu4" min="0"
                                v-model="pendaftaran.beratsumbu4" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu4')" :readonly="isLocked('beratsumbu4')" />
                              <p class="text-danger" v-if="errors.beratsumbu4">
                                {{ errors.beratsumbu4[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 4">
                            <div class="form-group">
                              <label>Berat Sumbu 5(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu5" min="0"
                                v-model="pendaftaran.beratsumbu5" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu5')" :readonly="isLocked('beratsumbu5')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 5">
                            <div class="form-group">
                              <label>Berat Sumbu 6(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu6" min="0"
                                v-model="pendaftaran.beratsumbu6" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu6')" :readonly="isLocked('beratsumbu6')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 6">
                            <div class="form-group">
                              <label>Berat Sumbu 7(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu7" min="0"
                                v-model="pendaftaran.beratsumbu7" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu7')" :readonly="isLocked('beratsumbu7')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 7">
                            <div class="form-group">
                              <label>Berat Sumbu 8(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu8" min="0"
                                v-model="pendaftaran.beratsumbu8" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu8')" :readonly="isLocked('beratsumbu8')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 8">
                            <div class="form-group">
                              <label>Berat Sumbu 9(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu9" min="0"
                                v-model="pendaftaran.beratsumbu9" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu9')" :readonly="isLocked('beratsumbu9')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 9">
                            <div class="form-group">
                              <label>Berat Sumbu 10(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu10" min="0"
                                v-model="pendaftaran.beratsumbu10" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu10')" :readonly="isLocked('beratsumbu10')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 10">
                            <div class="form-group">
                              <label>Berat Sumbu 11(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu11" min="0"
                                v-model="pendaftaran.beratsumbu11" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu11')" :readonly="isLocked('beratsumbu11')" />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="pendaftaran.jumlah_sumbu > 11">
                            <div class="form-group">
                              <label>Berat Sumbu 12(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratsumbu12" min="0"
                                v-model="pendaftaran.beratsumbu12" @change="
                                  totalBeratSumbu();
                                setJBI();
                                " @focus="handleFocus('beratsumbu12')" :readonly="isLocked('beratsumbu12')" />
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Total Berat Sumbu(Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="beratkosong"
                                v-model="pendaftaran.beratkosong" @change="setJBI()" @focus="handleFocus('beratkosong')"
                                :readonly="isLocked('beratkosong')" />
                              <p class="text-danger" v-if="errors.beratsumbu4">
                                {{ errors.beratsumbu4[0] }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>

                    <!-- Accordion 5 Content -->
                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Daya Angkut Orang (orang)</label>
                              <input type="number" class="form-control form-control-lg" name="dayaangkutorang" min="0"
                                placeholder="Daya Angkut Orang (mm)" v-model="pendaftaran.dayaangkutorang"
                                @change="setJBI()" @focus="handleFocus('dayaangkutorang')"
                                :readonly="isLocked('dayaangkutorang')" />
                              <p class="text-danger" v-if="errors.dayaangkutorang">
                                {{ errors.dayaangkutorang[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Daya Angkut Barang (Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="dayaangkutbarang" min="0"
                                placeholder="Daya Angkut Barang" v-model="pendaftaran.dayaangkutbarang"
                                @change="setJBI()" @focus="handleFocus('dayaangkutbarang')"
                                :readonly="isLocked('dayaangkutbarang')" />
                              <p class="text-danger" v-if="errors.dayaangkutbarang">
                                {{ errors.dayaangkutbarang[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBB (Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="jbb" min="0"
                                placeholder="JBB" v-model="pendaftaran.jbb" @focus="handleFocus('jbb')"
                                :readonly="isLocked('jbb')" />
                              <p class="text-danger" v-if="errors.jbb">
                                {{ errors.jbb[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBKB (Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="jbkb" min="0"
                                placeholder="JBKB (Kg)" v-model="pendaftaran.jbkb" @focus="handleFocus('jbkb')"
                                :readonly="isLocked('jbkb')" />
                              <p class="text-danger" v-if="errors.jbkb">
                                {{ errors.jbkb[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBI (Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="jbi" min="0"
                                placeholder="JBI (Kg)" v-model="pendaftaran.jbi" @focus="handleFocus('jbi')"
                                :readonly="isLocked('jbi')" />
                              <p class="text-danger" v-if="errors.jbi">
                                {{ errors.jbi[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBKI (Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="jbki" min="0"
                                placeholder="JBKI (Kg)" v-model="pendaftaran.jbki" @focus="handleFocus('jbki')"
                                :readonly="isLocked('jbki')" />
                              <p class="text-danger" v-if="errors.jbki">
                                {{ errors.jbki[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>MST (Kg)</label>
                              <input type="number" class="form-control form-control-lg" name="mst" min="0"
                                placeholder="MST" v-model="pendaftaran.mst" @focus="handleFocus('mst')"
                                :readonly="isLocked('mst')" />
                              <p class="text-danger" v-if="errors.mst">
                                {{ errors.mst[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label class="text-danger">Kelas Jalan Terendah</label>
                              <vSelect label="kelasjalan_name" ref="kelasjalanterendah" :options="kelasjalans"
                                v-model="pendaftaran.kelasjalanterendah" @input="setKelasJalan"
                                :noDrop="isLocked('kelasjalanterendah')" :clearable="!isLocked('kelasjalanterendah')">
                              </vSelect>
                              <p class="text-danger" v-if="errors.kelasjalanterendah">
                                {{ errors.kelasjalanterendah[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Konfigurasi Sumbu Roda</label>
                              <input type="text" class="form-control form-control-lg" name="konfigurasisumburoda"
                                min="0" placeholder="Konfigurasi Sumbu Roda" v-model="pendaftaran.konfigurasisumburoda"
                                @focus="handleFocus('konfigurasisumburoda')"
                                :readonly="isLocked('konfigurasisumburoda')" />
                              <p class="text-danger" v-if="errors.konfigurasisumburoda">
                                {{ errors.konfigurasisumburoda[0] }}
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Ukuran Ban</label>
                              <input type="text" class="form-control form-control-lg" name="ukuranban"
                                placeholder="Ukuran Ban" v-model="pendaftaran.ukuranban"
                                :readonly="isLocked('ukuranban')" />
                              <p class="text-danger" v-if="errors.ukuranban">
                                {{ errors.ukuranban[0] }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>

                    <!-- Accordion 6 Content -->
                    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Catatan Rubah Bentuk</label>
                              <input type="text" class="form-control form-control-lg" placeholder="Catatan Rubah Bentuk"
                                name="catatanrubahbentuk" v-model="pendaftaran.catatanrubahbentuk"
                                :readonly="isLocked('catatanrubahbentuk')" />
                              <p class="text-danger" v-if="errors.catatanrubahbentuk">
                                {{ errors.catatanrubahbentuk[0] }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </div>
              <!--end: Wizard Step 4-->

              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10" v-if="pendaftaran.kodepenerbitans_id < 11">
                <div class="mr-2">
                  <button class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev">
                    Previous
                  </button>

                </div>
                <div>
                  <button v-on:click="submit" class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-submit">
                    Submit
                  </button>
                  <button class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next">
                    Next Step
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-end border-top pt-10" v-else>
                <div>
                  <button v-on:click="submit" class="btn btn-success font-weight-bold text-uppercase px-9 py-4">
                    Submit
                  </button>
                </div>
              </div>
              <!--end: Wizard Actions -->
            </form>
            <!--end: Wizard Form-->
          </div>
        </div>
        <!--end: Wizard Body-->
      </div>
    </div>
    <!--end: Wizard-->

    <b-modal id="modalVTA" ref="modalVTA" class="modal" title="Cek Data">
      <div class="form-group">
        <label for>No SRUT</label>
        <input type="text" class="form-control" v-model="datavta.nosertifikatreg" disabled />
      </div>
      <div class="form-group">
        <label for>No SK Drijen</label>
        <input type="text" class="form-control" v-model="datavta.noskdrijen" disabled />
      </div>
      <div class="form-group">
        <label for>Merek</label>
        <input type="text" class="form-control" v-model="datavta.merek" disabled />
      </div>
      <div class="form-group">
        <label for>Tipe Varian</label>
        <input type="text" class="form-control" v-model="datavta.tipe" disabled />
      </div>
      <div class="form-group">
        <label for>Jenis</label>
        <input type="text" class="form-control" v-model="datavta.jenis" disabled />
      </div>
      <div class="form-group">
        <label for>Peruntukan</label>
        <input type="text" class="form-control" v-model="datavta.peruntukan" disabled />
      </div>
      <div class="form-group">
        <label for>No Rangka</label>
        <input type="text" class="form-control" v-model="datavta.norangka" disabled />
      </div>
      <div class="form-group">
        <label for>No Mesin</label>
        <input type="text" class="form-control" v-model="datavta.nomesin" disabled />
      </div>
      <div class="form-group">
        <label for>Nama Perusahaan</label>
        <input type="text" class="form-control" v-model="datavta.namaperusahaan" disabled />
      </div>
      <div class="form-group">
        <label for>Alamat Perusahaan</label>
        <input type="text" class="form-control" v-model="datavta.alamatperusahaan" disabled />
      </div>
      <div class="form-group">
        <label for>Penanggung Jawab</label>
        <input type="text" class="form-control" v-model="datavta.penanggungjawab" disabled />
      </div>
    </b-modal>

  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
@import "@/assets/sass/components/_image-input.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import moment from 'moment';
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { uuid } from 'vue-uuid';

export default {
  data() {
    return {
      disabled1: 1,
      disabled2: 1,
      isActive: true,
      statuschecking: true,
    };
  },
  name: "Wizard-1",
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Pendaftaran" },
      { title: "Add" }
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function (/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function (/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  created() {
    this.CLEAR_FORM();
    this.getKodewilayahs();
    this.getMereks();
    this.getTipes();
    this.getVarians();
    this.getJenis();
    this.getSubJenis();
    this.getFuels();
    this.getKotas();
    this.getKelasJalans();
    if (this.$route.name == 'pendaftaran.edit') {
      this.editPendaftaran(this.$route.params.id);
    }

    var CurrentDate = moment().format("YYYY-MM-DD");
    this.pendaftaran.tglpendaftaran = CurrentDate;
  },
  methods: {
    ...mapMutations("pendaftaran", ["CLEAR_FORM"]),
    ...mapActions("pendaftaran", ["getMereks", "getTipes", "getVarians", "getJenis", "getSubJenis", "getJeniskendaraan", "getFuels", "getKelasJalans", "getKodewilayahs", "getIdentitaskendaraanNouji", "editPendaftaran", "submitPendaftaran", "submitPendaftaran2", "setNoSurat", "getNouji", "getKotas", "getKecamatans", "getKelurahans", "getVTA", "checkNU", "checkMU"]),
    isLocked(field) {
      return (
        this.pendaftaran[field] !== undefined ||
        this.pendaftaran[field] !== "" ||
        this.pendaftaran[field] !== null
      );
    },
    submit() {
      if (this.pendaftaran.kodepenerbitans_id == '11' || this.pendaftaran.kodepenerbitans_id == '12') {
        this.submitPendaftaran2().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push({ name: "pendaftaran.data" });
        });
      } else {
        this.submitPendaftaran().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push({ name: "pendaftaran.data" });
        });
      }
    },
    totalBeratSumbu() {
      this.pendaftaran.beratkosong = parseInt(this.pendaftaran.beratsumbu1) + parseInt(this.pendaftaran.beratsumbu2) + parseInt(this.pendaftaran.beratsumbu3) + parseInt(this.pendaftaran.beratsumbu4);
    },
    setSurat() {
      this.setNoSurat();
    },
    setKotaTujuan(value) {
      this.pendaftaran.tujuan = value.nama
    },
    setKota(value) {
      this.pendaftaran.kota = value.nama
      this.getKecamatans(value.nama);
      this.disabled1 = 0;
    },
    setKecamatan(value) {
      this.pendaftaran.kecamatan = value.nama
      this.getKelurahans(value.nama);
      this.disabled2 = 0;
    },
    setKelurahan(value) {
      this.pendaftaran.kelurahan = value.nama
    },
    setJBI() {
      this.pendaftaran.jbi = parseInt(this.pendaftaran.beratkosong) + parseInt(this.pendaftaran.dayaangkutbarang) + (parseInt(this.pendaftaran.dayaangkutorang) * 60)
    },
    setDefaultZero() {
      if (this.pendaftaran.kodepenerbitans_id == 1) {
        this.pendaftaran.jbb = "0";
        this.pendaftaran.jbkb = "0";
        this.pendaftaran.jbi = "0";
        this.pendaftaran.jbki = "0";
        this.pendaftaran.mst = "0";
        this.pendaftaran.panjangkendaraan = "0";
        this.pendaftaran.lebarkendaraan = "0";
        this.pendaftaran.tinggikendaraan = "0";
        this.pendaftaran.panjangbakatautangki = "0";
        this.pendaftaran.lebarbakatautangki = "0";
        this.pendaftaran.tinggibakatautangki = "0";
        this.pendaftaran.julurdepan = "0";
        this.pendaftaran.julurbelakang = "0";
        this.pendaftaran.jaraksumbu1_2 = "0";
        this.pendaftaran.jaraksumbu2_3 = "0";
        this.pendaftaran.jaraksumbu3_4 = "0";
        this.pendaftaran.q = "0";
        this.pendaftaran.p = "0";
        this.pendaftaran.r = "0";
        this.pendaftaran.dayaangkutorang = "0";
        this.pendaftaran.dayaangkutbarang = "0";
        this.pendaftaran.beratsumbu1 = "0";
        this.pendaftaran.beratsumbu2 = "0";
        this.pendaftaran.beratsumbu3 = "0";
        this.pendaftaran.beratsumbu4 = "0";
        this.pendaftaran.beratkosong = "0";
      }
    },
    caridata() {
      this.getIdentitaskendaraanNouji().then(() => {
        if (this.carinouji == 1) {
          Swal.fire({
            icon: 'success',
            title: 'Data ditemukan',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Data Tidak ditemukan',
            showConfirmButton: false,
            timer: 1500
          })
        }

        if (this.pendaftaran.tglsertifikatreg === null || this.pendaftaran.tglsertifikatreg == '') {
          var CurrentDate = moment().format("YYYY-MM-DD");
          this.pendaftaran.tglsertifikatreg = CurrentDate;
        }
      });
    },
    customFormatter(today) {
      return today;
    },
    setType(value) {
      this.pendaftaran.merek = value.vehicle_brand_name;
      this.pendaftaran.idmerek = value.vehicle_brand_id;
      this.getTipes(value.vehicle_brand_id);
    },
    setVarian(value) {
      this.pendaftaran.tipe = value.vehicle_varian_type_name;
      this.pendaftaran.idtipe = value.vehicle_varian_type_id;
      this.getVarians(value.vehicle_varian_type_id);
    },
    setVarianid(value) {
      this.pendaftaran.varian = value.vehicle_varian_name;
      this.pendaftaran.idvarian = value.vehicle_varian_id;
    },
    setSubVehicle(value) {
      this.pendaftaran.jenis = value.vehicle_type_name;
      this.pendaftaran.idjenis = value.vehicle_type_id;
      this.getSubJenis(value.vehicle_type_id);
    },
    setSubVehicleid(value) {
      this.pendaftaran.subjenis = value.vehicle_sub_name;
      this.pendaftaran.idsubjenis = value.vehicle_sub_id;
    },
    setArea(value) {
      this.pendaftaran.kodewilayah = value.area_code;
      this.pendaftaran.wilayah = value.area_name;
      this.pendaftaran.idkodewilayah = value.area_id;
    },
    setFuel(value) {
      this.pendaftaran.bahanbakar = value.fuel_name;
      this.pendaftaran.idbahanbakar = value.fuel_id;
    },
    setKelasJalan(value) {
      this.pendaftaran.kelasjalanterendah = value.kelasjalan_name;
      this.pendaftaran.idkelasjalanterendah = value.kelasjalan_id;
    },
    setAreaFrom(value) {
      this.pendaftaran.kodewilayahasal = value.area_code;
      this.pendaftaran.wilayahasal = value.area_name;
      this.pendaftaran.idkodewilayahasal = value.area_id;
    },
    handleFocus(field) {
      if (this.pendaftaran[field] === 0 || this.pendaftaran[field] === "0") {
        this.pendaftaran[field] = '';
      }
    },
    showModalVTA() {
      this.$refs['modalVTA'].show()
    },
    getDataVTA(dataSearch) {
      if (this.dataSearch === "") {
        this.$refs.nouji.focus()
        Swal.fire({
          icon: 'warning',
          title: 'No Uji/No Rangka Tidak Boleh Kosong',
          showConfirmButton: false,
          timer: 750
        })
      } else {
        this.getVTA(dataSearch).then(() => {
          if (this.responeBlue.status) {
            Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              showConfirmButton: false,
              timer: 1500
            })
            this.showModalVTA();
          } else {
            Swal.fire({
              icon: 'warning',
              title: this.responeBlue.message,
              showConfirmButton: false,
              timer: 2000
            })
          }
        });
      }
    },
    getCheckUji() {
      if (this.pendaftaran.nouji === "") {
        this.$refs.nouji.focus()
        Swal.fire({
          icon: 'warning',
          title: 'Nouji Tidak Boleh Kosong',
          showConfirmButton: false,
          timer: 750
        })
      } else {
        if (this.pendaftaran.kodepenerbitans_id == '6') {
          this.checkMU(this.pendaftaran.nouji).then(() => {
            if (this.responeBlue.status) {
              Swal.fire({
                icon: 'success',
                title: 'Berhasil Data',
                showConfirmButton: false,
                timer: 1500
              })
              this.showModal();
            } else {
              if (this.responeBlue.message != "") {
                Swal.fire({
                  icon: 'warning',
                  title: "Data tidak ditemukan",
                  showConfirmButton: false,
                  timer: 2000
                })
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: this.responeBlue.message,
                  showConfirmButton: false,
                  timer: 2000
                })
              }
            }
          });
        } else {
          this.checkNU(this.pendaftaran.nouji).then(() => {
            if (this.responeBlue.status) {
              Swal.fire({
                icon: 'success',
                title: 'Berhasil Data',
                showConfirmButton: false,
                timer: 1500
              })
              this.showModal();
            } else {
              if (this.responeBlue.message != "") {
                Swal.fire({
                  icon: 'warning',
                  title: "Data tidak ditemukan",
                  showConfirmButton: false,
                  timer: 2000
                })
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: this.responeBlue.message,
                  showConfirmButton: false,
                  timer: 2000
                })
              }
            }
          });
        }

      }
    },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("pendaftaran", {
      pendaftaran: state => state.pendaftaran,
      carinouji: state => state.carinouji,
      carinokendaraan: state => state.carinokendaraan,
      carinorangka: state => state.carinorangka,
      responeBlue: state => state.responeBlue,
      datavta: state => state.datavta,
      uuid: state => state.uuid,
    }),
    ...mapState("pendaftaran", {
      kodewilayahs: state => state.kodewilayahs
    }),
    ...mapState("pendaftaran", {
      mereks: state => state.mereks, tipes: state => state.tipes, varians: state => state.varians, jenis: state => state.jenis, subjenis: state => state.subjenis, jeniskendaraan: state => state.jeniskendaraan, fuels: state => state.fuels, kelasjalans: state => state.kelasjalans,
      kotas: state => state.kotas, kecamatans: state => state.kecamatans, kelurahans: state => state.kelurahans,
    }),
    disabled() {
      return this.state === 'disabled'
    },
    readonly() {
      return this.state === 'readonly'
    },
  },
  components: {
    vSelect
  },
};
</script>
