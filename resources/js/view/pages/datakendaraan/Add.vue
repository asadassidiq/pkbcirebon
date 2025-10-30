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
                <h3 class="wizard-title">1. Identitas</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-lorry"></i>
                <h3 class="wizard-title">2. Data Kendaraan</h3>
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
              
              <!--end: Wizard Step 1-->
              <!--begin: Wizard Identitaskendaraan 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label> No Uji</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="nouji"
                        placeholder="No Uji"
                        v-model="datakendaraan.nouji"
                      />
                      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>No Kendaraan</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="noregistrasikendaraan"
                        placeholder=" No Kendaraan"
                        v-model="datakendaraan.noregistrasikendaraan"
                      />
                      <p class="text-danger" v-if="errors.noregistrasikendaraan">{{ errors.noregistrasikendaraan[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Nama</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="nama"
                        placeholder=" nama"
                        v-model="datakendaraan.nama"
                      />
                      <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> No Identitas</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="noidentitaspemilik"
                        placeholder=" No Identitas"
                        v-model="datakendaraan.noidentitaspemilik"
                      />
                      <p class="text-danger" v-if="errors.noidentitaspemilik">{{ errors.noidentitaspemilik[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Alamat</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="alamat"
                        placeholder=" Alamat"
                        v-model="datakendaraan.alamat"
                      />
                      <p class="text-danger" v-if="errors.alamat">{{ errors.alamat[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kabupaten</label>
                      <vSelect label="nama" :options="kotas"  v-model="datakendaraan.kota" @input="setKota"></vSelect>
                      <p class="text-danger" v-if="errors.kota">{{ errors.kota[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kecamatan</label>
                      <vSelect label="nama" :options="kecamatans"  v-model="datakendaraan.kecamatan" @input="setKecamatan" :disabled="disabled1 == 1"></vSelect>
                      <p class="text-danger" v-if="errors.kecamatan">{{ errors.kecamatan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kelurahan</label>
                      <vSelect label="nama" :options="kelurahans"  v-model="datakendaraan.kelurahan" @input="setKelurahan" :disabled="disabled2 == 1"></vSelect>
                      <p class="text-danger" v-if="errors.Kelurahan">{{ errors.Kelurahan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>No SRUT</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="nosertifikatreg"
                        placeholder=" No SRUT"
                        v-model="datakendaraan.nosertifikatreg"
                      />
                      <p class="text-danger" v-if="errors.nosertifikatreg">{{ errors.nosertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tanggal SRUT</label>
                      <b-form-datepicker id="tglsertifikatreg" v-model="datakendaraan.tglsertifikatreg" locale="id"></b-form-datepicker>
                      <p class="text-danger" v-if="errors.tglsertifikatreg">{{ errors.tglsertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tanggal STNK terbit</label>
                      <b-form-datepicker id="tgl_registrasikendaraan" v-model="datakendaraan.tgl_registrasikendaraan" locale="id"></b-form-datepicker>
                      <p class="text-danger" v-if="errors.tgl_registrasikendaraan">{{ errors.tgl_registrasikendaraan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>SK Rancang Bangun</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="rancang"
                        placeholder="SK Rancang Bangun"
                        v-model="datakendaraan.rancang"
                      />
                      <p class="text-danger" v-if="errors.rancang">{{ errors.rancang[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tahun Pembuatan</label>
                      <input
                        type="number"
                        class="form-control  form-control-lg"
                        name="thpembuatan"
                        placeholder="Tahun Pembuatan"
                        v-model="datakendaraan.thpembuatan"
                      />
                      <p class="text-danger" v-if="errors.thpembuatan">{{ errors.thpembuatan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Merek <span class="text-danger" v-if="datakendaraan.mereklama">{{ datakendaraan.mereklama }}</span></label>
                      <vSelect label="vehicle_brand_name" ref="merek" :options="mereks"
                        v-model="datakendaraan.merek" @input="setType" ></vSelect>
                        
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tipe <span class="text-danger" v-if="datakendaraan.tipelama">{{ datakendaraan.tipelama }}</span></label>
                      <vSelect label="vehicle_varian_type_name" ref="tipes" :options="tipes"
                          v-model="datakendaraan.tipe" @input="setVarian" :disabled="!tipes.length" ></vSelect>
                      
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <label class="text-danger">Varian</label>
                        <vSelect label="vehicle_varian_name" ref="varian" :options="varians"
                          v-model="datakendaraan.varian" @input="setVarianid" :disabled="!varians.length" ></vSelect>
                      </div>
                      <p class="text-danger" v-if="errors.varian">{{ errors.varian[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jenis <span class="text-danger" v-if="datakendaraan.jenislama">{{ datakendaraan.jenislama }}</span></label>
                      <vSelect label="vehicle_type_name" ref="jenis" :options="jenis"
                        v-model="datakendaraan.jenis" @input="setSubVehicle" :disabled="!jenis.length" ></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Model <span class="text-danger" v-if="datakendaraan.model">{{ datakendaraan.model }}</span></label>
                      <vSelect label="vehicle_sub_name" ref="subjenis" :options="subjenis"
                          v-model="datakendaraan.subjenis" @input="setSubVehicleid" :disabled="!subjenis.length" ></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Isi Silinder</label>
                      <input
                        type="number"
                        class="form-control  form-control-lg"
                        name="isisilinder"
                        placeholder=" Isi Silinder"
                        v-model="datakendaraan.isisilinder"
                        @focus="handleFocus('isisilinder')"
                      />
                      <p class="text-danger" v-if="errors.isisilinder">{{ errors.isisilinder[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Daya Motor Penggerak</label>
                      <input
                        type="number"
                        class="form-control  form-control-lg"
                        name="dayamotorpenggerak"
                        placeholder=" Daya Motor Penggerak"
                        v-model="datakendaraan.dayamotorpenggerak"
                        @focus="handleFocus('dayamotorpenggerak')"
                        />
                      <p class="text-danger" v-if="errors.dayamotorpenggerak">{{ errors.dayamotorpenggerak[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>No Mesin</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="nomesin"
                        placeholder="No Mesin"
                        style="text-transform: uppercase;"
                        v-model="datakendaraan.nomesin"
                      />
                      <p class="text-danger" v-if="errors.nomesin">{{ errors.nomesin[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label>No Rangka</label>
                    <div class="input-group">
                      <input type="text" class="form-control  form-control-lg" name="norangka" style="text-transform: uppercase;"
                        ref="norangka" placeholder=" No Rangka" v-model="datakendaraan.norangka"/>
                      <span class="input-group-text" id="basic-addon2"><a href="javascript:void(0)"
                          @click="getDataVTA(datakendaraan.norangka)"
                          class="btn btn-sm btn-light-success font-weight-bold">
                          <i class="flaticon2-search"></i> Cek Data
                        </a></span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Bahan Bakar</label>
                      <vSelect label="fuel_name" ref="bahanbakar" :options="fuels" v-model="datakendaraan.bahanbakar"
                      @input="setFuel"></vSelect>
                    <p class="text-danger" v-if="errors.bahanbakar">{{ errors.bahanbakar[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Penggunaan</label>
                      <select class="form-control" v-model="datakendaraan.peruntukan">
                        <option value="UMUM" selected="selected">UMUM</option>
                        <option value="TIDAK UMUM">TIDAK UMUM</option>
                        <option value="PEMERINTAH">PEMERINTAH</option>
                      </select>
                    <p class="text-danger" v-if="errors.peruntukan">{{ errors.peruntukan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Daerah Asal</label>
                      <vSelect label="area_name" ref="kodewilayahasal" :options="kodewilayahs"
                          v-model="datakendaraan.wilayahasal" @input="setAreaFrom"></vSelect>
                    <p class="text-danger" v-if="errors.kodewilayah">{{ errors.kodewilayah[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Warna</label>
                      <input
                        type="text"
                        class="form-control  form-control-lg"
                        name="warna"
                        placeholder="Warna"
                        style="text-transform: uppercase;"
                        v-model="datakendaraan.warna"
                      />
                      <p class="text-danger" v-if="errors.warna">{{ errors.warna[0] }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Datakendaraan 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1 d-flex flex-row justify-content-center gap-2 mb-4" role="tab">
                      <b-button v-b-toggle.accordion-1 class="mr-2" variant="outline-primary">Ukuran Utama</b-button>
                      <b-button v-b-toggle.accordion-2 class="mr-2" variant="outline-primary">Dimensi Bak / Tangki</b-button>
                      <b-button v-b-toggle.accordion-3 class="mr-2" variant="outline-primary">Jarak Sumbu</b-button>
                      <b-button v-b-toggle.accordion-4 class="mr-2" variant="outline-primary">Berat Kosong</b-button>
                      <b-button v-b-toggle.accordion-5 class="mr-2" variant="outline-primary">Daya Angkut</b-button>
                      <b-button v-b-toggle.accordion-6 class="mr-2" variant="outline-primary">Catatan Rubah Bentuk</b-button>
                    </b-card-header>

                    <!-- Accordion 1 Content -->
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Panjang Kendaraan (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="panjangkendaraan"
                                min="0"
                                placeholder="Panjang Kendaraan"
                                v-model="datakendaraan.panjangkendaraan"
                                @focus="handleFocus('panjangkendaraan')"
                              />
                              <p class="text-danger" v-if="errors.panjangkendaraan">{{ errors.panjangkendaraan[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Lebar Kendaraan (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="lebarkendaraan"
                                min="0"
                                placeholder="Lebar Kendaraan"
                                v-model="datakendaraan.lebarkendaraan"
                                @focus="handleFocus('lebarkendaraan')"
                              />
                              <p class="text-danger" v-if="errors.lebarkendaraan">{{ errors.lebarkendaraan[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Tinggi Kendaraan (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="tinggikendaraan"
                                min="0"
                                placeholder="Tinggi Kendaraan"
                                v-model="datakendaraan.tinggikendaraan"
                                @focus="handleFocus('tinggikendaraan')"
                              />
                              <p class="text-danger" v-if="errors.tinggikendaraan">{{ errors.tinggikendaraan[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Julur Belakang(mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="julurbelakang"
                                min="0"
                                v-model="datakendaraan.julurbelakang"
                                @focus="handleFocus('julurbelakang')"
                              />
                              <p class="text-danger" v-if="errors.julurbelakang">{{ errors.julurbelakang[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Julur Depan (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="julurdepan"
                                min="0"
                                v-model="datakendaraan.julurdepan"
                                @focus="handleFocus('julurdepan')"
                              />
                              <p class="text-danger" v-if="errors.julurdepan">{{ errors.julurdepan[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Jenis Rumah-rumah</label>
                              <input
                                type="text"
                                class="form-control  form-control-lg"
                                name="bahan"
                                v-model="datakendaraan.bahan"
                              />
                              <p class="text-danger" v-if="errors.bahan">{{ errors.bahan[0] }}</p>
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
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="panjangbakatautangki"
                                min="0"
                                placeholder="Panjang Bak atau Tangki Muatan"
                                v-model="datakendaraan.panjangbakatautangki"
                                @focus="handleFocus('panjangbakatautangki')"
                              />
                              <p class="text-danger" v-if="errors.panjangbakatautangki">{{ errors.panjangbakatautangki[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Lebar Bak atau Tangki Muatan (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="lebarbakatautangki"
                                min="0"
                                placeholder="Lebar Bak atau Tangki Muatan"
                                v-model="datakendaraan.lebarbakatautangki"
                                @focus="handleFocus('lebarbakatautangki')"
                              />
                              <p class="text-danger" v-if="errors.lebarbakatautangki">{{ errors.lebarbakatautangki[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Tinggi Bak atau Tangki Muatan (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="tinggibakatautangki"
                                min="0"
                                placeholder="Tinggi Bak atau Tangki Muatan"
                                v-model="datakendaraan.tinggibakatautangki"
                                @focus="handleFocus('tinggibakatautangki')"
                              />
                              <p class="text-danger" v-if="errors.tinggibakatautangki">{{ errors.tinggibakatautangki[0] }}</p>
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
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jumlah_sumbu"
                                min="2"
                                placeholder="Jumlah Sumbu"
                                v-model="datakendaraan.jumlah_sumbu"
                                @focus="handleFocus('jumlah_sumbu')"
                              />
                              <p class="text-danger" v-if="errors.jumlah_sumbu">{{ errors.jumlah_sumbu[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Jarak Sumbu I-II (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu1_2"
                                min="0"
                                placeholder="Jarak Sumbu I-II (mm)"
                                v-model="datakendaraan.jaraksumbu1_2"
                                @focus="handleFocus('jaraksumbu1_2')"
                              />
                              <p class="text-danger" v-if="errors.jaraksumbu1_2">{{ errors.jaraksumbu1_2[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 2">
                            <div class="form-group">
                              <label>Jarak Sumbu II-III (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="height"
                                placeholder="Jarak Sumbu II-III (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu2_3"
                                @focus="handleFocus('jaraksumbu2_3')"
                              />
                              <p class="text-danger" v-if="errors.jaraksumbu2_3">{{ errors.jaraksumbu2_3[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 3">
                            <div class="form-group">
                              <label>Jarak Sumbu III-IV (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="length"
                                placeholder="Jarak Sumbu III-IV (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu3_4"
                                @focus="handleFocus('jaraksumbu3_4')"
                              />
                              <p class="text-danger" v-if="errors.jaraksumbu3_4">{{ errors.jaraksumbu3_4[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 4">
                            <div class="form-group">
                              <label>Jarak Sumbu IV-V (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu4_5"
                                placeholder="Jarak Sumbu IV-V (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu4_5"
                                @focus="handleFocus('jaraksumbu4_5')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 5">
                            <div class="form-group">
                              <label>Jarak Sumbu V-VI (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu5_6"
                                placeholder="Jarak Sumbu V-VI (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu5_6"
                                @focus="handleFocus('jaraksumbu5_6')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 6">
                            <div class="form-group">
                              <label>Jarak Sumbu VI-VII (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu6_7"
                                placeholder="Jarak Sumbu VI-VII (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu6_7"
                                @focus="handleFocus('jaraksumbu6_7')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 7">
                            <div class="form-group">
                              <label>Jarak Sumbu VII-VIII (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu7_8"
                                placeholder="Jarak Sumbu VII-VIII (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu7_8"
                                @focus="handleFocus('jaraksumbu7_8')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 8">
                            <div class="form-group">
                              <label>Jarak Sumbu VIII-IX (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu8_9"
                                placeholder="Jarak Sumbu VIII-IX (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu8_9"
                                @focus="handleFocus('jaraksumbu8_9')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 9">
                            <div class="form-group">
                              <label>Jarak Sumbu IX-X (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu9_10"
                                placeholder="Jarak Sumbu IX-X (mm)"
                                min="0"
                                v-model="datakendaraan.jaraksumbu9_10"
                                @focus="handleFocus('jaraksumbu9_10')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 10">
                            <div class="form-group">
                              <label>Jarak Sumbu X-XI (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu10_11"
                                min="0"
                                placeholder="Jarak Sumbu X-XI (mm)"
                                v-model="datakendaraan.jaraksumbu10_11"
                                @focus="handleFocus('jaraksumbu10_11')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3" v-if="datakendaraan.jumlah_sumbu > 11">
                            <div class="form-group">
                              <label>Jarak Sumbu XI-XII (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jaraksumbu11_12"
                                min="0"
                                placeholder="Jarak Sumbu XI-XII (mm)"
                                v-model="datakendaraan.jaraksumbu11_12"
                                @focus="handleFocus('jaraksumbu11_12')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Wheelbase (mm)</label>
                              <input
                                type="number"
                                name="a"
                                class="form-control  form-control-lg"
                                placeholder="Wheelbase (mm)"
                                v-model="datakendaraan.a"
                                @focus="handleFocus('a')"
                              />
                              <p class="text-danger" v-if="errors.a">{{ errors.a[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>P (mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                placeholder="P (mm)"
                                name="p"
                                min="0"
                                v-model="datakendaraan.p"
                                @focus="handleFocus('p')"
                              />
                              <p class="text-danger" v-if="errors.p">{{ errors.p[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Q(mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                placeholder="Q (mm)"
                                name="q"
                                min="0"
                                v-model="datakendaraan.q"
                                @focus="handleFocus('q')"
                              />
                              <p class="text-danger" v-if="errors.q">{{ errors.q[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>R(mm)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                placeholder="R (mm)"
                                name="r"
                                min="0"
                                v-model="datakendaraan.r"
                                @focus="handleFocus('r')"
                              />
                              <p class="text-danger" v-if="errors.r">{{ errors.r[0] }}</p>
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
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu1"
                                min="0"
                                v-model="datakendaraan.beratsumbu1"
                                @change = totalBeratSumbu();setJBI()
                                @focus="handleFocus('beratsumbu1')"
                              />
                              <p class="text-danger" v-if="errors.beratsumbu1">{{ errors.beratsumbu1[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 2(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu2"
                                min="0"
                                v-model="datakendaraan.beratsumbu2"
                                @change = totalBeratSumbu();setJBI()
                                @focus="handleFocus('beratsumbu2')"
                              />
                              <p class="text-danger" v-if="errors.beratsumbu2">{{ errors.beratsumbu2[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 3(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu3"
                                min="0"
                                v-model="datakendaraan.beratsumbu3"
                                @change = totalBeratSumbu();setJBI()
                                @focus="handleFocus('beratsumbu3')"
                              />
                              <p class="text-danger" v-if="errors.beratsumbu3">{{ errors.beratsumbu3[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-2">
                            <div class="form-group">
                              <label>Berat Sumbu 4(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu4"
                                min="0"
                                v-model="datakendaraan.beratsumbu4"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu4')"
                              />
                              <p class="text-danger" v-if="errors.beratsumbu4">{{ errors.beratsumbu4[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 4">
                            <div class="form-group">
                              <label>Berat Sumbu 5(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu5"
                                min="0"
                                v-model="datakendaraan.beratsumbu5"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu5')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 5">
                            <div class="form-group">
                              <label>Berat Sumbu 6(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu6"
                                min="0"
                                v-model="datakendaraan.beratsumbu6"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu6')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 6">
                            <div class="form-group">
                              <label>Berat Sumbu 7(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu7"
                                min="0"
                                v-model="datakendaraan.beratsumbu7"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu7')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 7">
                            <div class="form-group">
                              <label>Berat Sumbu 8(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu8"
                                min="0"
                                v-model="datakendaraan.beratsumbu8"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu8')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 8">
                            <div class="form-group">
                              <label>Berat Sumbu 9(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu9"
                                min="0"
                                v-model="datakendaraan.beratsumbu9"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu9')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 9">
                            <div class="form-group">
                              <label>Berat Sumbu 10(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu10"
                                min="0"
                                v-model="datakendaraan.beratsumbu10"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu10')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 10">
                            <div class="form-group">
                              <label>Berat Sumbu 11(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu11"
                                min="0"
                                v-model="datakendaraan.beratsumbu11"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu11')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-2" v-if="datakendaraan.jumlah_sumbu > 11">
                            <div class="form-group">
                              <label>Berat Sumbu 12(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratsumbu12"
                                min="0"
                                v-model="datakendaraan.beratsumbu12"
                                @change = "totalBeratSumbu();setJBI()"
                                @focus="handleFocus('beratsumbu12')"
                              />
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Total Berat Sumbu(Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="beratkosong"
                                v-model="datakendaraan.beratkosong"
                                @change="setJBI()"
                                @focus="handleFocus('beratkosong')"
                              />
                              <p class="text-danger" v-if="errors.beratsumbu4">{{ errors.beratsumbu4[0] }}</p>
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
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="dayaangkutorang"
                                min="0"
                                placeholder="Daya Angkut Orang (mm)"
                                v-model="datakendaraan.dayaangkutorang"
                                @change="setJBI()"
                                @focus="handleFocus('dayaangkutorang')"
                              />
                              <p class="text-danger" v-if="errors.dayaangkutorang">{{ errors.dayaangkutorang[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Daya Angkut Barang (Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="dayaangkutbarang"
                                min="0"
                                placeholder="Daya Angkut Barang"
                                v-model="datakendaraan.dayaangkutbarang"
                                @focus="handleFocus('dayaangkutbarang')"
                                @change="setJBI()"
                              />
                              <p class="text-danger" v-if="errors.dayaangkutbarang">{{ errors.dayaangkutbarang[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBB (Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jbb"
                                min="0"
                                placeholder="JBB"
                                v-model="datakendaraan.jbb"
                                @focus="handleFocus('jbb')"
                              />
                              <p class="text-danger" v-if="errors.jbb">{{ errors.jbb[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBKB (Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jbkb"
                                min="0"
                                placeholder="JBKB (Kg)"
                                v-model="datakendaraan.jbkb"
                                @focus="handleFocus('jbkb')"
                              />
                              <p class="text-danger" v-if="errors.jbkb">{{ errors.jbkb[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBI (Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jbi"
                                min="0"
                                placeholder="JBI (Kg)"
                                v-model="datakendaraan.jbi"
                                @focus="handleFocus('jbi')"
                              />
                              <p class="text-danger" v-if="errors.jbi">{{ errors.jbi[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>JBKI (Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="jbki"
                                min="0"
                                placeholder="JBKI (Kg)"
                                v-model="datakendaraan.jbki"
                                @focus="handleFocus('jbki')"
                              />
                              <p class="text-danger" v-if="errors.jbki">{{ errors.jbki[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>MST (Kg)</label>
                              <input
                                type="number"
                                class="form-control  form-control-lg"
                                name="mst"
                                min="0"
                                placeholder="MST"
                                v-model="datakendaraan.mst"
                                @focus="handleFocus('mst')"
                              />
                              <p class="text-danger" v-if="errors.mst">{{ errors.mst[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Kelas Jalan Terendah</label>
                              <vSelect label="kelasjalan_name" ref="kelasjalanterendah" :options="kelasjalans"
                                v-model="datakendaraan.kelasjalanterendah" @input="setKelasJalan"></vSelect>
                              <p class="text-danger" v-if="errors.kelasjalanterendah">{{ errors.kelasjalanterendah[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Konfigurasi Sumbu Roda</label>
                              <input
                                type="text"
                                class="form-control  form-control-lg"
                                name="konfigurasisumburoda"
                                min="0"
                                placeholder="Konfigurasi Sumbu Roda"
                                v-model="datakendaraan.konfigurasisumburoda"
                                @focus="handleFocus('konfigurasisumburoda')"
                              />
                              <p class="text-danger" v-if="errors.konfigurasisumburoda">{{ errors.konfigurasisumburoda[0] }}</p>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <label>Ukuran Ban</label>
                              <input
                                type="text"
                                class="form-control  form-control-lg"
                                name="ukuranban"
                                placeholder="Ukuran Ban"
                                v-model="datakendaraan.ukuranban"
                              />
                              <p class="text-danger" v-if="errors.ukuranban">{{ errors.ukuranban[0] }}</p>
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
                              <input
                                type="text"
                                class="form-control  form-control-lg"
                                placeholder="Catatan Rubah Bentuk"
                                name="catatanrubahbentuk"
                                v-model="datakendaraan.catatanrubahbentuk"
                              />
                              <p class="text-danger" v-if="errors.catatanrubahbentuk">{{ errors.catatanrubahbentuk[0] }}</p>
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
              <div class="d-flex justify-content-between border-top pt-10">
                <div class="mr-2">
                  <button
                    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-prev"
                  >
                    Previous
                  </button>

                </div>
                <div>                  
                  <button
                    v-on:click="submit"
                    class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                    data-wizard-type="action-next"
                  >
                    Next Step
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
    <b-modal id="modalVTA" ref="modalVTA" class="modal" title="Cek Data" @ok="resetCheck" @hidden="resetCheck">
      <div class="form-group">
        <label for>No SRUT</label>
        <input type="text" class="form-control" v-model="datavta.nosertifikatreg" disabled/>
      </div>
      <div class="form-group">
        <label for>No SK Drijen</label>
        <input type="text" class="form-control" v-model="datavta.noskdrijen" disabled/>
      </div>
      <div class="form-group">
        <label for>Merek</label>
        <input type="text" class="form-control" v-model="datavta.merek" disabled/>
      </div>
      <div class="form-group">
        <label for>Tipe Varian</label>
        <input type="text" class="form-control" v-model="datavta.tipe" disabled/>
      </div>
      <div class="form-group">
        <label for>Jenis</label>
        <input type="text" class="form-control" v-model="datavta.jenis" disabled/>
      </div>
      <div class="form-group">
        <label for>Peruntukan</label>
        <input type="text" class="form-control" v-model="datavta.peruntukan" disabled/>
      </div>
      <div class="form-group">
        <label for>No Rangka</label>
        <input type="text" class="form-control" v-model="datavta.norangka" disabled/>
      </div>
      <div class="form-group">
        <label for>No Mesin</label>
        <input type="text" class="form-control" v-model="datavta.nomesin" disabled/>
      </div>
      <div class="form-group">
        <label for>Nama Perusahaan</label>
        <input type="text" class="form-control" v-model="datavta.namaperusahaan" disabled/>
      </div>
      <div class="form-group">
        <label for>Alamat Perusahaan</label>
        <input type="text" class="form-control" v-model="datavta.alamatperusahaan" disabled/>
      </div>
      <div class="form-group">
        <label for>Penanggung Jawab</label>
        <input type="text" class="form-control" v-model="datavta.penanggungjawab" disabled/>
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
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  data() {
    return {
      disabled1: 1,
      disabled2: 1,
    };
  },
  name: "Wizard-1",
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Datakendaraan" },
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
    if (this.$route.name == 'datakendaraan.edit') {
      this.editDatakendaraan(this.$route.params.id);
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.datakendaraan.tglsertifikatreg = today;

  },
  methods: {
    ...mapMutations("datakendaraan", ["CLEAR_FORM"]),
    ...mapActions("datakendaraan", [ "submitDatakendaraan","getMereks","getTipes","getVarians","getJenis","getSubJenis","getJeniskendaraan","getFuels","getKelasJalans","getKodewilayahs","getKotas","getKecamatans","getKelurahans","getVTA"]),
    submit() {
        this.submitDatakendaraan().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push({ name: "datakendaraan.data" });
        });
    },totalBeratSumbu(){
      this.datakendaraan.beratkosong = parseInt(this.datakendaraan.beratsumbu1)+parseInt(this.datakendaraan.beratsumbu2)+parseInt(this.datakendaraan.beratsumbu3)+parseInt(this.datakendaraan.beratsumbu4);
      this.setJBI();
    },
    setJBI(){
      this.datakendaraan.jbi = parseInt(this.datakendaraan.beratkosong)+parseInt(this.datakendaraan.dayaangkutbarang)+(parseInt(this.datakendaraan.dayaangkutorang)*60)
    },
    caridata(){
      this.getIdentitaskendaraanNouji().then(() => {
          if(this.carinouji == 1){
            Swal.fire({
                    icon: 'success',
                    title: 'Data ditemukan',
                    showConfirmButton: false,
                    timer: 1500
                  })
          }else{
            Swal.fire({
                    icon: 'warning',
                    title: 'Data Tidak ditemukan',
                    showConfirmButton: false,
                    timer: 1500
                  })
          }
          
          if(this.datakendaraan.tglsertifikatreg === null || this.datakendaraan.tglsertifikatreg == ''){
            var CurrentDate = moment().format("YYYY-MM-DD");
            this.datakendaraan.tglsertifikatreg=CurrentDate;
          }
      });
    },
    setKota(value){
      this.datakendaraan.kota = value.nama
      this.getKecamatans(value.nama);
      this.disabled1 = 0;
    },
    setKecamatan(value){
      this.datakendaraan.kecamatan = value.nama
      this.getKelurahans(value.nama);
      this.disabled2 = 0;
    },
    setKelurahan(value){
      this.datakendaraan.kelurahan = value.nama
    },
    setType(value) {
      this.datakendaraan.merek = value.vehicle_brand_name;
      this.datakendaraan.idmerek = value.vehicle_brand_id;
      this.getTipes(value.vehicle_brand_id);
    },
    setVarian(value) {
      this.datakendaraan.tipe = value.vehicle_varian_type_name;
      this.datakendaraan.idtipe = value.vehicle_varian_type_id;
      this.getVarians(value.vehicle_varian_type_id);
    },
    setVarianid(value) {
      this.datakendaraan.varian = value.vehicle_varian_name;
      this.datakendaraan.idvarian = value.vehicle_varian_id;
    },
    setSubVehicle(value) {
      this.datakendaraan.jenis = value.vehicle_type_name;
      this.datakendaraan.idjenis = value.vehicle_type_id;
      this.getSubJenis(value.vehicle_type_id);
    },
    setSubVehicleid(value) {
      this.datakendaraan.subjenis = value.vehicle_sub_name;
      this.datakendaraan.idsubjenis = value.vehicle_sub_id;
    },
    setArea(value) {
      this.datakendaraan.wilayah = value.area_name;
      this.datakendaraan.kodewilayah = value.area_code;
      this.datakendaraan.idkodewilayah = value.area_id;
    },
    setFuel(value) {
      this.datakendaraan.bahanbakar = value.fuel_name;
      this.datakendaraan.idbahanbakar = value.fuel_id;
    },
    setKelasJalan(value) {
      this.datakendaraan.kelasjalanterendah= value.kelasjalan_name;
      this.datakendaraan.idkelasjalanterendah = value.kelasjalan_id;
    },
    setAreaFrom(value) {
      this.datakendaraan.wilayahasal = value.area_name;
      this.datakendaraan.kodewilayahasal = value.area_code;
      this.datakendaraan.idkodewilayahasal = value.area_id;
    },
    customFormatter(today) { 
      return today;
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
              title: 'Berhasil Data',
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
    handleFocus(field) {
        if (this.datakendaraan[field] === 0 || this.datakendaraan[field] === "0") {
            this.datakendaraan[field] = '';
        }
    },
    customFormatter(today) {
      return today;
    },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("datakendaraan", {
      datakendaraan: state => state.datakendaraan,
      carinouji: state => state.carinouji,
      datavta: state => state.datavta,
    }),
    ...mapState("datakendaraan", {
      kodewilayahs: state => state.kodewilayahs
    }),
    ...mapState("datakendaraan", {
      mereks: state => state.mereks,tipes: state => state.tipes,varians: state => state.varians,jenis: state => state.jenis,subjenis: state => state.subjenis,jeniskendaraan: state => state.jeniskendaraan,fuels: state => state.fuels,kelasjalans: state => state.kelasjalans,
      kotas: state => state.kotas,kecamatans: state => state.kecamatans,kelurahans: state => state.kelurahans,
      responeBlue:state => state.responeBlue,
    })
  },
  components: {
    vSelect
  },
};
</script>
