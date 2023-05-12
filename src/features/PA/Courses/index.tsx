import { Course } from '@/types/course';
import * as Styled from './styled';
import Card from './Card';

interface Props {
  courses: Course[];
}

const Courses = ({ courses }: Props) => {
  return (
    <Styled.Wrapper>
      {courses.map((course, index) => (
        <Card key={`Courses_${index}`} card={course} />
      ))}
    </Styled.Wrapper>
  );
};

export default Courses;
