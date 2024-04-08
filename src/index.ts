import { type Plugin, ServiceInfos } from '@cpn-console/hooks'
import monitor from './monitor.js'
import { upsertProjectHelloWorld } from './functions.js'

const infos: ServiceInfos = {
  name: 'helloworld',
  to: ({ clusters }) => 'https://example.com/',
  title: 'Hello World',
  imgSrc: 'data:image/png;base64,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',
  description: 'Hi world',
}

export const plugin: Plugin = {
  infos,
  subscribedHooks: {
    upsertProject: {
      steps: {
        main: upsertProjectHelloWorld,
      },
    },
  },
  monitor,
}
