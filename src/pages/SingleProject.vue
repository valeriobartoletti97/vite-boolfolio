<template>
    <h1>
        Single Project
    </h1>
    <div class="d-flex justify-content-center mt-5">
        <ProjectCard :image="this.project.image" :title="this.project.name" :language="this.project.language" />
    </div>
</template>

<script>
    import { store } from "../store";
    import axios from "axios";
    import ProjectCard from '../components/ProjectCard.vue'
    export default {
        name: 'SingleProject',
        components:{
            ProjectCard
        },
        data(){
            return{
                store,
                project: null,
            }
        },
        methods:{
            getProjectData(){
                console.log(this.$route)
                axios.get(store.apiUrl + "/projects/" + this.$route.params.id).then((response) =>{
                    console.log(response.data.data[0])
                    this.project = response.data.data[0]
                    console.log(this.project)
                })
            }
        },
        created(){
            this.getProjectData()
        }
    }
</script>

<style lang="scss" scoped>

</style>