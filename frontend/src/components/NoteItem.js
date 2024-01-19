import React from "react";

const NoteItem = () => {
  return (
    <div className="w-96 h-96 p-4 bg-green-300 rounded-lg">
      <div className="flex justify-between items-center pb-3">
        <h1 className="text-lg font-bold">Today's Weather</h1>
        <h2 className="text-md font-bold">January 19, 2024</h2>
      </div>
      <p className="text-sm text-justify leading-6 tracking-wide">
        &nbsp;&nbsp;&nbsp;&nbsp; If you’re hungry for joy and low on creativity,
        these short inspiring messages are for you. If you know you need more
        support... like, daily... get my book Morning Affirmations for 200
        phrases that'll start your day with intention and gratitude. So you can
        live your life. Then get my book Sleep Affirmations for 200 more phrases
        to help you think better thoughts before bedtime, so you can get the
        rest you need to rise, shine, and make it through anything.
      </p>
    </div>
  );
};

export default NoteItem;
