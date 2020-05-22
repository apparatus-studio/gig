import React, { FC } from 'react'
import { TCurrency } from '@apparatus/data-currencies'
import {
  AtomSpacer,
  ContextHeader,
  Horizontal,
  ICON_NAMES_SEARCH,
  Input,
  ListOption,
  FullCover,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismCurrencySelect = {
  currencies: TCurrency[],
  onBack: () => void,
  onSearchUpdate: (search: string) => void,
  onSelect: (currency?: string) => void,
  search: string,
}

export const OrganismCurrencySelect: FC<TOrganismCurrencySelect> = ({
  currencies,
  onBack,
  onSearchUpdate,
  onSelect,
  search,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader onBack={onBack}>
        Select Currency
      </ContextHeader>

      <Input
        icon={ICON_NAMES_SEARCH}
        onChange={onSearchUpdate}
        value={search}
      />

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      {currencies.map(({ description, code }, index) => (
        <ListOption
          key={code}
          optionName={`${description}`}
          isFirst={index === 0}
          onPress={onSelect}
          value={code}
          code={code}
        />
      ))}
    </MainScrollable>
  </FullCover>
)

OrganismCurrencySelect.displayName = 'OrganismCurrencySelect'
