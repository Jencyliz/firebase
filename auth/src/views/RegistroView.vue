<script>
import { auth, createUserWithEmailAndPassword } from '../authh.js'

export default {
  data() {
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        console.log(userCredential)
        
      await createUserWithEmailAndPassword(auth, this.email, this.password)
      this.email = ''
      this.password = ''
    }
    catch(error){
      console.error(error)
    }
    }
  }
}
</script>
 
<template>
 <div>
  <h2>Registro</h2>
  <input type="email" v-model="email" placeholder="CorreoElectronico">
  <input type="password" v-model="password" placeholder="Contraseña">
  <button @click="register">Registrarse</button>
 </div>
</template>
 
<style scoped>

</style>