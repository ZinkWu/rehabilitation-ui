<template>
  <div>
    <r-tabs :selected="selected">
      <r-tabs-nav>
        <r-tabs-item name="1">tab 1</r-tabs-item>
        <r-tabs-item name="2" disabled>tab 2</r-tabs-item>
        <r-tabs-item name="3">tab 3</r-tabs-item>
      </r-tabs-nav>

      <r-tabs-body>
        <r-tabs-panels name="1">内容1</r-tabs-panels>
        <r-tabs-panels name="2">内容2</r-tabs-panels>
        <r-tabs-panels name="3">内容3</r-tabs-panels>
      </r-tabs-body>
    </r-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs/tabs.vue';
import TabsNav from '../../../src/tabs/tabs-nav.vue';
import TabsItem from '../../../src/tabs/tabs-item.vue';
import TabsBody from '../../../src/tabs/tabs-body.vue';
import TabsPanels from '../../../src/tabs/tabs-panels.vue';
export default {
  components: {
    'r-tabs': Tabs,
    'r-tabs-nav': TabsNav,
    'r-tabs-item': TabsItem,
    'r-tabs-body': TabsBody,
    'r-tabs-panels': TabsPanels
  },
  data(){
    return {
      selected: '1'
    }
  }
}
</script>

