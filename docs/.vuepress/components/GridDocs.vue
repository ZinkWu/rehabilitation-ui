<template>
  <div>
    <r-row class="r-row">
      <r-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="12">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="8">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
      <r-col :span="8">
        <div class="grid-content bg-purple"></div>
      </r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="6">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
      <r-col :span="6">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="4">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
      <r-col :span="4">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
      <r-col :span="4">
        <div class="grid-content bg-purple"></div>
      </r-col>
      <r-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </r-col>
    </r-row>
  </div>
</template>

<script>
import Col from '../../../src/grid/col.vue';
import Row from '../../../src/grid/row.vue';
export default {
  components: {
    'r-row': Row,
    'r-col': Col
  }
}
</script>

<style lang="scss" scoped>
.r-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.r-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>