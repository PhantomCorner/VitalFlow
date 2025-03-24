"use client";
import { useState } from "react";
import "/styles/landingPage/style.css";
import SlideForm from "/components/SlideForm";
export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="landing-container">
      {!showForm ? (
        <div className="container-content">
          <h1>气血健康计算器</h1>
          <p>输入基本信息，评估你的气血状态</p>
          <button onClick={() => setShowForm(true)} className="start-button">
            开始测试
          </button>
        </div>
      ) : (
        <SlideForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
