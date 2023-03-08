import {
  addComponent,
  addPlugin,
  addServerPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  // Default configuration options of the Nuxt module
  defaults: {},

  meta: {
    configKey: 'nuxtContentGit',
    name: 'nuxt-content-git',
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    options = {
      createdAtName: 'createdAt',
      updatedAtName: 'updatedAt',
      ...options,
    }
    // TODO: How to pass on the options from the module to the Nitro plugin?
    addServerPlugin(resolver.resolve('./runtime/server/content'))
  },
})
