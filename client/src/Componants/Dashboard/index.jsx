import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/3426526-removebg-preview.png";
import { useEffect } from "react";
import { fetchAnnouncement } from "../../store/Slices/announcementSlice";
import { fetchQuizzes } from "../../store/Slices/quizzes";

export default function Index() {
  const announcements = useSelector((state) => state.announcement?.announcement);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAnnouncement());
      dispatch(fetchQuizzes());
  }, [dispatch]);

  return (
    <div className="bg-[#f3f3f3] h-full p-5">
      <div className="xs:h-[30%] md:h-[36%] w-full bg-white rounded-2xl flex flex-row p-1">
        <div className="h-full w-full lg:w-3/5 xl:w-[51%] p-2 px-7">
          <p className="text-2xl md:text-3xl font-extrabold ml-4 my-2 bg-clip-text text-transparent bg-gradient-to-r from-[#294f64] via-[#b8e1eb] to-[#4e93a4] leading-tight">
            EXAMS TIME
          </p>
          <p className="ml-4 my-2 text-[13px] md:text-[14px] lg:text-[16px] ">
            Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.
          </p>
          <p className="ml-4 my-4 text-[13px] md:text-[16px] italic text-gray-400">"Nothing happens until something moves"</p>
          <button className="w-[46%] py-3 bg-[#4fcac7] rounded-xl text-white text-botd text-sm sm:text-lg md:text-xl">
            View exams tips
          </button>
        </div>
        <div className="h-full lg:w-2/5 xl:w-[49%] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="xs:h-[65%] md:h-[56%] w-100 mt-4 pb-3 bg-[#f3f3f3] rounded-2xl flex flex-col xl:flex-row">
        <div className="h-full w-full xl:w-3/4 md:h-[87%] mr-4 border border-b-5 bg-white rounded-2xl flex flex-col p-3 overflow-y-scroll">
          <div className="h-[60px] md:h-[70px] flex justify-between px-3 mb-3">
            <div className="flex flex-col">
              <p className="text-base md:text-lg font-semibold">Announcement</p>
              <p className="text-sm md:text-base text-gray-500">lorem ipsum dolor, sit amet.</p>
            </div>
            <p className="p-1 text-extrabold text-[#4fcac7]">All</p>
          </div>
          {/* fetch first announcements only from server */}
          {announcements?.slice(0,3).map((ele, index) => (
            <div key={index}>
              <div className="h-100 lg:h-[76px] w-full md:h-[110px] flex flex-row px-3 items-center">
                <div className="flex flex-col md:flex-row xs:w-3/6 md:w-2/6 items-center justify-center">
                  <img src={image} className="h-12 w-12 rounded-full mx-3" alt="" loading="lazy" />
                  <div className="flex flex-col w-full mx-2">
                    <p className="text-sm sm:text-base md:text-lg font-semibold ">{ele.publisherName}</p>
                    <p className="text-sm md:text-base text-gray-500">{ele.publisherDepartment}</p>
                  </div>
                  <p className="border-r border-slate-950 w-1"></p>
                </div>
                <div className="w-4/6 p-3 flex justify-start ml-5 text-sm flex-wrap text-neutral-500">
                  {ele.content}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-full w-full xl:w-1/4 xs:mt-3 md:mt-2 mb-5 border border-b-5 bg-white rounded-2xl p-2 flex flex-col">
        <div className="h-[40px] md:h-[30px] flex justify-between px-3 mb-3 pt-3">
            <div className="flex flex-col justify-center">
              <p className="text-base md:text-lg font-semibold">what's due</p>
              <p className="text-sm md:text-base text-gray-500">lorem ipsum dolor, sit amet.</p>
            </div>
            <p className="p-1 text-extrabold text-[#4fcac7]">All</p>
          </div>
          <div className="flex flex-row lg:flex-col justify-center">
          <div className="flex flex-col p-3">
          <p className="text-base md:text-base">unit Quiz 2 </p>
          <p className="text-sm text-gray-500">lorem  : sdsd ipsum dolor</p>
          <p className="text-sm text-gray-500">lorem : sdipsum dolor</p>
          <button className="w-[100%] py-3 border-[2.5px] border-[#4fcac7] rounded-xl text-[#4fcac7] text-base mt-2">
            Start Quiz
          </button>
          </div>
          <div className="flex flex-col p-3">
          <p className="text-base md:text-base">12 12  Assignment</p>
          <p className="text-sm text-gray-500">lorem  : sdsd ipsum dolor</p>
          <p className="text-sm text-gray-500">lorem : sdipsum dolor</p>
          <button className="w-[100%] py-3  border-[#4fcac7] border-[2.5px] rounded-xl text-[#4fcac7] text-base mt-2">
            Solve Assignment
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
