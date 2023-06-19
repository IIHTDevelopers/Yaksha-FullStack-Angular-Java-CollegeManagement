import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Department } from "../models/department";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  private baseUrl = "";

  constructor(private http: HttpClient) {}

  getAllDepartments(): any {
    // write your logic here
    return null;
  }

  getDepartmentById(id: number): any {
    // write your logic here
    return null;
  }

  createDepartment(department: Department): any {
    // write your logic here
    return null;
  }

  updateDepartment(id: number, department: Department): any {
    // write your logic here
    return null;
  }

  deleteDepartment(id: number): any {
    // write your logic here
    return null;
  }

  searchDepartmentsByName(name: string): any {
    // write your logic here
    return null;
  }
}
