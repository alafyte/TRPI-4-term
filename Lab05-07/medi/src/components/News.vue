<template>
  <section class="news">
    <section class="list-news">
        <p class="title">Новости</p>
      <div class="titles">
          <a v-for="item in news" :key="item.id" @click="choose(item.id)" :class="{'active': item.isActive}">
            <span>{{item.title}}</span>
          </a>
      </div>
    </section>
    <section class="news-description">
      <p >{{news[activeTab].title}}</p>
      <ul class="descriptions">
        <li v-for="desc in news[activeTab].descriptionItems">
          {{desc}}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: "News",
  props: {
    news: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: 0
    }
  },
  methods: {
    choose(id) {
      this.news[this.activeTab].isActive = false;
      this.activeTab = id - 1;
      this.news[this.activeTab].isActive = true;
    }
  }
}
</script>

<style scoped lang="scss">
.news {
  text-align: left;
  width: 1296px;
  height: 558px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
}
.active {
  background-color: #00868A;
}
.list-news {
  width: 526px;
  background-color: #4FBFA5;
  padding-top: 35px;
  .title {
    display: flex;
    width: 101px;
    height: 40px;
    background-color: #00868A;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 21.19px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 30px;
    margin-left: 42px;
  }
  .titles {
    list-style-type: none;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      text-align: left;
      width: 526px;
      height: 151px;
      transition: background-color 0.4s ease;
      span {
        font-size: 18px;
        line-height: 150%;
        margin: 40px 35px;
        color: #FFFFFF;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
.news-description {
  width: 770px;
  height: 558px;
  background: #E6F3F4;
  p {
    width: 650px;
    height: 72px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #000000;
    margin-left: 60px;
    margin-top: 35px;
    margin-bottom: 25px;
  }
  .descriptions {
    list-style-image: url(@/assets/marker.svg);
    li {
      color: #000000;
      margin-left: 35px;
      width: 650px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      padding-left: 15px;
      padding-bottom: 10px;
      &::marker {
        font-size: 13px;
      }
    }

  }
}
</style>