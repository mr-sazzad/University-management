import { Schema, model } from "mongoose";
import apiErrors from "../../../errors/apiErrors";
import { IAcademicSemester, IAcademicSemesterModel } from "./semesterInterface";

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ["Autumn", "Summer", "Fall"]
    },
    year: {
      type: Number,
      required: true
    },
    code: {
      type: String,
      required: true,
      enum: ["01", "02", "03"]
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months
    }
  },
  {
    timestamps: true
  }
);

academicSemesterSchema.pre("save", async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year
  });
  if (isExist) {
    throw new apiErrors(409, "Academic semester is already exists ! 🥵");
  }
  next();
});

export const AcademicSemester = model<
  IAcademicSemester,
  IAcademicSemesterModel
>("AcademicSemester", academicSemesterSchema);
