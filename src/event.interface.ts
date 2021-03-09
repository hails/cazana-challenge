export interface AdsForSaleEventInterface {
    date: Date
    price: number
    mileage: number
}

export interface MOTTestEventInterface {
    date: Date
    mileage: number
}

export interface ChangeOfVRMEventInterface {
    date: Date
    from: string
    to: string
}
