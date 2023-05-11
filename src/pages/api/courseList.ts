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

interface CoursesListQuery {
  price: string;
  title: string;
  offset: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { price, title, offset } = req.query as unknown as CoursesListQuery;
  const parsedPrice = price.split(',').map((priceParam) => {
    return { enroll_type: 0, is_free: priceParam === 'free' ? true : false };
  });

  const filter_conditions = JSON.stringify({
    $and: [{ title: `%${title === 'undefined' ? '' : title}%` }, { $or: parsedPrice }],
  });

  const { data } = await axios.get<OrgCourseListResponses>(
    `https://api-rest.elice.io/org/academy/course/list?filter_confitions=${filter_conditions}&offset=${offset}&count=20`,
  );

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
