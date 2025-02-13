<template>
    <div>
        <div class="pa-3 pb-0 d-flex justify-space-between align-center">
            <div>
                <v-btn prepend-icon="mdi-store" class="glowbtn" elevation="0" rounded="xl" @click="shopSheet = true"
                    style="background:linear-gradient(45deg, rgba(88,51,237,1) 33%, rgba(113,1,177,1) 66%)">Shop</v-btn>
                <v-btn prepend-icon="mdi-gamepad-variant" class="ml-3 glowbtn" elevation="0" rounded="xl">Games</v-btn>
            </div>
            <div>
                <v-btn @click="newsSheet = true" icon="mdi-help" elevation="0" rounded="xl" size="small"
                    style=" background:linear-gradient(45deg, rgba(88,51,237,1) 33%, rgba(113,1,177,1) 66%)"></v-btn>
                <v-btn icon="mdi-account" class="ml-3" size="small" elevation="0" rounded="xl" @click="goProfile()"
                    style="background:linear-gradient(45deg, rgba(88,51,237,1) 33%, rgba(113,1,177,1) 66%)"></v-btn>
            </div>
        </div>
        <div class="text-center text-h3 font-weight-bold mt-10">{{ coins }}</div>
        <div class="text-center text-subtitle-2 text-disabled font-weight-bold mt-2">Level 3</div>

        <!-- <div class="mx-auto mt-1" style="width: 75%;">
            <v-progress-linear model-value="40" style="border-radius:3px" :height="5"></v-progress-linear>
        </div> -->
        <v-bottom-sheet v-model="newsSheet" class="elevation-0">
            <v-card class="pa-5"
                style="background: linear-gradient(180deg, rgba(179,157,219,1) 0%, rgba(149,117,205,1) 33%, rgba(126,87,194,1) 61%, rgba(94,53,177,1) 84%, rgba(81,45,168,1) 100%, rgba(49,27,146,1) 100%, rgba(69,39,160,1) 132%);">
                <v-icon icon="mdi-close ml-auto" @click="newsSheet = false"></v-icon>

                <div class="text-title text-h6">Header Title</div>
                <div>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis odit, dolor qui, hic esse
                        doloribus beatae ullam, saepe deserunt praesentium culpa cupiditate ratione fugit repellat quam
                        distinctio sunt quo!
                        Tempore distinctio sint, in ipsam culpa incidunt doloribus illo earum exercitationem facere
                        cumque necessitatibus animi aspernatur fugit iste. Magni enim, a aspernatur quae cupiditate
                        rerum quas repellendus consequuntur qui excepturi?
                    </p>
                </div>

                <v-timeline align="center" class="mt-10">

                    <v-timeline-item dot-color="white">
                        <template v-slot:opposite>
                            Basic
                        </template>
                        <div>
                            <v-img src="/BLACK TOKEN-01.png"></v-img>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="blue">
                        <template v-slot:opposite>
                            Blue Diamond
                        </template>
                        <div>
                            <v-img src="/BLACK TOKEN blue-01.png"></v-img>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="green">
                        <template v-slot:opposite>
                            Green Diamond
                        </template>
                        <div>
                            <v-img src="/BLACK TOKEN green-01.png"></v-img>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="red">
                        <template v-slot:opposite>
                            Red Diamond
                        </template>
                        <div>
                            <v-img src="/BLACK TOKEN red-01.png"></v-img>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item dot-color="black">
                        <template v-slot:opposite>
                            Black Diamond
                        </template>
                        <div>
                            <v-img src="/BLACK TOKEN black-01.png"></v-img>
                        </div>
                    </v-timeline-item>


                </v-timeline>
            </v-card>
        </v-bottom-sheet>
        <v-bottom-sheet v-model="shopSheet" class="elevation-0 ">
            <v-card class="pa-5 pb-15">shop</v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
// import { useCounterStore } from './../stores/counter';
// import { mapStores } from 'pinia'

export default {
    // computed: {
    //     ...mapStores(useCounterStore)
    // },
    data() {
        return {
            newsSheet: false,
            shopSheet: false,
            // totalCoins: 0,
        }
    },

    props: ['coins'],
    mounted() {
        console.log(this.coins);
        // this.totalCoins = localStorage.coins
        // console.log(this.useCounterStore.coins);
        // this.counterStore.$subscribe(() => {
        //     console.log(1);
        // })

    },
    methods: {
        goProfile() {
            this.$router.push('/profile');
        }
    }
}
</script>

<style scoped>
.glowbtn {
    background: rgba(88, 51, 237, 1);
    animation: glow 2s ease-in-out infinite;

}

@keyframes glow {
    0% {
        background: rgba(88, 51, 237, 1);
    }

    50% {
        background: rgba(113, 1, 177, 1)
    }

    100% {
        background: rgba(88, 51, 237, 1);
    }
}
</style>