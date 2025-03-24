"use client";
import { ArrowLeft } from "lucide-react";
import "/styles/inputField/style.css";
export default function InputField({
  label,
  type,
  value,
  onChange,
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
}) {
  return (
    <div className="input-container">
      <button onClick={onPrev} className={"back-button"}>
        <ArrowLeft size={18} />
        {!isFirstStep && <span>上一步</span>}
      </button>

      <div>
        <label>{label}</label>
        {type === "submit" ? (
          <p> {value}</p>
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="input-field"
            autoFocus
          />
        )}
      </div>

      <button
        onClick={onNext}
        disabled={type !== "submit" && !value}
        className="action-button"
      >
        {isLastStep ? "立即计算" : "下一步"}
      </button>
    </div>
  );
}
