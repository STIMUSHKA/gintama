// interface для сезона
export interface SubSeason {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    order: number | null;
    episodes: SubEpisode[]
}

export interface Season {
    data: SubSeason,
    meta: Meta,
}

// interface для основного документа
export interface SubAnime {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    seasons: SubSeason[];
}

export interface Anime {
    data: SubAnime,
    meta: Meta,
}

// interface для метаданных
export interface Meta {
    pagination: Pagination;
}
export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

// interface для общего ответа
export interface AllAnime {
    data: SubAnime[];
    meta: Meta;
}

export interface SubEpisode {
    id: number,
    documentId: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    content: any;
    title: string;
    order: number | null;
}

export interface Episode {
    data: SubEpisode;
    meta: Meta;
}