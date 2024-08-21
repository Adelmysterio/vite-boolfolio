<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.response);
                    this.projects = response.data.response;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },
    created() {
        this.getProjects();
    },
}
</script>

<template>
    <ProjectCard :projects="projects"/>
</template>

<style lang="scss" scoped></style>
