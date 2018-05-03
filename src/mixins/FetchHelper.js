export default {
  methods: {
    fetchData(done) {
      const url = this.fetchUrl;
      if (!url) return;

      let cached = this.$ls.get(url);
      if (cached) {
        this.fetchedData = cached;
      }

      this.isLoadDisabled = true;

      this.axios.get(url)
        .then(response => {
          if (typeof done === 'function') done();
          this.isLoadDisabled = false;

          if (JSON.stringify(response.data) === JSON.stringify(this.fetchedData)) return;

          this.fetchedData = response.data;
          this.$ls.set(url, response.data);
        })
        .catch(e => {
          if (typeof done === 'function') done();

          this.errors.push(e);
          this.isLoadDisabled = false;
        });
    },
    loadPagination() {
      const url = this.pagiUrl;
      if (!url) return;

      this.isLoadDisabled = true;
      this.axios.get(url)
        .then(response => {
          response.data.forEach((item) => {
            this.fetchedData.list ? this.fetchedData.list.push(item) : this.fetchedData.push(item);
          });
          this.isLoadDisabled = false;
        })
        .catch(e => {
          this.errors.push(e);
          this.isLoadDisabled = false;
        });
    }
  },
  mounted() {
    this.fetchData();
    this.$parent.$on('pullToRefresh:refresh', (done) => {
      this.fetchData(done);
    })
  }
}