"use client";

import {
  startTransition,
  use,
  useActionState,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useUser } from "@/lib/auth";
import { updateAccount } from "@/app/(login)/actions";
import { ServiceAgreement } from "./serviceAgreement";

type ActionState = {
  error?: string;
  success?: string;
};

export default function OnboardingForm() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    updateAccount,
    { error: "", success: "" }
  );
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [hasAgreed, setHasAgreed] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => {
      formAction(new FormData(event.currentTarget));
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 10) {
      setScrolledToBottom(true);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
    setScrolledToBottom(false); // reset scroll detection when re-opening
  };

  const handleAgree = () => {
    setIsModalOpen(false);
    setHasAgreed(true);
  };

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    }
  }, [state, router]);

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Let's set up your account
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="mb-2">
                  First and Last Name*
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  defaultValue={user?.name || ""}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email*
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  defaultValue={user?.email || ""}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="mb-2">
                  Phone*
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  defaultValue={user?.phone || ""}
                  required
                />
              </div>
            </div>

            {/* Company/School Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company_name" className="mb-2">
                  Company / School Name (Input N/A if parent)*
                </Label>
                <Input
                  id="company_name"
                  name="company_name"
                  placeholder="Enter your company or school name"
                  defaultValue={user?.companyName || ""}
                  required
                />
              </div>

              <div>
                <Label htmlFor="school_district" className="mb-2">
                  School District
                </Label>
                <Input
                  id="school_district"
                  name="school_district"
                  placeholder="Enter your school district"
                  defaultValue={user?.schoolDistrict || ""}
                />
              </div>
            </div>

            {/* Job Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="job_title" className="mb-2">
                  Job Title*
                </Label>
                <Input
                  id="job_title"
                  name="job_title"
                  placeholder="Enter your job title"
                  defaultValue={user?.jobTitle || ""}
                  required
                />
              </div>

              <div>
                <Label htmlFor="department" className="mb-2">
                  Department
                </Label>
                <Input
                  id="department"
                  name="department"
                  placeholder="Enter your department"
                  defaultValue={user?.department || ""}
                />
              </div>
            </div>

            {/* Tax and Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tax_id" className="mb-2">
                  Tax Exempt ID (Or N/A if not applicable)*
                </Label>
                <Input
                  id="tax_id"
                  name="tax_id"
                  placeholder="Enter tax ID or 'N/A' if not applicable"
                  defaultValue={user?.taxId || ""}
                  required
                />
              </div>

              <div>
                <Label htmlFor="website" className="mb-2">
                  Website
                </Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="Enter your website"
                  defaultValue={user?.website || ""}
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <Label className="mb-2">Address*</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="street"
                  name="street"
                  placeholder="Street Address"
                  defaultValue={user?.street || ""}
                  required
                />
                <Input
                  id="city"
                  name="city"
                  placeholder="City"
                  defaultValue={user?.city || ""}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="state"
                  name="state"
                  placeholder="State"
                  defaultValue={user?.state || ""}
                  required
                />
                <Input
                  id="zip_code"
                  name="zip_code"
                  placeholder="Zip Code"
                  defaultValue={user?.zipCode || ""}
                  required
                />
              </div>
            </div>

            {/* Service Agreement Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                id="serviceAgreement"
                type="checkbox"
                checked={hasAgreed}
                onChange={openModal}
                className="mt-1 cursor-pointer"
              />
              <Label htmlFor="serviceAgreement" className="text-sm select-none">
                I have read and accept the{" "}
                <span className="underline">Service Agreement</span>.
              </Label>
            </div>

            {/* Feedback Messages */}
            {state.error && (
              <p className="text-red-500 text-sm">{state.error}</p>
            )}
            {state.success && (
              <p className="text-green-500 text-sm">{state.success}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              disabled={isPending || !hasAgreed}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Onboarding"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Service Agreement Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-lg">
            <div
              className="p-6 overflow-y-auto h-[60vh]"
              onScroll={handleScroll}
            >
              <ServiceAgreement />
            </div>
            <div className="p-4 border-t flex justify-end">
              <Button
                onClick={handleAgree}
                disabled={!scrolledToBottom}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                I Agree
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
