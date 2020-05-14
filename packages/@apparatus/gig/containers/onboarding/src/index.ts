import { component, mapHandlers, mapState, mapSafeTimeout, mapWithProps } from 'refun'
import { mapStoreDispatch, mapStoreState } from '@apparatus/gig-data-store'
import { OrganismOnboarding } from '@apparatus/gig-organisms-onboarding'
import { TMessage } from '@apparatus/gig-types-data'

export const componentOnboarding = component(
  mapStoreState((state) => state, []),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onOnboardMe: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'ONBOARDING',
        },
      })
    },
  }),
  mapState(
    'messages',
    'setMessages',
    (): TMessage[] => [
      {
        author: 'gig',
        body: 'Hey, welcome to Gig. Let’s get started by creating your first gig.',
      },
    ],
    []
  ),
  mapState(
    'message',
    'setMessage',
    () => '',
    []
  ),
  mapHandlers({
    onFinish: ({ dispatch, messages }) => () => {
      dispatch({
        type: 'GIG_NEW',
        payload: {
          name: messages[2].body,
          currentRate: parseInt(messages[4].body, 10),
          timeReports: [],
        },
      })
    },
    onSend: ({ setMessage, setMessages, message, messages }) => () => {
      setMessages(
        [
          ...messages,
          {
            author: 'user',
            body: message,
          },
        ]
      )
      setMessage('')
    },
  }),
  mapSafeTimeout('setLocalTimeout'),
  mapWithProps(({ setLocalTimeout, setMessages, messages }) => {
    if (messages.length === 1) {
      setLocalTimeout(() => {
        setMessages(
          [
            ...messages,
            {
              author: 'gig',
              body: 'Tell me, what’s the name of your client.',
            },
          ]
        )
      }, 1000)
    }

    if (messages.length === 3) {
      setLocalTimeout(() => {
        setMessages(
          [
            ...messages,
            {
              author: 'gig',
              body: `Cool, tell me what’s your hourly rate working for ${messages[2].body}?`,
            },
          ]
        )
      }, 1000)
    }

    if (messages.length === 5) {
      setLocalTimeout(() => {
        setMessages(
          [
            ...messages,
            {
              author: 'gig',
              body: 'Awesome, you are now all set up to begin reporting time. Good luck!',
            },
          ]
        )
      }, 1000)
    }

    return messages.length > 5
      ? { isReady: true }
      : { isReady: false }
  })
)

export const ContainerOnboarding = componentOnboarding(OrganismOnboarding)
