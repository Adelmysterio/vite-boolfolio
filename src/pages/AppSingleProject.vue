<script>
import axios from 'axios';
export default {
    data(){
        return {
            project: {}
        }
    },
    methods: {
        getProject(id) {
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.response);
                    this.project = response.data.response;
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
        this.getProject(this.$route.params.id);
    },
}
</script>

<template>
    <div>
        <div class="card mb-2">
            <h2>{{ project.name }}</h2>
            <p>{{ project.url }}</p>
            <img :src="project.image" alt="">
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>