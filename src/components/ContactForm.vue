<template>
  <form @submit.prevent="submitForm()">
    <div class="mb-3">
      <label for="name" class="form-label">Your name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        aria-describedby="emailHelp"
        v-model="name"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Your Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Your Address</label>
      <input type="text" class="form-control" id="address" v-model="address"/>
    </div>
    <div class="mb-3">
      <textarea name="message" id="message" cols="30" rows="10" v-model="message"></textarea>
      <div id="messageHelp" class="form-text">Insert your message</div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { store } from "../store";
import axios from 'axios'
export default {
  name: "ContactForm",
  data(){
    return{
        store,
        name:'',
        email:'',
        address:'',
        message:'',
    }
  },
  methods:{
    submitForm(){
        /* console.log(this.name,this.email,this.address,this.message) */
        const formData = {
            name: this.name,
            email: this.email,
            address: this.address,
            message: this.message
        }
        axios.post(this.store.apiUrl+'/contacts',formData).then((response)=>{
            console.log(response.data)
            this.name='',
            this.email='',
            this.address='',
            this.message=''
        }).catch((error)=>{
            console.log(error)
        })
        }
    }
  }
;
</script>

<style lang="scss" scoped></style>
