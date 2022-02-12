import { environment} from "../environments/environment";

export class API_END_POINTS {
     public static LOGIN = environment.baseURL + '/users/login';
     public static GET_USERS = environment.baseURL + '/users/read';
     public static CREATE_USERS = environment.baseURL + '/users/create';
     public static UPDATE_USERS = environment.baseURL + '/users/update';
     public static SEARCH_USERS = environment.baseURL + '/users/search?id=';

     public static READ_CENTERS = environment.baseURL + '/betting-center/read';
     public static SEARCH_CENTERS = environment.baseURL + '/betting-center/search?id=';
     public static UPDATE_CENTERS = environment.baseURL + '/betting-center/update';
     public static CREATE_CENTERS = environment.baseURL + '/betting-center/create';
}