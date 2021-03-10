import { VehicleInterface } from './vehicle.interface'

const AVERAGE_MILEAGE = 7900

export function calculateAverageMileage (vehicle: VehicleInterface) {
  const { events } = vehicle

  if (!events.length) {
    return AVERAGE_MILEAGE
  }

  const mileageByYear: Record<string, number> = {}

  for (const event of events) {
    if (Object.keys(event).includes('mileage')) {
      const year = event.date.getFullYear()
      // We're only dealing with events which have a mileage field
      // @ts-ignore
      mileageByYear[year] = event.mileage
    }
  }

  const averageMileages = []
  const vehicleRegistrationYear = vehicle.registrationDate.getFullYear()
  let lastProcessedYear = vehicleRegistrationYear - 1

  for (const [year, mileage] of Object.entries(mileageByYear)) {
    const eventYear = Number(year)
    const yearsToCalculateAverage = eventYear - lastProcessedYear
    const averageMileage = mileage / yearsToCalculateAverage

    averageMileages.push(...Array(yearsToCalculateAverage).fill(averageMileage))

    lastProcessedYear = eventYear
  }

  if (!averageMileages.length) {
    return AVERAGE_MILEAGE
  }

  return averageMileages.reduce((a, b) => a + b, 0) / averageMileages.length
}

export function estimateCurrentMileage (vehicle: VehicleInterface) {
  throw new Error('Not implemented')
}
