
<template>
  <div class="disqus_border">
    <Disqus shortname="https-samamy888-github-io-blog" />
  </div>
</template>
<style>
.disqus_border {
  padding: 1.2em;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
}
</style>
<script>
import { Disqus } from "vue-disqus";
export default {
  name: "Disqus_V2",
  components: {
    Disqus
  }
};
</script>>