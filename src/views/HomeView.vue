<template>
  <div>
    <CoinBalance :coins="coinCounter" />
    <div class="text-center mt-10">
      <div class="image-holder mx-auto">
        <div @click="tap($event)" id="butt"></div>
      </div>

      <div class="mx-auto mt-10 pt-5">
        <v-progress-linear model-value="40" class="mt-2 w-75 mx-auto" style="border-radius:50px"
          :height="10"></v-progress-linear>
        <div class="d-flex justify-space-between align-center mt-3  w-75 mx-auto">
          <div class="text-left">
            <v-icon icon="mdi-circle" color="yellow-accent-4" size="small"></v-icon> <span>6000/10000</span>
          </div>
          <div class="mt-3 text-right">
          </div>
          <v-btn @click="boostSheet = true" class="text-body-2" elevation="0" size="small" rounded="xl"
            variant="text">Boost
            <template v-slot:prepend>
              <v-icon icon="mdi-rocket" color="yellow-accent-4"></v-icon>
            </template>
          </v-btn>
        </div>
      </div>
    </div>
    <v-bottom-sheet v-model="boostSheet" class="elevation-0">
      <v-card class="pa-5" color="purple-darken-4">Boost</v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
import CoinBalance from './../components/CoinBalance.vue';
import { useCounterStore } from './../stores/counter';
import { mapStores } from 'pinia'

export default {
  data() {
    return {
      boostSheet: false,
      coinCounter: 0,
    }
  },

  computed: {
    ...mapStores(useCounterStore)
  },
  mounted() {

    if (!useCounterStore.coins) {
      if (!localStorage.coins) {
        localStorage.coins = useCounterStore.coins = 0
        this.coinCounter = 0
      } else {
        useCounterStore.coins = localStorage.coins
        this.coinCounter = localStorage.coins
      }
    }


    // this.totalCoins = useCounterStore.coins
    // console.log(this.counterStore.coins);
    this.coinCounter = this.counterStore.coins
    // useCounterStore.$subscribe(() => {
    //   console.log(1);
    // })
  },
  methods: {

    tap(event) {
      let x = event.clientX
      let y = event.clientY


      // console.log(event);
      // console.log(event.clientY);


      this.$emit('addedCoin')
      setTimeout(() => {
        this.clicked = false;
      }, 300)

      let btn = document.getElementById('butt');

      var plus = document.createElement('div')
      var text = document.createTextNode('+1')
      plus.appendChild(text);

      plus.style.animation = 'sup 1.5s ease'
      plus.style.left = x + 'px'
      plus.style.top = y + 'px'
      plus.style.height = '40px'
      plus.classList.add('plus')
      plus.classList.add('text-h4')
      plus.classList.add('font-weight-bold')

      this.coinCounter += 1
      localStorage.coins = useCounterStore.coins = this.coinCounter

      btn.appendChild(plus);
      setTimeout(() => {
        plus.remove()
      }, 1000);
    }
  },
  components: {
    CoinBalance
  }
}
</script>

<style>
.image-holder {
  width: 220px;
  height: 220px;
  overflow: visible;
}

#butt {
  overflow: visible;
  transition: all .1s linear;
  /* -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important; */
  background: url("./../../public/BLACK_TOKEN-01.png");
  background-repeat: no-repeat;
  height: 100%;
  background-size: contain;
  background-position: center;
  margin: auto;
}

#butt:active {
  /* transform: scale(.95); */
  width: 210px;
  margin: auto;
}


.plus {
  position: absolute;
  width: 40px;
  z-index: 100;
  left: 50px;
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* left: calc(112px - 20px); */
}

@keyframes sup {
  0% {
    opacity: 1;
    transform: translateY(0px)
  }

  100% {
    opacity: 0;
    transform: translateY(-150px)
  }
}
</style>