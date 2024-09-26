<template>
   <div>
    <h2>Inicio de Sesion</h2>
  <input type="email" v-model="email" placeholder="CorreoElectronico">
  <input type="password" v-model="password" placeholder="Contraseña">
  <button @click="signIn">Iniciar Sesion</button>
   </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '../authh.js'

export default {
    

    name: 'LoginView',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async signIn() {
            try{
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirect = this.$route.query.redirect || '/'
                this.$router.push(redirect)
            }catch(error){
                console.error("Error al iniciar sesion",error.message)
            }
    }
    }
}
</script>