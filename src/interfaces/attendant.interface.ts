interface IAttendantCreate {
    name: string
    surname: string
    identificationType: string
    identificationNumber: number
}

interface IAttendantPost {
    name: string
    surname: string
    identificationType: string
    identificationNumber: string
}

export { IAttendantCreate, IAttendantPost };