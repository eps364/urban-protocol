import {
    format,
    addDays,
    addMonths,
    addYears,
    addWeeks,
    addSeconds,
    addMilliseconds,
    addHours,
    addMinutes
} from 'date-fns'

type DatePart = 'DAY' | 'MONTH' | 'YEAR' | 'HOUR' | 'MINUTE' | 'SECOND' | 'MILISSECOND' | 'WEEK'

export function doFormatDateToBRL(date: Date): string {
    return format(date, 'dd/mm/yyyy')
}

export function doAddInDate(amount: number, datePart: DatePart, date: Date): Date {
    return {
        YEAR: addYears,
        MONTH: addMonths,
        DAY: addDays,
        HOUR: addHours,
        MINUTE: addMinutes,
        SECOND: addSeconds,
        MILISSECOND: addMilliseconds,
        WEEK: addWeeks,
    }[datePart](date, amount)
}

