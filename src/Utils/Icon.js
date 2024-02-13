// Icon.js
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiPrisma, SiMongodb } from 'react-icons/si';

const icons = {
  html: <FaHtml5 />,
  css: <FaCss3 />,
  js: <FaJs />,
  react: <FaReact />,
  node: <FaNodeJs />,
  express: <FaNodeJs />, // Assuming Express uses Node.js icon
  prisma: <SiPrisma />,
  mongodb: <SiMongodb />,
};

const Icon = ({ name }) => {
  const IconComponent = icons[name.toLowerCase()];

  if (!IconComponent) return null;

  return <div className="icon">{IconComponent}</div>;
};

export default Icon;
