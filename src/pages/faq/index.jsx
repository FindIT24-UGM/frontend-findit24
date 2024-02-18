"use client";

import { useMemo, useState } from "react";
import NoQuestion from "../../components/Faq/NoQuestion";
import Question from "../../components/Faq/Question";
import Header from "../../components/Faq/Header";
import Category from "../../components/Faq/Category";
import QuestionSearch from "../../components/Faq/QuestionSearch";
import RootLayout from "../layout.jsx";
import Footer from "../../components/footer.js";
import ElectricPattern from "../comingsoon/ElectricPattern.jsx";

const FAQ = [
  {
    question: "ctf",
    ans: "benar bro benar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar bro",
    category: "Capture the flag",
  },
  {
    question: "Apakah ux",
    ans: "ril cuy",
    category: "UX Competition",
  },
  { question: "webinar", ans: "iya", category: "Webinar" },
];

export default function FAQPage() {
  const [searched, setSearched] = useState("");
  const [selected, setSelected] = useState("All");
  const [faqIndex, setFaqIndex] = useState([]);
  const [competition, setCompetition] = useState("Lomba");

  const displayedFaq = useMemo(() => {
    const searchedVal = FAQ.filter((f) =>
      f.question.toLowerCase().includes(searched.toLowerCase())
    );
    if (selected == "" || selected == "All") {
      return searchedVal;
    }
    return searchedVal.filter((s) => s.category == selected);
  }, [searched, selected]);

  return (
    <RootLayout>
      <ElectricPattern>
        <div className="flex flex-col items-center justify-center w-screen min-h-screen px-5 py-20 overflow-auto lg:px-12 md:px-8 relative">
          {/* the header and input section*/}
          <Header />
          <QuestionSearch searched={searched} setSearched={setSearched} />
          {/* the category section */}
          <Category
            setCompetition={setCompetition}
            competition={competition}
            setSelected={setSelected}
          />
          {/* the question section */}
          {displayedFaq.length > 0 && (
            <Question
              displayedFaq={displayedFaq}
              faqIndex={faqIndex}
              selected={selected}
              setFaqIndex={setFaqIndex}
            />
          )}

          {/* no question found section */}
          {displayedFaq.length == 0 && <NoQuestion />}
        </div>
      </ElectricPattern>
      <Footer />
    </RootLayout>
  );
}
