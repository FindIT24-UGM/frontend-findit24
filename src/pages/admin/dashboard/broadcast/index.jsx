import React, { useEffect, useState, useRef } from "react";
import AdminDashboadrLayout from "../layout";
import Anouncement from "./Anouncement";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Index() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [message, setMessage] = useState(null);
  const [announcementList, setAnnouncementList] = useState([]);
  const [countAnnouncements, setCountAnnouncements] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const getAllAnnouncement = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/announcement`,
          { withCredentials: true }
        );
        if (response.data) {
          setAnnouncementList(response.data.announcements);
          setCountAnnouncements(response.data.count);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllAnnouncement();
  }, [isAuthenticated]);

  const uploadAnnouncement = () => {
    if (selectedOption === "allParticipant") {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/announcement/create`,
          {
            toAll: true,
            title,
            content,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setMessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/announcement/create`,
          {
            toEvent: selectedOption,
            title,
            content,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setMessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let maxTitleLength = 100;
  let maxMessageLength = 1000;

  return (
    <AdminDashboadrLayout>
      <div className="bg-white p-2 rounded-lg border-2 border-black lg:flex lg:p-7">
        <div className="bg-primary-500 p-2 rounded-lg lg:order-2 lg:w-2/3 lg:px-20 lg:py-8">
          <form className="font-Montserrat text-[17px] space-y-2">
            <div className="flex flex-col">
              <p className="font-Montserrat font-bold text-shade-white">
                Send to
              </p>
              <div className="w-full relative">
                <select
                  aria-placeholder="Select Receiver"
                  className="px-3 py-2 rounded-lg bg-text-placeholder-light text-shade-black font-medium appearance-none w-full relative"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.currentTarget.value)}
                  onClick={handleToggle}
                >
                  <option value="">Select an option</option>
                  <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_CTF}>
                    Capture The Flag
                  </option>
                  <option
                    value={process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON}
                  >
                    Hackathon
                  </option>
                  <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_ML}>
                    Esport - Mobile Legends
                  </option>
                  <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_CP}>
                    Competitive Programming
                  </option>
                  <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_DAC}>
                    Data Analytics Competition
                  </option>
                  <option
                    value={process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT}
                  >
                    Esport - Valorant
                  </option>
                  <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_IC}>
                    Informatics Competitions
                  </option>
                  <option
                    value={process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE}
                  >
                    UX Competition
                  </option>
                  <option value={"allParticipant"}>Semua Peserta</option>
                </select>
                {isOpen ? (
                  <IoMdArrowDropdown
                    size={20}
                    color="black"
                    className="absolute right-3 top-3 cursor-pointer"
                  />
                ) : (
                  <IoMdArrowDropup
                    size={20}
                    color="black"
                    className="absolute right-3 top-3 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-shade-white font-Montserrat">
                Title
              </label>
              <div className="w-full relative">
                <input
                  type="text"
                  className="px-3 py-2 rounded-lg bg-text-placeholder-light text-neutral-500 font-Montserrat font-medium w-full"
                  placeholder="Title here..."
                  value={title}
                  maxLength={maxTitleLength}
                  onChange={(e) => {
                    if (e.currentTarget.value.length <= maxTitleLength) {
                      setTitle(e.currentTarget.value);
                    }
                  }}
                />
                <span className="text-sm text-neutral-500 absolute right-0 pr-3 pt-2.5">{`${
                  title ? title.length : 0
                }/50`}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-shade-white font-Montserrat">
                Message
              </label>
              <div className="w-full relative">
                <textarea
                  rows="8"
                  className="rounded-lg bg-text-placeholder-light text-neutral-500 font-Montserrat font-medium w-full px-3 py-2"
                  placeholder="Write here..."
                  value={content}
                  maxLength={maxMessageLength}
                  onChange={(e) => {
                    if (e.currentTarget.value.length <= maxMessageLength) {
                      setContent(e.currentTarget.value);
                    }
                  }}
                />
                <span className="text-sm text-neutral-500 absolute right-0 bottom-0 px-3 py-2">{`${
                  content ? content.length : 0
                }/500`}</span>
              </div>
            </div>
            <button
              onClick={uploadAnnouncement}
              className="font-GameOfSquid w-full p-2 bg-background-skyblue rounded-md"
            >
              Send
            </button>
          </form>
        </div>
        <div className="text-[16px] text-black font-Montserrat lg:order-1 lg:w-1/3 lg:mr-5">
          <h2 className="font-bold ml-2 font-CreatoDisplay text-3xl text-shade-black mb-5">
            Broadcast History
          </h2>
          {announcementList &&
            announcementList.map((announcement, index) => (
              <div key={announcement._id}>
                <Anouncement
                  id={announcement._id}
                  anouncementTitle={announcement.title}
                  content={announcement.content}
                  date={announcement.createdAt}
                />
                {index !== announcementList.length - 1 && (
                  <div className="border border-shade-black m-2" />
                )}
              </div>
            ))}
        </div>
      </div>
    </AdminDashboadrLayout>
  );
}
