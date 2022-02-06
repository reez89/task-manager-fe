import { Role } from "./role";
import { Task } from "./task";

export interface User {
    id: number;
    userName: string;
    role: Role;
    task: Task[];
}

