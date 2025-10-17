<template>
  <ul class="menu-nav">
    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/vue-bootstrap') }"
      v-if="user.role == 'PETUGAS' || user.role == 'ADMIN'"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> Master Data </span>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Master </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/tandatangan"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Setting Tanda Tangan </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/user"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                  v-if="user.role == 'ADMIN'"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> User </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/vue-bootstrap') }"
      v-if="user.role == 'PETUGAS' || user.role == 'ADMIN'"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> Kuota </span>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Set Kuota </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/kuota"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Kuota </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/harilibur"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Hari Libur </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  user: [],
  created() {
    this.user = this.$store.state.profile.user_personal_info;
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
