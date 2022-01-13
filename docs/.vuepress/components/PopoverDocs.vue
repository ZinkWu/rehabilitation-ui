<template>
  <div class="container">
    <r-popover class="mr">
      <template slot="content">content</template>
      <r-button>从上方出现</r-button>
    </r-popover>

    <r-popover position="bottom" class="mr">
      <template slot="content">content</template>
      <r-button>从下方出现</r-button>
    </r-popover>
    <r-popover position="left" class="mr">
      <template slot="content">content</template>
      <r-button>从下方出现</r-button>
    </r-popover>
    <r-popover position="right" class="mr">
      <template slot="content">content</template>
      <r-button>从下方出现</r-button>
    </r-popover>

    <r-popover class="mr" trigger="hover">
      <template slot="content">content</template>
      <r-button>hover触发</r-button>
    </r-popover>
  </div>
</template>

<script>
import Button from '../../../src/button.vue';
import Popover from '../../../src/popover.vue';
export default {
  components: {
    'r-button': Button,
    'r-popover': Popover
  }
}
</script>

<style lang="scss" scoped>
.mr {
  margin-right: 1em;
}
</style>