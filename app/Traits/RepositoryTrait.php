<?php

namespace App\Traits;
use Exception;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevel;
use Endroid\QrCode\Writer\PngWriter;

trait RepositoryTrait
{
    /**
     * Get number of records
     *
     * @return array
     */
    public function getNumber()
    {
        return $this->model->count();
    }

    /**
     * @param $id
     * @param $input
     * @return mixed
     */
    public function updateColumn($id, $input)
    {
        $this->model = $this->getById($id);

        foreach ($input as $key => $value) {
            $this->model->{$key} = $value;
        }

        return $this->model->save();
    }

    /**
     * Destroy a model.
     *
     * @param $model
     * @return mixed
     * @internal param $id
     */
    public function destroy($model)
    {
        return $model->delete();
    }

    /**
     * Get model by id.
     *
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model->where('id', $id)->firstOrFail();
    }

    /**
     * Get all the records
     *
     * @return array User
     */
    public function all()
    {
        return $this->model->get();
    }

    /**
     * Get number of the records
     *
     * @param int $number
     * @param string $sort
     * @param string $sortColumn
     * @return mixed
     */
    public function page($number = 10, $sort = 'desc', $sortColumn = 'created_at')
    {
        return $this->model->orderBy($sortColumn, $sort)->paginate($number);
    }

    /**
     * Store a new record.
     *
     * @param  $input
     * @return mixed
     */
    public function store($input)
    {
        return $this->save($this->model, $input);
    }

    /**
     * Store a new record.
     *
     * @param  $input
     * @return mixed
     */
    public function updateOrCreate($match, $input)
    {
        return $this->model->updateOrCreate($match, $input);
    }

    public function create($input)
    {
        return $this->model->create($input);
    }

    /**
     * Update a record by id.
     *
     * @param  $id
     * @param  $input
     * @return mixed
     */
    public function update($id, $input, $updated_at = true)
    {
        $this->model = $this->getById($id);

        return $this->save($this->model, $input, $updated_at);
    }

    /**
     * Save the input's data.
     *
     * @param  $input
     * @return mixed
     * @internal param $model
     */
    public function save($model, $input, $updated_at = true)
    {
        $model->fill($input);
        if ($updated_at === false) {
            $model->timestamps = false;
        }
        $model->save();

        return $model;
    }

    /**
     * @param $input
     * @return mixed
     * @internal param $model
     */
    public function datatableQuery($input)
    {
        return $this->model->select($input);
    }

    /**
     * Get DatatableData With Relation
     *
     * @param $select
     * @param $with
     * @return mixed
     */
    public function datatableQueryWith($select, $with)
    {
        $model = $this->datatableQuery($select);

        return $model->with($with);
    }

    public function uuidToBase62(string $uuid): string {
        $hex = str_replace('-', '', $uuid);
        $int = \gmp_init($hex, 16);
        return \gmp_strval($int, 62); // base62 encode
    }

    public function base62ToUuid(string $short): string {
        $int = \gmp_init($short, 62);
        $hex = str_pad(gmp_strval($int, 16), 32, '0', STR_PAD_LEFT);

        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split($hex, 4));
    }

    public function qrcode($url)
    {
        $builder = new Builder(
            writer: new PngWriter(),
            data: $url,
            encoding: new Encoding('UTF-8'),
            // errorCorrectionLevel: ErrorCorrectionLevel::high(),
            size: 300,
            margin: 10,
            logoPath: public_path() . '/img/kota.png',
            logoResizeToWidth: 60
        );
        $result = $builder->build();
        $qrcode = $result->getDataUri();

        return $qrcode;
    }

    function esigin_bantul($data)
    {
        //The URL that accepts the file upload.
        $url = "URL_UPLOAD";
        // die('aaaaaa');
        // $url = 'http://esign.kab-bantul.id/api/sign/pdf';
        //The name of the field for the uploaded file.
        // $uploadFieldName = 'file';
        // $nama = 'Numpang_Uji_Bantul_2021-03-25_09_29_46.pdf';
        $nama = $data->nama_file;
        // $filePath = DOCROOT."files/dokumen/".$nama;
        $filePath = $data->file;
        // $username = 'sipentol';
        // $password = 's1pentol@BTL';
        $username = "USER_SIGIN";
        $password = "PASS_SIGIN";
        $file_bsre = "DOCROOT" . 'view/images/bsre.png';
        //Initiate cURL
        // die($url.' - '. $username .' - '. $password);
        $ch = curl_init();
        // Tentukan nama pengguna dan sandi menggunakan opsi CURLOPT_USERPWD.
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        $filePath = curl_file_create(
            realpath($filePath),
            mime_content_type($filePath),
            basename($filePath)
        );
        $file_bsre = curl_file_create(
            realpath($file_bsre),
            mime_content_type($file_bsre),
            basename($file_bsre)
        );
        // print_r($data);
        $postFields = array(
            'file' => $filePath,
            'nik' => $data->nik,
            'passphrase' => $data->passphrase,
            'tampilan ' => 'visible',
            // 'tampilan ' => 'invisible',
            'height ' => '100',
            'width ' => '200',
            'image ' => 'true',
            'imageTTD ' => $file_bsre,
            'xAxis ' => '0',
            'yAxis ' => '0',
            'halaman ' => 'TERAKHIR',
            'reason' => ' ',
            'text' => ' '
        );
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
        $hasil_sigin = curl_exec($ch);
        $ex_hasil = explode('%PDF', $hasil_sigin);
        $data_pdf = '%PDF' . $ex_hasil[1];
        $output = rtrim($hasil_sigin);
        $data = explode("\n", $output);
        // die($hasil_sigin);
        if (curl_errno($ch)) {
            throw new Exception(curl_error($ch));
        }
        if (strstr($hasil_sigin, 'error')) {
            $arr = count($data) - 1;
            return $data[$arr];
        } else {
            // AMBIL HEADER UNTUK ID DOKUMEN
            $headers = [];
            $headers['status_code'] = "200";
            $headers['massage'] = "Berhasil";
            array_shift($data);
            foreach ($data as $part) {
                $middle = explode(":", $part, 2);
                if ($middle[0] == 'id_dokumen') {
                    $headers[trim($middle[0])] = trim($middle[1]);
                }
            }
            // DOWNLOAD DOKUMEN KE SERVER 
            $ex_nama_file = explode('.', $nama);
            file_put_contents("DOCROOT" . "arsip/" . $ex_nama_file['0'] . '_sigin.pdf', $data_pdf);
            return json_encode($headers);
        }
    }
}
