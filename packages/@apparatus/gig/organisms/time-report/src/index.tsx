import React, { FC } from 'react'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  BUTTON_LEVEL_SECONDARY,
  ContextHeader,
  DateInput,
  Horizontal,
  Text,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_PRIMARY_TITLE,
  TimeInput,
  Vertical,
  FullCover,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismTimeReport = {
  currentRate?: number,
  internalDate: string,
  internalEndTime: string,
  internalStartTime: string,
  length?: number,
  nav: string,
  onBack: () => void,
  onDiscard: () => void,
  onSave: () => void,
  primaryCallToAction: string,
  secondaryCallToAction: string,
  selectedGig: string,
  setInternalDate: (internalDate: string) => void,
  setInternalEndTime: (internalEndTime: string) => void,
  setInternalStartTime: (internalStartTime: string) => void,
  title: string,
}

export const OrganismTimeReport: FC<TOrganismTimeReport> = ({
  currentRate,
  internalDate,
  internalEndTime,
  internalStartTime,
  nav,
  onBack,
  onDiscard,
  onSave,
  primaryCallToAction,
  secondaryCallToAction,
  selectedGig,
  setInternalDate,
  setInternalEndTime,
  setInternalStartTime,
  title,
}) => (
  <FullCover>
    <MainScrollable multiplier={10}>
      <ContextHeader onBack={onBack}>
        {nav}
      </ContextHeader>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        {title}
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        For {currentRate} working for {selectedGig}
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <TimeInput
        value={internalStartTime}
        onChange={setInternalStartTime}
        placeholder="Add start time"
      />

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <TimeInput
        value={internalEndTime}
        onChange={setInternalEndTime}
        placeholder="Add end time"
      />

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <DateInput
        value={internalDate}
        onChange={setInternalDate}
        placeholder="Add date"
      />
    </MainScrollable>

    <Bottom multiplier={10}>
      <Vertical width="100%">
        <Button level={BUTTON_LEVEL_PRIMARY} onPress={onSave}>
          {primaryCallToAction}
        </Button>
        <Button level={BUTTON_LEVEL_SECONDARY} onPress={onDiscard}>
          {secondaryCallToAction}
        </Button>
      </Vertical>
    </Bottom>
  </FullCover>
)
