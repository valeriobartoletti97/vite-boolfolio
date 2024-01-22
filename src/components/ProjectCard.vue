<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="card" style="width: 18rem">
          <img :src="image" class="card-img-top" alt="project-img"/>
          <div class="card-body text-center">
            <h5 class="card-title text-uppercase fs-5">{{title}}</h5>
            <p class="card-text">
                <span class="badge text-bg-success">{{language}}</span>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: [
    "image", 
    "title",
    "language"
  ]
};
</script>

<style lang="scss" scoped></style>
