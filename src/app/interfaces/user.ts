import { Role } from "./role";
import { Tasks } from "./task";

export interface User {
    id: number;
    userName: string;
    role: Role;
    task: Tasks[];
}

