<script>
import axios from 'axios';
export default {
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
    <ul>
        <li v-for="(project, index) in projects" :key="index">
            {{ project.name }}
        </li>
    </ul>

</template>

<style lang="scss" scoped></style>
