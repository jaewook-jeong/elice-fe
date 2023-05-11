import * as Styled from './styled';
import FilterButton from './FilterButton';
import { useRouter } from 'next/router';
import { makeQueryArray } from './Filter.utils';

const FILTER = [
  {
    title: '가격',
    queryKey: 'price',
    filters: [
      {
        label: '무료',
        value: 'free',
      },
      {
        label: '유료',
        value: 'paid',
      },
    ],
  },
];

const Filter = () => {
  const { query, replace, pathname } = useRouter();
  return (
    <Styled.Wrapper>
      {FILTER.map(({ title, filters, queryKey }) => {
        const queryValue = query[queryKey];
        const queryArray = makeQueryArray(queryValue);
        const onClick = (value: string) => {
          const isSelected = queryArray.includes(value);
          if (isSelected) {
            replace({
              pathname,
              query: { ...query, [queryKey]: queryArray.filter((q) => q !== value) },
            });
          } else {
            replace({ pathname, query: { ...query, [queryKey]: [...queryArray, value] } });
          }
        };

        return (
          <Styled.Row key={`filter_${title}`}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.FilterButtons>
              {filters.map(({ label, value }) => (
                <FilterButton
                  key={`filter_${title}_${value}`}
                  isSelected={queryArray.includes(value)}
                  label={label}
                  onClick={() => onClick(value)}
                />
              ))}
            </Styled.FilterButtons>
          </Styled.Row>
        );
      })}
    </Styled.Wrapper>
  );
};

export default Filter;
