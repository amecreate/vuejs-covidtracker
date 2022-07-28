<template>
    <select v-model="selected"></select>
</template>

<script>
export default {
    setup() {
        
    },

    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            seleced: 0
        }
    }
}
</script>