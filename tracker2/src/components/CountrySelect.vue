<template>
    <select v-model="selected" class="form-select mt-10 block w-full border p-3 rounded">
        <option value="0">Select Country</option>
        <option v-for="country in countries" v-bind:key="country.ID" :value="country.ID">
            {{ country.Country }}
        </option>
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