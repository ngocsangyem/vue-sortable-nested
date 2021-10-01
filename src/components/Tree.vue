<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    :group="group"
    @start="drag = true"
    @end="drag = false"
    @input="updateValue"
  >
    <tree-node
      v-for="el in realValue"
      :key="el.id"
      :value="el"
      :group="group"
      :rowKey="rowKey"
      @input="updateItem"
    >
    </tree-node>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import TreeNode from './TreeNode.vue';
export default {
  name: 'Tree',
  props: {
    value: {
      required: false,
      type: Array,
      default: null,
    },
    list: {
      required: false,
      type: Array,
      default: null,
    },
    group: {
      type: String,
      default: null,
    },
    rowKey: {
      type: String,
      default: 'name',
    },
  },
  components: {
    draggable,
    'tree-node': TreeNode,
  },
  data() {
    return {
      isDrag: false,
      localValue: [...this.value],
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    },
  },
  methods: {
    updateValue(value) {
      this.localValue = value;
      this.$emit('input', this.localValue);
    },
    updateItem(itemValue) {
      const index = this.localValue.findIndex(
        (v) => v[this.rowKey] === itemValue[this.rowKey]
      );
      this.$set(this.localValue, index, itemValue);
      this.$emit('input', this.localValue);
    },
  },
};
</script>

<style lang="css" scoped>
.item-container {
  text-align: left;
}

.item-sub {
  margin-left: 10px;
}
</style>
