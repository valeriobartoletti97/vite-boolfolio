<template>
    <div class="card col-12 col-lg-6 col-md-4" style="width: 18rem">
      <img :src="image" class="card-img-top" alt="project-img"/>
      <div class="card-body text-center">
        <h5 class="card-title text-uppercase fs-5">{{title}}</h5>
        <p class="card-text">
            <span class="badge text-bg-success">{{language}}</span>
        </p>
       <!-- <router-link class="btn btn-primary" :to="{ name: 'single-project',params: {id: project.id}}">Project details</router-link> -->
        <!-- <a href="#" class="btn btn-primary">Project Details</a> --> 
      </div>
    </div>
</template>

<script>
import {store} from "../store";
export default {
  name: "ProjectCard",
  props: [
    "image", 
    "title",
    "language",
  ],
  data(){
    return{
      store
    }
  }
};
</script>

<style lang="scss" scoped></style>
