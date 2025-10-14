// types.ts
export interface Project {
  id: number;
  title: string;
  category: "All" | "Personal" | "Work" | "Power BI" | "Freelance";
  image: string;
  link: string;
}
