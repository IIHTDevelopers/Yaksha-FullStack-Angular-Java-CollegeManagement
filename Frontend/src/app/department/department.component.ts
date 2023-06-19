import { Component, OnInit } from "@angular/core";
import { Department } from "./models/department";
import { Student } from "../student/models/student";
import { Teacher } from "../teacher/models/teacher";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  departments!: Department[];
  selectedDepartment!: Department | null;
  students!: Student[];
  teachers!: Teacher[];
  searchName!: string;
  newDepartment!: {};
  editForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // write your logic here
  }

  loadDepartments(): void {
    // write your logic here
  }

  getDepartments(): void {
    // write your logic here
  }

  viewDepartment(): void {
    // write your logic here
  }

  listStudents(): void {
    // write your logic here
  }

  saveDepartment(): void {
    // write your logic here
  }

  listTeachers(): void {
    // write your logic here
  }

  editDepartment(department: Department): void {
    // write your logic here
  }

  deleteDepartment(id: number): void {
    // write your logic here
  }

  searchDepartment(): void {}

  clearForm(): void {
    // write your logic here
  }

  clearSearch(): void {
    // write your logic here
  }

  getDepartmentById(departmentId: number): void {
    // write your logic here
  }
}
