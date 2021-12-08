<template>
  <v-app>
    <v-app-bar app>
      <v-img src="static/icon.png" class="ml-4" max-height="48" max-width="48" contain />
      <v-app-bar-title>
        Reddit - Random Image
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <div class="media-wrapper">
        <div class="image-view">
          <v-img :src="data.image" max-height="100%" max-width="100%" contain />
        </div>
        <div class="info-view bg-grey-lighten-4">
          <div class="pa-4">
            <v-list-item three-line>
              <v-list-item-avatar class="mr-2">
                <v-img :src="data.author.icon" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="data.author.name" />
                <v-list-item-subtitle>Votes: {{ data.score }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <div class="mt-4">
              {{ data.title }}
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
const { data } = await useFetch('/api/image');
</script>

<style scoped>
.media-wrapper {
  display: flex;
  height: calc(100vh - 64px);
}

.image-view {
  flex: 1 1 auto;
}

.info-view {
  width: 20rem;
  flex: 0 0 auto;
}
</style>
