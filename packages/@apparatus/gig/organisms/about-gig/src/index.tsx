import React, { FC } from 'react'
import {
  AtomSpacer,
  ContextHeader,
  FullCover,
  Horizontal,
  Text,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_SECONDARY_TITLE,
  MainScrollable,
} from '@apparatus/blocks-index'

export type TOrganismAboutGig = {
  onBack: () => void,
}

export const OrganismAboutGig: FC<TOrganismAboutGig> = ({ onBack }) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader onBack={onBack}>
        About the app
      </ContextHeader>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        About Gig
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque quam vitae erat mattis lobortis. Integer condimentum, ligula et sagittis auctor, tellus odio gravida quam, vel aliquet orci est et ex.
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        Vestibulum sit amet pharetra justo. Donec nisl risus, eleifend sit amet molestie at, mattis sit amet felis. Pellentesque rutrum pharetra arcu, sit amet semper metus sagittis ac.
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={10}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Service Terms
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque quam vitae erat mattis lobortis. Integer condimentum, ligula et sagittis auctor, tellus odio gravida quam, vel aliquet orci est et ex.
      </Text>
    </MainScrollable>
  </FullCover>
)

OrganismAboutGig.displayName = 'OrganismAboutGig'
