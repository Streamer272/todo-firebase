<template>
<Loading v-if="loading.value" />
<button v-else @click="logOut()">Log out</button>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts" setup>
import { signOut } from "firebase/auth";

const loading = ref(true)
const { auth } = useFirebase()
loading.value = false

function logOut() {
    auth && signOut(auth)
}
</script>
