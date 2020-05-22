import React from 'react'
import { component, mapContext, startWithType } from 'refun'
import { View } from '@primitives/view'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  BUTTON_LEVEL_SECONDARY,
  ContextHeader,
  FullCover,
  Horizontal,
  Text,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_PRIMARY_TITLE,
  Vertical,
  ContextParentSize,
  MainScrollable,
} from '@apparatus/blocks-index'
import { AnimationGigCongratulations } from '@apparatus/exhibition-animations-gig-congratulations'

export type TOrganismGigCongratulations = {
  selectedGig: string,
  onGoToGig: () => void,
  onGoToHome: () => void,
  onClose: () => void,
}

export const OrganismGigCongratulations = component(
  startWithType<TOrganismGigCongratulations>(),
  mapContext(ContextParentSize)
)(({
  selectedGig,
  onGoToGig,
  onGoToHome,
  onClose,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader onClose={onClose}>
        Add New Gig
      </ContextHeader>

      <View
        style={{
          marginBottom: -100,
          marginLeft: -140,
          marginTop: -170,
        }}
      >
        <AnimationGigCongratulations
          height={570}
          width={570}
        />
      </View>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        Congrats on your new gig!
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        We hope you the best in working with {selectedGig}! Start by tracking your first working hours. 🙌
      </Text>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Vertical width="100%">
        <Button level={BUTTON_LEVEL_PRIMARY} onPress={onGoToGig}>
          Start Reporting Time
        </Button>
        <AtomSpacer multiplier={4}/>
        <Button level={BUTTON_LEVEL_SECONDARY} onPress={onGoToHome}>
          Back to Home
        </Button>
      </Vertical>
    </Bottom>
  </FullCover>
))

OrganismGigCongratulations.displayName = 'OrganismGigCongratulations'
