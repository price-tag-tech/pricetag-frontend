export const formatCurrency = (
    value: number,
    options?: { short?: boolean; currency?: string }
): string => {
    const { short = true, currency = '₦' } = options || {}

    if (short) {
        if (value >= 1000000000) return `${currency}${(value / 1000000000).toFixed(1)}M`
        if (value >= 1000000) return `${currency}${(value / 1000000).toFixed(1)}M`
        if (value >= 1000) return `${currency}${(value / 1000).toFixed(1)}k`
        return `${currency}${value}`
    }

    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        currencyDisplay: 'narrowSymbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value)
}

export const formatCurrencyForCharts = (value: number): string => {
    return formatCurrency(value)
}


export const formatDate = (
    date: string | Date,
    options?: Intl.DateTimeFormatOptions
): string => {
    const dt = typeof date === 'string' ? new Date(date) : date

    return new Intl.DateTimeFormat('en-NG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        ...options,
    }).format(dt)
}
