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
                <i class="wizard-icon flaticon2-photo-camera"></i>
                <h3 class="wizard-title">3. Foto Kendaraan</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon2-settings"></i>
                <h3 class="wizard-title">4. POS 1</h3>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard Body-->
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tgl SRUT</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Tgl SRUT"
                      />
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
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Merek</label>
                      <select class="form-control" id="exampleSelect1">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tipe</label>
                      <select class="form-control" id="exampleSelect1">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Jenis</label>
                      <select class="form-control" id="exampleSelect1">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                      </select>
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
                      />
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
                      />
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
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Bahan Bakar</label>
                      <select class="form-control" id="exampleSelect1">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Peruntukan</label>
                      <select class="form-control" id="exampleSelect1">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Daerah</label>
                      <select class="form-control" id="exampleSelect1">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Step 2-->
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
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
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <div class="row">
                  <div class="col-6">
                    <div class="card card-custom overlay">
                        <div class="card-body p-0">
                            <div class="overlay-wrapper">
                              <img src="media/stock-600x400/kanan.jpg" height="300px" width="100px" alt="" class="w-100 rounded"/>
                            </div>
                            <div class="overlay-layer">
                                <a href="#" class="btn font-weight-bold btn-primary btn-shadow" >Upload</a>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card card-custom overlay">
                        <div class="card-body p-0">
                            <div class="overlay-wrapper">
                              <img src="media/stock-600x400/belakang.jpg" height="300px" width="100px" alt="" class="w-100 rounded"/>
                            </div>
                            <div class="overlay-layer">
                                <a href="#" class="btn font-weight-bold btn-primary btn-shadow" >Upload</a>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 4-->

              <!--begin: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <p><h3>PEMERIKSAAN VISUAL KENDARAAN</h3></p>
                <div class=row>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Nomor dan kondisi rangka kendaraan bermotor</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Nomor dan tipe motor penggerak</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi tangki bahan bakar, corong pengisi bahan bakar, pipa saluran bahan bakar</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi kaca spion</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi spakbor</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi dan posisi pipa pembuangan</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Ukuran roda dan ban serta kondisi ban</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi sistem suspensi</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Keberadaan dan kondisi perlengkapan kendaraan</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Rancangan teknis Kendaraan sesuai peruntukannya</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi sistem rem utama</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi penutup lampu dan alat pemantul cahaya</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi panel instrumen pada dashboard Kendaraan</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Bentuk bumper</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p><h3>PEMERIKSAAN MANUAL KENDARAAN</h3></p>
                <div class=row>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi penerus daya</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Sudut bebas kemudi</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi rem parkir</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Ukuran tempat duduk dan bagian dalam Kendaraan</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Fungsi lampu dan alat pemantul cahaya</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Fungsi penghapus kaca</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Tingkat kegelapan kaca</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Fungsi klakson</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Kondisi dan fungsi sabuk keselamatan</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="form-group">
                      <label>Ukuran kendaraan</label>
                      <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" name="radios1"/>
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" name="radios1" checked="checked" />
                            <span></span>
                            Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Berat Sumbu I (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Berat Sumbu I"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Berat Sumbu II (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Berat Sumbu II (Kg)"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Berat Sumbu III (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Berat Sumbu III (Kg)"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Berat Sumbu IV (Kg)</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="length"
                        placeholder="Berat Sumbu V (Kg)"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label> Gaya Rem Kanan S1</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Kanan S1"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Gaya Rem  Kiri S1</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Kiri S1"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label> Gaya Rem Kanan S2</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Kanan S2"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Gaya Rem  Kiri S2</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Kiri S2"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label> Gaya Rem Kanan S3</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Kanan S3"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Gaya Rem  Kiri S3</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Kiri S3"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label> Gaya Rem Kanan S4</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Kanan S4"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="form-group">
                      <label>Gaya Rem  Kiri S4</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="height"
                        placeholder="Kiri S4"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Total Gaya Rem</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Total Gaya Rem"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Effisensi Gaya Rem Utama</label>
                      <input
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="width"
                        placeholder="Effisensi Gaya Rem Utama"
                      />
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
                  <router-link
                      :to="{ name: 'pendaftaran.data' }"
                      class="btn btn-warning font-weight-bold text-uppercase px-9 py-4"
                  ><i class="ki ki-long-arrow-back icon-xs"></i>Back</i>
                  </router-link>
                  
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

export default {
  data() {
    return {};
  },
  name: "Wizard-1",
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Pendaftaran" },
      { title: "Pengujian" }
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
  },
  methods: {
    ...mapActions("pendaftaran", ["submitPendaftaran","CLEAR_FORM"]),
    submit() {
      this.submitPendaftaran().then(() => {
        Swal.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState({
      pendaftaran: state => state.pengujian.pendaftaran,
    }),
  },
  components: {
  },
};
</script>
