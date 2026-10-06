"use client";

import { useMemo, useState } from "react";
import { concerns } from "@/data/concerns";
import { dentist } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Step = "reason" | "date" | "time" | "contact" | "confirmation";

const STEPS: Step[] = ["reason", "date", "time", "contact", "confirmation"];

const STEP_LABELS: Record<Step, string> = {
  reason: "Reason",
  date: "Date",
  time: "Time",
  contact: "Details",
  confirmation: "Confirmed",
};

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

function nextWeekdays(count: number) {
  const days: { value: string; label: string }[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const weekday = cursor.getDay();
    if (weekday === 0) continue;
    days.push({
      value: cursor.toISOString().slice(0, 10),
      label: cursor.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
    });
  }
  return days;
}

export function BookingFlow() {
  const dates = useMemo(() => nextWeekdays(8), []);
  const [step, setStep] = useState<Step>("reason");
  const [reasonId, setReasonId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const stepIndex = STEPS.indexOf(step);
  const selectedConcern = concerns.find((c) => c.id === reasonId);

  function goNext() {
    const next = STEPS[stepIndex + 1];
    if (next) setStep(next);
  }

  function goBack() {
    const prev = STEPS[stepIndex - 1];
    if (prev && prev !== "confirmation") setStep(prev);
  }

  function validateCurrent(): boolean {
    const nextErrors: Record<string, string> = {};
    if (step === "reason" && !reasonId) {
      nextErrors.reason = "Please select a reason for your visit.";
    }
    if (step === "date" && !date) {
      nextErrors.date = "Please choose a preferred date.";
    }
    if (step === "time" && !time) {
      nextErrors.time = "Please choose a preferred time.";
    }
    if (step === "contact") {
      if (!name.trim()) nextErrors.name = "Name is required.";
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        nextErrors.email = "A valid email is required.";
      }
      if (!phone.trim()) nextErrors.phone = "Phone number is required.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateCurrent()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setStep("confirmation");
  }

  function handleContinue() {
    if (!validateCurrent()) return;
    goNext();
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <nav aria-label="Booking progress" className="mb-10">
        <ol className="flex items-center justify-center gap-3">
          {STEPS.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="sr-only">
                {STEP_LABELS[s]}
                {i === stepIndex ? " (current)" : i < stepIndex ? " (completed)" : ""}
              </span>
              <span
                className={cn(
                  "step-dot",
                  i === stepIndex && "is-active",
                  i < stepIndex && "is-done",
                )}
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center eyebrow text-taupe">
          Step {Math.min(stepIndex + 1, STEPS.length - 1)} of {STEPS.length - 1} ·{" "}
          {STEP_LABELS[step]}
        </p>
      </nav>

      {step === "confirmation" ? (
        <div className="border border-stone bg-ivory px-8 py-12 text-center md:px-12">
          <p className="eyebrow text-taupe">Request received</p>
          <h2 className="mt-4 font-serif text-3xl text-espresso md:text-4xl">
            We will confirm shortly
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-text-secondary">
            Your preferred consultation for{" "}
            <span className="text-text">{selectedConcern?.label ?? "your visit"}</span>{" "}
            on <span className="text-text">{date}</span> at{" "}
            <span className="text-text">{time}</span> has been noted. This is a
            mock submission — no appointment has been booked yet.
          </p>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/" variant="secondary">
              Return home
            </Button>
            <Button href={`tel:${dentist.phone.replace(/\s/g, "")}`}>
              Call practice
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {step === "reason" && (
            <fieldset>
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                What brings you in?
              </legend>
              <p className="mt-3 text-sm text-text-secondary">
                Select the concern that best matches your visit.
              </p>
              <div className="mt-8 grid gap-3" role="radiogroup" aria-required="true">
                {concerns.map((concern) => (
                  <label
                    key={concern.id}
                    className={cn(
                      "flex cursor-pointer gap-4 border px-5 py-4 transition-colors",
                      reasonId === concern.id
                        ? "border-espresso bg-ivory"
                        : "border-stone hover:border-taupe",
                    )}
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={concern.id}
                      checked={reasonId === concern.id}
                      onChange={() => setReasonId(concern.id)}
                      className="mt-1 accent-[var(--gold)]"
                    />
                    <span>
                      <span className="block text-sm font-medium text-text">
                        {concern.label}
                      </span>
                      <span className="mt-1 block text-sm text-text-secondary">
                        {concern.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              {errors.reason && (
                <p className="mt-3 text-sm text-red-800" role="alert">
                  {errors.reason}
                </p>
              )}
            </fieldset>
          )}

          {step === "date" && (
            <fieldset>
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                Preferred date
              </legend>
              <p className="mt-3 text-sm text-text-secondary">
                Choose a weekday that works for you. We will confirm availability.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {dates.map((d) => (
                  <label
                    key={d.value}
                    className={cn(
                      "cursor-pointer border px-3 py-4 text-center transition-colors",
                      date === d.value
                        ? "border-espresso bg-ivory"
                        : "border-stone hover:border-taupe",
                    )}
                  >
                    <input
                      type="radio"
                      name="date"
                      value={d.value}
                      checked={date === d.value}
                      onChange={() => setDate(d.value)}
                      className="sr-only"
                    />
                    <span className="text-sm text-text">{d.label}</span>
                  </label>
                ))}
              </div>
              {errors.date && (
                <p className="mt-3 text-sm text-red-800" role="alert">
                  {errors.date}
                </p>
              )}
            </fieldset>
          )}

          {step === "time" && (
            <fieldset>
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                Preferred time
              </legend>
              <p className="mt-3 text-sm text-text-secondary">
                Times are indicative and subject to confirmation.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {TIME_SLOTS.map((slot) => (
                  <label
                    key={slot}
                    className={cn(
                      "cursor-pointer border px-3 py-4 text-center transition-colors",
                      time === slot
                        ? "border-espresso bg-ivory"
                        : "border-stone hover:border-taupe",
                    )}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={slot}
                      checked={time === slot}
                      onChange={() => setTime(slot)}
                      className="sr-only"
                    />
                    <span className="text-sm tracking-wide text-text">{slot}</span>
                  </label>
                ))}
              </div>
              {errors.time && (
                <p className="mt-3 text-sm text-red-800" role="alert">
                  {errors.time}
                </p>
              )}
            </fieldset>
          )}

          {step === "contact" && (
            <fieldset className="space-y-5">
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                Your details
              </legend>
              <p className="mt-3 text-sm text-text-secondary">
                We will use these only to confirm your consultation request.
              </p>

              <div className="mt-6 space-y-5">
                <Field
                  id="book-name"
                  label="Full name"
                  value={name}
                  onChange={setName}
                  error={errors.name}
                  autoComplete="name"
                  required
                />
                <Field
                  id="book-email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                  autoComplete="email"
                  required
                />
                <Field
                  id="book-phone"
                  label="Phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  error={errors.phone}
                  autoComplete="tel"
                  required
                />
                <div>
                  <label htmlFor="book-notes" className="eyebrow mb-2 block">
                    Notes (optional)
                  </label>
                  <textarea
                    id="book-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="field resize-y"
                    placeholder="Anything we should know before your visit?"
                  />
                </div>
              </div>
            </fieldset>
          )}

          <div className="flex flex-col-reverse gap-3 border-t border-stone pt-8 sm:flex-row sm:justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={goBack}
              disabled={stepIndex === 0}
              className={stepIndex === 0 ? "invisible" : undefined}
            >
              Back
            </Button>
            {step === "contact" ? (
              <Button type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Request consultation"}
              </Button>
            ) : (
              <Button type="button" onClick={handleContinue}>
                Continue
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field"
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
