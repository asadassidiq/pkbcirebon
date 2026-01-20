<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SIMPKB</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <style>
        body{
            color:#333;
            text-align:left;
            font-size:18px;
            margin:0;
        }
        .container{
            margin:0 auto;
            margin-top:35px;
            padding:40px;
            width:750px;
            height:auto;
            background-color:#fff;
        }
        caption{
            font-size:28px;
            margin-bottom:15px;
        }
        table{
            border:1px solid #333;
            border-collapse:collapse;
            margin:0 auto;
            width:740px;
        }
        td, tr, th{
            padding:12px;
            border:1px solid #333;
            width:185px;
        }
        th{
            background-color: #f0f0f0;
        }
        h4, p{
            margin:0px;
        }

        #camera {
            position: fixed;
            inset: 0;
            background: #000;
        }

        video, canvas {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        #controls {
            /* position: fixed; */
            bottom: 20px;
            width: 100%;
            text-align: center;
        }

        button {
            padding: 12px 18px;
            font-size: 16px;
            border-radius: 50px;
            border: none;
            margin: 5px;
        }

        .capture { background: #0d6efd; color: #fff; }
        .next    { background: #198754; color: #fff; display:none; }
        .submit  { background: #dc3545; color: #fff; display:none; }

        #label {
            position: fixed;
            top: 10px;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
        }
        @page { size: potrait; }
    </style>
</head>
<body>
    <div class="container-fluid d-flex flex-column align-items-center justify-content-center" style="min-height:100vh;">

        <div class="d-flex align-items-center p-3 my-3 bg-info text-white rounded box-shadow w-100 justify-content-center">
            <div class="lh-100 text-center">
                <h3 class="mb-0 text-white lh-100">UPLOAD FOTO KENDARAAN</h3>
            </div>
        </div>

        <div class="my-3 p-3 bg-white rounded box-shadow w-100 d-flex flex-column align-items-center justify-content-center">
            <div id="preview-wrap" style="width:100%;max-width:400px;margin:24px auto 16px auto;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:18px;">
                <div style="text-align:center;margin-bottom:66px;">
                    <div style="font-size:14px;color:#333;margin-bottom:4px;">Depan</div>
                    <img id="preview-depan" src="" style="width:100%;max-width:600px;max-height:600px;border:2px solid #eee;background:#222;" alt="Depan">
                    <button type="button" class="posisi-btn" data-posisi="0" style="margin-top:10px;">Ambil Foto</button>
                </div>
                <div style="text-align:center;margin-bottom:66px;">
                    <div style="font-size:14px;color:#333;margin-bottom:4px;">Kanan</div>
                    <img id="preview-kanan" src="" style="width:100%;max-width:600px;max-height:600px;border:2px solid #eee;background:#222;" alt="Kanan">
                    <button type="button" class="posisi-btn" data-posisi="1" style="margin-top:10px;">Ambil Foto</button>
                </div>
                <div style="text-align:center;margin-bottom:66px;">
                    <div style="font-size:14px;color:#333;margin-bottom:4px;">Belakang</div>
                    <img id="preview-belakang" src="" style="width:100%;max-width:600px;max-height:600px;border:2px solid #eee;background:#222;" alt="Belakang">
                    <button type="button" class="posisi-btn" data-posisi="2" style="margin-top:10px;">Ambil Foto</button>
                </div>
                <div style="text-align:center;margin-bottom:66px;">
                    <div style="font-size:14px;color:#333;margin-bottom:4px;">Kiri</div>
                    <img id="preview-kiri" src="" style="width:100%;max-width:600px;max-height:600px;border:2px solid #eee;background:#222;" alt="Kiri">
                    <button type="button" class="posisi-btn" data-posisi="3" style="margin-top:10px;">Ambil Foto</button>
                </div>
            </div>

            <div class="media text-muted pt-3 w-100 d-flex justify-content-center">
                <div id="controls" style="text-align:center;margin-top:10px;">
                    <button class="submit" onclick="submitAll()" style="min-width:220px;font-size:20px;padding:16px 0;">⬆️ Submit</button>
                </div>
            </div>

            <!-- Modal Capture -->
            <div id="modal-capture" style="display:none;position:fixed;z-index:9999;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);justify-content:center;align-items:center;">
                <div style="background:#222;padding:48px 32px;border-radius:24px;box-shadow:0 4px 32px #000;max-width:900px;width:98vw;text-align:center;position:relative;display:flex;flex-direction:column;align-items:center;">
                    <div style="font-size:28px;color:#fff;margin-bottom:24px;">Ambil Foto <span id="modal-label">Depan</span></div>
                    <video id="video" autoplay playsinline style="width:100%;max-width:820px;height:540px;border-radius:18px;"></video>
                    <canvas id="canvas" width="800" height="800" hidden></canvas>
                    <div style="margin-top:32px;">
                        <button class="capture" onclick="capture()" style="font-size:22px;padding:18px 38px;">📸 Ambil Foto</button>
                        <button type="button" onclick="closeModal()" style="margin-left:24px;background:#888;color:#fff;padding:14px 38px;border-radius:50px;border:none;font-size:18px;">Tutup</button>
                    </div>
                </div>
            </div>

        <form id="form" action="{{ url('/intervention_postimage') }}" method="POST" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="media text-muted pt-3">
                <div class="sm-12">
                    <div class="row text-center">
                        <div class="col sm-3">
                            <label>No Kendaraan</label>
                            <input class="form-control" type="text" name="noregistrasikendaraan" value="{{ $kendaraan->noregistrasikendaraan }}" readonly>
                        </div>
                        <div class="col sm-3">
                            <label>No Uji</label>
                            <input class="form-control" type="text" name="nouji" value="{{ $kendaraan->nouji }}" readonly>
                        </div>
                        <div class="col sm-3">
                            <label>Merek</label>
                            <input class="form-control" type="text" name="merek" value="{{ $kendaraan->merek }}" readonly>
                        </div>
                        <div class="col sm-3">
                            <label>Jenis</label>
                            <input class="form-control" type="text" name="jenis" value="{{ $kendaraan->jenis }}" readonly>
                        </div>
                        <div class="col sm-3">
                            <input class="form-control" type="text" name="pendaftaran_id" value="{{ $kendaraan->uuid }}" hidden>
                        </div>
                    </div>
                </div>
            </div>
            {{ csrf_field() }}
            <input type="hidden" name="image1">
            <input type="hidden" name="image2">
            <input type="hidden" name="image3">
            <input type="hidden" name="image4">
        </form>
        </div>

        <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">FOTO KENDARAAN BELUM VERIF</h1>

        <hr class="mt-2 mb-5">

        <div class="row text-center text-lg-left">

        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/tmp_images/'.$kendaraan->nouji.'-tampakdepan.jpg').'?r='.time() }}" alt="">
                </a>
        </div>
        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/tmp_images/'.$kendaraan->nouji.'-tampakkanan.jpg').'?r='.time() }}" alt="">
                </a>
        </div>
        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/tmp_images/'.$kendaraan->nouji.'-tampakbelakang.jpg').'?r='.time() }}" alt="">
                </a>
        </div>
        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/tmp_images/'.$kendaraan->nouji.'-tampakkiri.jpg').'?r='.time() }}" alt="">
                </a>
        </div>
        </div>

        <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">FOTO KENDARAAN SUDAH VERIF</h1>

        <hr class="mt-2 mb-5">

        <div class="row text-center text-lg-left">

        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/thumbnail_images/'.$kendaraan->nouji.'-tampakdepan.jpg').'?r='.time() }}" alt="">
                </a>
        </div>
        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/thumbnail_images/'.$kendaraan->nouji.'-tampakkanan.jpg').'?r='.time()}}" alt="">
                </a>
        </div>
        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/thumbnail_images/'.$kendaraan->nouji.'-tampakbelakang.jpg').'?r='.time()}}" alt="">
                </a>
        </div>
        <div class="col-lg-3 col-md-4 col-4">
            <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="{{url('/thumbnail_images/'.$kendaraan->nouji.'-tampakkiri.jpg').'?r='.time() }}" alt="">
                </a>
        </div>
        </div>

    </div>
<script>
const video  = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

const submitBtn  = document.querySelector('.submit');

const steps = [
    { key: 'image1',    label: 'Depan', preview: 'preview-depan' },
    { key: 'image2',    label: 'Kanan', preview: 'preview-kanan' },
    { key: 'image3', label: 'Belakang', preview: 'preview-belakang' },
    { key: 'image4',     label: 'Kiri', preview: 'preview-kiri' },
];

let current = 0;
let stream  = null;

function openModal(posisi) {
    current = posisi;
    document.getElementById('modal-label').innerText = steps[current].label;
    document.getElementById('modal-capture').style.display = 'flex';
    startCamera();
}

function closeModal() {
    document.getElementById('modal-capture').style.display = 'none';
    if (stream) stream.getTracks().forEach(t => t.stop());
}

async function startCamera() {
    stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false
    });
    document.getElementById('video').srcObject = stream;
}

document.querySelectorAll('.posisi-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        openModal(parseInt(this.dataset.posisi));
    });
});

function anyCaptured() {
    return steps.some(s => document.querySelector(`[name="${s.key}"]`).value);
}

function capture() {
    const videoEl = document.getElementById('video');
    ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    if (stream) stream.getTracks().forEach(t => t.stop());

    // Compress image to below 1MB
    let quality = 0.7;
    let data = canvas.toDataURL('image/jpeg', quality);
    function base64Size(base64) {
        let str = base64.split(',')[1];
        return Math.ceil((str.length * 3) / 4);
    }
    while (base64Size(data) > 1024 * 1024 && quality > 0.2) {
        quality -= 0.1;
        data = canvas.toDataURL('image/jpeg', quality);
    }

    document.querySelector(`[name="${steps[current].key}"]`).value = data;
    document.getElementById(steps[current].preview).src = data;
    closeModal();
    submitBtn.style.display = anyCaptured() ? 'inline-block' : 'none';
}

function submitAll() {
    if (!anyCaptured()) {
        alert('Minimal satu foto harus diambil!');
        return;
    }
    document.getElementById('form').submit();
}
</script>
</body>
</html>

