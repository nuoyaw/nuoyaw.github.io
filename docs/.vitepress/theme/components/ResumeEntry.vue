<template>
  <v-container class="mt-4">
    <v-col>
      <v-row>
        <span class="font-weight-bold">{{ title }}</span>
        <v-spacer></v-spacer>
        <span>{{ location }}</span>
      </v-row>
      <v-row>
        <span class="font-italic">{{ subtitle }}</span>
        <v-spacer></v-spacer>
        <span class="font-italic">
          {{ from }}—{{ to }}
        </span>
      </v-row>
      <v-row v-if="abstract">
        <span>{{ abstract }}</span>
      </v-row>
      <v-row v-if="entries">
        <ul class="ml-6 mt-2">
          <li v-for="(value, key) in entries">
            <span class="font-weight-bold">{{ key }}</span>: <span>{{ value }}</span>
          </li>
        </ul>
      </v-row>
    </v-col>

  </v-container>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'abstract', 'location', 'from', 'to', 'entries']
}
</script>

