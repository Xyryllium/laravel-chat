<template>
  <div>
    <il class="list-group-item" :class="className"
      ><slot></slot> <span class="time">{{ time }}</span></il
    >
    <small class="badge float-right" :class="badgeClass">{{ user }}</small>
  </div>
</template>

<script>
export default {
  props: ["color", "user", "time"],
  computed: {
    className() {
      return "list-group-item-" + this.color;
    },
    badgeClass() {
      return "badge-" + this.color;
    },
  },
};
</script>

<style scoped>
.time {
  font-size: 0.5em;
  margin-top: 10px;
  color: black;
}
</style>
