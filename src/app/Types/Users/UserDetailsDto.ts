export class UserDetailsDTO {
    userName: string ="";
    phone: string="";
    email: string="";
    bookmarks: UserChildBookmarkDTO[]|undefined;
    notifications: UserChildNotificationDTO[]|undefined;
    ratings: UserChildRatingDTO[]|undefined;
    requests: UserChildRequestDTO[]|undefined;
    services: UserChildServicesDTO[]|undefined;
}

export interface UserChildBookmarkDTO {
    serviceId: number;
    serviceName: string;
}

export interface UserChildNotificationDTO {
    id: number;
    text: string;
    date: string;
    seen: boolean;
}

export interface UserChildRatingDTO {
    serviceId: number;
    serviceName: string;
    comment: string;
    rating: number;
    date: string;
}

export interface UserChildRequestDTO {
    id: number;
    serviceId: number | null;
    serviceName: string | null;
    requestText: string;
    date: string;
}

export interface UserChildServicesDTO {
    id: number;
    name: string;
    price: number;
    location: string;
    rating: number;
    description: string;
    approved: boolean;
}