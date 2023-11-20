import { UserRole } from '../helpers/enum.js';

export type User = {
    userName: string;
    email: string;
    avatar: string;
    userType: UserRole;
}
