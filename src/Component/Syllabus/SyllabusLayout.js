import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from "react-icons/fa";
import './SyllabusLayouts.css';
export default function EceSyll({
  Syllabus = [{}]
}) {
  const[Topic , setTopic] =useState(null);
  const topicDropdown = (Id)=>{
    setTopic ((prev) => (prev ===Id ? null : Id))
  }
  const [selectedChapter, setSelectedChapter] = useState(null);
  const toggleDropdown = (Id) => {
    setSelectedChapter((prev) => (prev ===Id ? null : Id));
  };

  return (
    <>
      {Syllabus.map((subject) => (
        <div key={subject.id} className={`${selectedChapter === subject.id ? 'open' : 'EcSyllabus'}`}>
          <div className="subject">
            <div onClick={() => toggleDropdown(subject.id)} className="name">
              <h4>{subject.subject}</h4>
              <span>{selectedChapter === subject.id ? <FaCaretUp color="rgb(118, 23, 187)"/>:<FaCaretDown color="rgb(118, 23, 187)"/>}</span>
            </div>
            {selectedChapter === subject.id && (
              <div className="chapters">
                {subject.chapters.map((chapter) => (
                  <div key={chapter.id} className={`${Topic === chapter.id ? 'chapterOpen': 'chapter'}`} >
                    <div onClick={()=>{topicDropdown(chapter.id)}} className='ChapterName'>{chapter.name}<span>{Topic === chapter.id ? <FaMinus /> : <FaPlus />}</span></div>
                    <div className="topicName">
                    <ul>
                       {chapter.topics.map((topic, topicIndex) => (
                         <li key={topicIndex}>{topic}</li>
                       ))}
                     </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
