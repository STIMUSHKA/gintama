export interface Options {
    seasons: Season[]
}

export  interface Season {
    name: string,
    series: Episode[]
}

export  interface Episode {
    name: string,
    vidUrl?: string,
    posterUrl?: string,
}