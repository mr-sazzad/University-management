import { Model } from "mongoose";

// const months =
//   "January" |
//   "February" |
//   "March" |
//   "April" |
//   "May" |
//   "June" |
//   "July" |
//   "August" |
//   "September" |
//   "October" |
//   "November" |
//   "December";

export type IAcademicSemester = {
  title: "Autumn" | "Summer" | "Fall";
  year: number;
  code: "01" | "02" | "03";
  startMonth:
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
  endMonth:
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
};

export type IAcademicSemesterModel = Model<IAcademicSemester>;
