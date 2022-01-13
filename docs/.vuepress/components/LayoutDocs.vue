<template>
  <div>
    <div class="container">
      <r-layout>
        <r-header class="bg-header">header</r-header>
        <r-layout>
          <r-sider class="bg-sider">sider</r-sider>
          <r-content class="bg-content">content</r-content>
        </r-layout>
        <r-footer class="bg-footer">footer</r-footer>
      </r-layout>
    </div>
    <p></p>
    <div class="container">
      <r-layout>
        <r-header class="bg-header">header</r-header>
        <r-content class="bg-content">content</r-content>
        <r-footer class="bg-footer">footer</r-footer>
      </r-layout>
    </div>
  </div>
</template>

<script>
import Layout from '../../../src/layout/layout.vue';
import Header from '../../../src/layout/header.vue';
import Sider from '../../../src/layout/sider.vue';
import Content from '../../../src/layout/content.vue';
import Footer from '../../../src/layout/footer.vue';
export default {
  components: {
    'r-layout': Layout,
    'r-header': Header,
    'r-sider': Sider,
    'r-content': Content,
    'r-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 200px;
  margin-bottom: 20px;
}
.bg-header.bg-footer {
  background-color: #b3c0d1;
}
.bg-content {
  background-color: #e9eef3;
}
.bg-sider {
  background-color: #d3dce6;
  width: 10em;
}
</style>