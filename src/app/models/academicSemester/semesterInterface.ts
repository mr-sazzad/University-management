import { Model } from "mongoose";

type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type IAcademicSemester = {
  title: "Autumn" | "Summer" | "Fall";
  year: number;
  code: "01" | "02" | "03";
  startMonth: Months;
  endMonth: Months;
};

export type IAcademicSemesterModel = Model<IAcademicSemester>;
