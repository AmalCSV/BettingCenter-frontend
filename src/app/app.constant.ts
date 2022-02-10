import { environment} from "../environments/environment";

export class API_END_POINTS {
     public static LOGIN = environment.baseURL + '/users/login';
     public static GET_USERS = environment.baseURL + '/users/read';
     public static CREATE_USERS = environment.baseURL + '/users/create';
     public static UPDATE_USERS = environment.baseURL + '/users/update';
}