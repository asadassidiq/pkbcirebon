<template>
  <div>
    <div class="form-group">
      <label for>Nama</label>
      <input
        type="text"
        class="form-control"
        disabled
        v-model="tandatangan.name"
      />
    </div>
    <div class="form-group">
      <label for>Tanda Tangan</label>
      <select id="userSelect" class="form-control" style="width: 100%;" v-model="tandatangan.user_id">
      <option disabled value="">-- pilih user --</option>
      <option v-for="user in users" :key="user.uuid" :value="user.uuid">
        {{ user.name }}
      </option>
    </select>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("tandatangan", {
      tandatangan: state => state.tandatangan,
      users: state => state.users
    }),
  },
  methods: {
    ...mapMutations("tandatangan", ["CLEAR_FORM"]),
    ...mapActions("tandatangan", ["getUsers"]),
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
    this.getUsers();
  },
  components: {
  },
};
</script>