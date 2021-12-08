import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  hooks: {
    'vite:extendConfig': (config) => {
      const vuetifyPluginIndex = config.plugins.findIndex(p => Array.isArray(p) && p[0].name === 'vuetify:import')
      const vuetifyPlugin = config.plugins[vuetifyPluginIndex];
      config.plugins.splice(vuetifyPluginIndex, 1)
      const vuePluginIndex = config.plugins.findIndex(p => p.name === 'vite:vue');
      config.plugins.splice(vuePluginIndex + 1, 0, vuetifyPlugin);
    }
  }
})
