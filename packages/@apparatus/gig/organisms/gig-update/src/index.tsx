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
  isKeyboardVisible: boolean,
  onBack: () => void,
  onSave: () => void,
  rate: string,
  setGigName: (gigName: string) => void,
  setRate: (rate: string) => void,
}

export const OrganismGigUpdate: FC<TOrganismGigUpdate> = ({
  gigName,
  isKeyboardVisible,
  onBack,
  onSave,
  rate,
  setGigName,
  setRate,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
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
      <Input
        onChange={setRate}
        shouldUseNumberKeyboard
        value={rate}
      />
    </MainScrollable>

    {!isKeyboardVisible && (
      <Bottom multiplier={10}>
        <Button level={BUTTON_LEVEL_PRIMARY} onPress={onSave}>
          Save changes
        </Button>
      </Bottom>
    )}
  </FullCover>
)
