<template>
<Loading v-if="loading.value" />
<div v-else>
    <h1>Login</h1>
    <button @click="useGoogle()">Sign in with google</button>
</div>
</template>

<script lang="ts" setup>
import { signInWithPopup } from "@firebase/auth";

let loading = ref(true)
const { auth, provider } = useFirebase()
const router = useRouter()
loading.value = false

function useGoogle() {
    auth && signInWithPopup(auth, provider)
}

auth?.onAuthStateChanged((user) => { user && router.push("/") })

definePageMeta({
    layout: "login"
})
</script>
