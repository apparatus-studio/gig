import { TComponentConfig } from 'autoprops'
import { OrganismTimeReport, TOrganismTimeReport } from './src'

export const config: TComponentConfig<TOrganismTimeReport> = {
  props: {
    internalDate: ['2020-02-01'],
    internalEndTime: ['18.00'],
    internalStartTime: ['10.00'],
    nav: ['New Time Report', 'Edit Time Report'],
    onBack: [() => {}],
    onDiscard: [() => {}],
    onSave: [() => {}],
    primaryCallToAction: ['Save', 'Create Time Report'],
    secondaryCallToAction: ['Discard', 'Delete Time Report'],
    selectedGig: ['ACME', 'BigBuy'],
    setInternalDate: [() => {}],
    setInternalEndTime: [() => {}],
    setInternalStartTime: [() => {}],
    title: ['Add report'],
  },
  required: [
    'internalDate',
    'internalEndTime',
    'internalStartTime',
    'nav',
    'onBack',
    'onDiscard',
    'onSave',
    'secondaryCallToAction',
    'primaryCallToAction',
    'selectedGig',
    'setInternalDate',
    'setInternalEndTime',
    'setInternalStartTime',
    'title',
  ],
}

export const Component = OrganismTimeReport

export { default as packageJson } from './package.json'
