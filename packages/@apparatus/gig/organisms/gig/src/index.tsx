import React, { FC } from 'react'
import { View } from '@primitives/view'
import { TimeReport } from '@apparatus/gig-molecules-time-report'
import { dayInHooman } from '@apparatus/gig-data-transform-time-report'
import { TDayReport, TTimeReport, TPeriod } from '@apparatus/gig-types-data'
import {
  ActionSheet,
  AtomSpacer,
  AtomText,
  Bottom,
  ContextHeader,
  FullCover,
  Horizontal,
  ICON_NAMES_PLUS,
  ICON_NAMES_TIMER,
  ListOption,
  MainScrollable,
  Overlay,
  StickyButton,
  TabSelector,
  Text,
  TEXT_LEVEL_BODY,
  TEXT_LEVEL_PRIMARY_TITLE,
  TEXT_LEVEL_SECONDARY_TITLE,
  Vertical,
} from '@apparatus/blocks-index'

export type TOrganismGig = {
  days?: TDayReport[],
  onAddTimeReport: () => void,
  onBack: () => void,
  onEdit: () => void,
  onExportCSV: () => void,
  onRemove: () => void,
  onTrackTime: () => void,
  onUpdatePeriod: (period: string) => void,
  onUpdateTimeReport: (startTime: number, length: number) => void,
  period: TPeriod,
  selectedGig: string,
  setShowDrawer: (showDrawer: boolean) => void,
  showDrawer: boolean,
  periodEarnings?: string,
  periodHours?: string,
}

export const OrganismGig: FC<TOrganismGig> = ({
  days,
  onAddTimeReport,
  onBack,
  onEdit,
  onExportCSV,
  onRemove,
  period,
  onTrackTime,
  onUpdateTimeReport,
  onUpdatePeriod,
  showDrawer,
  selectedGig,
  setShowDrawer,
  periodEarnings,
  periodHours,
}) => (
  <FullCover>
    <MainScrollable
      multiplierBottom={10}
      multiplierLeft={10}
      multiplierRight={10}
      multiplierTop={4}
    >
      <ContextHeader
        onBack={onBack}
        onMore={() => setShowDrawer(true)}
      >
        {selectedGig}
      </ContextHeader>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        {periodEarnings} kr
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        You’ve worked a total of <AtomText level={TEXT_LEVEL_BODY} isBold>{periodHours}</AtomText> on {selectedGig}.
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Horizontal hAlign="start">
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

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      {days?.map((dayReport: TDayReport) => (
        <View key={dayReport.date}>
          <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
            {dayInHooman(dayReport, '2020-04-14')}
          </Text>

          <Horizontal hAlign="center">
            <AtomSpacer multiplier={4}/>
          </Horizontal>

          <Vertical width="100%">
            {dayReport.timeReports.map((report: TTimeReport) => (
              <TimeReport
                key={report.startTime}
                startTime={report.startTime}
                rate={report.rate}
                length={report.length}
                currency={report.currency}
                timeZone={report.timeZone}
                timeZoneOffset={report.timeZoneOffset}
                onSelect={onUpdateTimeReport}
              />
            ))}
          </Vertical>

          <Horizontal hAlign="center">
            <AtomSpacer multiplier={10}/>
          </Horizontal>
        </View>
      ))}
    </MainScrollable>

    {(showDrawer !== undefined && showDrawer) && (
      <Overlay onPress={() => setShowDrawer(false)}>
        <Bottom multiplier={0}>
          <ActionSheet>
            <Text level={TEXT_LEVEL_SECONDARY_TITLE}>
              Manage {selectedGig}
            </Text>
            <AtomSpacer multiplier={6}/>
            <ListOption
              code="edit"
              optionName="Edit"
              onPress={onEdit}
            />
            <ListOption
              code="remote"
              optionName="Remove"
              onPress={onRemove}
            />
            <ListOption
              code="export-csv"
              optionName="Export CSV"
              onPress={onExportCSV}
            />
          </ActionSheet>
        </Bottom>
      </Overlay>
    )}

    {(showDrawer === undefined || !showDrawer) && (
      <Bottom multiplier={10}>
        <Horizontal hAlign="center" shouldGrow>
          <StickyButton name={ICON_NAMES_PLUS} onPress={onAddTimeReport}>
            Create report
          </StickyButton>
          <AtomSpacer multiplier={10}/>
          <AtomSpacer multiplier={10}/>
          <StickyButton name={ICON_NAMES_TIMER} onPress={onTrackTime}>
            Track time
          </StickyButton>
        </Horizontal>
      </Bottom>
    )}
  </FullCover>
)

OrganismGig.displayName = 'OrganismGig'
