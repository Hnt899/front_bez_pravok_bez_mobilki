import React, { useState } from "react";
import "./Team.css";

import directorEyes from "../../assets/direktor-glaza.png";
import directorPhoto from "../../assets/direktor.png";
import denisEyes from "../../assets/denis-glaza.png";
import denisPhoto from "../../assets/denis.jpg";
import womanEyes from "../../assets/woman-glaza.png";
import womanPhoto from "../../assets/woman.jpg";

const teamMembers = [
  {
    name: "Малхазии",
    role: "Генеральный директор",
    description: "Отвечает за стратегию и развитие продукта",
    eyes: directorEyes,
    photo: directorPhoto,
  },
  {
    name: "Денис",
    role: "Технический директор",
    description: "Руководит техническим развитием и архитектурой",
    eyes: denisEyes,
    photo: denisPhoto,
  },
  {
    name: "Галина",
    role: "Креативный дизайнер",
    description: "Создаёт визуальный стиль и UX/UI каждого продукта",
    eyes: womanEyes,
    photo: womanPhoto,
  },
];

const Team: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMember = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="team">
      {/* Заголовки */}
      <div className="team-header">
        <h3 className="team-subtitle">Знакомьтесь наши герои!</h3>
        <h2 className="team-title">команда</h2>
      </div>

      {teamMembers.map((member, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`team-member ${isOpen ? "open" : ""}`}
            onClick={() => toggleMember(index)}
          >
            <div className="team-left">
              <div className="team-name">{member.name}</div>
              <div className={`team-description ${isOpen ? "show" : "hide"}`}>{member.description}</div>
            </div>

            <div className="team-center">
              <div className={`photo-wrapper ${isOpen ? "expanded" : ""}`}>
                <img
                  src={member.photo}
                  alt={`${member.name} full`}
                  className={`photo-img ${isOpen ? "show" : "hide"} ${isOpen ? "zoom-in" : "zoom-out"}`}
                />
                <img
                  src={member.eyes}
                  alt={`${member.name} eyes`}
                  className={`eyes-img ${isOpen ? "hide" : "show"}`}
                />
              </div>
            </div>

            <div className="team-role">{member.role}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
