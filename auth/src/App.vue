<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/registro">Registro</router-link>
    <router-link to="/about">About</router-link>
    <button v-if="isLoggedIn" @click="logout">Cerrar sesión</button>
    <router-view></router-view>
  </div>
</template>

<script>
import {auth, onAuthStateChanged, signOut} from './authh.js'
export default {
  data(){
    return{
      isLoggedIn: false
    }
  },
  created(){
onAuthStateChanged(auth, (user) => {
  if (user) {
    this.isLoggedIn = true
  } else {
    this.isLoggedIn = false
  }
})
  },
  methods: {
    async logout(){
      await signOut(auth)
      this.$router.push('/login')
    }
  }
}
</script>
