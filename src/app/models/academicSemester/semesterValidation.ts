import z from "zod";

export const createAcademicSemesterZod = z.object({
  body: z.object({
    title: z.enum(["Autumn", "Summer", "Fall"], {
      required_error: "Title is required ! 🥰"
    }),
    year: z.number({ required_error: "Year is required ! 🥰" }),
    code: z.enum(["01", "02", "03"], { required_error: "code is required 🥰" }),
    startMonth: z.enum(
      [
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
      ],
      {
        required_error: "Start Month is required 🥰"
      }
    ),
    endMonth: z.enum(
      [
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
      ],
      {
        required_error: "End Month is required 🥰"
      }
    )
  })
});
