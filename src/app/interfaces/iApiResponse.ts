import { Imovie } from "./imovie";

export interface IApiResponse {
    Search:       Imovie[];
    totalResults: string;
    Response:     string;
}
