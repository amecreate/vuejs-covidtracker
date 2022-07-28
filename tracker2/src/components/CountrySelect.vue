<template>
    <select v-model="selected">
        <option value="0">Select Country</option>
    </select>
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