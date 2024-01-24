<template>
    <div>
      <h1 class="mb-4">My Projects</h1>
      <div class="container">
          <select @change="getAllProjects" name="types" v-model="selectedType">
              <option value="">All</option>
              <option v-for="type in types" :key="type.id" :value="type.id">{{type.name}}</option>
          </select>
        <div class="row justify-content-center gap-4">
            <ProjectCard v-for="project in projects" :key="project.id" :image="store.imgPath+project.image" :title="project.name" :language="project.language"/>
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
        types:[],
        selectedType: null
      };
    },
    methods: {
      getAllProjects() {
        const params = {
          params:{
            type:this.selectedType
          }
        }
        axios.get(store.apiUrl + "/projects",params).then((response) => {
          console.log(response.data.data);
          this.projects = response.data.data;
          console.log(this.projects);
        });
      },
      getAllTypes(){
        axios.get(store.apiUrl + "/types").then((response) => {
          console.log(response.data.data);
          this.types = response.data.data;
          console.log(this.types);
        });
      },
    },
    created(){
      this.getAllProjects()
      this.getAllTypes()
    }
  };
  </script>
  
  <style lang="scss" scoped></style>
  