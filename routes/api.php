<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['namespace' => 'App\\Http\\Controllers\\Api'], function () {
    Route::post('/login', 'LoginController@index');
    Route::get('/logout', 'LoginController@logout');
    Route::post('/tte/callback/{id}', 'SuratController@callback');
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::group(['namespace' => 'App\\Http\\Controllers\\Api'], function () {
        Route::get('/verify', 'LoginController@checkSession');
        // Route::post('/refresh', 'LoginController@refresh');
    });

    Route::group(['namespace' => 'App\\Http\\Controllers\\Api'], function () {
        Route::get('/verify', 'LoginController@checkSession');
        Route::post('/refresh', 'LoginController@refresh');
    });

    Route::group(['namespace' => 'App\\Http\\Controllers\\Api'], function () {
        Route::group(['middleware' => ['role:admin|penguji'], 'prefix' => 'foto'], function () {
            Route::get('/', 'FotoController@index');
            Route::get('/terfoto', 'FotoController@foto');
        });

        Route::group(['prefix' => 'bluecore'], function () {
            Route::get('/', 'apiBlueCoreController@getDataMaster');
        });
        Route::group(['prefix' => 'vta'], function () {
            Route::get('/', 'apiBlueCoreController@getDataVTASRUT');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'pendaftaran'], function () {
            Route::get('/{id}', 'PendaftaranController@getPendaftaran');
            Route::post('/', 'PendaftaranController@store');
            Route::put('/{id}', 'PendaftaranController@update');
            Route::get('/', 'PendaftaranController@index');
            Route::get('/detail', 'PendaftaranController@getPendaftaranDetail');
            Route::get('/{id}', 'PendaftaranController@getPendaftaran');
            Route::put('ulangifoto/{id}', 'PendaftaranController@ulangiFoto');
            Route::delete('/{id}', 'PendaftaranController@delete');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'pendaftaranonline'], function () {
            Route::get('/{id}', 'PendaftaranOnlineController@getPendaftaran');
            Route::post('/', 'PendaftaranOnlineController@store');
            Route::get('/', 'PendaftaranOnlineController@index');
            Route::get('/{id}', 'PendaftaranOnlineController@getPendaftaranDetail');
            Route::post('/approve', 'PendaftaranOnlineController@approve');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'pendaftaran2'], function () {
            Route::post('/', 'PendaftaranController@store2');
        });


        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'penyerahan'], function () {
            Route::get('/{id}', 'PendaftaranController@getPenyerahan');
            Route::put('/{id}', 'PendaftaranController@storePenyerahan');
            Route::get('/', 'PendaftaranController@getAllPenyerahan');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'antrian'], function () {
            Route::get('/', 'AntrianController@index');
            Route::get('/{id}', 'AntrianController@setNoAntrian');
            Route::put('/{id}', 'AntrianController@update');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'regonline'], function () {
            Route::get('/verif/{id}', 'PendaftaranController@approveOnline');
            Route::get('/', 'OnlineController@index');
        });

        Route::group(['middleware' => ['role:admin|petugas|kepala'], 'prefix' => 'surat'], function () {
            Route::get('/', 'SuratController@index');
            Route::get('/{id}', 'SuratController@getPendaftaran');
            Route::put('/approving/{id}', 'SuratController@approving')->name('approving.surat');
            Route::get('/checktte/{id}', 'SuratController@checkTTE');
        });

        Route::group(['prefix' => 'nosurat'], function () {
            Route::get('/', 'SuratController@setNoSurat');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'identitaskendaraan'], function () {
            Route::post('/', 'IdentitaskendaraanController@store');
            Route::get('/', 'IdentitaskendaraanController@index');
            Route::get('/nouji', 'IdentitaskendaraanController@getIdentitaskendaraanNouji');
            Route::get('/check', 'IdentitaskendaraanController@getCheck');
            Route::get('/nokendaraan', 'IdentitaskendaraanController@getNokendaraan');
            Route::get('/norangka', 'IdentitaskendaraanController@getNorangka');
            Route::get('/name', 'IdentitaskendaraanController@getIdentitaskendaraanName');
            Route::get('/{id}', 'IdentitaskendaraanController@getIdentitaskendaraan');
            Route::get('pos/{id}', 'IdentitaskendaraanController@getIdentitaskendaraanPos')->name('identitaskendaraan.pos');
            Route::put('/{id}', 'IdentitaskendaraanController@update');
            Route::delete('/{id}', 'IdentitaskendaraanController@delete');
        });
        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'datakendaraan'], function () {
            Route::post('/', 'DatakendaraanController@store');
            Route::get('/', 'DatakendaraanController@index');
            Route::get('/total', 'DatakendaraanController@getTotalDatakendaraan');
            Route::get('/{id}', 'DatakendaraanController@getDatakendaraan');
            Route::put('/{id}', 'DatakendaraanController@update');
            Route::delete('/{id}', 'DatakendaraanController@delete');
        });

        Route::group(['middleware' => ['role:admin|kepala'], 'prefix' => 'datakendaraan/approvals'], function () {
            Route::get('/pending', 'DatakendaraanController@getPendingRequests');
            // Route::get('/rejected', 'DatakendaraanController@getRejectedRequests');
            // Route::get('/approved', 'DatakendaraanController@getApprovedRequests');

            Route::get('/{id}', 'DatakendaraanController@getApprovalRequest');
            Route::post('/{id}/approve', 'DatakendaraanController@approveRequest');
            Route::post('/{id}/reject', 'DatakendaraanController@rejectRequest');
        });

        Route::group(['middleware' => ['role:admin|penguji|kepala'], 'prefix' => 'riwayatuji'], function () {
            Route::get('/{id}', 'DatakendaraanController@riwayatUji');
            Route::get('/detail/{id}', 'DatakendaraanController@detailRiwayatuji');
        });
        Route::group(['middleware' => ['role:admin|penguji'], 'prefix' => 'pengujian'], function () {
            Route::get('/', 'PengujianController@index');
            Route::get('/lulus', 'PengujianController@lulus');
            Route::get('/tlulus', 'PengujianController@tlulus');
            Route::get('/{id}', 'PengujianController@getPengujian');
            Route::post('/', 'PengujianController@createPos');
        });
        // Route::group(['middleware' => ['role:admin|penguji'], 'prefix' => 'integrasi'], function () {
        //     Route::get('/brake', 'Pos3Controller@proxyGetData');
        //     Route::post('/brake', 'Pos3Controller@proxyPostData');
        // });
        Route::group(['middleware' => ['role:admin|penguji|kepala'], 'prefix' => 'verif'], function () {
            Route::post('/', 'VerifController@store');
            Route::post('/verif2', 'VerifController@storeVerif2');
            Route::get('/', 'VerifController@index');
            Route::get('/lulus', 'VerifController@lulus');
            Route::get('/verif2', 'VerifController@indexverif2');
            Route::get('/lulusverif2', 'VerifController@lulusverif2');
            Route::get('/tlulus', 'VerifController@tlulus');
            Route::get('/name', 'VerifController@getVerifName');
            Route::get('/{id}', 'VerifController@getVerif')->name('get.verif');
            Route::put('/{id}', 'VerifController@update');
            Route::put('/approvesurat/{id}', 'VerifController@approveSurat');
        });

        Route::group(['middleware' => ['role:admin|penguji|kepala'], 'prefix' => 'hasiluji'], function () {
            Route::get('/', 'VerifController@lulus');
        });

        Route::group(['middleware' => ['role:admin|penguji|kepala'], 'prefix' => 'monitoring'], function () {
            Route::get('/', 'VerifController@getMonitoring');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'kota'], function () {
            Route::post('/', 'KotaController@store');
            Route::get('/', 'KotaController@index');
            Route::get('/name', 'KotaController@getName');
            Route::get('/{id}', 'KotaController@getKota');
            Route::put('/{id}', 'KotaController@update');
            Route::delete('/{id}', 'KotaController@delete');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'kecamatan'], function () {
            Route::post('/', 'KecamatanController@store');
            Route::get('/', 'KecamatanController@index');
            Route::get('/name', 'KecamatanController@getName');
            Route::get('/{id}', 'KecamatanController@getKecamatan');
            Route::put('/{id}', 'KecamatanController@update');
            Route::delete('/{id}', 'KecamatanController@delete');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'kelurahan'], function () {
            Route::post('/', 'KelurahanController@store');
            Route::get('/', 'KelurahanController@index');
            Route::get('/name', 'KelurahanController@getName');
            Route::get('/{id}', 'KelurahanController@getKelurahan');
            Route::put('/{id}', 'KelurahanController@update');
            Route::delete('/{id}', 'KelurahanController@delete');
        });

        // Route::group(['middleware' => ['role:admin|petugas'],'prefix' => 'kodewilayah'], function () {
        //         Route::get('/name', 'KodewilayahController@getKodewilayahName');
        //     });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'tandatangan'], function () {
            Route::post('/', 'TandatanganController@store');
            Route::get('/', 'TandatanganController@index');
            Route::get('/name', 'TandatanganController@getTandatanganName');
            Route::get('/{id}', 'TandatanganController@getTandatangan');
            Route::put('/{id}', 'TandatanganController@update');
            Route::delete('/{id}', 'TandatanganController@delete');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'kuota'], function () {
            Route::post('/', 'KuotaController@store');
            Route::get('/', 'KuotaController@index');
            Route::get('/name', 'KuotaController@getKuotaName');
            Route::get('/cekkuota', 'KuotaController@getCekKuota');
            Route::get('/cekkuota1', 'KuotaController@getCekKuota1');
            Route::get('/{id}', 'KuotaController@getKuota');
            Route::put('/{id}', 'KuotaController@update');
            Route::delete('/{id}', 'KuotaController@delete');
        });
        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'harilibur'], function () {
            Route::post('/', 'HariLiburController@store');
            Route::get('/', 'HariLiburController@index');
            Route::get('/name', 'HariLiburController@getHariLiburName');
            Route::get('/{id}', 'HariLiburController@getHariLibur');
            Route::put('/{id}', 'HariLiburController@update');
            Route::delete('/{id}', 'HariLiburController@delete');
        });

        Route::group(['prefix' => 'catatan'], function () {
            Route::post('/', 'CatatanController@store');
            Route::get('/', 'CatatanController@index');
            Route::get('/name/{id}', 'CatatanController@getCatatanName');
            Route::get('/alasan', 'CatatanController@getAlasan');
            Route::get('/{id}', 'CatatanController@getCatatan');
            Route::get('/pos/{id}', 'CatatanController@getCatatanPos');
            Route::put('/{id}', 'CatatanController@update');
            Route::delete('/{id}', 'CatatanController@delete');
        });

        Route::group(['middleware' => ['role:admin'], 'prefix' => 'user'], function () {
            Route::post('/', 'UserController@store');
            Route::get('/', 'UserController@index');
            Route::get('/name', 'UserController@getUserName');
            Route::get('/{id}', 'UserController@getUser');
            Route::put('/{id}', 'UserController@update');
            Route::delete('/{id}', 'UserController@delete');
        });

        Route::group(['middleware' => ['role:admin|petugas'], 'prefix' => 'datapengujian'], function () {
            Route::post('/', 'DatapengujianController@store');
            Route::get('/', 'DatapengujianController@index');
            Route::get('/name', 'DatapengujianController@getDatapengujianName');
            Route::get('/nosertifikat/{id}', 'DatapengujianController@getnosertifikat');
            Route::get('/undoverif/{id}', 'DatapengujianController@undoVerif');
            Route::get('/{id}', 'DatapengujianController@getDatapengujian');
            Route::put('/{id}', 'DatapengujianController@update');
            Route::put('/{id}/nosertifikat', 'DatapengujianController@nosertifikat');
            Route::delete('/{id}', 'DatapengujianController@delete');
        });
    });
});
