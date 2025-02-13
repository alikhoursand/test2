<template>
    <div class="pr-3 pl-3">
        <div class="text-center text-h4 font-weight-bold mt-15">0 Referrals</div>
        <v-sheet class="mt-10 pa-5" rounded="xl">
            <div class="d-flex justify-space-between align-center">
                <div class="font-weight-bold">My invite link:</div>
                <v-btn color="primary" class="font-weight-bold" size="small" rounded="xl"
                    style="background:linear-gradient(45deg, rgba(88,51,237,1) 33%, rgba(113,1,177,1) 66%)">Copy</v-btn>
            </div>
            <div class="text-disabled mt-5" style="word-break: break-all;">
                link/link/link/link/link/link/link/link/link/link/link/link/link</div>
        </v-sheet>

        <v-divider class="mt-5 mb-5"></v-divider>


        <div class="text-h6 font-weight-bold mt-5">My Referrals:</div>

        <div class="mt-5 mb-5 ">
            <v-sheet class="pa-3 pl-5 pr-5 mt-3 text-body-2" rounded="xl" v-for="x in 20">
                <div class="d-flex justify-space-between align-center">
                    <div>Username</div>
                    <div><v-icon icon="mdi-diamond" color="white"></v-icon> 1.321 M</div>
                </div>
            </v-sheet>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#coin {
    width: 250px;
    height: 250px;
    border-radius: 50%;
}
</style>