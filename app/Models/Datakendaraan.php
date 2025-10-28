<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datakendaraan extends Model
{
    protected $table = 'datakendaraans';

    protected $fillable = [
        'identitaskendaraan_id',
        'jbb',
        'jbkb',
        'jbi',
        'jbki',
        'mst',
        'konfigurasisumburoda',
        'ukuranban',
        'panjangkendaraan',
        'lebarkendaraan',
        'tinggikendaraan',
        'panjangbakatautangki',
        'lebarbakatautangki',
        'tinggibakatautangki',
        'julurdepan',
        'julurbelakang',
        'groundclearance',
        'jumlah_sumbu',
        'jaraksumbu1_2',
        'jaraksumbu2_3',
        'jaraksumbu3_4',
        'jaraksumbu4_5',
        'jaraksumbu5_6',
        'jaraksumbu6_7',
        'jaraksumbu7_8',
        'jaraksumbu8_9',
        'jaraksumbu9_10',
        'jaraksumbu10_11',
        'jaraksumbu11_12',
        'q',
        'a',
        'r',
        'b',
        'p',
        'dayaangkutorang',
        'dayaangkutbarang',
        'kelasjalanterendah',
        'idkelasjalanterendah',
        'beratkosong',
        'beratsumbu1',
        'beratsumbu2',
        'beratsumbu3',
        'beratsumbu4',
        'beratsumbu5',
        'beratsumbu6',
        'beratsumbu7',
        'beratsumbu8',
        'beratsumbu9',
        'beratsumbu10',
        'beratsumbu11',
        'beratsumbu12',
        'posisinomeruji',
        'catatanrubahbentuk',
        'bahan',
        'rumahrumah',
        'lebarpintu',
        'tinggipintu',
        'tinggianaktangga',
        'lebaranaktangga',
        'lebarlorong',
        'tinggitempatberdiri',
        'lebartempatduduk',
        'jaraktempatduduk',
        'lebarpintudarurat',
        'panjangakseskeluar',
        'lebarakseskeluar',
        'jarakantarbumper',
        'volume',
        'jenismuatan',
        'beratjenismuatan',
    ];

    public function identityTaskendaraan()
    {
        return $this->belongsTo(Identitaskendaraan::class, 'identitaskendaraan_id', 'id');
    }
}
