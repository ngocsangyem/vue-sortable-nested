<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div
        class="item-head"
        :class="{
          hasChildren: hasChildren(el),
          'is-show': hasChildren(el) && isShow,
        }"
        @click="isShow = !isShow"
      >
        {{ el.name }}
      </div>
      <template v-if="isShow">
        <nested-element class="item-sub" :list="el.children" />
      </template>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: 'NestedElement',
  components: {
    draggable,
  },
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
  },
  data() {
    return {
      isShow: false,
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
    emitter(value) {
      this.$emit('input', value);
    },
    hasChildren(item) {
      return item.children && item.children.length > 0;
    }
  },
};
</script>

<style scoped>
.item-container {
  text-align: left;
}

.item-head {
  padding: 6px 16px;
  border-radius: 6px;
  background-color: #2ecc71;
  color: #fff;
  margin-bottom: 10px;
  position: relative;
}

.item-sub {
  margin-left: 1rem;
}

.item-head.hasChildren::after {
  content: '+';
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}

.item-head.hasChildren.is-show::after {
  content: '-';
}
</style>
