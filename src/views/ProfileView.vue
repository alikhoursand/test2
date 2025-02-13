<template>
    <div>
        <div class="pa-3">
            <router-link to="/">
                <v-btn variant="text" prepend-icon="mdi-arrow-left" class="ml-3 " elevation="0" rounded="xl">Go
                    Back</v-btn>
            </router-link>
        </div>
        <div class=" pr-3 pl-3">
            <div class="mt-5 avatar-holder">
                <div class="w-50 text-center">
                    <div class="text-h6">Very Long Username</div>
                    <div class="mt-3">Level 3</div>
                </div>
                <div class="w-50">
                    <v-progress-circular :model-value="60" :rotate="360" :size="150" :width="10"
                        color="green-lighten-2">
                        <template v-slot:default>
                            <v-card @click="avatarDialog = true" class="bg-grey-darken-4 avatar">
                                <div class="text-center">
                                    <div>
                                        <v-badge content="+">
                                            <v-icon size="x-large">mdi-emoticon</v-icon>
                                        </v-badge>
                                        <div>Add Avatar</div>
                                    </div>
                                    <div class="mt-2"></div>
                                </div>
                            </v-card>
                        </template>
                    </v-progress-circular>
                </div>
            </div>
            <div class="text-center mt-10">
                <v-icon icon="mdi-numeric-0"></v-icon>
                <v-icon icon="mdi-numeric-1"></v-icon>
                <v-icon icon="mdi-numeric-2"></v-icon>
                <v-icon icon="mdi-numeric-3"></v-icon>
                <v-icon icon="mdi-numeric-4"></v-icon>
                <v-icon icon="mdi-numeric-5"></v-icon>
            </div>
            <v-card class="mt-3 pa-3" disabled title="Connect Wallet" rounded="xl" elevation="0" color="grey-darken-2">
                <template v-slot:append>
                    <v-avatar image="/ton_symbol.svg"></v-avatar>
                </template>
            </v-card>
            <v-card class="mt-3 pa-3" color="#27a6e7" title="Join Our Channel" rounded="xl" elevation="0">
                <template v-slot:append>
                    <v-avatar image="/telegram.svg"></v-avatar>
                </template>

            </v-card>
            <v-card class="mt-3 pa-3" append-icon="mdi-twitter" title="Connect X(Twitter)" rounded="xl" elevation="0"
                color="black">
            </v-card>


        </div>
        <v-dialog v-model="avatarDialog">
            <v-card class="pa-3 mt-3" rounded="xl" color="purple-lighten-5">
                <div class="d-flex justify-space-between align-center">
                    <div class="pl-2">Choose Avatar</div>
                    <div>
                        <v-btn variant="text" @click="avatarDialog = false" icon="mdi-close" elevation="0"
                            class="ml-auto"></v-btn>
                    </div>
                </div>
                <v-divider></v-divider>
                <v-row class="ma-0 text-center">
                    <v-col cols="4" class="mt-3 mb-3" v-for="i in 6">
                        <v-img :src="`/a${i}.svg`" width="100" contain height="100"></v-img>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatarDialog: false,
        }
    }
}
</script>

<style scoped>
a:link,
a:visited {
    text-decoration: none;
    color: unset;
}

.avatar {
    border-radius: 50%;
    background: red;
    height: 135px;
    width: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar-holder {
    /* width: fit-content; */
    display: flex;
    align-items: center;
    margin-right: auto;
    /* margin: auto; */
}
</style>