import React from 'react'
import { component, startWithType, mapContext } from 'refun'
import { View } from '@primitives/view'
import { AnimationGigIntro } from '@apparatus/exhibition-animations-gig-intro'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  Horizontal,
  Text,
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_BODY,
  FullCover,
  ContextParentSize,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismWelcome = {
  onOnboardMe: () => void,
}

export const OrganismWelcome = component(
  startWithType<TOrganismWelcome>(),
  mapContext(ContextParentSize)
)(({ onOnboardMe }) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <View
        style={{
          marginBottom: -110,
          marginLeft: -170,
          marginTop: -190,
        }}
      >
        <AnimationGigIntro
          height={630}
          width={630}
        />
      </View>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        We simply keep track.
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        We help you track, store or export all of your working hours and your revenue. A must in any freelancers utilitybelt.
      </Text>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Button level={BUTTON_LEVEL_PRIMARY} onPress={onOnboardMe}>
        Start Using Gig
      </Button>
    </Bottom>
  </FullCover>
))
