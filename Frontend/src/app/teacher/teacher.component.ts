import { Component, OnInit } from "@angular/core";
import { Teacher } from "./models/teacher";
import { Department } from "../department/models/department";
import { TeacherService } from "./services/teacher.service";
import { DepartmentService } from "../department/services/department.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"],
})
export class TeacherComponent implements OnInit {
  departments!: Department[];
  teachers!: Teacher[];
  searchName!: string;
  newTeacher!: {};
  teacherForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // write your logic here
  }

  initializeForm(): void {
    // write your logic here
  }

  getDepartments(): void {
    // write your logic here
  }

  getTeachers(): void {
    // write your logic here
  }

  createTeacher(): void {
    // write your logic here
  }

  editTeacher(teacher: Teacher): void {
    // write your logic here
  }

  updateTeacher(): void {
    // write your logic here
  }

  deleteTeacher(id: number): void {
    // write your logic here
  }

  searchTeacher(): void {
    // write your logic here
  }
}
