import { Schema, model } from "mongoose";
import { IAcademicSemester, IAcademicSemesterModel } from "./semesterInterface";

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    year: {
      type: Number,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    startMonth: {
      type: String,
      required: true
    },
    endMonth: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const AcademicSemester = model<
  IAcademicSemester,
  IAcademicSemesterModel
>("AcademicSemester", academicSemesterSchema);
