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
                <h3 class="wizard-title">1. Pendaftaran</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-user"></i>
                <h3 class="wizard-title">2. Identitas</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-lorry"></i>
                <h3 class="wizard-title">3. Data Kendaraan</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-website"></i>
                <h3 class="wizard-title">4. Pengujian</h3>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard -->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-sm-12 col-xsm-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1 Pendaftaran-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tanggal Uji</label>
                      <datepicker input-class="form-control" v-model="datapengujian.tgluji" :value="datapengujian.tgluji" :language="id"></datepicker>
                    <p class="text-danger" v-if="errors.tgluji">{{ errors.tgluji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tanggal Masa Belaku Uji</label>
                      <datepicker input-class="form-control" v-model="datapengujian.masaberlakuuji" :value="datapengujian.masaberlakuuji" :language="id"></datepicker>
                    <p class="text-danger" v-if="errors.masaberlakuuji">{{ errors.masaberlakuuji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jenis Penerbitan</label>
                      <select class="form-control" v-model="datapengujian.statuspenerbitan" disabeld>
                       <option selected="selected" value="1">Daftar Baru</option>
                          <option value="2">Perpanjangan</option>
                          <option value="3">Rusak</option>
                          <option value="4">Hilang</option>
                          <option value="5">Numpang Uji Masuk</option>
                          <option value="6">Mutasi Masuk</option>
                        </select>
                      <p class="text-danger" v-if="errors.statuspenerbitan">{{ errors.statuspenerbitan[0] }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Identitas 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label> No Uji</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="No Uji"
                        v-model="datapengujian.nouji"
                      />
                      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>No Kendaraan</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" No Kendaraan"
                        v-model="datapengujian.noregistrasikendaraan"
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
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" nama"
                        v-model="datapengujian.nama"
                      />
                      <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> No Identitas</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" No Identitas"
                        v-model="datapengujian.noidentitaspemilik"
                      />
                      <p class="text-danger" v-if="errors.noidentitaspemilik">{{ errors.noidentitaspemilik[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label> Alamat</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" Alamat"
                        v-model="datapengujian.alamat"
                      />
                      <p class="text-danger" v-if="errors.alamat">{{ errors.alamat[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kabupaten</label>
                      <vSelect label="nama" :options="kotas"  v-model="datapengujian.kota" @input="setKota"></vSelect>
                      <p class="text-danger" v-if="errors.kota">{{ errors.kota[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kecamatan</label>
                      <vSelect label="nama" :options="kecamatans"  v-model="datapengujian.kecamatan" @input="setKecamatan" :disabled="disabled1 == 1"></vSelect>
                      <p class="text-danger" v-if="errors.kecamatan">{{ errors.kecamatan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Kelurahan</label>
                      <vSelect label="nama" :options="kelurahans"  v-model="datapengujian.kelurahan" @input="setKelurahan" :disabled="disabled2 == 1"></vSelect>
                      <p class="text-danger" v-if="errors.Kelurahan">{{ errors.Kelurahan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>No SRUT</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" No SRUT"
                        v-model="datapengujian.nosertifikatreg"
                      />
                      <p class="text-danger" v-if="errors.nosertifikatreg">{{ errors.nosertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tgl SRUT</label>
                      <datepicker input-class="form-control" v-model="datapengujian.tglsertifikatreg" :value="datapengujian.tglsertifikatreg" :language="id"></datepicker>
                      <p class="text-danger" v-if="errors.tglsertifikatreg">{{ errors.tglsertifikatreg[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tahun Pembuatan</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Tahun Pembuatan"
                        v-model="datapengujian.thpembuatan"
                      />
                      <p class="text-danger" v-if="errors.thpembuatan">{{ errors.thpembuatan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Merek</label>
                          <select class="form-control" style="width: 100%;" v-model="datapengujian.merek">
                            <option v-for="merek in mereks" :key="merek.id" :value="merek.merek">{{merek.merek}}</option>
                          </select>
                        <p class="text-danger" v-if="errors.merek">{{ errors.merek[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tipe</label>
                      <select class="form-control" style="width: 100%;" v-model="datapengujian.tipe">
                          <option v-for="tipe in tipes" :key="tipe.id" :value="tipe.tipe">{{tipe.tipe}}</option>
                        </select>
                      <p class="text-danger" v-if="errors.tipe">{{ errors.tipe[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jenis</label>
                      <select class="form-control" style="width: 100%;" v-model="datapengujian.jenis">
                          <option>Mobil Penumpang Sedan</option>
                          <option>Mobil Penumpang Bukan Sedan</option>
                          <option>Mobil Bus Kecil</option>
                          <option>Mobil Bus Sedang</option>
                          <option>Mobil Bus Besar</option>
                          <option>Mobil Bus Maxi</option>
                          <option>Mobil Bus Gandeng</option>
                          <option>Mobil Bus Tempel</option>
                          <option>Mobil Bus Tingkat</option>
                          <option>Mobil Barang Bak Terbuka</option>
                          <option>Mobil Barang Bak Tertutup</option>
                          <option>Mobil Tangki</option>
                          <option>Mobil Penarik</option>
                          <option>Kereta Gandeng Bak Terbuka</option>
                          <option>Kereta Gandeng Bak Tertutup</option>
                          <option>Kereta Gandeng Tangki</option>
                          <option>Kereta Tempelan Bak Terbuka</option>
                          <option>Kereta Tempelan Bak Tertutup</option>
                          <option>Kereta Tempelan Tangki</option>
                          <option>Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Terbuka</option>
                          <option>Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Tertutup</option>
                          <option>Kendaraan Bermotor Roda Tiga Angkutan Penumpang</option>
                          <option>Kendaraan Bermotor Roda Tiga Angkutan Barang Tangki</option>
                          <option>Kendaraan Khusus</option>
                      </select>
                    <p class="text-danger" v-if="errors.jenis">{{ errors.jenis[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Model</label>
                      <vSelect label="jenis" :options="jeniskendaraan"  v-model="datapengujian.model"></vSelect>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Isi Silinder</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" Isi Silinder"
                        v-model="datapengujian.isisilinder"
                      />
                      <p class="text-danger" v-if="errors.isisilinder">{{ errors.isisilinder[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Daya Motor Penggerak</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder=" Daya Motor Penggerak"
                        v-model="datapengujian.dayamotorpenggerak"
                      />
                      <p class="text-danger" v-if="errors.dayamotorpenggerak">{{ errors.dayamotorpenggerak[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Nomer Mesin</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Nomer Mesin"
                        style="text-transform: uppercase;"
                        v-model="datapengujian.nomesin"
                      />
                      <p class="text-danger" v-if="errors.nomesin">{{ errors.nomesin[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Nomer Rangka</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Nomer Rangka"
                        style="text-transform: uppercase;"
                        v-model="datapengujian.norangka"
                      />
                      <p class="text-danger" v-if="errors.norangka">{{ errors.norangka[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Bahan Bakar</label>
                      <select class="form-control" v-model="datapengujian.bahanbakar">
                       <option selected="selected">BENSIN</option>
                        <option>SOLAR</option>
                        <option>GAS</option>
                      </select>
                    <p class="text-danger" v-if="errors.bahanbakar">{{ errors.bahanbakar[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Penggunaan</label>
                      <select class="form-control" v-model="datapengujian.peruntukan">
                       <option value="UMUM" selected="selected">UMUM</option>
                       <option value="TIDAK UMUM">TIDAK UMUM</option>
                       <option value="PEMERINTAH">PEMERINTAH</option>
                      </select>
                    <p class="text-danger" v-if="errors.peruntukan">{{ errors.peruntukan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Warna</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Warna"
                        style="text-transform: uppercase;"
                        v-model="datapengujian.warna"
                      />
                      <p class="text-danger" v-if="errors.warna">{{ errors.warna[0] }}</p>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Daerah Tujuan</label>
                      <select class="form-control" style="width: 100%;" v-model="datapengujian.kodewilayah">
                        <option v-for="kodewilayah in kodewilayahs" :key="kodewilayah.kodewilayah" :value="kodewilayah.kodewilayah">{{kodewilayah.area_name}}</option>
                      </select>
                    <p class="text-danger" v-if="errors.kodewilayah">{{ errors.kodewilayah[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Daerah Asal</label>
                      <select class="form-control" style="width: 100%;" v-model="datapengujian.kodewilayahasal">
                        <option v-for="kodewilayah in kodewilayahs" :key="kodewilayah.kodewilayah" :value="kodewilayah.kodewilayah">{{kodewilayah.area_name}}</option>
                      </select>
                    <p class="text-danger" v-if="errors.kodewilayah">{{ errors.kodewilayah[0] }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Datakendaraan 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>JBB (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="JBB"
                        v-model="datapengujian.jbb"
                      />
                      <p class="text-danger" v-if="errors.jbb">{{ errors.jbb[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>JBKB (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="JBKB (Kg)"
                        v-model="datapengujian.jbkb"
                      />
                      <p class="text-danger" v-if="errors.jbkb">{{ errors.jbkb[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>JBI (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="JBI (Kg)"
                        v-model="datapengujian.jbi"
                      />
                      <p class="text-danger" v-if="errors.jbi">{{ errors.jbi[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>JBKI (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="JBKI (Kg)"
                        v-model="datapengujian.jbki"
                      />
                      <p class="text-danger" v-if="errors.jbki">{{ errors.jbki[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>MST (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="MST"
                        v-model="datapengujian.mst"
                      />
                      <p class="text-danger" v-if="errors.mst">{{ errors.mst[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>Kelas Jalan Terendah</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Kelas Jalan Ternendah"
                        v-model="datapengujian.kelasjalanterendah"
                      />
                      <p class="text-danger" v-if="errors.kelasjalanterendah">{{ errors.kelasjalanterendah[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>Konfigurasi Sumbu Roda</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Konfigurasi Sumbu Roda"
                        v-model="datapengujian.konfigurasisumburoda"
                      />
                      <p class="text-danger" v-if="errors.konfigurasisumburoda">{{ errors.konfigurasisumburoda[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label>Ukuran Ban</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Ukuran Ban"
                        v-model="datapengujian.ukuranban"
                      />
                      <p class="text-danger" v-if="errors.ukuranban">{{ errors.ukuranban[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jarak Sumbu I-II (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Jarak Sumbu I-II (mm)"
                        v-model="datapengujian.jaraksumbu1_2"
                      />
                      <p class="text-danger" v-if="errors.jaraksumbu1_2">{{ errors.jaraksumbu1_2[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jarak Sumbu II-III (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Jarak Sumbu II-III (mm)"
                        v-model="datapengujian.jaraksumbu2_3"
                      />
                      <p class="text-danger" v-if="errors.jaraksumbu2_3">{{ errors.jaraksumbu2_3[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jarak Sumbu III-IV (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Jarak Sumbu III-IV (mm)"
                        v-model="datapengujian.jaraksumbu3_4"
                      />
                      <p class="text-danger" v-if="errors.jaraksumbu3_4">{{ errors.jaraksumbu3_4[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>P (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="P (mm)"
                        v-model="datapengujian.p"
                      />
                      <p class="text-danger" v-if="errors.p">{{ errors.p[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Q(mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Q (mm)"
                        v-model="datapengujian.q"
                      />
                      <p class="text-danger" v-if="errors.q">{{ errors.q[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>R(mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="R (mm)"
                        v-model="datapengujian.r"
                      />
                      <p class="text-danger" v-if="errors.r">{{ errors.r[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>A (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="A (mm)"
                        v-model="datapengujian.a"
                      />
                      <p class="text-danger" v-if="errors.r">{{ errors.r[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>B (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="B (mm)"
                        v-model="datapengujian.b"
                      />
                      <p class="text-danger" v-if="errors.r">{{ errors.r[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Ground Clearance (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Ground Clearance (mm)"
                        v-model="datapengujian.groundclearance"
                      />
                      <p class="text-danger" v-if="errors.groundclearance">{{ errors.groundclearance[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Daya Angkut Orang (orang)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Daya Angkut Orang (mm)"
                        v-model="datapengujian.dayaangkutorang"
                      />
                      <p class="text-danger" v-if="errors.dayaangkutorang">{{ errors.dayaangkutorang[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Daya Angkut Barang (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Daya Angkut Barang"
                        v-model="datapengujian.dayaangkutbarang"
                      />
                      <p class="text-danger" v-if="errors.dayaangkutbarang">{{ errors.dayaangkutbarang[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Panjang Kendaraan (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Panjang Kendaraan"
                        v-model="datapengujian.panjangkendaraan"
                      />
                      <p class="text-danger" v-if="errors.panjangkendaraan">{{ errors.panjangkendaraan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Lebar Kendaraan</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Lebar Kendaraan"
                        v-model="datapengujian.lebarkendaraan"
                      />
                      <p class="text-danger" v-if="errors.lebarkendaraan">{{ errors.lebarkendaraan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tinggi Kendaraan</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Tinggi Kendaraan"
                         v-model="datapengujian.tinggikendaraan"
                      />
                      <p class="text-danger" v-if="errors.tinggikendaraan">{{ errors.tinggikendaraan[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Panjang Bak atau Tangki Muatan (mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Panjang Bak atau Tangki Muatan"
                        v-model="datapengujian.panjangbakatautangki"
                      />
                      <p class="text-danger" v-if="errors.panjangbakatautangki">{{ errors.panjangbakatautangki[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Lebar Bak atau Tangki Muatan</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Lebar Bak atau Tangki Muatan"
                        v-model="datapengujian.lebarbakatautangki"
                      />
                      <p class="text-danger" v-if="errors.lebarbakatautangki">{{ errors.lebarbakatautangki[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Tinggi Bak atau Tangki Muatan</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Tinggi Bak atau Tangki Muatan"
                        v-model="datapengujian.tinggibakatautangki"
                      />
                      <p class="text-danger" v-if="errors.tinggibakatautangki">{{ errors.tinggibakatautangki[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Julur Depan(mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        v-model="datapengujian.julurdepan"
                      />
                      <p class="text-danger" v-if="errors.julurdepan">{{ errors.julurdepan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Julur Belakang(mm)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        v-model="datapengujian.julurbelakang"
                      />
                      <p class="text-danger" v-if="errors.julurbelakang">{{ errors.julurbelakang[0] }}</p>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Berat Sumbu 1(Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        v-model="datapengujian.beratsumbu1"
                      />
                      <p class="text-danger" v-if="errors.beratsumbu1">{{ errors.beratsumbu1[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Berat Sumbu 2(Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        v-model="datapengujian.beratsumbu2"
                      />
                      <p class="text-danger" v-if="errors.beratsumbu2">{{ errors.beratsumbu2[0] }}</p>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Berat Sumbu 3(Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        v-model="datapengujian.beratsumbu3"
                      />
                      <p class="text-danger" v-if="errors.beratsumbu3">{{ errors.beratsumbu3[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Berat Sumbu 4(Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        v-model="datapengujian.beratsumbu4"
                      />
                      <p class="text-danger" v-if="errors.beratsumbu4">{{ errors.beratsumbu4[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Berat Kosong(Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        name="beratkosong"
                        v-model="datapengujian.beratkosong"
                      />
                      <p class="text-danger" v-if="errors.beratkosong">{{ errors.beratkosong[0] }}</p>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>Jenis Rumah-rumah</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="bahan"
                        v-model="datapengujian.bahan"
                      />
                      <p class="text-danger" v-if="errors.bahan">{{ errors.bahan[0] }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 3-->

              <!--begin: Wizard Pengujian 4-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label>Rem Utama (Kg)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_remutamatotalgayapengereman"
                      />
                      <p class="text-danger" v-if="errors.alatuji_remutamatotalgayapengereman">{{ errors.alatuji_remutamatotalgayapengereman[0] }}</p>
                    </div>
                  
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                        <label>Selilih Gaya Pengereman Roda Kiri dan Kanan S1 (%)</label>
                        <input
                          type="number"
                          class="form-control form-control-solid form-control-lg"
                          placeholder="Utama"
                          v-model="datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan1"
                        />
                        <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1">{{ errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Selilih Gaya Pengereman Roda Kiri dan Kanan S2 (%)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan2"
                      />
                      <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2">{{ errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Selilih Gaya Pengereman Roda Kiri dan Kanan S3 (%)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan3"
                      />
                      <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3">{{ errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Selilih Gaya Pengereman Roda Kiri dan Kanan S4 (%)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan4"
                      />
                      <p class="text-danger" v-if="errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4">{{ errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Kekuatan Pancar Lampu Utama Kanan (cd)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_lampuutamakekuatanpancarlampukiri"
                      />
                      <p class="text-danger" v-if="errors.alatuji_lampuutamakekuatanpancarlampukiri">{{ errors.alatuji_lampuutamakekuatanpancarlampukiri[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Kekuatan Pancar Lampu Utama Kiri (cd)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_lampuutamakekuatanpancarlampukiri"
                      />
                      <p class="text-danger" v-if="errors.alatuji_lampuutamakekuatanpancarlampukiri">{{ errors.alatuji_lampuutamakekuatanpancarlampukiri[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Penyimpangan Lampu ke Kanan (degree/menit)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_lampuutamapenyimpanganlampukanan"
                      />
                      <p class="text-danger" v-if="errors.alatuji_lampuutamapenyimpanganlampukanan">{{ errors.alatuji_lampuutamapenyimpanganlampukanan[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Penyimpangan Lampu ke Kiri (degree/menit)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Utama"
                        v-model="datapengujian.alatuji_lampuutamapenyimpanganlampukiri"
                      />
                      <p class="text-danger" v-if="errors.alatuji_lampuutamapenyimpanganlampukiri">{{ errors.alatuji_lampuutamapenyimpanganlampukiri[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>EMISI GAS BUANG ASAP (HSU)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="EMISI GAS BUANG ASAP"
                        v-model="datapengujian.alatuji_emisiasapbahanbakarsolar"
                      />
                      <p class="text-danger" v-if="errors.alatuji_emisiasapbahanbakarsolar">{{ errors.alatuji_emisiasapbahanbakarsolar[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>EMISI GAS BUANG CO (%)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="EMISI GAS BUANG CO"
                        v-model="datapengujian.alatuji_emisicobahanbakarbensin"
                      />
                      <p class="text-danger" v-if="errors.alatuji_emisicobahanbakarbensin">{{ errors.alatuji_emisicobahanbakarbensin[0] }}</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label>EMISI GAS BUANG HC (%)</label>
                      <input
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="EMISI GAS BUANG HC"
                        v-model="datapengujian.alatuji_emisihcbahanbakarbensin"
                      />
                      <p class="text-danger" v-if="errors.alatuji_emisihcbahanbakarbensin">{{ errors.alatuji_emisihcbahanbakarbensin[0] }}</p>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="penguji">Nama Verifikator</label>
                      <select class="form-control" v-model="datapengujian.idpetugasuji">
                       <option selected="selected" value="121">JUNAEDHI, A.Ma.PKB, SE, MM</option>
                          <option value="122">DENIS SARTONO, A.Ma. PKB</option>
                          <option value="123">SURAMIN</option>
                          <option value="367">SUNARDI</option>
                          <option value="913">WIDHI EKA OKTAVIANTO, A.Ma PKB., ST</option>
                          <option value="1284">TRI SUKARNO,A.Md.PKB</option>
                        </select>
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
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import datepicker from 'vuejs-datepicker';
import {en, id} from 'vuejs-datepicker/dist/locale';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  data() {
    return {
      id: id,
      disabled1:1,
      disabled2:1,
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
    this.getJeniskendaraan();
    this.getKotas();
    if(this.$route.name == 'datapengujian.edit'){
      this.editDatapengujian(this.$route.params.id);
    }
  },
  methods: {
    ...mapMutations("datapengujian", ["CLEAR_FORM"]),
    ...mapActions("datapengujian",["updateDatapengujian","getKodewilayahs","getMereks","getTipes","getJeniskendaraan","editDatapengujian","getKecamatans","getKelurahans","getKotas"]),
    submit(){
        this.updateDatapengujian(this.$route.params.id).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Saved',
            showConfirmButton: false,
            timer: 1500
          })
           this.$router.push({ name: "datapengujian.data" });
        });
    },
    setKota(value){
      this.identitaskendaraan.kota = value.nama
      this.getKecamatans(value.nama);
      this.disabled1 = 0;
    },
    setKecamatan(value){
      this.identitaskendaraan.kecamatan = value.nama
      this.getKelurahans(value.nama);
      this.disabled2 = 0;
    },
    setKelurahan(value){
      this.identitaskendaraan.kelurahan = value.nama
    },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("datapengujian", {
      datapengujian: state => state.datapengujian
    }),
    ...mapState("datapengujian", {
      kodewilayahs: state => state.kodewilayahs
    }),
    ...mapState("datapengujian", {
      mereks: state => state.mereks,tipes: state => state.tipes, jeniskendaraan: state => state.jeniskendaraan,kotas: state => state.kotas,kecamatans: state => state.kecamatans,kelurahans: state => state.kelurahans,
    })
  },
  components: {
    datepicker,vSelect
  },
};
</script>
