<template>
  <ul class="menu-nav">

    <!-- <router-link
      to="/builder"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Layout Builder</span>
        </a>
      </li>
    </router-link> -->

    <router-link
      to="/pendaftaran"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.pf == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-setup"></i>
          <span class="menu-text">Pendaftaran</span>
        </a>
      </li>
    </router-link>

    <!-- <router-link
      to="/pendaftaranonline"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.pf == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-event-calendar-symbol"></i>
          <span class="menu-text">Pendaftaran Online</span>
        </a>
      </li>
    </router-link> -->

    <router-link
      to="/datakendaraan"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.pf == true || user.v1 == true || user.v2 == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-lorry"></i>
          <span class="menu-text">Datakendaraan</span>
        </a>
      </li>
    </router-link>    

    <!-- <router-link
      to="/antrian"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.pf == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-setup"></i>
          <span class="menu-text">Antrian</span>
        </a>
      </li>
    </router-link> -->


    <router-link
      to="/penyerahan"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.pf == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-file-2"></i>
          <span class="menu-text">Penyerahan
            <div class="blink" v-if="notif.penyerahan > 0">
              <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.penyerahan }}</span></span>
            </div>
          </span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/surat"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.ct == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-paper"></i>
          <span class="menu-text">Persuratan
            <div class="blink" v-if="notif.surat > 0">
              <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.surat }}</span></span>
            </div>
          </span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/datapengujian"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.ct == true"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-technology"></i>
          <span class="menu-text">Blue Cetak
            <div class="blink" v-if="notif.cetak > 0">
              <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.cetak }}</span></span>
            </div>
          </span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/foto')
      }"
      v-if="user.ft == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-photo-camera"></i>
        <span class="menu-text">Foto Kendaraan
            <div class="blink" v-if="notif.foto > 0">
              <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.foto }}</span></span>
            </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Foto Kendaraan</span>
            </span>
          </li>

          <router-link
            to="/foto"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Belum Foto</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/foto/terfoto"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Sudah Foto</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos1')
      }"
      v-if="user.p1 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Uji Visual
          <div class="blink" v-if="notif.pos1 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos1 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Uji Visual</span>
            </span>
          </li>

          <router-link
            to="/pos1"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos1/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos1/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos2')
      }"
      v-if="user.p2 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Kebisingan
          <div class="blink" v-if="notif.pos2 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos2 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Emisi</span>
            </span>
          </li>

          <router-link
            to="/pos2"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos2/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos2/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos3')
      }"
      v-if="user.p3 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Emisi
          <div class="blink" v-if="notif.pos3 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos3 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Speedometer</span>
            </span>
          </li>

          <router-link
            to="/pos3"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos3/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos3/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
    
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos4')
      }"
      v-if="user.p4 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Lampu
          <div class="blink" v-if="notif.pos4 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos4 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Bagian Bawah</span>
            </span>
          </li>

          <router-link
            to="/pos4"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos4/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos4/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos5')
      }"
      v-if="user.p5 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Sideslip
          <div class="blink" v-if="notif.pos5 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos5 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Kebisingan</span>
            </span>
          </li>

          <router-link
            to="/pos5"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos5/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos5/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos6')
      }"
      v-if="user.p6 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Timbangan
          <div class="blink" v-if="notif.pos6 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos6 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Rem</span>
            </span>
          </li>

          <router-link
            to="/pos6"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos6/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos6/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos7')
      }"
      v-if="user.p7 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Rem
          <div class="blink" v-if="notif.pos7 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos7 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Sideslip</span>
            </span>
          </li>

          <router-link
            to="/pos7"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos7/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos7/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/pos8')
      }"
      v-if="user.p8 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Speedometer
          <div class="blink" v-if="notif.pos8 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.pos8 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Lampu</span>
            </span>
          </li>

          <router-link
            to="/pos8"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos8/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/pos8/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <router-link
      to="/monitoring"
      v-slot="{ href, navigate, isActive, isExactActive }"
      v-if="user.v1 == true || user.v2 == true || user.role == 'KEPALA UPT'"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-setup"></i>
          <span class="menu-text">Monitoring</span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/verif')
      }"
      v-if="user.v1 == true"

    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-safe"></i>
        <span class="menu-text">Verif 
          <div class="blink" v-if="notif.verif1 > 0">
            <span><span style="margin-left: 2px;" class="label label-sm label-rounded label-danger">{{ notif.verif1 }}</span></span>
          </div>
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Verif</span>
            </span>
          </li>

          <router-link
            to="/verif"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Datakendaraan Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/verif/lulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Lulus</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/verif/tidaklulus"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Tidak Lulus</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/cetak')
      }"
      v-if="user.ct == true || user.v1 == true || user.v2 == true"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-list-2"></i>
        <span class="menu-text">Cetak
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Cetak</span>
            </span>
          </li>

          <router-link
            to="/hasiluji"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Hasil Uji</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/laporan/harian"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Laporan Harian</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/laporan/bulanan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Laporan Bulanan</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/laporan/tahunan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Laporan Tahunan</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

  </ul>
</template>

<script>
import { mapState, mapMutations, mapActions,mapGetters } from "vuex";
export default {
  name: "KTMenu",
  data() {
      return {
        user: [],
      }
  },
  created() {
    this.user = this.$store.state.profile.user_personal_info;
    const dataNotif = JSON.parse(window.localStorage.getItem('notifPKB'));
    this.notif = dataNotif;
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
  computed: {
    ...mapGetters(["notif"]),
    ...mapState({
      notif: state =>state.auth.notif
    }),
  }
};
</script>
