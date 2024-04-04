import React from 'react';

type Item = {
  title: string,
  data: string[]
}
const HorizontalListPage = (props: Item) => {
  const data = props.data ||  Array.from({ length: 100 }); 

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
      <div className="flex overflow-x-auto space-x-4">
        {data.map((_, index) => (
          <div
            key={index}
            className="min-w-80 h-32 bg-gray-200 flex items-center justify-center rounded-lg"
          >
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalListPage;