<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SIMPKB {{ env('APP_WILAYAH')}}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <!-- Styles -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css" rel="stylesheet">


    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" defer></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    
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
        .pos{
            font-size: 24px;
        }
        caption{
            font-size:28px;
            margin-bottom:15px;
        }
        table{
            border:1px solid #333;
            border-collapse:collapse;
            margin:0 auto;
        }
        td, tr, th{
            padding:12px;
            border:1px solid #333;
        }
        th{
            /*background-color: #f0f0f0;*/
        }
        h4, p{
            margin:0px;
        }
         @page { size: potrait; }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="d-flex align-items-center p-3 my-3 bg-info text-white rounded box-shadow">
        <!-- <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48"> -->
        <div class="lh-100">
          <h3 class="mb-0 text-white lh-100">MONITORING PENGUJIAN</h3>
          <!-- <small>Since 2011</small> -->
        </div>
      </div>

      <hr class="mt-2 mb-5">

        <div class="my-3 p-3 bg-white rounded box-shadow">
            <table id="example" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>No Kendaraan</th>
                        <th>No Uji</th>
                        <th>Keterangan</th>
                        <th>Posisi</th>
                        <th>POS 1</th>
                        <th>POS 2</th>
                        <th>POS 3</th>
                        <th>POS 4</th>
                        <th>POS 5</th>
                        <th>POS 6</th>
                        <th>POS Verif</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>noregistrasikendaraan</th>
                        <th>nouji</th>
                        <th>keterangan</th>
                        <th>Posisi</th>
                        <th>POS 1</th>
                        <th>POS 2</th>
                        <th>POS 3</th>
                        <th>POS 4</th>
                        <th>POS 5</th>
                        <th>POS 6</th>
                        <th>POS Verif</th>
                    </tr>
                </tfoot>
            </table>
        </div>

    </div>
    <script>
        $(document).ready(function () {
            var table = $('#example').DataTable({
                    ajax: '{{ url('getmonitoring') }}',
                    order: [[3, 'desc']],
                    "paging": false,
                    columns: [
                        { data: 'noregistrasikendaraan',className:"font-weight-bold" },
                        { data: 'nouji',className:"font-weight-bold" },
                        { data: 'keterangan',className:"font-weight-bold" },
                        { data: 'posisi',className:"font-weight-bold",
                            render: function(data){
                                if(data == '1'){
                                    return 'UJI VISUAL';
                                }
                                else if(data == '2'){
                                    return 'EMISI';
                                }
                                else if(data == '3'){
                                    return 'SIDE SLIP & SLIP';
                                }
                                else if(data == '4'){
                                    return 'SPEEDOMETER';
                                }
                                else if(data == '5'){
                                    return 'LAMPU KLAKSON';
                                }
                                else if(data == '6'){
                                    return 'AXLE PLAY';
                                }
                                else if(data == '7'){
                                    return 'VERIFIKATOR 1';
                                }
                                else if(data == '8'){
                                    return 'VERIFIKATOR 2';
                                }
                                else if(data == '9'){
                                    return 'CETAK';
                                }
                                else if(data == '10'){
                                    return 'SELESAI';
                                }
                            }
                        },
                        { data: 'pos1',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>'+row.verif;
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                        { data: 'pos2',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>';
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                        { data: 'pos3',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>';
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                        { data: 'pos4',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>';
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                        { data: 'pos5',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>';
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                        { data: 'pos6',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>';
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                        { data: 'verif',className:"font-weight-bold dt-center",
                            render: function(data){
                                if(data == 1){
                                    return '<a href="#"><i class="mdi mdi-checkbox-marked-circle-outline text-success pos" aria-hidden="true"></i></a>';
                                }
                                else{
                                    return '<a href="#"><i class="mdi mdi-close-octagon-outline text-danger pos" aria-hidden="true"></i></a>';
                                }
                            },
                        },
                    ],
                });

            setInterval( function () {
                table.ajax.reload();
            }, 30000 );
        });
    </script>
</body>
</html>