import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Teacher } from "../models/teacher";

@Injectable({
  providedIn: "root",
})
export class TeacherService {
  private baseUrl = "";

  constructor(private http: HttpClient) {}

  getAllTeachers(): any {
    // write your logic here
    return null;
  }

  getTeacherById(id: number): any {
    // write your logic here
    return null;
  }

  createTeacher(teacher: Teacher): any {
    // write your logic here
    return null;
  }

  updateTeacher(id: number, teacher: Teacher): any {
    // write your logic here
    return null;
  }

  deleteTeacher(id: number): any {
    // write your logic here
    return null;
  }

  searchTeachersByName(name: string): any {
    // write your logic here
    return null;
  }
}
