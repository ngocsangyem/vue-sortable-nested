<template>
  <div class="item-group">
    <div
      class="item-head"
      :class="{
        hasChildren: hasChildren,
        'is-active': hasChildren && isShow,
      }"
      @click="isShow = !isShow"
    >
      {{ value.name }}
    </div>
    <template v-if="isShow">
      <draggable
        :value="value.children"
        v-bind="dragOptions"
        @input="updateValue"
        tag="div"
        :group="group"
        @start="isDrag = true"
        @end="isDrag = false"
      >
        <tree-node
          v-for="(item, index) in value.children"
          :key="index"
          :value="item"
          :group="group"
          :rowKey="rowKey"
          @input="updateChildValue"
          class="item-sub"
        >
          <span>{{ item.name }}</span>
        </tree-node>
      </draggable>
    </template>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: 'TreeNode',
  props: {
    value: {
      type: Object,
      default: () => ({
        name: '',
        children: [],
      }),
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
  },
  data() {
    return {
      isShow: false,
      isDrag: false,
      localValue: Object.assign({}, this.value),
    };
  },
  computed: {
    hasChildren() {
      return this.value.children != null && this.value.children.length > 0;
    },
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
  watch: {
    value(value) {
      this.localValue = Object.assign({}, value);
    },
  },
  methods: {
    updateValue(value) {
      if (Array.isArray(value)) {
        this.localValue.children = [...value];
        this.$emit('input', this.localValue);
      }
    },
    updateChildValue(value) {
      const index = this.localValue.children.findIndex(
        (c) => c[this.rowKey] === value[this.rowKey]
      );
      this.$set(this.localValue.children, index, value);
      this.$emit('input', this.localValue);
    },
  },
};
</script>

<style lang="css" scoped>
.item-head {
  padding: 6px 16px;
  border-radius: 6px;
  background-color: #2ecc71;
  color: #fff;
  margin-bottom: 10px;
  position: relative;
}

.item-sub {
  margin-left: 10px;
}

.item-head.hasChildren::after {
  content: '+';
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}

.item-head.hasChildren.is-active::after {
  content: '-';
}
</style>
