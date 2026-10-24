// Post dates are calendar days stored as UTC midnight; format them in UTC so they never shift a day.
export const formatShortDate = date =>
  date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

export const formatLongDate = date =>
  date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
