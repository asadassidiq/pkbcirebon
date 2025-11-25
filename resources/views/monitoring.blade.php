<!DOCTYPE html>

<html lang="en">
	<!--begin::Head-->
	<head><base href="../../"/>
		<title>Monitoring SIM PKB</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
		<!--end::Fonts-->
		<!-- <link href="{{ asset('assets/plugins/custom/datatables/datatables.bundle.css') }}" rel="stylesheet" type="text/css"/> -->
		<!--begin::Global Stylesheets Bundle(mandatory for all pages)-->
		<link href="{{ mix('css/app.css').'?r='.time() }}" type="text/css" rel="stylesheet"/>
        <!-- DataTables (CDN) -->
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" />
        <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css" />

		<style type="text/css">
		</style>
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="app-blank bgi-size-cover bgi-position-center bgi-no-repeat" style="overflow: hidden;background-color: #FCFCFC;">
		<!--begin::Theme mode setup on page load-->
		<script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-bs-theme-mode")) { themeMode = document.documentElement.getAttribute("data-bs-theme-mode"); } else { if ( localStorage.getItem("data-bs-theme") !== null ) { themeMode = localStorage.getItem("data-bs-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-bs-theme", themeMode); }</script>
		<!--end::Theme mode setup on page load-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-column-fluid">
				<!--begin::Content-->
				<div class="d-flex flex-column flex-center text-center p-10">
					<!--begin::Wrapper-->
					<div class="card mb-2" style="background-color: #FCFCFC;">
                        
                        <!--begin::Body-->
                        <div class="card-body text-center">
							<div class="row">
								<div class="col-4">
									<img style="width: 80px; height: auto;" src="{{ asset('img/kota.png') }}" class="img-fluid">
								</div>
								<div class="col-4">
									<p style="text-align:center;font-size: 32px;font-weight: bold;">UPTD Pengujian Kendaraan Bermotor <br> Dinas Perhubungan Kota Cirebon</p>
								</div>
								<div class="col-4">
								</div>
							</div>
                        </div>
                        <!--end::Body-->
                    </div>
					<div class="card card-flush shadow-sm" style="width:100%">
						<div class="card-body">
						<div class="table-responsive">
							<table id="kt_datatable_responsive" class="table table-hover table-rounded table-row-bordered border gs-0 gy-4 gx-4" style="width:100%">
								<thead>
									<tr class="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
										<th class="text-center">No Uji</th>
										<th class="text-center">No Kendaraan</th>
										<th class="text-center">Nama</th>
										<th class="text-center">Status</th>
									</tr>
								</thead>
								<tbody>
									@foreach ($data as $dt)
									<tr class="@if($dt->pos1 == '3' || $dt->pos2 == '3' || $dt->pos1 == '0' || $dt->pos2 == '0') table-danger @elseif($dt->pos1 == '1' || $dt->pos2 == '1') table-success @else table-warning @endif">
										<td class="text-center">{{ $dt->nouji }}</td>
										<td class="text-center">{{ $dt->noregistrasikendaraan }}</td>
										<td class="text-center">{{ $dt->nama }}</td>
										<td class="text-center">
											@if($dt->pos1 == '0' || $dt->pos2 == '0' || $dt->pos3 == '0' || $dt->pos4 == '0' || $dt->posverif == '0')
												<strong>Tidak Lulus Uji</strong>
											@elseif($dt->posverif == '1')
												<strong>Lulus Uji</strong>
											@else
												&nbsp;
											@endif
										</td>
									</tr>
									@endforeach
								</tbody>
							</table>
						</div>
						</div>
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Content-->
			</div>
		<!--end::Root-->
		<!--begin::Javascript-->
		<script>var hostUrl = "assets/";</script>
		<!--begin::Global Javascript Bundle(mandatory for all pages)-->
		<script src="{{ mix('js/app.js').'?r='.time() }}" type="text/javascript"></script>

		<!-- DataTables (CDN) -->
		<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
		<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
		<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
		<!--end::Global Javascript Bundle-->
		<script>
			$(document).ready(function () {
				// Initialize DataTable on server-rendered rows (no AJAX)
				var table = $('#kt_datatable_responsive').DataTable({
					responsive: true,
					ordering: false,
					searching: false,
					paging: false,
					info: false,
					autoWidth: false
				});

				// Optional: auto-scroll the table container for a ticker-like view
				var $container = $('#kt_datatable_responsive').closest('.table-responsive');
				if ($container.length) {
					setInterval(function() {
						$container.scrollTop($container.scrollTop() + 625);
					}, 8000);
				}
			});
		</script>
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>