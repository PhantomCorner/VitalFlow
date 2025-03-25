"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InputField from "./InputField.js";
import "/styles/slideForm/style.css";
const formSteps = [
  { key: "age", label: "你的年龄", type: "number" },
  { key: "weight", label: "体重 (kg)", type: "number" },
  { key: "submit", label: "预览", type: "submit" },
];

export default function SlideForm({ onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ age: "", weight: "" });

  const handleNext = () => {
    if (step < formSteps.length - 1) {
      setStep(step + 1);
    } else {
      alert(`提交数据: ${JSON.stringify(formData)}`); // 替换为实际计算逻辑
    }
  };
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      // 触发返回首页动画
      document.querySelector(".form-container").classList.add("exiting");
      setTimeout(onClose, 500); // 匹配动画时长
    }
  };

  return (
    <div className="form-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={formSteps[step].key}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", duration: 0.4 }}
        >
          <InputField
            label={formSteps[step].label}
            type={formSteps[step].type}
            value={formData[formSteps[step].key]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [formSteps[step].key]: e.target.value,
              })
            }
            onPrev={handlePrev}
            onNext={handleNext}
            isFirstStep={step === 0}
            isLastStep={step === formSteps.length - 1}
            onClose={onClose}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
