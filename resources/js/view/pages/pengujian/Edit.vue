<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav-->
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
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
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-position"></i>
                <h3 class="wizard-title">3. Pendaftaran</h3>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard Identitas-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12 col-xxl-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label> No Uji</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="No Uji"
                        @change="caridata()"
                        v-model="identitaskendaraan.nouji"
                      />
                      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>No Kendaraan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder=" No Kendaraan"
                        v-model="identitaskendaraan.noregistrasikendaraan"
                      />
                      <p class="text-danger" v-if="errors.noregistrasikendaraan">{{ errors.noregistrasikendaraan[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label> Nama</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder=" nama"
                        v-model="identitaskendaraan.nama"
                      />
                      <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label> No Identitas</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder=" No Identitas"
                        v-model="identitaskendaraan.noidentitaspemilik"
                      />
                      <p class="text-danger" v-if="errors.noidentitaspemilik">{{ errors.noidentitaspemilik[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label> Alamat</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder=" Alamat"
                        v-model="identitaskendaraan.alamat"
                      />
                      <p class="text-danger" v-if="errors.alamat">{{ errors.alamat[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>No SRUT</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder=" No SRUT"
                        v-model="identitaskendaraan.nosertifikatreg"
                      />
                      <p class="text-danger" v-if="errors.nosertifikatreg">{{ errors.nosertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tgl SRUT</label>
                      <datepicker input-class="form-control" v-model="identitaskendaraan.tglsertifikatreg" :value="identitaskendaraan.tglsertifikatreg" :language="id"></datepicker>
                      <p class="text-danger" v-if="errors.tglsertifikatreg">{{ errors.tglsertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tahun Pembuatan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Tahun Pembuatan"
                        v-model="identitaskendaraan.thpembuatan"
                      />
                      <p class="text-danger" v-if="errors.thpembuatan">{{ errors.thpembuatan[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Merek</label>
                          <select class="form-control" style="width: 100%;" v-model="identitaskendaraan.merek">
                            <option v-for="merek in mereks" :key="merek.id" :value="merek.merek">{{merek.merek}}</option>
                          </select>
                        <p class="text-danger" v-if="errors.merek">{{ errors.merek[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tipe</label>
                      <select class="form-control" style="width: 100%;" v-model="identitaskendaraan.tipe">
                          <option v-for="tipe in tipes" :key="tipe.id" :value="tipe.tipe">{{tipe.tipe}}</option>
                        </select>
                      <p class="text-danger" v-if="errors.tipe">{{ errors.tipe[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Jenis</label>
                      <select class="form-control" style="width: 100%;" v-model="identitaskendaraan.jenis">
                        <option v-for="jenis in jenis" :key="jenis.id" :value="jenis.jenis">{{jenis.jenis}}</option>
                      </select>
                    <p class="text-danger" v-if="errors.jenis">{{ errors.jenis[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Isi Silinder</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder=" Isi Silinder"
                        v-model="identitaskendaraan.isisilinder"
                      />
                      <p class="text-danger" v-if="errors.isisilinder">{{ errors.isisilinder[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Daya Motor Penggerak</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder=" Daya Motor Penggerak"
                        v-model="identitaskendaraan.dayamotorpenggerak"
                      />
                      <p class="text-danger" v-if="errors.dayamotorpenggerak">{{ errors.dayamotorpenggerak[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Nomer Mesin</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Nomer Mesin"
                        v-model="identitaskendaraan.nomesin"
                      />
                      <p class="text-danger" v-if="errors.nomesin">{{ errors.nomesin[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Nomer Rangka</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Nomer Rangka"
                        v-model="identitaskendaraan.norangka"
                      />
                      <p class="text-danger" v-if="errors.norangka">{{ errors.norangka[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Bahan Bakar</label>
                      <select class="form-control" v-model="identitaskendaraan.bahanbakar">
                       <option selected="selected">Bensin</option>
                        <option>Solar</option>
                        <option>Gas</option>
                      </select>
                    <p class="text-danger" v-if="errors.bahanbakar">{{ errors.bahanbakar[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Peruntukan</label>
                      <select class="form-control" v-model="identitaskendaraan.peruntukan">
                       <option value="UMUM" selected="selected">UMUM</option>
                       <option value="TIDAK UMUM">TIDAK UMUM</option>
                       <option value="PEMERINTAH">PEMERINTAH</option>
                      </select>
                    <p class="text-danger" v-if="errors.peruntukan">{{ errors.peruntukan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Daerah</label>
                      <select class="form-control" style="width: 100%;" v-model="identitaskendaraan.kodewilayah">
                        <option v-for="kodewilayah in kodewilayahs" :key="kodewilayah.kodewilayah" :value="kodewilayah.kodewilayah">{{kodewilayah.area_name}}</option>
                      </select>
                    <p class="text-danger" v-if="errors.kodewilayah">{{ errors.kodewilayah[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Daerah</label>
                      <select class="form-control" style="width: 100%;" v-model="identitaskendaraan.kodewilayahasal">
                        <option v-for="kodewilayah in kodewilayahs" :key="kodewilayah.kodewilayah" :value="kodewilayah.kodewilayah">{{kodewilayah.area_name}}</option>
                      </select>
                    <p class="text-danger" v-if="errors.kodewilayah">{{ errors.kodewilayah[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                        <br>
                        <button class="btn btn-primary btn-xl" @click.prevent="submitidentitas">
                          <i class="fa fa-save"></i> Save
                        </button>
                    </div>
                  </div>
                </div>

              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Datakendaraan 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>JBB (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="JBB"
                        v-model="datakendaraan.jbb"
                      />
                      <p class="text-danger" v-if="errors.jbb">{{ errors.jbb[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>JBKB (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="JBKB (Kg)"
                        v-model="datakendaraan.jbkb"
                      />
                      <p class="text-danger" v-if="errors.jbkb">{{ errors.jbkb[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>JBI (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="JBI (Kg)"
                        v-model="datakendaraan.jbi"
                      />
                      <p class="text-danger" v-if="errors.jbi">{{ errors.jbi[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>JBKI (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="JBKI (Kg)"
                        v-model="datakendaraan.jbKi"
                      />
                      <p class="text-danger" v-if="errors.jbki">{{ errors.jbki[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>MST (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="MST"
                        v-model="datakendaraan.mst"
                      />
                      <p class="text-danger" v-if="errors.mst">{{ errors.mst[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Kelas Jalan Terendah</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Kelas Jalan Ternendah"
                        v-model="datakendaraan.kelasjalanterendah"
                      />
                      <p class="text-danger" v-if="errors.kelasjalanterendah">{{ errors.kelasjalanterendah[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Konfigurasi Sumbu Roda</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Konfigurasi Sumbu Roda"
                        v-model="datakendaraan.konfigurasisumburoda"
                      />
                      <p class="text-danger" v-if="errors.konfigurasisumburoda">{{ errors.konfigurasisumburoda[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Ukuran Ban</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Ukuran Ban"
                        v-model="datakendaraan.ukuranban"
                      />
                      <p class="text-danger" v-if="errors.ukuranban">{{ errors.ukuranban[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Jarak Sumbu I-II (mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Jarak Sumbu I-II (mm)"
                        v-model="datakendaraan.jaraksumbu1_2"
                      />
                      <p class="text-danger" v-if="errors.jaraksumbu1_2">{{ errors.jaraksumbu1_2[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Jarak Sumbu II-III (mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Jarak Sumbu II-III (mm)"
                        v-model="datakendaraan.jaraksumbu2_3"
                      />
                      <p class="text-danger" v-if="errors.jaraksumbu2_3">{{ errors.jaraksumbu2_3[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Jarak Sumbu III-IV (mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Jarak Sumbu III-IV (mm)"
                        v-model="datakendaraan.jaraksumbu3_4"
                      />
                      <p class="text-danger" v-if="errors.jaraksumbu3_4">{{ errors.jaraksumbu3_4[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>P (mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="P (mm)"
                        v-model="datakendaraan.p"
                      />
                      <p class="text-danger" v-if="errors.p">{{ errors.p[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Q(mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Q (mm)"
                        v-model="datakendaraan.p"
                      />
                      <p class="text-danger" v-if="errors.q">{{ errors.q[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Daya Angkut Orang (orang)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Daya Angkut Orang (mm)"
                        v-model="datakendaraan.dayaangkutorang"
                      />
                      <p class="text-danger" v-if="errors.dayaangkutorang">{{ errors.dayaangkutorang[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Daya Angkut Barang (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Daya Angkut Barang"
                        v-model="datakendaraan.dayaangkutbarang"
                      />
                      <p class="text-danger" v-if="errors.dayaangkutbarang">{{ errors.dayaangkutbarang[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Panjang Kendaraan (mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Panjang Kendaraan"
                        v-model="datakendaraan.panjangkendaraan"
                      />
                      <p class="text-danger" v-if="errors.panjangkendaraan">{{ errors.panjangkendaraan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Lebar Kendaraan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Lebar Kendaraan"
                        v-model="datakendaraan.lebarkendaraan"
                      />
                      <p class="text-danger" v-if="errors.lebarkendaraan">{{ errors.lebarkendaraan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tinggi Kendaraan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Tinggi Kendaraan"
                         v-model="datakendaraan.tinggikendaraan"
                      />
                      <p class="text-danger" v-if="errors.tinggikendaraan">{{ errors.tinggikendaraan[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Panjang Bak atau Tangki Muatan (mm)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Panjang Bak atau Tangki Muatan"
                        v-model="datakendaraan.panjangbakatautangki"
                      />
                      <p class="text-danger" v-if="errors.panjangbakatautangki">{{ errors.panjangbakatautangki[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Lebar Bak atau Tangki Muatan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Lebar Bak atau Tangki Muatan"
                        v-model="datakendaraan.lebarbakatautangki"
                      />
                      <p class="text-danger" v-if="errors.lebarbakatautangki">{{ errors.lebarbakatautangki[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tinggi Bak atau Tangki Muatan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Tinggi Bak atau Tangki Muatan"
                        v-model="datakendaraan.tinggibakatautangki"
                      />
                      <p class="text-danger" v-if="errors.tinggibakatautangki">{{ errors.tinggibakatautangki[0] }}</p>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="form-group">
                        <button class="btn btn-primary btn-sm" @click.prevent="submitdatakendaraan">
                          <i class="fa fa-save"></i> Save
                        </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Pendaftaran 3-->
              <div class="pb-5" data-wizard-type="step-content">
                
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tanggal Pendaftaran</label>
                      <datepicker input-class="form-control" v-model="pendaftaran.tglpendaftaran" :value="pendaftaran.tglpendaftaran" :language="id"></datepicker>
                    <p class="text-danger" v-if="errors.tglpendaftaran">{{ errors.tglpendaftaran[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tanggal Transaksi</label>
                      <datepicker input-class="form-control" v-model="pendaftaran.tglbayar" :value="pendaftaran.tglbayar" :language="id"></datepicker>
                      <p class="text-danger" v-if="errors.tglbayar">{{ errors.tglbayar[0] }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Jenis Pendaftaran</label>
                      <select class="form-control" v-model="pendaftaran.kodepenerbitans_id ">
                       <option selected="selected" value="1">Daftar Baru</option>
                          <option value="2">Perpanjangan</option>
                          <option value="3">Rusak</option>
                          <option value="4">Hilang</option>
                          <option value="5">Numpang Uji Masuk</option>
                          <option value="9">Numpang Uji Keluar</option>
                          <option value="6">Mutasi Masuk</option>
                          <option value="10">Mutasi Keluar</option>
                          <option value="7">Uji Ulang</option>
                        </select>
                      <p class="text-danger" v-if="errors.kodepenerbitans_id">{{ errors.kodepenerbitans_id[0] }}</p>
                    </div>
                  </div>
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
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
@import "@/assets/sass/components/_image-input.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import Image from "@/assets/js/components/image-input";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import datepicker from 'vuejs-datepicker';
import {en, id} from 'vuejs-datepicker/dist/locale';

export default {
  data() {
    return {
      id: id
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
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
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
    this.getJenis();
    this.getKodewilayahs();
    this.caridata();
    if(this.$route.name == 'pengujian.edit'){
      this.editPendaftaran(this.$route.params.id);
    }
  },
  methods: {
    ...mapMutations("pendaftaran", ["CLEAR_FORM"]),
    ...mapActions("pendaftaran",["updateIdentitaskendaraan","getKodewilayahs","getMereks","getTipes","getJenis","getKodewilayahs","getIdentitaskendaraanNouji","editPendaftaran","updatePendaftaran","updateDatakendaraan"]),
    submitidentitas() {
    console.log(this.$route.params.id);
      this.updateIdentitaskendaraan(this.$route.params.id).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Saved',
          showConfirmButton: false,
          timer: 1500
        })
      });
    },
    submitdatakendaraan(){
      this.updateDatakendaraan(this.$route.params.id).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Saved',
          showConfirmButton: false,
          timer: 1500
        })
      });
    },
    submit(){
        this.updatePendaftaran(this.$route.params.id).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Saved',
          showConfirmButton: false,
          timer: 1500
        })
         this.$router.push({ name: "pendaftaran.data" });
      });
    },
    submitUpdate() {
      
    },
    caridata(){
      this.getIdentitaskendaraanNouji();
    },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("pendaftaran", {
      identitaskendaraan: state => state.identitaskendaraan,
      datakendaraan: state => state.datakendaraan,
      pendaftaran: state => state.pendaftaran
    }),
    ...mapState("pendaftaran", {
      kodewilayahs: state => state.kodewilayahs
    }),
    ...mapState("pendaftaran", {
      mereks: state => state.mereks,tipes: state => state.tipes,jenis: state => state.jenis
    })
  },
  components: {
    datepicker
  },
};
</script>
