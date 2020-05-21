import React, { FC } from 'react'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  ContextHeader,
  FullCover,
  Horizontal,
  Input,
  Text,
  TEXT_LEVEL_PRIMARY_TITLE,
  Vertical,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismGigNew = {
  gigName: string,
  isKeyboardVisible: boolean,
  rate: string,
  setGigName: (value: string) => void,
  setRate: (value: string) => void,
  onBack: () => void,
  onSave: () => void,
}

export const OrganismGigNew: FC<TOrganismGigNew> = ({
  gigName,
  isKeyboardVisible,
  rate,
  setGigName,
  setRate,
  onBack,
  onSave,
}) => (
  <FullCover>
    <MainScrollable multiplier={10}>
      <ContextHeader onBack={onBack}>
        Add New Gig
      </ContextHeader>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        Enter Details
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Input
        value={gigName}
        onChange={setGigName}
        placeholder="Company Name"
      />

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Input
        value={rate}
        onChange={setRate}
        placeholder="Hourly Rate"
      />
    </MainScrollable>

    {!isKeyboardVisible && (
      <Bottom multiplier={10}>
        <Vertical width="100%">
          <Button level={BUTTON_LEVEL_PRIMARY} onPress={onSave}>
            Create Gig
          </Button>
        </Vertical>
      </Bottom>
    )}
  </FullCover>
)
