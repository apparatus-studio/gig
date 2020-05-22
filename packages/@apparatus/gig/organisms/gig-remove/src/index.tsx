import React, { FC } from 'react'
import {
  AtomSpacer,
  Bottom,
  Button,
  BUTTON_LEVEL_PRIMARY,
  BUTTON_LEVEL_SECONDARY,
  ContextHeader,
  Horizontal,
  Text,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_PRIMARY_TITLE,
  Vertical,
  FullCover,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismGigRemove = {
  selectedGig: string,
  onConfirmRemove: () => void,
  onCancel: () => void,
}

export const OrganismGigRemove: FC<TOrganismGigRemove> = ({
  selectedGig,
  onConfirmRemove,
  onCancel,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader onClose={onCancel}>
        Remove Gig
      </ContextHeader>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        Wanna remove {selectedGig}?
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        By removing a gig all your work hours and data associated with the gig will be lost. Make sure to export all important data that you might need before proceeding.
      </Text>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Vertical width="100%">
        <Button level={BUTTON_LEVEL_PRIMARY} onPress={onConfirmRemove}>
          Remove {selectedGig}
        </Button>
        <AtomSpacer multiplier={4}/>
        <Button level={BUTTON_LEVEL_SECONDARY} onPress={onCancel}>
          Cancel
        </Button>
      </Vertical>
    </Bottom>
  </FullCover>
)

OrganismGigRemove.displayName = 'OrganismGigRemove'
