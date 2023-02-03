<template>
<Loading v-if="loading.value" />
<div v-else>
    <h1>Hello {{ auth.currentUser.displayName }}!</h1>
    <ul>
        <li v-for="todo in todos">{{ todo.data().name }}<button @click="deleteTodo(todo)">Delete</button></li>
    </ul>
    <form @submit="submit">
        <input v-model="newTodo" placeholder="Name" required>
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts" setup>
import { collection, where, query, onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore"

const loading = ref(true)
const todos = ref([])
const newTodo = ref("")
const { auth, firestore } = useFirebase()
const todosCollection = collection(firestore, "todos")
const unsubscribe = onSnapshot(query(
    todosCollection,
    where("uid", "==", auth.currentUser.uid)
), (snapshot) => {
    loading.value = true
    todos.value = []
    snapshot.forEach((doc) => {
        todos.value.push(doc)
    })
    loading.value = false
})
auth.onAuthStateChanged((user) => !user && unsubscribe())

function submit(event) {
    event.preventDefault()
    addDoc(todosCollection, {
        name: newTodo.value,
        starred: false,
        uid: auth.currentUser.uid
    })
}

function deleteTodo(todo) {
    deleteDoc(doc(firestore, "todos", todo.id))
}
</script>
