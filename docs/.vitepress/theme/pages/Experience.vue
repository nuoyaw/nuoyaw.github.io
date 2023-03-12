<template>
  <v-container>
    <v-row>
      <ResumeEntry 
        title="Writer's Toolbox"
        subtitle="Machine Learning Engineer"
        location="Auckland, New Zealand"
        from="Apr 2021"
        to="Present"
        :entries="wtb_entries"
        ></ResumeEntry>
    </v-row>
    <v-row>
      <ResumeEntry 
        title="Australian National University"
        subtitle="Course Tutor (Data Science)"
        location="ACT, Australia"
        from="Feb 2020"
        to="Jun 2020"
        :entries="anu_entries"
        ></ResumeEntry>
    </v-row>
    <v-row>
      <ResumeEntry 
        title="Fisher & Paykel Healthcare"
        subtitle="Software Development Contractor"
        location="Auckland, New Zealand"
        from="Nov 2019"
        to="Feb 2020"
        :entries="fph_contractor_entries"
        ></ResumeEntry>
    </v-row>
    <v-row>
      <ResumeEntry 
        title="Fisher & Paykel Healthcare"
        subtitle="Product Development Engineer (Software)"
        location="Auckland, New Zealand"
        from="Nov 2013"
        to="Feb 2019"
        :entries="fph_pde_entries"
        ></ResumeEntry>
    </v-row>
  </v-container>
</template>

<script>
import ResumeEntry from '../components/ResumeEntry.vue'

export default {
  components: {ResumeEntry},
  data() {
    return {
      wtb_entries: {
        'Deep Learning': 'Built and trained NLP models for providing analytics and feedback on student essays, with accuracy meeting or surpassing that of human markers.',
        'Rule-Based NLP': 'Designed and implemented hybrid ML+rule-based grammar error detection and feedback system, with superior performance and usability when compared to a popular open-source alternative.',
        'Data Pipelines': 'Built data pipeline with several novel augmentation techniques to better imitate student writing, allowing for reduced annotation costs for tasks in the low-resource student essay domain.',
        'Deployment': 'Deployed microservice endpoints on AWS for model inference, which currently serve students across 500+ schools.',
        'Optimisation': 'Used model optimisation and distillation techniques to improve inference rate per endpoint by over 2000% with negligible reduction in accuracy. Deployed models on specialised instances to reduce endpoint costs by over 60%.'
      },
      anu_entries: {
        'Tutorials and Marking': 'Delivered course tutorials and performed assignment and exam marking for introductory data science course (COMP2420/COMP6420: Introduction to Data Management, Analysis, and Security).'
      },
      fph_contractor_entries: {
        'Device Security': 'Developed cryptographic capabilities for medical device, including secure bootloader, encrypted data store, and chain of trust.'
      },
      fph_pde_entries: {
        'Control Systems': 'Developed safety critical control code for respiratory humidifier and flow generator.',
        'Device Firmware': 'Developed robust HAL and driver level code across multiple MCU families (ARM, Renesas, PIC).',
        'Internet of Things': 'Integration of telemetry and IoT capabilities (BLE, WiFi, GSM).',
        'Testing': 'Designed and implemented procedures for unit and integration testing.',
        'Documentation': 'Performed documentation, verification, and validation for regulatory compliance.'
      }
    }
  }
}
</script>