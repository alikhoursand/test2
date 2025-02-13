<template>
  <div>
    <div class="text-center text-h4 font-weight-bold mt-15">Tasks</div>

    <div class="text-center mt-10 pr-3 pl-3">

      <div class="pa-2 border rounded-lg">
        <v-tabs v-model="tab" grow slider-color="white" color="white">
          <v-tab value="daily" class="font-weight-bold text-body-1">Daily</v-tab>
          <v-tab value="specials" class="font-weight-bold text-body-1">Specials</v-tab>
          <v-tab value="refs" class="font-weight-bold text-body-1">Ref Tasks</v-tab>
        </v-tabs>
      </div>


      <v-tabs-window v-model="tab" class="mt-3 mb-5">

        <v-tabs-window-item value="daily">
          <div class="mt-5 d-flex justify-space-between align-center">
            <v-btn icon="mdi-check" color="success"></v-btn>
            <v-btn icon="mdi-help" variant=outlined color="white"></v-btn>
            <v-btn icon="mdi-help" variant=outlined color="white"></v-btn>
            <v-btn icon="mdi-help" variant=outlined color="white"></v-btn>
            <v-btn icon="mdi-help" variant=outlined color="white"></v-btn>
            <v-btn icon="mdi-help" variant=outlined color="white"></v-btn>
            <v-btn icon="mdi-help" variant=outlined color="white"></v-btn>
          </div>
          <!-- <v-btn text="claim" color="success" class="mt-5"  block rounded="xl" size="large" append-icon="mdi-circle-multiple"></v-btn> -->
          <v-btn text="15:19:46" color="grey-darken-2" class="mt-5" disabled block rounded="xl" size="large" ></v-btn>
          <div class="mt-5">
            <v-date-picker width=" 100%" rounded="xl"></v-date-picker>
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="specials">
          <v-card class="mt-3 text-left " v-for="x in 10" rounded="xl" elevation="0">
            <template v-slot:title>
              <span>Join Our Socials</span>
            </template>
            <template v-slot:prepend>
              <v-icon icon="mdi-clipboard-check" color="primary" size="x-large"></v-icon>
            </template>
            <template v-slot:text>
              <div class="d-flex align-center">
                <v-icon icon="mdi-circle" color="yellow-accent-4"></v-icon>
                <span class="text-body-2 pl-2">300 000</span>
              </div>
            </template>
            <template v-slot:append>
              <v-icon icon="mdi-check" color="success" size="x-large"></v-icon>
            </template>
            <template v-slot:actions>
              <v-btn color="primary" variant="flat" rounded="xl"
                style="background:linear-gradient(45deg, rgba(88,51,237,1) 33%, rgba(113,1,177,1) 66%)"
                block>Check</v-btn>
            </template>
          </v-card>
        </v-tabs-window-item>


        <v-tabs-window-item value="refs">
          <v-card class="mt-3 text-left " v-for="i in 10" rounded="xl" elevation="0">
            <template v-slot:title>
              <span>Invite {{ i }} Friends</span>
            </template>
            <template v-slot:prepend>
              <v-icon icon="mdi-clipboard-check" color="primary" size="x-large"></v-icon>
            </template>
            <template v-slot:text>
              <div class="d-flex align-center">
                <v-icon icon="mdi-circle" color="yellow-accent-4"></v-icon>
                <span class="text-body-2 pl-2">300 000</span>
              </div>
            </template>
            <template v-slot:append>
              <v-icon icon="mdi-check" color="success" size="x-large"></v-icon>
            </template>
            <template v-slot:actions>
              <v-btn color="primary" variant="flat" rounded="xl"
                style="background:linear-gradient(45deg, rgba(88,51,237,1) 33%, rgba(113,1,177,1) 66%)"
                block>Check</v-btn>
            </template>
          </v-card>
        </v-tabs-window-item>

      </v-tabs-window>
    </div>
  </div>
</template>

<script>
// import CoinBalance from './../components/CoinBalance.vue';
export default {
  data() {
    return {
      tab: 'daily'
    }
  },
  components: {
    // CoinBalance
  }
}
</script>

<style>
.v-picker-title,
.v-date-picker-header,
.v-picker__header {
  display: none !important;
}

.daily-day {
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

#coin {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
</style>