import ImplementationPage from "./ImplementationPage";

async function fetchOnboardingStatus() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/onboarding`,
    {
      cache: "no-store",
      credentials: "include",
    }
  );

  if (!res.ok) return null;
  const data = await res.json();
  return data;
}

export default async function ImplementationPageWrapper() {
  const user = await fetchOnboardingStatus();

  return (
    <ImplementationPage
      completedOnboarding={user?.completedOnboarding ?? false}
    />
  );
}
