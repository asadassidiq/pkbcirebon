<?php

namespace App\Services;

use App\Repositories\PengujianRepository;
use App\Traits\apiJsonReturnTrait;
use Exception;


class PengujianService
{
    protected $repoPengujian;
    use apiJsonReturnTrait;

    public function __construct(PengujianRepository $repoPengujian)
    {
        $this->repoPengujian = $repoPengujian;
    }

    public function getAll()
    {
        return $this->repoPengujian->getAll();
    }

    public function getPengujian($id)
    {
        return $this->repoPengujian->getPengujian($id);
    }

    public function createPos($request)
    {
        $ps = str_replace("/", "", request()->ps);
        $checkident = $this->repoPengujian->checkid($request[0]);
        $statusInsert = true;
        $message = '';

        if ($checkident) {
            if ($ps == '1') {
                $requestPend = $request[10];
                // dd($request);
                try {
                    $datakendaraan = $this->repoPengujian->Datakendaraan($request[1], $checkident['identitaskendaraan_id']);
                } catch (Exception $e) {
                    $statusInsert = false;
                    if (strlen($message) > 0) {
                        $message = $message . ', Datakendaraan';
                    } else {
                        $message = 'Datakendaraan';
                    }
                }
                $insertMap = [
                    'IdentifikasiKendaraan' => [$request[2], 'Identifikasi Kendaraan'],
                    'DimensiKendaraan' => [$request[3], 'Dimensi'],
                    'BagianKananKendaraan' => [$request[4], 'Kanan'],
                    'BagianKiriKendaraan' => [$request[5], 'Kiri'],
                    'BagianDepanKendaraan' => [$request[6], 'Depan'],
                    'BagianBelakangKendaraan' => [$request[7], 'Belakang'],
                    'BagianDalamKendaraan' => [$request[8], 'Dalam'],
                    'LaikJalan' => [$request[9], 'Ban'],
                ];
            } elseif ($ps == '2') {
                $requestPend = $request[1];
                $insertMap = [
                    'LaikJalan' => [$request[2], 'Laik Jalan'],
                    'BagianBawahKendaraan' => [$request[3], 'Bawah'],
                ];
            } else {
                $requestPend = $request[1];
                $insertMap = [
                    'LaikJalan' => [$request[2], 'Laik Jalan'],
                ];
            }

            $statusInsert = true;
            $messageParts = [];

            foreach ($insertMap as $method => [$data, $label]) {
                try {
                    $this->repoPengujian->setPengujian($data, $checkident['id'], $method);
                } catch (Exception $e) {
                    $statusInsert = false;
                    $messageParts[] = $label;
                }
            }

            if ($statusInsert) {
                $this->repoPengujian->setPosisiPos($checkident, $requestPend, $ps);
                return $this->success('', 'Success Insert', 200);
            } else {
                return $this->error(false, implode(', ', $messageParts), '', 200);
            }
        }
        return $this->error(false, 'Data Pendaftaran Kosong', '', 200);
    }

    public function setCopyPengujian($id)
    {
        return $this->repoPengujian->setCopyPengujian($id);
    }

    public function delete($id)
    {
        return $this->repoPengujian->destroy($this->repoPengujian->getPengujian($id));
    }
}
