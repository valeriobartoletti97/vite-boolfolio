<template>
    <div class="card col-12 col-lg-6 col-md-4" style="width: 18rem">
      <img :src="image" class="card-img-top" alt="project-img"/>
      <div class="card-body text-center">
        <h5 class="card-title text-uppercase fs-5">{{title}}</h5>
        <p class="card-text">
            <span class="badge text-bg-success">{{language}}</span>
        </p>
       <button class="btn btn-primary">
        <!-- <router-link :to="{ name: 'single-project', params: { id: id }}">Project details</router-link> --> 
        <a href="#" class="btn btn-primary">Project Details</a>
       </button>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: [
    "image", 
    "title",
    "language",
  ]
};
</script>

<style lang="scss" scoped></style>
