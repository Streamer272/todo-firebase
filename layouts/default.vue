<template>
<Loading v-if="loading.value" />
<div v-else-if="loggedIn">
    <slot />
    <LogOut />
</div>
<NuxtLink v-else-if="!loggedIn" to="/login">Login</NuxtLink>
</template>

<script lang="ts" setup>
let loading = ref(true)
let loggedIn = ref(false)
const { auth } = useFirebase()
loggedIn.value = auth?.currentUser
loading.value = false
auth?.onAuthStateChanged((user) => {
    loggedIn.value = user
})
</script>
