<template>
    <v-layout class="overflow-visible bnb" style="height: 70px;position:absolute;bottom:0;background:none">
        <v-bottom-navigation selected-class="test" v-model="page" class="mb-0 bnb" style="height: 70px;background:none"
            active elevation="0" grow>
            <v-btn plain :ripple="false" @click="test(0, '/')" class="nav-btn pa-5 " width="50px" height="50px" flat>
                <v-icon color="white" size="large">mdi-diamond</v-icon>
                <span class="text-body text-white">Tap</span>
            </v-btn>
            <v-btn variant="text" :ripple="false" @click="test(1, '/tasks')" class="nav-btn pa-3 " width="50px"
                height="50px" flat>
                <v-icon color="primary" size="large">mdi-clipboard-list</v-icon>
                <span class="text-body text-white">Tasks</span>
            </v-btn>
            <v-btn variant="text" :ripple="false" @click="test(2, '/referrals')" class="nav-btn pa-3 " width="50px"
                height="50px" flat>
                <v-icon color="green" size="large">mdi-account-group</v-icon>
                <span class="text-body text-white">Referrals</span>
            </v-btn>
            <v-btn variant="text" :ripple="false" @click="test(3, '/gift')" class="nav-btn pa-3 " width="50px"
                height="50px" flat>
                <v-icon color="red-darken-2" size="large">mdi-gift</v-icon>
                <span class="text-body text-white">Gift</span>
            </v-btn>
            <!-- <v-btn @click="test(4, '/stats')" class="nav-btn pa-3 " width="50px"
                height="50px">
                <v-icon color="indigo">mdi-chart-bar</v-icon>
                <span class="text-body">Stats</span>
            </v-btn> -->

        </v-bottom-navigation>
    </v-layout>
</template>
<script>
export default {
    data() {
        return {
            page: null,
        }
    },
    methods: {
        test(selectedPage, p) {
            this.page = selectedPage
            this.$router.push(p)
        }
    }, mounted() {
        if (this.$route.name == 'referrals') {
            this.page = 2
        } else if (this.$route.name == 'tasks') {
            this.page = 1

        } else if (this.$route.name == 'home') {
            this.page = 0

        } else if (this.$route.name == 'boost') {
            this.page = 3

        } else {
            this.page = 0
            this.$router.push('/')
        }
    }
}
</script>

<style>
.v-bottom-navigation__content {
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 13%, rgba(0, 0, 0, 0.7120098039215687) 100%);
}

.nav-btn .v-btn__overlay {
    background-color: transparent !important;
}

.nav-btn .v-btn--variant-text .v-btn__overlay {
    background: none !important;
}

.nav-btn .v-btn--variant-text .v-btn__overlay,
.nav-btn .v-btn__overlay {
    background: transparent !important;
}

.v-btn::before,
.nav-btn::before {
    background-color: transparent !important;
}

.test i {
    font-size: 2.5rem;
}

.test {
    background-color: transparent !important;
}

/* .test i {
     transition: all .3s ease-in-out; 
}
*/
.nav-btn {
    height: 100% !important;
    border-radius: 50% !important;
    background-color: transparent !important;
    min-width: 20px !important;
}

.nav-btn:hover .v-btn__overlay {
    background: none !important;
    opacity: 0 !important;
}
</style>