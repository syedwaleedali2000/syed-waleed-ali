// types.ts
export interface Project {
  id: number;
  title: string;
  category: "All" | "My Projects" | "OL Projects" | "Freelance" | "Power BI";
  image: string;
  link: string;
}
