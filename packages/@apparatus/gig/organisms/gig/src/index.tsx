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
  totalEarnings?: string,
  totalHours?: string,
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
  totalEarnings,
  totalHours,
}) => (
  <FullCover>
    <MainScrollable multiplier={10}>
      <ContextHeader
        onBack={onBack}
        onMore={() => setShowDrawer(true)}
      >
        {selectedGig}
      </ContextHeader>

      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        {totalEarnings} kr
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Text level={TEXT_LEVEL_BODY}>
        You’ve worked a total of <AtomText level={TEXT_LEVEL_BODY} isBold>{totalHours}</AtomText> on {selectedGig}.
      </Text>

      <Horizontal hAlign="center">
        <AtomSpacer multiplier={6}/>
      </Horizontal>

      <Vertical hAlign="start">
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
      </Vertical>

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
      </Overlay>
    )}

    <Bottom multiplier={10}>
      <Vertical hAlign="center" width="100%">
        <Horizontal>
          <StickyButton name={ICON_NAMES_PLUS} onPress={onAddTimeReport}>
            Create report
          </StickyButton>
          <AtomSpacer multiplier={10}/>
          <AtomSpacer multiplier={10}/>
          <StickyButton name={ICON_NAMES_TIMER} onPress={onTrackTime}>
            Track time
          </StickyButton>
        </Horizontal>
      </Vertical>
    </Bottom>
  </FullCover>
)

OrganismGig.displayName = 'OrganismGig'