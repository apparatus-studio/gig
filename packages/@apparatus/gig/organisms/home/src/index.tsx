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
  FullCover,
  MainScrollable,
  ScrollHorizontal,
  Horizontal,
  GRID,
} from '@apparatus/blocks-index'
import { moneyInHooman } from '@apparatus/gig-data-transform-numbers'
import * as transformGig from '@apparatus/gig-data-transform-gig'
import { lengthInHooman } from '@apparatus/gig-data-transform-time-report'

export type TOrganismHome = {
  earnings: number,
  gigs: TGig[],
  hours: string,
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
      <AtomSpacer multiplier={6}/>
      <Text level={TEXT_LEVEL_BODY}>
        You’ve worked a total of <AtomText level={TEXT_LEVEL_BODY} isBold>{hours}</AtomText> {elegir(period === 'day', 'day', period === 'week', 'this week', true, 'this month')}.
      </Text>
      <AtomSpacer multiplier={6}/>
      <Horizontal>
        <TabSelector
          onChange={onUpdatePeriod}
          options={[
            {
              label: 'Day',
              value: 'day',
            },
            {
              label: 'Week',
              value: 'week',
            },
            {
              label: 'Month',
              value: 'month',
            },
          ]}
          value={period}
        />
      </Horizontal>
      <AtomSpacer multiplier={10}/>
      <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
        Your Gigs
      </Text>
      <AtomSpacer multiplier={6}/>
      <View
        style={{
          marginLeft: -10 * GRID,
          marginRight: -10 * GRID,
        }}
      >
        <ScrollHorizontal>
          <AtomSpacer multiplier={10}/>
          {gigs.map((gig: TGig, index) => (
            <View key={gig.name} style={{ display: 'flex', flexDirection: 'row' }}>
              <Card
                title={gig.name}
                description={`You’ve worked ${lengthInHooman(
                  elegir(
                    period === 'month',
                    transformGig.thisMonthHours(gig, month),
                    period === 'week',
                    transformGig.thisWeekHours(gig, today),
                    true,
                    transformGig.todayHours(gig, today)
                  )
                )} and generated ${moneyInHooman(
                  elegir(
                    period === 'month',
                    transformGig.thisMonthEarnings(gig, month),
                    period === 'week',
                    transformGig.thisWeekEarnings(gig, today),
                    true,
                    transformGig.todayEarnings(gig, today)
                  )
                )} ${elegir(
                  period === 'month',
                  'this month',
                  period === 'week',
                  'this week',
                  period === 'day',
                  'today'
                )}.`}
                action="View reports"
                onSelect={onSelect}
              />
              {(index < gigs.length - 1) && (
                <AtomSpacer multiplier={4}/>
              )}
            </View>
          ))}
          <AtomSpacer multiplier={10}/>
        </ScrollHorizontal>
      </View>
    </MainScrollable>

    <Bottom multiplier={10}>
      <Button level={BUTTON_LEVEL_PRIMARY} onPress={onNewGig}>
        Add new gig
      </Button>
    </Bottom>
  </FullCover>
)
