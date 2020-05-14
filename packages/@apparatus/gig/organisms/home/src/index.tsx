import React, { FC } from 'react'
import { elegir } from 'elegir'
import { View } from '@primitives/view'
import { TGig, TPeriod } from '@apparatus/gig-types-data'
import {
  AtomSpacer,
  AtomText,
  Bottom,
  Button,
  ButtonIcon,
  BUTTON_LEVEL_PRIMARY,
  Card,
  ICON_NAMES_SETTINGS,
  TabSelector,
  Text,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_SECONDARY_TITLE,
  platformSelect,
  FullCover,
  MainScrollable,
  ScrollHorizontal,
} from '@apparatus/blocks-index'
import { hoursInHooman, moneyInHooman } from '@apparatus/gig-data-transform-numbers'
import * as transformGig from '@apparatus/gig-data-transform-gig'

export type TOrganismHome = {
  earnings: number,
  gigs: TGig[],
  hours: number,
  month: string,
  onNewGig: () => void,
  onSelect: (gigName: string) => void,
  onSettings: () => void,
  onUpdatePeriod: (period: string) => void,
  period: TPeriod,
  today: string,
}

export const OrganismHome: FC<TOrganismHome> = ({
  earnings,
  gigs,
  hours,
  month,
  period,
  onNewGig,
  onSelect,
  onSettings,
  onUpdatePeriod,
  today,
}) => (
  <FullCover>
    <MainScrollable multiplier={10}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          paddingTop: platformSelect({
            ios: 20 + 10,
            default: 10,
          }),
          paddingRight: 10,
          zIndex: 1,
        }}
      >
        <ButtonIcon
          name={ICON_NAMES_SETTINGS}
          onPress={onSettings}
        />
      </View>
      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        {moneyInHooman(earnings)} kr
      </Text>
      <AtomSpacer multiplier={4}/>
      <Text level={TEXT_LEVEL_BODY}>
        You’ve worked a total of <AtomText level={TEXT_LEVEL_BODY} isBold>{hoursInHooman(hours)}</AtomText> {elegir(period === 'today', 'today', period === 'this-month', 'this month', true, 'in total')}.
      </Text>
      <AtomSpacer multiplier={4}/>
      <TabSelector
        onChange={onUpdatePeriod}
        options={[
          {
            label: 'Today',
            value: 'today',
          },
          {
            label: 'This month',
            value: 'this-month',
          },
          {
            label: 'Total',
            value: 'total',
          },
        ]}
        value={period}
      />
      <AtomSpacer multiplier={4}/>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Your Gigs
      </Text>
      <AtomSpacer multiplier={4}/>
      <ScrollHorizontal>
        {gigs.map((gig: TGig) => (
          <View key={gig.name} style={{ display: 'flex', flexDirection: 'row' }}>
            <AtomSpacer multiplier={4}/>
            <Card
              title={gig.name}
              description={`You’ve worked ${hoursInHooman(
                elegir(
                  period === 'total',
                  transformGig.totalHours(gig),
                  period === 'this-month',
                  transformGig.thisMonthHours(gig, month),
                  true,
                  transformGig.todayHours(gig, today)
                )
              )} and generated ${moneyInHooman(
                elegir(
                  period === 'total',
                  transformGig.totalEarnings(gig),
                  period === 'this-month',
                  transformGig.thisMonthEarnings(gig, month),
                  true,
                  transformGig.todayEarnings(gig, today)
                )
              )} ${period}.`}
              action="View reports"
              onSelect={onSelect}
            />
          </View>
        ))}
      </ScrollHorizontal>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Button level={BUTTON_LEVEL_PRIMARY} onPress={onNewGig}>
        Add new gig
      </Button>
    </Bottom>
  </FullCover>
)
