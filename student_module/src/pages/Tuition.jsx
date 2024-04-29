import React from "react";
import { useState } from "react";

import { TuitionData } from "../utils/tuitions";

import TuitionIllustration from "../components/Tuition/TuitionIllustration";
import AvailableTuitions from "../components/Tuition/AvailableTuitions";
import TuitionList from "../components/Tuition/TuitionList";
import TuitionBookingModal from "../components/Tuition/TuitionBookingModal";

const Tuitions = () => {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedTuition, setSelectedTuition] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleTeacherChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTeacher(selectedValue);
  };

  const openModal = (tuitionSelected) => {
    setIsOpen(true);
    setSelectedTuition(tuitionSelected);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTuition(null);
  };

  const calculateSessionDuration = (time_start, time_end) => {
    const [startHour, startMinute] = time_start.split(":").map(Number);
    const [endHour, endMinute] = time_end.split(":").map(Number);

    const startInMinutes = startHour * 60 + startMinute;
    const endInMinutes = endHour * 60 + endMinute;

    const durationInMinutes = endInMinutes - startInMinutes;
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    let result = "";

    if (hours > 0) {
      result += `${hours} ${hours === 1 ? "hour" : "hours"}`;
    }

    if (minutes > 0) {
      if (result.length > 0) {
        result += " ";
      }
      result += `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    }

    return result;
  };

  return (
    <>
      <div className="tuitions">
        <div className="top-container mt-4">
          <h3 className="text-[2.5rem] font-medium">Tuitions</h3>
        </div>
        <div
          className={`tuition-main-section rounded-2xl bg-[var(--secondary-bg)] ${
            modalIsOpen && "blur-sm"
          }`}
        >
          <TuitionIllustration />
          <AvailableTuitions
            handleTeacherChange={handleTeacherChange}
            TuitionData={TuitionData}
          />
          <TuitionList
            TuitionData={TuitionData}
            selectedTeacher={selectedTeacher}
            openModal={openModal}
          />
        </div>
      </div>
      <TuitionBookingModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedTuition={selectedTuition}
        calculateSessionDuration={calculateSessionDuration}
      />
    </>
  );
};

export default Tuitions;
