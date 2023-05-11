export interface Course {
  title: string;
  enrollType: number;
  isFree: boolean;
  description: string;
  logoUrl: string;
}

export interface CoursesResponse {
  count: number;
  courses: Course[];
}
