import React, { FC } from 'react'
import {
  AtomSpacer,
  ContextHeader,
  ListOption,
  Text,
  TEXT_LEVEL_SECONDARY_TITLE,
  FullCover,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismSettings = {
  currentCurrencyName: string,
  onAboutGig: () => void,
  onBack: () => void,
  onChangeCurrency: () => void,
  onSupportUs: () => void,
  onStartShare: () => void,
}

export const OrganismSettings: FC<TOrganismSettings> = ({
  currentCurrencyName,
  onAboutGig,
  onBack,
  onChangeCurrency,
  onSupportUs,
  onStartShare,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader onBack={onBack}>
        Settings
      </ContextHeader>
      <AtomSpacer multiplier={4}/>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Reports
      </Text>
      <AtomSpacer multiplier={4}/>
      <ListOption
        optionName="Currency"
        onPress={onChangeCurrency}
        value={currentCurrencyName}
      />
      <AtomSpacer multiplier={4}/>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        About Gig
      </Text>
      <AtomSpacer multiplier={4}/>
      <ListOption
        optionName="About The App"
        onPress={onAboutGig}
      />
      <ListOption
        optionName="Support Us On Patreon"
        onPress={onSupportUs}
      />
      <ListOption
        optionName="Export to CSV"
        onPress={onStartShare}
      />
    </MainScrollable>
  </FullCover>
)
