import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black mx-5 lg:mx-0">
      {suggestions.map((profile) => (
        <Story
          key={profile?.id}
          img={`https://avatars.dicebear.com/api/human/${profile?.id}.svg`}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
