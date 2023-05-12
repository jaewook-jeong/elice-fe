import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface OrgCourseListResponses {
  course_count: number;
  courses: {
    courseType: number;
    title: string;
    short_description: string;
    enroll_type: number;
    is_free: boolean;
    logo_file_url: string;
  }[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get<OrgCourseListResponses>(req.body.endpoint as string);

  res.status(200).json({
    count: data.course_count,
    courses: data.courses.map((course) => ({
      title: course.title,
      enrollType: course.enroll_type,
      isFree: course.is_free,
      description: course.short_description,
      logoUrl: course.logo_file_url,
    })),
  });
}
