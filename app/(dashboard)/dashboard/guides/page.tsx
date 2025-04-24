import { getCurrentUserWithOnboardingStatus } from '@/lib/db/queries';
import ImplementationPage from './ImplementationPage';

export default async function ImplementationPageWrapper() {
  const user = await getCurrentUserWithOnboardingStatus();

  return <ImplementationPage completedOnboarding={user?.completedOnboarding ?? false} />;
}
