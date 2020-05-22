import React, { FC } from 'react'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  ContextHeader,
  Horizontal,
  Text,
  TEXT_LEVEL_BODY,
  Vertical,
  FullCover,
  MainScrollable,
} from '@apparatus/blocks-index'
import { AnimationGigTimer } from '@apparatus/exhibition-animations-gig-timer'
import { TimeTracked } from '@apparatus/gig-molecules-time-tracked'

export type TOrganismTrackTime = {
  currentRate?: number,
  endTime: number,
  onBack: () => void,
  onRing: () => void,
  primaryCallToAction: string,
  selectedGig: string,
  startTime?: number,
  toggleTracking: () => void,
}

export const OrganismTrackTime: FC<TOrganismTrackTime> = ({
  currentRate,
  endTime,
  onBack,
  onRing,
  primaryCallToAction,
  selectedGig,
  startTime,
  toggleTracking,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader onBack={onBack}>
        Track Time
      </ContextHeader>

      <Vertical hAlign="center">
        <AtomSpacer multiplier={10}/>
        <AtomSpacer multiplier={10}/>
        <AtomSpacer multiplier={10}/>
      </Vertical>

      <Vertical hAlign="center">
        <Horizontal hAlign="center">
          <AnimationGigTimer
            play={startTime !== undefined && endTime < 0}
            onRing={onRing}
          />
        </Horizontal>

        <Vertical hAlign="center">
          <AtomSpacer multiplier={6}/>
        </Vertical>

        <TimeTracked
          startTime={endTime > 0 ? undefined : startTime}
          time={endTime > 0 && startTime !== undefined
            ? (endTime - startTime)
            : undefined}
        />

        <Vertical hAlign="center">
          <AtomSpacer multiplier={6}/>
        </Vertical>

        <Text level={TEXT_LEVEL_BODY}>
          For {currentRate} kr/h working for {selectedGig}
        </Text>
      </Vertical>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Button level={BUTTON_LEVEL_PRIMARY} onPress={toggleTracking}>
        {primaryCallToAction}
      </Button>
    </Bottom>
  </FullCover>
)

OrganismTrackTime.displayName = 'OrganismTrackTime'
