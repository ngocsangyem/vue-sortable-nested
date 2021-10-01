<template>
  <div class="nested-container">
    <tree
      class="nested-element nested-col"
      v-model="elements"
      group="testgroup"
    ></tree>
    <raw-displayer
      class="nested-displayer nested-col"
      :title="'Vuex Store'"
      :value="elements"
    />
  </div>
</template>

<script>
import RawDisplayer from "./RawDisplayer";
import Tree from "./Tree";

export default {
  name: "Nested",
  components: {
    "raw-displayer": RawDisplayer,
    tree: Tree,
  },
  computed: {
    elements: {
      get() {
        return this.$store.state.nestedModule.elements;
      },
      set(value) {
        this.$store.dispatch("nestedModule/updateElements", value);
      },
    },
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.nested-container {
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.nested-col {
  max-width: 50%;
  flex: 0 0 40%;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
