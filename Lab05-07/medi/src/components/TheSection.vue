<template>
  <div :class="$style.section_main">
    <Section1 :itemData1="sectionData1"/>
    <Section2 :itemData2="sectionData2"/>
  </div>
</template>

<script>
import Section1 from '@/components/TheSection1.vue'
import Section2 from '@/components/TheSection2.vue'
export default{
  name: "Section",
  components: {
    Section1 : Section1,
    Section2 : Section2,
  },
  props:{
    sectionData1:{
      type: Object,
      default: () => {}
    },
    sectionData2:{
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" module>
.section_main{
  background-color: #FFFFFF;
  width:1296px;
  height:580px;
  display:inline-flex;
  margin-top:80px;
  justify-content: space-between;
}
</style>