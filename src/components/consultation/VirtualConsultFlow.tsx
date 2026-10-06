"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { concerns } from "@/data/concerns";
import { dentist } from "@/data/dentist";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Step = "concern" | "photo" | "goals" | "contact" | "confirmation";

const STEPS: Step[] = ["concern", "photo", "goals", "contact", "confirmation"];

const STEP_LABELS: Record<Step, string> = {
  concern: "Concern",
  photo: "Photos",
  goals: "Goals",
  contact: "Contact",
  confirmation: "Done",
};

export function VirtualConsultFlow() {
  const [step, setStep] = useState<Step>("concern");
  const [concernId, setConcernId] = useState("");
  const [goals, setGoals] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };
  }, []);

  const stepIndex = STEPS.indexOf(step);
  const selectedConcern = concerns.find((c) => c.id === concernId);

  function clearPhoto() {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setPreviewUrl(null);
    setFileName(null);
  }

  function handlePhotoChange(fileList: FileList | null) {
    clearPhoto();
    const file = fileList?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((e) => ({ ...e, photo: "Please choose an image file." }));
      return;
    }
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setPreviewUrl(url);
    setFileName(file.name);
    setErrors((e) => {
      if (!e.photo) return e;
      const rest = { ...e };
      delete rest.photo;
      return rest;
    });
  }

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
    if (step === "concern" && !concernId) {
      nextErrors.concern = "Please select a concern.";
    }
    if (step === "goals" && goals.trim().length < 12) {
      nextErrors.goals = "Please share a little more about your goals.";
    }
    if (step === "contact") {
      if (!name.trim()) nextErrors.name = "Name is required.";
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        nextErrors.email = "A valid email is required.";
      }
      if (!phone.trim()) nextErrors.phone = "Phone number is required.";
      if (!consent) {
        nextErrors.consent = "Please acknowledge the privacy notice to continue.";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateCurrent()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    // Mock only — revoke preview; never persist to storage
    clearPhoto();
    setSubmitting(false);
    setStep("confirmation");
  }

  function handleContinue() {
    if (!validateCurrent()) return;
    goNext();
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <nav aria-label="Consultation progress" className="mb-10">
        <ol className="flex items-center justify-center gap-3">
          {STEPS.map((s, i) => (
            <li key={s}>
              <span className="sr-only">
                {STEP_LABELS[s]}
                {i === stepIndex ? " (current)" : i < stepIndex ? " (completed)" : ""}
              </span>
              <span
                className={cn(
                  "step-dot inline-block",
                  i === stepIndex && "is-active",
                  i < stepIndex && "is-done",
                )}
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center eyebrow text-taupe">
          {STEP_LABELS[step]}
        </p>
      </nav>

      <div className="mb-8 border border-stone/80 bg-ivory px-5 py-4 text-sm leading-relaxed text-text-secondary">
        <p>{dentist.privacyNotes.virtualConsult}</p>
      </div>

      {step === "confirmation" ? (
        <div className="border border-stone bg-ivory px-8 py-12 text-center md:px-12">
          <p className="eyebrow text-taupe">Submitted</p>
          <h2 className="mt-4 font-serif text-3xl text-espresso md:text-4xl">
            Thank you
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-text-secondary">
            Your virtual consultation request
            {selectedConcern ? ` regarding “${selectedConcern.label}”` : ""} has
            been received (mock). Photos were not stored. We will follow up using
            the contact details you provided.
          </p>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-taupe">
            {dentist.medicalDisclaimer}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/book" variant="secondary">
              Book in person
            </Button>
            <Button href="/contact">Contact practice</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {step === "concern" && (
            <fieldset>
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                What is your main concern?
              </legend>
              <div className="mt-8 grid gap-3" role="radiogroup">
                {concerns.map((concern) => (
                  <label
                    key={concern.id}
                    className={cn(
                      "flex cursor-pointer gap-4 border px-5 py-4 transition-colors",
                      concernId === concern.id
                        ? "border-espresso bg-ivory"
                        : "border-stone hover:border-taupe",
                    )}
                  >
                    <input
                      type="radio"
                      name="concern"
                      value={concern.id}
                      checked={concernId === concern.id}
                      onChange={() => setConcernId(concern.id)}
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
              {errors.concern && (
                <p className="mt-3 text-sm text-red-800" role="alert">
                  {errors.concern}
                </p>
              )}
            </fieldset>
          )}

          {step === "photo" && (
            <fieldset>
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                Optional photo
              </legend>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {dentist.privacyNotes.photoUpload}
              </p>
              <div className="mt-8 space-y-4">
                <label
                  htmlFor="consult-photo"
                  className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-stone bg-warm-white px-6 py-12 text-center transition-colors hover:border-gold"
                >
                  <span className="eyebrow text-taupe">Upload image</span>
                  <span className="mt-3 max-w-xs text-sm text-text-secondary">
                    Preview only — images are revoked from memory and never written
                    to browser storage.
                  </span>
                  <input
                    id="consult-photo"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => handlePhotoChange(e.target.files)}
                  />
                </label>

                {previewUrl && (
                  <div className="relative overflow-hidden border border-stone">
                    <div className="relative aspect-[4/3] w-full bg-stone/30">
                      <Image
                        src={previewUrl}
                        alt="Selected photo preview"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-stone px-4 py-3">
                      <p className="truncate text-xs text-text-secondary">
                        {fileName}
                      </p>
                      <button
                        type="button"
                        onClick={clearPhoto}
                        className="text-xs uppercase tracking-[0.16em] text-espresso underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
                {errors.photo && (
                  <p className="text-sm text-red-800" role="alert">
                    {errors.photo}
                  </p>
                )}
                <p className="text-xs text-taupe">
                  You may skip this step if you prefer not to share photos.
                </p>
              </div>
            </fieldset>
          )}

          {step === "goals" && (
            <fieldset>
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                What would you like to achieve?
              </legend>
              <p className="mt-3 text-sm text-text-secondary">
                Share your goals, timeline, or questions. Educational guidance only —
                not a diagnosis.
              </p>
              <div className="mt-8">
                <label htmlFor="consult-goals" className="eyebrow mb-2 block">
                  Goals & questions
                </label>
                <textarea
                  id="consult-goals"
                  rows={6}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="field resize-y"
                  placeholder="Describe what you hope to improve or understand…"
                  aria-invalid={Boolean(errors.goals)}
                  aria-describedby={errors.goals ? "consult-goals-error" : undefined}
                />
                {errors.goals && (
                  <p
                    id="consult-goals-error"
                    className="mt-2 text-sm text-red-800"
                    role="alert"
                  >
                    {errors.goals}
                  </p>
                )}
              </div>
            </fieldset>
          )}

          {step === "contact" && (
            <fieldset className="space-y-5">
              <legend className="font-serif text-2xl text-espresso md:text-3xl">
                How may we reach you?
              </legend>
              <div className="mt-6 space-y-5">
                <Field
                  id="vc-name"
                  label="Full name"
                  value={name}
                  onChange={setName}
                  error={errors.name}
                  autoComplete="name"
                  required
                />
                <Field
                  id="vc-email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                  autoComplete="email"
                  required
                />
                <Field
                  id="vc-phone"
                  label="Phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  error={errors.phone}
                  autoComplete="tel"
                  required
                />
                <label className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 accent-[var(--gold)]"
                    aria-invalid={Boolean(errors.consent)}
                  />
                  <span>
                    I understand this is not a diagnosis, photos are not stored in
                    this demo, and I have read the privacy notes above.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-sm text-red-800" role="alert">
                    {errors.consent}
                  </p>
                )}
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
                {submitting ? "Sending…" : "Submit request"}
              </Button>
            ) : (
              <Button type="button" onClick={handleContinue}>
                {step === "photo" && !previewUrl ? "Skip & continue" : "Continue"}
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
