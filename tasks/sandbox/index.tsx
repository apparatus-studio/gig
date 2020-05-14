import React, { FC } from 'react'
import { elegir } from 'elegir'
import {
  App as SandboxApp,
  Dropdown,
  Icon,
  injectReducer,
  Label,
  Layout,
  Layout_Item,
  LAYOUT_SIZE_1,
  LAYOUT_SIZE_FIT,
  SizeText,
  SYMBOL_ICON,
  TActionWithPayload,
} from '@sandbox/ui'
import { Reducer } from 'redux'
import {
  component,
  startWithType,
  mapHandlers,
  mapWithProps,
  pureComponent,
} from 'refun'
import { isUndefined } from 'tsfn'
import {
  ContextDebugProvider,
  ContextInterfaceProvider,
  ContextParentSizeProvider,
  INTERFACE_CONTEXT_REGULAR,
  INTERFACE_CONTEXT_ACCENT,
  INTERFACE_CONTEXT_ERROR,
  INTERFACE_CONTEXT_SUCCESS,
} from '@apparatus/blocks-index'
import { components } from './components'

type TInterfaceContextOptions = 'Regular' | 'Accent' | 'Midtone' | 'Success' | 'Error'

// Your action types
type TChangeDebugAction = TActionWithPayload<'CHANGE_DEBUG', boolean>
type TChangeInterfaceContext = TActionWithPayload<'CHANGE_INTERFACE_CONTEXT', TInterfaceContextOptions>

// All possible action types
type TAllActions = TChangeDebugAction | TChangeInterfaceContext

// Your Plugin's store state type
type TState = {
  shouldDebug: boolean,
  interfaceContext: TInterfaceContextOptions,
}

// Reducer for Plugin's store
const reducer: Reducer<TState, TAllActions> = (state, action) => {
  // Default state
  if (isUndefined(state) || isUndefined(state.shouldDebug)) {
    return {
      ...state,
      shouldDebug: false,
      interfaceContext: 'Regular',
    }
  }

  switch (action.type) {
    case 'CHANGE_DEBUG': {
      return {
        ...state,
        shouldDebug: action.payload,
      }
    }
    case 'CHANGE_INTERFACE_CONTEXT': {
      return {
        ...state,
        interfaceContext: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

// Get your store access functions
const { mapStoreState, mapStoreDispatch } = injectReducer(reducer)

// Icon
const ThemeIcon = () => (
  <Icon d="M16.1915 10.8167C16.2249 10.5501 16.2499 10.2834 16.2499 10.0001C16.2499 9.71675 16.2249 9.45008 16.1915 9.18342L17.9499 7.80841C18.1082 7.68341 18.1499 7.45841 18.0499 7.27508L16.3832 4.39175C16.3082 4.25841 16.1665 4.18341 16.0165 4.18341C15.9665 4.18341 15.9165 4.19175 15.8749 4.20841L13.7999 5.04175C13.3665 4.70842 12.8999 4.43341 12.3915 4.22508L12.0749 2.01675C12.0499 1.81675 11.8749 1.66675 11.6665 1.66675H8.3332C8.12487 1.66675 7.94987 1.81675 7.92487 2.01675L7.6082 4.22508C7.09987 4.43341 6.6332 4.71675 6.19987 5.04175L4.12487 4.20841C4.07487 4.19175 4.02487 4.18341 3.97487 4.18341C3.8332 4.18341 3.69153 4.25841 3.61653 4.39175L1.94987 7.27508C1.84153 7.45841 1.89153 7.68341 2.04987 7.80841L3.8082 9.18342C3.77487 9.45008 3.74987 9.72508 3.74987 10.0001C3.74987 10.2751 3.77487 10.5501 3.8082 10.8167L2.04987 12.1917C1.89153 12.3167 1.84987 12.5417 1.94987 12.7251L3.61653 15.6084C3.69153 15.7417 3.8332 15.8167 3.9832 15.8167C4.0332 15.8167 4.0832 15.8084 4.12487 15.7917L6.19987 14.9584C6.6332 15.2917 7.09987 15.5667 7.6082 15.7751L7.92487 17.9834C7.94987 18.1834 8.12487 18.3334 8.3332 18.3334H11.6665C11.8749 18.3334 12.0499 18.1834 12.0749 17.9834L12.3915 15.7751C12.8999 15.5667 13.3665 15.2834 13.7999 14.9584L15.8749 15.7917C15.9249 15.8084 15.9749 15.8167 16.0249 15.8167C16.1665 15.8167 16.3082 15.7417 16.3832 15.6084L18.0499 12.7251C18.1499 12.5417 18.1082 12.3167 17.9499 12.1917L16.1915 10.8167V10.8167ZM14.5415 9.39175C14.5749 9.65008 14.5832 9.82508 14.5832 10.0001C14.5832 10.1751 14.5665 10.3584 14.5415 10.6084L14.4249 11.5501L15.1665 12.1334L16.0665 12.8334L15.4832 13.8417L14.4249 13.4167L13.5582 13.0667L12.8082 13.6334C12.4499 13.9001 12.1082 14.1001 11.7665 14.2417L10.8832 14.6001L10.7499 15.5417L10.5832 16.6667H9.41653L9.2582 15.5417L9.12487 14.6001L8.24153 14.2417C7.8832 14.0917 7.54987 13.9001 7.21653 13.6501L6.4582 13.0667L5.57487 13.4251L4.51653 13.8501L3.9332 12.8417L4.8332 12.1417L5.57487 11.5584L5.4582 10.6167C5.4332 10.3584 5.41653 10.1667 5.41653 10.0001C5.41653 9.83342 5.4332 9.64175 5.4582 9.39175L5.57487 8.45008L4.8332 7.86675L3.9332 7.16675L4.51653 6.15841L5.57487 6.58342L6.44153 6.93341L7.19153 6.36675C7.54987 6.10008 7.89153 5.90008 8.2332 5.75841L9.11653 5.40008L9.24987 4.45841L9.41653 3.33341H10.5749L10.7332 4.45841L10.8665 5.40008L11.7499 5.75841C12.1082 5.90841 12.4415 6.10008 12.7749 6.35008L13.5332 6.93341L14.4165 6.57508L15.4749 6.15008L16.0582 7.15842L15.1665 7.86675L14.4249 8.45008L14.5415 9.39175ZM9.99987 6.66675C8.1582 6.66675 6.66653 8.15841 6.66653 10.0001C6.66653 11.8417 8.1582 13.3334 9.99987 13.3334C11.8415 13.3334 13.3332 11.8417 13.3332 10.0001C13.3332 8.15841 11.8415 6.66675 9.99987 6.66675ZM9.99987 11.6667C9.0832 11.6667 8.3332 10.9167 8.3332 10.0001C8.3332 9.08342 9.0832 8.33342 9.99987 8.33342C10.9165 8.33342 11.6665 9.08342 11.6665 10.0001C11.6665 10.9167 10.9165 11.6667 9.99987 11.6667Z"/>
)

ThemeIcon.componentSymbol = SYMBOL_ICON

// Popover component
const Popover = component(
  startWithType<{}>(),
  mapStoreState((state) => ({
    interfaceContext: state.interfaceContext,
    shouldDebug: state.shouldDebug,
  }), ['interfaceContext', 'shouldDebug']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onDebugPress: ({ dispatch }) => (value) => {
      dispatch({
        type: 'CHANGE_DEBUG',
        payload: value === 'enable',
      })
    },
    onInterfacePress: ({ dispatch }) => (value) => {
      dispatch({
        type: 'CHANGE_INTERFACE_CONTEXT',
        payload: value,
      })
    },
  }),
  mapWithProps(({ shouldDebug }) => ({
    debugOptions: [
      {
        value: 'enable',
        label: 'Enable',
      },
      {
        value: 'disable',
        label: 'Disable',
      },
    ],
    debugValue: shouldDebug ? 'enable' : 'disable',
    interfaceOptions: [
      {
        value: 'Regular',
        label: 'Regular',
      },
      {
        value: 'Accent',
        label: 'Accent',
      },
      {
        value: 'Midtone',
        label: 'Midtone',
      },
      {
        value: 'Success',
        label: 'Success',
      },
      {
        value: 'Error',
        label: 'Error',
      },
    ],
  }))
)(({ interfaceContext, debugOptions, debugValue, onDebugPress, onInterfacePress, interfaceOptions }) => (
  <Layout direction="vertical">
    <Layout_Item width={400} height={40}>
      <Label>
        <Layout spaceBetween={15}>
          <Layout_Item width={LAYOUT_SIZE_1} vAlign="center">
            <SizeText>
              Current theme:
            </SizeText>
          </Layout_Item>
          <Layout_Item width={LAYOUT_SIZE_FIT} vAlign="center">
            <Dropdown value={debugValue} options={debugOptions} onChange={onDebugPress}/>
          </Layout_Item>
        </Layout>
      </Label>
    </Layout_Item>
    <Layout_Item width={400} height={40}>
      <Label>
        <Layout spaceBetween={15}>
          <Layout_Item width={LAYOUT_SIZE_1} vAlign="center">
            <SizeText>
              Current interface context:
            </SizeText>
          </Layout_Item>
          <Layout_Item width={LAYOUT_SIZE_FIT} vAlign="center">
            <Dropdown value={interfaceContext} options={interfaceOptions} onChange={onInterfacePress}/>
          </Layout_Item>
        </Layout>
      </Label>
    </Layout_Item>
  </Layout>
))

Popover.componentSymbol = Symbol('PLUGIN_POPOVER')

// Provider for Bubble-UI component
type TProvider = {
  Component: FC,
  props: any,
}

const Provider = pureComponent(
  startWithType<TProvider>(),
  mapStoreState((state) => ({
    interfaceContext: state.interfaceContext,
    shouldDebug: state.shouldDebug,
  }), ['interfaceContext', 'shouldDebug'])
)(({ Component, props, shouldDebug, interfaceContext }) => (
  <ContextParentSizeProvider
    parentHeight={812}
    parentWidth={375}
  >
    <ContextInterfaceProvider
      interfaceContext={
        elegir(
          interfaceContext === 'Accent',
          INTERFACE_CONTEXT_ACCENT,
          interfaceContext === 'Error',
          INTERFACE_CONTEXT_ERROR,
          interfaceContext === 'Success',
          INTERFACE_CONTEXT_SUCCESS,
          interfaceContext === 'Regular' || true,
          INTERFACE_CONTEXT_REGULAR
        )
      }
    >
      {
        shouldDebug ? (
          <ContextDebugProvider
            shouldDebug={shouldDebug}
          >
            <Component {...props}/>
          </ContextDebugProvider>
        ) : <Component {...props}/>
      }
    </ContextInterfaceProvider>
  </ContextParentSizeProvider>
))

export const App = () => (
  <SandboxApp
    components={components}
    getImportPackageName={() => '@apparatus/blocks-index'}
    plugin={{
      Icon: ThemeIcon,
      tooltip: 'Debug Mode',
      Popover,
      Provider,
    }}
  />
)
