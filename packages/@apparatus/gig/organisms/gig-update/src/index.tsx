import React, { FC } from 'react'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  ContextHeader,
  Input,
  Text,
  TEXT_LEVEL_PRIMARY_TITLE,
  FullCover,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismGigUpdate = {
  gigName: string,
  onBack: () => void,
  onSave: () => void,
  rate: string,
  setGigName: (gigName: string) => void,
  setRate: (rate: string) => void,
}

export const OrganismGigUpdate: FC<TOrganismGigUpdate> = ({
  gigName,
  onBack,
  onSave,
  rate,
  setGigName,
  setRate,
}) => (
  <FullCover>
    <MainScrollable multiplier={10}>
      <ContextHeader onBack={onBack}>
        Edit gig
      </ContextHeader>
      <AtomSpacer multiplier={4}/>
      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        Enter details
      </Text>
      <AtomSpacer multiplier={4}/>
      <Input value={gigName} onChange={setGigName}/>
      <AtomSpacer multiplier={4}/>
      <Input value={rate} onChange={setRate}/>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Button level={BUTTON_LEVEL_PRIMARY} onPress={onSave}>
        Save changes
      </Button>
    </Bottom>
  </FullCover>
)
