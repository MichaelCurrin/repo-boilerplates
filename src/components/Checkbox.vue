<template>
  <div>
    <label :for="slug">
      {{ label }}
    </label>

    <input
      :id="slug"
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('input', $event.target.checked)"
    />

    <small class="note" v-if="note">
      <Markdown :content="note"></Markdown>
    </small>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Markdown from "@/components/Markdown.vue";
import { slugify } from "@/lib";

export default Vue.extend({
  name: "Checkbox",
  components: {
    Markdown,
  },
  props: {
    label: { type: String, required: true },
    checked: { type: Boolean, required: false, default: false },
    note: { type: String, required: false },
  },
  computed: {
    slug() {
      return slugify("box", this.label);
    },
  },
});
</script>
