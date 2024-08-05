export type GigProps = {
    id: number,
    image?: string,
    name: string,
    description: string,
    date?: string,
    time?: string,
    fee?: string,
    isPublic: boolean
    venueNames: string,
    artistNames: string,
    venues?: Venue[],
    artists?: Artist[],
    meetups?: Meetup[],
}

export type Meetup = {
    id: number,
    gigId: number,
    venueId: number,
    start: string,
    end: string,
    type: number,
    typeLabel:string,
}

export type Venue = {
    id:number,
    name: string,
}

export type Artist = {
    id:number,
    name: string,
}