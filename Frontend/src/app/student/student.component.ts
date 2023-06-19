import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Student } from "./models/student";
import { Department } from "../department/models/department";
import { StudentService } from "./services/student.service";
import { DepartmentService } from "../department/services/department.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  departments: Department[] = [];
  selectedStudent!: Student | undefined;
  studentForm!: FormGroup;
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // write your logic here
  }

  getStudents(): void {
    // write your logic here
  }

  getDepartments(): void {
    // write your logic here
  }

  createStudent(): void {
    // write your logic here
  }

  updateStudent(): void {
    // write your logic here
  }

  getStudentById(id: number): void {
    // write your logic here
  }

  deleteStudent(student: Student): void {
    // write your logic here
  }

  searchStudents(): void {
    // write your logic here
  }

  clearForm(): void {
    // write your logic here
  }
}
