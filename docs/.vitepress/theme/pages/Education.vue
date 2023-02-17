<template>
  <v-container>
    <v-row>
      <ResumeEntry 
        title="Australian National University"
        subtitle="Master of Computing (Advanced) in Artificial Intelligence"
        abstract="GPA: 7/7&emsp;|&emsp;University Medal Award"
        location="ACT, Australia"
        from="Feb 2019"
        to="Nov 2020"
        ></ResumeEntry>
    </v-row>
    <v-row>
      <ResumeEntry
        title="University of Auckland"
        subtitle="Bachelor of Engineering in Electrical and Electronics"
        abstract="GPA: 7.1/9&emsp;|&emsp;First Class Honours"
        location="Auckland, New Zealand"
        from="Feb 2010"
        to="Nov 2013"
        ></ResumeEntry>
    </v-row>
  </v-container>
</template>

<script>
import ResumeEntry from '../components/ResumeEntry.vue'

export default {
  components: {ResumeEntry}
}
</script>