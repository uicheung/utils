<template>
  <div class="header_sticky">
    <slot></slot>
  </div>
</template>
<style lang="css">
.header_sticky {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
  transition: height 1s;
  -moz-transition: height 1s;
  -webkit-transition: height 1s;
  -o-transition: height 1s;
}

.sticky_ {
  width: 100%;
  position: fixed;
  position: -webkit-fixed;
  top: 0;
  z-index: 100;
}
</style>
<script>
export default {
  name: "stickyHeader",
  computed: {
    randomId: function() {
      return (
        "randomId_" +
        Number(
          Math.random()
            .toString()
            .substr(3, 3) + Date.now()
        ).toString(36)
      );
    },
    targetElement_: function() {
      return this.$el;
    }
  },
  mounted() {
    this.$refs.sticky_.sticky_();
  },
  watch: {
    oldToNew(newVal, oldVal) {
      if (newVal.length !== oldVal.length) {
        this.$refs.sticky_.sticky_();
      }
    }
  },
  methods: {
    // css: 用于替换的css样式; (一般用默认的)
    sticky_(css = "sticky_") {
      if (
        CSS.supports("position", "sticky") ||
        CSS.supports("position", "-webkit-sticky")
      ) {
        console.log(">>>>>>>>> sticky is supported");
      } else {
        let newNodeTop;
        let header = this.targetElement_;
        if (document.getElementById(this.randomId)) {
          newNodeTop = document.getElementById(this.randomId);
        } else {
          newNodeTop = document.createElement("div");
          newNodeTop.id = this.randomId;
          header.parentNode.insertBefore(newNodeTop, header);
          header.classList.add(css);
        }

        setTimeout(() => {
          let height = header.offsetHeight + 1; //高度 + 1 以防有小数点
          newNodeTop.style.height = height + "px";
        }, 0);
      }
    }
  }
};
</script>