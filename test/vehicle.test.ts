import { calculateAverageMileage } from '../src/vehicle.service'
import { VehicleInterface } from '../src/vehicle.interface'
import {
  AdsForSaleEventInterface,
  MOTTestEventInterface,
  ChangeOfVRMEventInterface
} from '../src/event.interface'

test('should calculate the average annual mileage', () => {
  const adsForSaleEvent = {
    date: new Date('2017'),
    price: 1000000,
    mileage: 15000
  } as AdsForSaleEventInterface

  const motTestEvent = {
    date: new Date('2015'),
    mileage: 5000,
    result: 'pass'
  } as MOTTestEventInterface

  const changeOfVRMEvent = {
    date: new Date('2020'),
    from: 'IZVB51',
    to: 'IZVB52'
  } as ChangeOfVRMEventInterface

  const vehicle: VehicleInterface = {
    id: 'foobar',
    VRM: 'IZVB52',
    maker: 'Ford',
    model: 'Fiesta',
    registrationDate: new Date('2014'),
    events: [
      adsForSaleEvent,
      motTestEvent,
      changeOfVRMEvent
    ]
  }

  expect(calculateAverageMileage(vehicle)).toBe(5000)
})
