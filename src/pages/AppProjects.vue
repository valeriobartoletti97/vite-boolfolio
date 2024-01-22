<template>
    <div>
      <h1>My Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { store } from "../store";
  import axios from "axios";
  
  export default {
    name: "AppProjects",
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
  