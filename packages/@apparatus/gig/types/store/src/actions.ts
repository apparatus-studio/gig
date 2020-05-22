import { TCurrency } from '@apparatus/data-currencies'
import {
  TGig,
  TKeyboard,
  TPeriod,
  TRootDimensions,
} from '@apparatus/gig-types-data'
import { TRequireKeys } from 'tsfn'
import { TState, TStorableData } from './state'

export type TActionCurrencyUpdate = {
  type: 'CURRENCY_UPDATE',
  payload: TCurrency,
}

export type TActionCurrentDayUpdate = {
  type: 'UPDATE_CURRENT_DAY',
  payload: string,
}

export type TActionCurrentTimeZoneUpdate = {
  type: 'UPDATE_CURRENT_TIME_ZONE',
  payload: string,
}

export type TActionCurrentTimeZoneOffsetUpdate = {
  type: 'UPDATE_CURRENT_TIME_ZONE_OFFSET',
  payload: number,
}

export type TActionExportCSV = {
  type: 'EXPORT_CSV',
}

export type TActionGigNew = {
  type: 'GIG_NEW',
  payload: TGig,
}

export type TActionGigRemove = {
  type: 'GIG_REMOVE',
}

export type TActionGigUpdate = {
  type: 'GIG_UPDATE',
  payload: {
    name: string,
    currentRate: number,
  },
}

export type TActionKeyboardStatusUpdate = {
  type: 'KEYBOARD_STATUS_UPDATE',
  payload: TKeyboard,
}

export type TActionLoaded = {
  type: 'LOADED',
}

export type TActionNavigate = {
  type: 'NAVIGATE',
  payload: TRequireKeys<Partial<TState>, 'section'>,
}

export type TActionPeriodUpdate = {
  type: 'PERIOD_UPDATE',
  payload: {
    period: TPeriod,
  },
}

export type TActionRootDimensionsUpdate = {
  type: 'ROOT_DIMENSIONS_UPDATE',
  payload: TRootDimensions,
}

export type TActionShareStart = {
  type: 'SHARE_START',
}

export type TActionShareStop = {
  type: 'SHARE_STOP',
}

export type TActionSyncState = {
  type: 'SYNC_STATE',
  payload: TStorableData,
}

export type TActionTimeReportNew = {
  type: 'TIME_REPORT_NEW',
  payload: {
    startTime: number,
    length: number,
  },
}

export type TActionTimeReportRemove = {
  type: 'TIME_REPORT_REMOVE',
  payload: {
    startTime: number,
  },
}

export type TActionTimeReportUpdate = {
  type: 'TIME_REPORT_UPDATE',
  payload: {
    currentStartTime: number,
    startTime: number,
    length: number,
  },
}

export type TActionTrackingStart = {
  type: 'TRACKING_START',
  payload: { startTime: number },
}

export type TActionTrackingStop = {
  type: 'TRACKING_STOP',
  payload: { endTime: number },
}

export type TAction =
  | TActionCurrencyUpdate
  | TActionCurrentDayUpdate
  | TActionCurrentTimeZoneUpdate
  | TActionCurrentTimeZoneOffsetUpdate
  | TActionExportCSV
  | TActionGigNew
  | TActionGigRemove
  | TActionGigUpdate
  | TActionKeyboardStatusUpdate
  | TActionLoaded
  | TActionNavigate
  | TActionPeriodUpdate
  | TActionRootDimensionsUpdate
  | TActionShareStart
  | TActionShareStop
  | TActionSyncState
  | TActionTimeReportNew
  | TActionTimeReportRemove
  | TActionTimeReportUpdate
  | TActionTrackingStart
  | TActionTrackingStop
