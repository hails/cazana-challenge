import {
  AdsForSaleEventInterface,
  ChangeOfVRMEventInterface,
  MOTTestEventInterface
} from './event.interface'

export type PossibleEvents = AdsForSaleEventInterface | ChangeOfVRMEventInterface | MOTTestEventInterface

export interface VehicleInterface {
  id: string
  VRM: string
  maker: string
  model: string
  registrationDate: Date
  events: PossibleEvents[]
}
