// Post dates are calendar days stored as UTC midnight; format them in UTC so they never shift a day.
export const formatShortDate = (date, locale = 'es-ES') =>
  date.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

export const formatLongDate = (date, locale = 'es-ES') =>
  date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
