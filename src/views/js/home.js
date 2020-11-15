import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      isLoadingData: false
    };
  },
  computed: {
    ...mapGetters("appStore", ["getAppData"])
  },
  created() {
    this.isLoadingData = true;
    this.$store.dispatch("appStore/GET_APP_DATA", {
      success: this.fetchSuccess,
      fail: this.fetchFailed
    });
  },
  methods: {
    fetchSuccess(data) {
      this.isLoadingData = false;
      console.log("fetchSuccess:", data);
    },
    fetchFailed(data) {
      this.isLoadingData = false;
      console.log("fetchFailed:", data);
    }
  }
};
