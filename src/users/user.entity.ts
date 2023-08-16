import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export class User{

    id: string;

    email: string;

    password: string;
}