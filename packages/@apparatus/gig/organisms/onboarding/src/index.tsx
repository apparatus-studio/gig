import React, { FC } from 'react'
import { startWithType, component, mapContext } from 'refun'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  ChatBubble,
  Horizontal,
  Input,
  Vertical,
  FullCover,
  ContextParentSize,
  GRID,
} from '@apparatus/blocks-index'
import { TMessage } from '@apparatus/gig-types-data'

export type TOrganismOnboarding = {
  isReady: boolean,
  message: string,
  messages: TMessage[],
  onFinish: () => void,
  onSend: () => void,
  setMessage: (message: string) => void,
}

export const OrganismOnboarding: FC<TOrganismOnboarding> = component(
  startWithType<TOrganismOnboarding>(),
  mapContext(ContextParentSize)
)(({
  isReady,
  message,
  messages,
  onFinish,
  onSend,
  parentWidth,
  setMessage,
}) => (
  <FullCover>
    <Bottom multiplier={10}>
      {messages.map(({ author, body }, index) => (
        <Vertical key={index}>
          <Horizontal
            hAlign={author === 'gig' ? 'start' : 'end'}
            width={parentWidth - (GRID * 20)}
          >
            <ChatBubble
              key={index}
              containerWidth={parentWidth - (GRID * 20)}
              direction={author === 'gig' ? 'left' : 'right'}
            >
              {body}
            </ChatBubble>
          </Horizontal>
          <AtomSpacer multiplier={4}/>
        </Vertical>
      ))}
      <AtomSpacer multiplier={4}/>
      <Horizontal>
        {isReady ? (
          <Button level={BUTTON_LEVEL_PRIMARY} onPress={onFinish}>
            Finish Up
          </Button>
        ) : (
          <>
            <Input
              placeholder="Write your response"
              value={message}
              onChange={setMessage}
            />
            <AtomSpacer multiplier={4}/>
            <Button level={BUTTON_LEVEL_PRIMARY} onPress={onSend}>
              Send
            </Button>
          </>
        )}
      </Horizontal>
    </Bottom>
  </FullCover>
))
