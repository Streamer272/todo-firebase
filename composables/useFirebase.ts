export default function() {
    const { $auth, $firestore, $provider } = useNuxtApp()

    return {
        auth: $auth,
        firestore: $firestore,
        provider: $provider
    }
}
