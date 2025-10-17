import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/pendaftaran",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue")
        },  
        {
          path: "/pendaftaran",
          component: () => import("@/view/pages/pendaftaran/Index.vue"),
          children: [
            {
              path: "",
              name: "pendaftaran.data",
              component: () => import("@/view/pages/pendaftaran/Table.vue")
            },
            {
              path: "add",
              name: "pendaftaran.add",
              component: () => import("@/view/pages/pendaftaran/Add.vue")
            },
            {
              path: "edit/:id",
              name: "pendaftaran.edit",
              component: () => import("@/view/pages/pendaftaran/Edit.vue")
            },
          ]
        },   
        {
          path: "/pendaftaranonline",
          component: () => import("@/view/pages/pendaftaranonline/Index.vue"),
          children: [
            {
              path: "",
              name: "pendaftaranonline.data",
              component: () => import("@/view/pages/pendaftaranonline/Table.vue")
            },
            {
              path: "add",
              name: "pendaftaranonline.add",
              component: () => import("@/view/pages/pendaftaranonline/Add.vue")
            },
            {
              path: "approving/:id",
              name: "pendaftaranonline.approving",
              component: () => import("@/view/pages/pendaftaranonline/Approving.vue")
            },
          ]
        },   
        {
          path: "/antrian",
          component: () => import("@/view/pages/antrian/Index.vue"),
          children: [
            {
              path: "",
              name: "antrian.data",
              component: () => import("@/view/pages/antrian/Table.vue")
            },
          ]
        },    
        {
          path: "/regonline",
          component: () => import("@/view/pages/regonline/Index.vue"),
          children: [
            {
              path: "",
              name: "regonline.data",
              component: () => import("@/view/pages/regonline/Table.vue")
            },
          ]
        },     
        {
          path: "/monitoring",
          component: () => import("@/view/pages/monitoring/Index.vue"),
          children: [
            {
              path: "",
              name: "monitoring.data",
              component: () => import("@/view/pages/monitoring/Table.vue")
            },
          ]
        },  
        {
          path: "/surat",
          component: () => import("@/view/pages/surat/Index.vue"),
          children: [
            {
              path: "",
              name: "surat.data",
              component: () => import("@/view/pages/surat/Table.vue")
            },
          ]
        },
        {
          path: "/foto",
          component: () => import("@/view/pages/foto/Index.vue"),
          children: [
            {
              path: "",
              name: "foto.data",
              component: () => import("@/view/pages/foto/Table.vue")
            },
            {
              path: "terfoto",
              name: "foto.dataFoto",
              component: () => import("@/view/pages/foto/TableFoto.vue")
            },
          ]
        },
        {
          path: "/pos1",
          component: () => import("@/view/pages/pos1/Index.vue"),
          children: [
            {
              path: "",
              name: "pos1.data",
              component: () => import("@/view/pages/pos1/Table.vue")
            },
            {
              path: "pengujian/:id",
              name: "pos1.pengujian",
              component: () => import("@/view/pages/pos1/Pengujian.vue")
            },
            {
              path: "lulus",
              name: "pos1.datalulus",
              component: () => import("@/view/pages/pos1/TableLulus.vue")
            },
            {
              path: "tidaklulus",
              name: "pos1.datatidaklulus",
              component: () => import("@/view/pages/pos1/TableTidakLulus.vue")
            },
          ]
        },
        {
          path: "/pos2",
          component: () => import("@/view/pages/pos2/Index.vue"),
          children: [
            {
              path: "",
              name: "pos2.data",
              component: () => import("@/view/pages/pos2/Table.vue")
            },
            {
              path: "pengujian/:id",
              name: "pos2.pengujian",
              component: () => import("@/view/pages/pos2/Pengujian.vue")
            },
            {
              path: "lulus",
              name: "pos2.datalulus",
              component: () => import("@/view/pages/pos2/TableLulus.vue")
            },
            {
              path: "tidaklulus",
              name: "pos2.datatidaklulus",
              component: () => import("@/view/pages/pos2/TableTidakLulus.vue")
            },
          ]
        },
        {
          path: "/pos3",
          component: () => import("@/view/pages/pos3/Index.vue"),
          children: [
            {
              path: "",
              name: "pos3.data",
              component: () => import("@/view/pages/pos3/Table.vue")
            },
            {
              path: "pengujian/:id",
              name: "pos3.pengujian",
              component: () => import("@/view/pages/pos3/Pengujian.vue")
            },
            {
              path: "lulus",
              name: "pos3.datalulus",
              component: () => import("@/view/pages/pos3/TableLulus.vue")
            },
            {
              path: "tidaklulus",
              name: "pos3.datatidaklulus",
              component: () => import("@/view/pages/pos3/TableTidakLulus.vue")
            },
          ]
        },
        {
          path: "/pos4",
          component: () => import("@/view/pages/pos4/Index.vue"),
          children: [
            {
              path: "",
              name: "pos4.data",
              component: () => import("@/view/pages/pos4/Table.vue")
            },
            {
              path: "pengujian/:id",
              name: "pos4.pengujian",
              component: () => import("@/view/pages/pos4/Pengujian.vue")
            },
            {
              path: "lulus",
              name: "pos4.datalulus",
              component: () => import("@/view/pages/pos4/TableLulus.vue")
            },
            {
              path: "tidaklulus",
              name: "pos4.datatidaklulus",
              component: () => import("@/view/pages/pos4/TableTidakLulus.vue")
            },
          ]
        },
        {
          path: "/verif",
          component: () => import("@/view/pages/verif/Index.vue"),
          children: [
            {
              path: "",
              name: "verif.data",
              component: () => import("@/view/pages/verif/Table.vue")
            },
            {
              path: "pengujian/:id",
              name: "verif.pengujian",
              component: () => import("@/view/pages/verif/Pengujian.vue")
            },
            {
              path: "lulus",
              name: "verif.datalulus",
              component: () => import("@/view/pages/verif/TableLulus.vue")
            },
            {
              path: "tidaklulus",
              name: "verif.datatidaklulus",
              component: () => import("@/view/pages/verif/TableTidakLulus.vue")
            },
            {
              path: "verifikasi/:id",
              name: "verif.verifikasi",
              component: () => import("@/view/pages/verif/Verifikasi.vue")
            },
          ]
        },
        {
          path: "/datakendaraan",
          component: () => import("@/view/pages/datakendaraan/Index.vue"),
          children: [
            {
              path: "",
              name: "datakendaraan.data",
              component: () => import("@/view/pages/datakendaraan/Table.vue")
            },
            {
              path: "add",
              name: "datakendaraan.add",
              component: () => import("@/view/pages/datakendaraan/Add.vue")
            },
            {
              path: "edit/:id",
              name: "datakendaraan.edit",
              component: () => import("@/view/pages/datakendaraan/Edit.vue")
            },
          ]
        },
        {
          path: "/kuota",
          component: () => import("@/view/pages/kuota/Index.vue"),
          children: [
            {
              path: "",
              name: "kuota.data",
              component: () => import("@/view/pages/kuota/Table.vue")
            },
            {
              path: "add",
              name: "kuota.add",
              component: () => import("@/view/pages/kuota/Add.vue")
            },
            {
              path: "edit/:id",
              name: "kuota.edit",
              component: () => import("@/view/pages/kuota/Edit.vue")
            },
          ]
        },  
        {
          path: "/harilibur",
          component: () => import("@/view/pages/harilibur/Index.vue"),
          children: [
            {
              path: "",
              name: "harilibur.data",
              component: () => import("@/view/pages/harilibur/Table.vue")
            },
            {
              path: "add",
              name: "harilibur.add",
              component: () => import("@/view/pages/harilibur/Add.vue")
            },
            {
              path: "edit/:id",
              name: "harilibur.edit",
              component: () => import("@/view/pages/harilibur/Edit.vue")
            },
          ]
        },  
        {
          path: "/tandatangan",
          component: () => import("@/view/pages/tandatangan/Index.vue"),
          children: [
            {
              path: "",
              name: "tandatangan.data",
              component: () => import("@/view/pages/tandatangan/Table.vue")
            },
            {
              path: "edit/:id",
              name: "tandatangan.edit",
              component: () => import("@/view/pages/tandatangan/Edit.vue")
            },
          ]
        },
        {
          path: "/user",
          component: () => import("@/view/pages/user/Index.vue"),
          children: [
            {
              path: "",
              name: "user.data",
              component: () => import("@/view/pages/user/Table.vue")
            },
            {
              path: "add",
              name: "user.add",
              component: () => import("@/view/pages/user/Add.vue")
            },
            {
              path: "edit/:id",
              name: "user.edit",
              component: () => import("@/view/pages/user/Edit.vue")
            },
          ]
        },  
        {
          path: "/datapengujian",
          component: () => import("@/view/pages/datapengujian/Index.vue"),
          children: [
            {
              path: "",
              name: "datapengujian.data",
              component: () => import("@/view/pages/datapengujian/Table.vue")
            },
            {
              path: "add",
              name: "datapengujian.add",
              component: () => import("@/view/pages/datapengujian/Add.vue")
            },
            {
              path: "edit/:id",
              name: "datapengujian.edit",
              component: () => import("@/view/pages/datapengujian/Edit.vue")
            },
          ]
        },
        
        {
          path: "/penyerahan",
          component: () => import("@/view/pages/penyerahan/Index.vue"),
          children: [
            {
              path: "",
              name: "penyerahan.data",
              component: () => import("@/view/pages/penyerahan/Table.vue")
            },
            {
              path: "add",
              name: "penyerahan.add",
              component: () => import("@/view/pages/penyerahan/Add.vue")
            },
            {
              path: ":id",
              name: "penyerahan.edit",
              component: () => import("@/view/pages/penyerahan/Edit.vue")
            },
            {
              path: "sudah",
              name: "penyerahan.sudah",
              component: () => import("@/view/pages/penyerahan/TableSudah.vue")
            },
          ]
        },
        {
          path: "/laporan",
          component: () => import("@/view/pages/cetak/laporan/Index.vue"),
          children: [
            {
              path: "harian",
              name: "laporan.harian",
              component: () => import("@/view/pages/cetak/laporan/Daily.vue")
            },
            {
              path: "bulanan",
              name: "laporan.bulanan",
              component: () => import("@/view/pages/cetak/laporan/Monthly.vue")
            },
            {
              path: "tahunan",
              name: "laporan.tahunan",
              component: () => import("@/view/pages/cetak/laporan/Yearly.vue")
            },
            {
              path: "all",
              name: "laporan.all",
              component: () => import("@/view/pages/cetak/laporan/Fields.vue")
            },
          ]
        },
        {
          path: "/hasiluji",
          component: () => import("@/view/pages/cetak/lhp/Index.vue"),
          children: [
            {
              path: "",
              name: "hasiluji.data",
              component: () => import("@/view/pages/cetak/lhp/Table.vue")
            },
          ]
        },
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
