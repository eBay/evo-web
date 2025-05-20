// TODO check if tabIndex on table should be used
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { ComponentProps, FC, MouseEvent, useState } from 'react'
import classNames from 'classnames'
import { EbayTriStateCheckbox, CheckboxState, TriStateCheckboxChangeHandler } from '../ebay-tri-state-checkbox'
import type {
    TableSelectHandler,
    TableSortHandler,
    TableDensity,
    TableMode,
    TableSort,
    TableRowSelectHandler
} from './types'
import { filterByType } from '../utils'
import { EbayTableHeader } from './table-header'
import EbayTableRow from './table-row'

export type EbayTableProps = Omit<ComponentProps<'div'>, 'onSelect'> & {
    mode?: TableMode;
    allSelected?: CheckboxState;
    density?: TableDensity;
    frozenHeader?: boolean;
    a11ySelectAllText?: string;
    a11ySelectRowText?: string;
    onSelect?: TableSelectHandler;
    onSort?: TableSortHandler;
}

const EbayTable: FC<EbayTableProps> = ({
    className,
    mode,
    allSelected,
    density,
    frozenHeader,
    a11ySelectAllText,
    a11ySelectRowText,
    onSelect,
    onSort,
    children,
    ...rest
}: EbayTableProps) => {
    const headers = filterByType(children, EbayTableHeader)
    const rows = filterByType(children, EbayTableRow)
    const [sortedState, setSortedState] = useState<Record<string, TableSort>>(() =>
        headers.reduce<Record<string, TableSort>>((acc, header, index) => {
            if (!header.props.sort) {
                return acc
            }

            acc[header.props.name || `${index}`] = header.props.sort
            return acc
        }, {}))

    const [selectedState, setSelectedState] = useState<Record<string, boolean>>(() =>
        rows.reduce<Record<string, boolean>>((acc, row, index) => {
            acc[row.props.name || `${index}`] = typeof row.props.selected === 'boolean' ? row.props.selected : false
            return acc
        }, {}))

    function getAllSelected(rowSelectionRecord: Record<string, boolean>): CheckboxState {
        const selectedSize = Object.values(rowSelectionRecord).filter(Boolean).length
        const unselectedSize = Object.values(rowSelectionRecord).length - selectedSize

        if (selectedSize === 0) {
            return 'false'
        }

        if (unselectedSize === 0) {
            return 'true'
        }

        return 'mixed'
    }
    const currentAllSelected = typeof allSelected !== 'undefined' ? allSelected : getAllSelected(selectedState)

    const handleAllSelectChange: TriStateCheckboxChangeHandler = (event) => {
        const newSelectedState = rows.reduce<Record<string, boolean>>((acc, row, index) => {
            acc[row.props.name || `${index}`] = currentAllSelected === 'false' || currentAllSelected === 'mixed'
            return acc
        }, {})

        setSelectedState(newSelectedState)
        onSelect?.(event, {
            selected: newSelectedState,
            allSelected: getAllSelected(newSelectedState)
        })
    }

    const handleSelect: TableRowSelectHandler = (event, { name, selected }) => {
        const newSelectedState = {
            ...selectedState,
            [name || '']: selected
        }

        setSelectedState(newSelectedState)

        onSelect?.(event, {
            selected: newSelectedState,
            allSelected: getAllSelected(newSelectedState)
        })
    }

    const handleSort = (event: MouseEvent<HTMLButtonElement>, name: string) => {
        const sortToMap: Record<TableSort, TableSort> = {
            none: 'asc',
            asc: 'desc',
            desc: 'none'
        }

        const newSortedState = Object.entries(sortedState).reduce<Record<string, TableSort>>((acc, [key, value]) => {
            if (key === name) {
                acc[key] = sortToMap[value]
            } else {
                acc[key] = 'none'
            }
            return acc
        }, {})

        setSortedState(newSortedState)

        onSort?.(event, {
            sorted: {
                [name]: newSortedState[name]
            }
        })
    }

    return (
        <div
            {...rest}
            className={classNames('table', className, {
                'table--mode-selection': mode === 'selection',
                'table--frozen-header': frozenHeader,
                [`table--density-${density}`]: density
            })}
            role="group"
            tabIndex={0}>
            <table>
                <thead>
                    <tr>
                        {mode === 'selection' && (
                            <EbayTableHeader key="selection-all-cell">
                                <EbayTriStateCheckbox
                                    aria-label={a11ySelectAllText || 'Select all rows'}
                                    checked={currentAllSelected}
                                    onChange={handleAllSelectChange} />
                            </EbayTableHeader>
                        )}
                        {headers.map((header, index) => React.cloneElement(header, {
                            sort: sortedState[header.props.name || `${index}`],
                            onSort: (event) => handleSort(event, header.props.name || `${index}`)
                        }))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => React.cloneElement(row, {
                        mode,
                        name: row.props.name || `${index}`,
                        a11ySelectRowText: row.props.a11ySelectRowText || a11ySelectRowText,
                        onSelect: (event, data) => handleSelect(event, {
                            ...data,
                            name: row.props.name || `${index}`
                        }),
                        selected: typeof row.props.selected === 'boolean'
                            ? row.props.selected
                            : selectedState[row.props.name || `${index}`],
                        __headers: headers
                    }))}
                </tbody>
            </table>
        </div>
    )
}
export default EbayTable
