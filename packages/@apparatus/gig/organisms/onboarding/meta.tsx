import { TComponentConfig } from 'autoprops'
import { OrganismOnboarding, TOrganismOnboarding } from './src'

export const config: TComponentConfig<TOrganismOnboarding> = {
  props: {
    isReady: [true],
    message: ['ACME'],
    messages: [
      [
        {
          author: 'gig',
          body: 'Hello! Is it me you are looking for?',
        },
        {
          author: 'gig',
          body: 'What would you do now then?',
        },
        {
          author: 'user',
          body: 'Apparatus',
        },
        {
          author: 'gig',
          body: 'Sounds great! Needs more animations thoughs',
        },
      ],
    ],
    onFinish: [() => {}],
    onSend: [() => {}],
    setMessage: [() => {}],
  },
  required: [
    'isReady',
    'message',
    'messages',
    'onFinish',
    'onSend',
    'setMessage',
  ],
}

export const Component = OrganismOnboarding

export { default as packageJson } from './package.json'
