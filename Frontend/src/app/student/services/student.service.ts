import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "../models/student";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private baseUrl = "";

  constructor(private http: HttpClient) {}

  getAllStudents(): any {
    // write your logic here
    return null;
  }

  getStudentById(id: number): any {
    // write your logic here
    return null;
  }

  createStudent(student: Student): any {
    // write your logic here
    return null;
  }

  updateStudent(student: Student): any {
    // write your logic here
    return null;
  }

  deleteStudent(id: number): any {
    // write your logic here
    return null;
  }

  searchStudents(name: string): any {
    // write your logic here
    return null;
  }
}
