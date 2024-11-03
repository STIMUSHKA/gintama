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
export interface Anime {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    seasons: SubSeason[];
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
    data: Anime[];
    meta: Meta;
}

export interface SubEpisode {
    id: number,
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    order: number | null;
}

export interface Episode {
    data: SubEpisode[];
    meta: Meta;
}