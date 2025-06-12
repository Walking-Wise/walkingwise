'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface GroupMembershipCheckProps {
  userId: string;
  onMembershipChange?: (isInGroup: boolean) => void;
}

export default function GroupMembershipCheck({ userId, onMembershipChange }: GroupMembershipCheckProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInGroup, setIsInGroup] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkMembership = async () => {
    try {
      const response = await fetch(`/api/reach360/group-members?userId=${userId}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to check group membership');
      }
      
      setIsInGroup(data.isInGroup);
      onMembershipChange?.(data.isInGroup);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendInvite = async () => {
    setIsResending(true);
    setError(null);
    
    try {
      const response = await fetch('/api/reach360/group-members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend invite');
      }
      
      // Check membership again after resending invite
      await checkMembership();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsResending(false);
    }
  };

  useEffect(() => {
    checkMembership();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (isInGroup) {
    return null; // Don't show anything if user is in the group
  }

  return (
    <Card className="mx-auto bg-white rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-center font-semibold text-gray-900">
          Check Your Email
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Please check your email for an invite from Reach360 to join your group.
            If you haven't received it, you can request a new invite below.
          </p>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <Button
            onClick={handleResendInvite}
            disabled={isResending}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            {isResending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resending Invite...
              </>
            ) : (
              'Resend Invite'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 