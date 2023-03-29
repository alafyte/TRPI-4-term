<template>
  <div :class="$style.about">
    <div :class="$style.about_cont">
      <AboutComponent v-for="ab in aboutData1" :key="ab.id" :aboutItemData="ab"/>
    </div>
    <ContactsComponent :contactsItemData="contactsData"/>
  </div>
</template>

<script>
import AboutComponent from '@/components/TheAbout_c.vue';
import ContactsComponent from '@/components/TheContacts.vue';
export default {
  name: "About",
  components: {
    AboutComponent: AboutComponent,
    ContactsComponent : ContactsComponent,
  },
  props: {
    aboutData1: {
      type: Array,
      default: () => []
    },
    contactsData: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style lang="scss" module>
.about{
  display: flex;
  justify-content: space-between;
  width:1296px;
  height: 401px;
  margin: 100px auto 79px auto;
  .about_cont{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 903px;
  }
}
</style>