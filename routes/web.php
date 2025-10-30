<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::group(['namespace' => 'App\\Http\\Controllers\\Api'], function () {
	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/{id}/permohonan', 'PendaftaranController@cetak');
		Route::get('/{id}/surat', 'SuratController@cetak');
		// Route::get('/{id}/mutasi', 'MutasiController@cetak');
	});
	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/{id}/lhp', 'VerifController@cetaklhp');
	});

	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/{id}/sktl', 'VerifController@cetaksktl');
		Route::get('/{id}/penolakan', 'VerifController@cetakPenolakan');
	});

	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/{id}/kartuinduk', 'DatakendaraanController@cetak')->name('kartu.induk');
		Route::get('/{id}/kartuindukv2', 'DatakendaraanController@cetakKartu')->name('kartu.indukv2');
	});

	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/{id}/pendaftaranonline', 'PendaftaranOnlineController@cetak');
	});

	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/{id}/laporanharian', 'LaporanController@printlaporanharian');
		Route::get('/{id}/kwbubulanan', 'LaporanController@printlaporanbulanan');
		Route::get('/{id}/kwbutahunan', 'LaporanController@printlaporantahunan');
		Route::get('/{id}/jenisbulanan', 'LaporanController@printlaporanjeniskendaraanbulanan');
		Route::get('/{id}/jenistahunan', 'LaporanController@printlaporanjeniskendaraantahunan');
		Route::get('/{id}/pelayananbulanan', 'LaporanController@printlaporanjenispelayananbulanan');
		Route::get('/{id}/pelayanantahunan', 'LaporanController@printlaporanjenispelayanantahunan');
		Route::get('/{id}/tamankendaraantahunan', 'LaporanController@printTamankendaraanTahunan');
	});

	Route::group(['prefix' => 'cetak'], function () {
		Route::get('/printcustom1', 'LaporanController@custom1');
		Route::get('/printcustom2', 'LaporanController@custom2');
	});

	Route::group(['prefix' => 'arsip'], function () {
		Route::get('/{id}', 'SuratController@showArsip');
	});

	Route::group(['prefix' => 'export'], function () {
		Route::get('/{tgl}/laporanharian', 'LaporanExportsController@HarianKendaraan');
		Route::get('/{tgl}/kwbubulanan', 'LaporanExportsController@Kwbu');
		Route::get('/{tgl}/kwbutahunan', 'LaporanExportsController@KwbuTahunan');
		Route::get('/{tgl}/pelayananbulanan', 'LaporanExportsController@Pelayanan');
		Route::get('/{tgl}/pelayanantahunan', 'LaporanExportsController@PelayananTahunan');
		Route::get('/{tgl}/jenisbulanan', 'LaporanExportsController@Jenis');
		Route::get('/{tgl}/jenistahunan', 'LaporanExportsController@JenisTahunan');
		Route::get('/{tgl}/tamankendaraantahunan', 'LaporanExportsController@TamankendaraanTahunan');
		Route::get('/custom1', 'LaporanExportsController@custom1');
		Route::get('/custom2', 'LaporanExportsController@custom2');
	});
});

Route::group(['namespace' => 'App\\Http\\Controllers'], function () {
	Route::get('upload/{id}/fotokendaraan/', 'FotoController@getImage')->name('get.image');
	Route::POST('intervention_postimage', 'FotoController@postImage')->name('post.image');
	Route::get('getfoto', 'FotoController@getFoto')->name('get.foto');
});

Route::group(['namespace' => 'App\\Http\\Controllers\\Api'], function () {
	Route::get('monitor', 'PendaftaranController@Monitor');
	Route::get('getmonitoring', 'PendaftaranController@getMonitoring');
	// Route::get('updatedata', 'DatapengujianController@updateData');
	Route::get('updatedata', 'DatakendaraanController@updateData');
	Route::get('updatedata2', 'DatakendaraanController@updateData2');
	Route::get('updatelaikjalan', 'DatakendaraanController@upLaikJalan');
	Route::get('updatedatakendaraan', 'DatakendaraanController@updateData');
	Route::get('foto/{id}/', 'VerifController@fotoTest');
});

// Route::get('{any}', function () {
// 	return view('app');
// })->where('any', '.*');
Route::get('{any}', function () {
	if (request()->is('cetak/*')) {
		// Bisa dibiarkan kosong agar Laravel cari route `cetak/*` lain di atasnya
		// abort(404); // <-- jika mau blokir juga, tinggal aktifkan ini
	} elseif (request()->is('arsip/*')) {
		// abort(404); // Blokir akses langsung ke upload
	} elseif (request()->is('upload/*')) {
		// abort(404); // Blokir akses langsung ke upload
	} elseif (request()->is('thumbnail_images/*')) {
		// abort(404); // Blokir akses langsung ke upload
	} elseif (request()->is('normal_images/*')) {
		// abort(404); // Blokir akses langsung ke upload
	} else {
		return view('app', ['recaptcha_sitekey' => env('RECAPTCHA_SITE_KEY')]);
	}
})->where('any', '.*');
