<template>
  <div class="home">
  <Header :headerItemData="headerItems"/>
  <Navbar :navitem="menuItems"/>
  <Slider :sliderData="sliderItems"/>
  <ButtonsBlock :buttonitem="buttonItems"/>
  <Section :sectionData1="SectionItems1"
           :sectionData2="SectionItems2"/>
  <News :news="newsItems"/>
  <SpecialOffers :specData1="SpecialOffersItems"/>
  <About :aboutData1="AboutItems"
         :contactsData="ContactsItem"/>
  <Footer :footerItemData="footerItems"/>
  <div @click="goUp" class="btn_up" v-if="windowTop > 600"><img :src="require('@/assets/arrow-up.svg')" alt=""></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/TheHeader.vue';
import Navbar from '@/components/TheNavbar.vue';
import Slider from '@/components/Slider.vue';
import ButtonsBlock from '@/components/TheButtonsBlock.vue';
import Section from '@/components/TheSection.vue';
import SpecialOffers from '@/components/TheSpecialOffers.vue';
import News from '@/components/News.vue';
import About from '@/components/TheAbout.vue';
import Footer from '@/components/TheFooter.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header : Header,
    Navbar : Navbar,
    Slider : Slider,
    ButtonsBlock : ButtonsBlock,
    Section : Section,
    SpecialOffers : SpecialOffers,
    News : News,
    About : About,
    Footer : Footer,
  },
  data() {
    return {
      windowTop: 0,
      headerItems: {
        img: 'logo1.svg', phone: '+7 (123) 456 78 90', but_name1: 'Наши салоны', but_img1: 'Group_1.svg',
        but_name2: 'Версия для слабовидящих', but_img2: 'simple-line-icons_eye.svg',
        social_img: ['vk.svg', 'youtube.svg', 'facebook.svg', 'instagram.svg']
      },
      menuItems:[
        {id: 1, name: 'Косметология'},
        {id: 2, name: 'Пластическая хирургия'},
        {id: 3, name: 'Стоматология'},
        {id: 4, name: 'Лазерная медицина'},
        {id: 5, name: 'Контакты'}
      ],
      sliderItems: [
        {id: 1, name: 'Косметология', description: 'Современный мир диктует новые каноны жизни: ' +
              'ухоженное лицо и тело, стройная, подтянутая фигура — сегодня это неотъемлемые черты привлекательной ' +
              'внешности, характеризующие человека благополучного и успешного.', img: 'Cosmetology.png'},
        {id: 2, name: 'Пластическая хирургия', description: 'Современный мир диктует новые каноны жизни: ' +
              'ухоженное лицо и тело, стройная, подтянутая фигура — сегодня это неотъемлемые черты привлекательной ' +
              'внешности, характеризующие человека благополучного и успешного.', img: 'PlasticSurgery.png'},
        {id: 3, name: 'Стоматология',  description: 'Современный мир диктует новые каноны жизни: ' +
              'ухоженное лицо и тело, стройная, подтянутая фигура — сегодня это неотъемлемые черты привлекательной ' +
              'внешности, характеризующие человека благополучного и успешного.', img: 'Dentistry.png'},
        {id: 4, name: 'Лазерная медицина', description: 'Современный мир диктует новые каноны жизни: ' +
              'ухоженное лицо и тело, стройная, подтянутая фигура — сегодня это неотъемлемые черты привлекательной ' +
              'внешности, характеризующие человека благополучного и успешного.', img: 'LaserMedicine.png'}
      ],
      buttonItems: [
        {id: 1, name: 'Комплексные процедуры'},
        {id: 2, name: 'Центр обучения'},
        {id: 3, name: 'VIP клиентам'},
      ],
      SectionItems1:
          { buttonName: 'Инновации', description: 'Мы практикуем новый курс ' +
                'процедур аппаратной ' + 'косметологии', img: 'innovations__img.png'},
      SectionItems2:
          {
            buttonName: 'Эстетика красоты', description_num1: 78, description1:'Современных центра ' +
                'в странах СНГ', description_num2: 20, description2:'Уникальных патентов ' +
                'в области косметологии', img: 'patent.svg'
          },
      newsItems: [
        {id: 1, title: 'Почему рекомендуется посещать профессионального косметолога. Мнение специалистов центра',
          descriptionItems: ['Процедуры аппаратной косметологии на оборудовании экспертного класса ' +
          'от ведущих мировых производителей могут проводиться в любом возрасте и решать широкий спектр проблем: ' +
          'возрастные изменения, покраснения, акне и купероз, потеря тонуса и упругости кожи, отечность, целлюлит ' +
          'и т. п.', 'С помощью инъекционных методик мы можем разгладить морщины, провести объёмное моделирование, ' +
          'увлажнить кожу, ввести активные вещества в поверхностные и средние слои кожи, запустить процессы ' +
          'омоложения.', 'Лазерное и фотоомоложение помогут запустить процесс синтеза собственного коллагена, ' +
          'улучшить светооптические свойства кожи, а также получить максимальный эффект подтяжки лица без уколов ' +
          'и длительного восстановительного периода.', 'Курс процедур лазерной эпиляции поможет навсегда избавиться' +
          ' от проблемы нежелательных волос.'], isActive: true},
        {id: 2, title: 'Стандартизация деятельности клиник в соответствии с ISO 9001:2015.', descriptionItems:
              ['Настоящий международный стандарт основан на принципах менеджмента качества, ' +
              'описанных в ISO 9000. Их описание включает в себя формулировку каждого принципа, ' +
              'обоснование того, почему этот принцип является важным для организации, некоторые ' +
              'примеры выгод, связанных с этим принципом, и примеры типичных действий по улучшению ' +
              'показателей деятельности организации при использовании этого принципа', 'Требования к системам ' +
              'менеджмента качества, установленные настоящим стандартом, являются дополнительными к требованиям ' +
              'к продукции и услугам.'], isActive: false},
        {id: 3, title: 'Индивидуальный подход к каждому пациенту и подбор оптимальных косметологических методик.',
          descriptionItems: ['Задача современной косметологии не в точечном решении проблемы какой-то одной области, ' +
          'а комплексная работа над решением эстетических дефектов и гармонизацией лица в комплексном подходе.',
            'Задача врача-косметолога – не решать проблемы локально. Его основная задача – подчеркнуть уникальные ' +
            'черты лица, сделать их гармоничнее, а пациента естественно молодым и уверенным в себе.', 'На консультации ' +
            'мы изучаем индивидуальные особенности пациента, определяем тип возрастных изменений, подбираем процедуры ' +
            'с учетом показаний и противопоказаний'], isActive: false}
      ],
      SpecialOffersItems:[
        {id: 1, buttonName: 'Косметология', description: 'Лазерное и фотоомоложение', img: 'Cosmetology_small.png'},
        {id: 2, buttonName: 'Косметология', description: 'Лазерное и фотоомоложение', img: 'Dentistry_small.png'},
        {id: 3, buttonName: 'Косметология', description: 'Лазерное и фотоомоложение', img: 'PlasticSurgery_small.png'},
        {id: 4, buttonName: 'Косметология', description: 'Лазерное и фотоомоложение', img: 'LaserMedecine_small.png'},
      ],
      AboutItems:[
        {id:1, title: 'Услуги', description:['Косметология', 'Пластическая хирургия', 'Стоматология', 'Лазерная медицина']},
        {id:2, title: 'Услуги', description:['Косметология', 'Пластическая хирургия', 'Стоматология', 'Лазерная медицина']},
        {id:3, title: 'Услуги', description:['Косметология', 'Пластическая хирургия', 'Стоматология', 'Лазерная медицина']},
        {id:4, title: 'Услуги', description:['Косметология', 'Пластическая хирургия', 'Стоматология', 'Лазерная медицина']},
        {id:5, title: 'Услуги', description:['Косметология', 'Пластическая хирургия', 'Стоматология', 'Лазерная медицина']},
        {id:6, title: 'Услуги', description:['Косметология', 'Пластическая хирургия', 'Стоматология', 'Лазерная медицина']},
      ],
      ContactsItem:[
        {id: 1, title: 'Телефон', phone: '+7 (812) 123-45-67'},
        {id: 2, title: 'Адрес', address: 'Невский пр.140, пом. 10'},
        {id: 3, title: 'Адрес', address: 'Большой пр.12'},
      ],
      footerItems: {
        descript1: ['(c) 2021. Центр космелогии. Все права защищены.',
        'Наши сертификаты на осуществление деятельности.',
        'Патенты на использование технологий.'],
          descript2: 'Политика конфиденциальности',
          but_name2: 'Версия для слабовидящих', but_img2: 'simple-line-icons_eye.svg',
          social_img: ['vk.svg', 'youtube.svg', 'facebook.svg', 'instagram.svg']
    }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e : any) : void {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    goUp() : void {
      scrollTo({top: 0, behavior: "smooth"});
    }
  }
});
</script>

<style lang="scss">
@font-face {
  font-family: 'Gilroy-Medium';
  src: url('@/assets/fonts/gilroy-medium.eot'),
  url('@/assets/fonts/gilroy-medium.woff2') format('woff2'),
  url('@/assets/fonts/gilroy-medium.woff') format('woff'),
  url('@/assets/fonts/gilroy-medium.ttf') format('truetype');
}
* {
  margin: 0;
}
#app {
  font-family: Gilroy-Medium, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  scroll-behavior: smooth;
}
.home {
  .btn_up {
    position: fixed;
    left: 1400px;
    bottom: 130px;
    width: 60px;
    height: 60px;
  }
}
</style>
