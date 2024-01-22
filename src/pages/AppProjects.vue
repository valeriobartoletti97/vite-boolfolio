<template>
    <div>
      <h1 class="mb-4">My Projects</h1>
      <div class="container">
        <div class="row justify-content-center gap-4">
            <ProjectCard v-for="project in projects" :key="project.id" :image="project.image" :title="project.name" :language="project.language"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from "../store";
  import axios from "axios";
  import ProjectCard from "../components/ProjectCard.vue";

  export default {
    name: "AppProjects",
    components:{
        ProjectCard
    },
    data() {
      return {
        store,
        projects: [],
      };
    },
    methods: {
      getAllProjects() {
        axios.get(store.apiUrl + "/projects").then((response) => {
          console.log(response.data.data);
          this.projects = response.data.data;
          console.log(this.projects);
        });
      },
    },
    created(){
      this.getAllProjects()
    }
  };
  </script>
  
  <style lang="scss" scoped></style>
  