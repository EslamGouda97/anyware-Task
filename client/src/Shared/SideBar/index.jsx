import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBullhorn,
  faCalendar,
  faChartBar,
  faClipboard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [focusedItem, setFocusedItem] = useState(null);

  const menuItems = [
    { to: "/dashboard", icon: faHome, label: "Dashboard" },
    { to: "/schedule", icon: faCalendar, label: "Schedule" },
    { to: "/courses", icon: faBook, label: "Courses" },
    { to: "/gradebook", icon: faClipboard, label: "GradeBook" },
    { to: "/performance", icon: faChartBar, label: "Performance" },
    { to: "/announcements", icon: faBullhorn, label: "Announcements" },
  ];

  const handleFocus = (index) => {
    setFocusedItem(index);
  };

  return (
    <div className="xs:w-1/6 md:w-2/6 xl:w-1/6 text-white bg-gradient-to-b from-[#165a7f] to-[#3b8395]">
      <Link to={'/'} className="flex justify-center my-10 text-2xl">Coligo</Link>
      <ul className="space-y-5 flex-grow">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-left ${focusedItem === index ? 'focused' : ''}`}
          >
            <Link
              to={item.to}
              className={`flex justify-center w-full py-4 text-center font-semibold hover:bg-white hover:text-[#448996] ${
                focusedItem === index ? 'bg-white text-[#448996]' : ''
              }`}
              onFocus={() => handleFocus(index)}
            >
              <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                <span className="hidden md:flex">{item.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
