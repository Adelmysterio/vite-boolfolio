<script>
export default {
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div>
        <router-link :to="{ name: 'singleProject' , params: {id: project.id}}" class="card mb-2" v-for="(project, index) in projects" :key="index"> 
            <h2>{{ project.name }}</h2>
            <p>{{ project.url }}</p>
            <img :src="project.image" alt="">
        </router-link>
    </div>
</template>


<style lang="scss" scoped>

</style>