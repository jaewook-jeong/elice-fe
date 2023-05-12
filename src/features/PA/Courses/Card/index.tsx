import { Course } from '@/types/course';
import * as Styled from './styled';
import Image from 'next/image';

interface Props {
  card: Course;
}

const LabelMapper = {
  0: {
    true: '무료',
    false: '유료',
  },
  4: {
    true: '구독',
    false: '구독',
  },
  5: {
    true: '구독',
    false: '구독',
  },
};

const Card = ({ card: { description, enrollType, isFree, logoUrl, title } }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{LabelMapper[enrollType as 0 | 5 | 4][`${isFree}`]}</Styled.Label>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.IconLogoBox>
        <Styled.IconBox>
          <Styled.IconRow>
            <Image
              alt="difficulty icon"
              width={24}
              height={24}
              src="https://img.icons8.com/?size=24&id=98027&format=png"
            />
            <Styled.IconText>난이도: 미설정</Styled.IconText>
          </Styled.IconRow>
          <Styled.IconRow>
            <Image
              alt="lecture type icon"
              width={24}
              height={24}
              src="https://img.icons8.com/?size=24&id=105608&format=png"
            />
            <Styled.IconText>수업: 온라인</Styled.IconText>
          </Styled.IconRow>
          <Styled.IconRow>
            <Image
              alt="period icon"
              width={24}
              height={24}
              src="https://img.icons8.com/?size=24&id=83282&format=png"
            />
            <Styled.IconText>기간: 무제한</Styled.IconText>
          </Styled.IconRow>
        </Styled.IconBox>
        <Image
          alt="logo image"
          src={logoUrl}
          width={52}
          height={52}
          style={{ objectFit: 'contain' }}
        />
      </Styled.IconLogoBox>
    </Styled.Wrapper>
  );
};

export default Card;
