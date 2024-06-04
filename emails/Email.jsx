import {
  Tailwind,
  Text,
  Row,
  Column,
  Section,
  Img,
  Heading,
} from '@react-email/components';

const Email = ({ value, name, codeID, number }) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#28303d',
            },
          },
        },
      }}
    >
      <Section className='bg-brand h-full w-full py-14'>
        <Heading className='text-white text-center font-mono text-6xl'>
          Страхова 24
        </Heading>
        <Section className='text-black font-bold'>
          <Text className='text-4xl text-white font-serif text-center'>
            Дані клієнта
          </Text>
          <Section className='bg-white max-w-[350px] p-5 rounded-md text-lg'>
            <Row className='mb-2 '>
              <Column className=''>Тариф на: {value}</Column>
            </Row>
            <Row className='mb-2 '>
              <Column className=''>Імя: {name}</Column>
            </Row>
            <Row className='mb-2'>
              <Column>Номер телефону: {number}</Column>
            </Row>
            <Row>
              <Column>ID: {codeID}</Column>
            </Row>
          </Section>
        </Section>

        <Text className='text-center mt-10 text-lg text-black'>
          Strakhova24 © 2023
        </Text>
      </Section>
    </Tailwind>
  );
};

export default Email;
