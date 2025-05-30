// lib/reach360.ts
const BASE = process.env.REACH360_BASE_URL ?? "https://api.reach360.com";
const TOKEN = process.env.REACH360_API_KEY!; // throw on undefined in dev

type FetchOpts = Omit<RequestInit, "headers" | "body"> & { body?: unknown };

async function reach<T>(path: string, opts: FetchOpts = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    cache: "no-store", // ensure fresh data in API routes
  });

  if (!res.ok) {
    throw new Error(`Reach360 ${res.status} – ${await res.text()}`);
  }
    // Nothing to parse? Just return void.
    if (res.status === 204 || (res.headers.get("content-length") ?? "0") === "0") {
        return undefined as unknown as T;
      }
    
    // Defensive: be sure it's JSON
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.includes("application/json")) {
      throw new Error(`Expected JSON but got ${ct}`);
    }
  
    return res.json() as Promise<T>;
}

// ────────────────────────────────────────────────────────────
// Public helpers (typed loosely – fill in Reach 360 DTOs if you like)

export const listGroups = () => reach<any>("/groups");
export const createGroup = (name: string) =>
  reach<any>("/groups", { method: "POST", body: { name } });

export const getGroupMembers = (groupId: string) =>
  reach<any>(`/groups/${groupId}/users`);

export const listInvites = () => reach<any>("/invitations");
export const createInvite = (
  email: string,
  first: string,
  last: string,
  groupName: string
) =>
  reach<any>("/invitations", {
    method: "POST",
    body: { email, firstName: first, lastName: last, groups: [groupName] },
  });

export const enrollGroupInLearningPath = (
  groupId: string,
  learningPathId: string
) =>
  reach<void>(`/learning-paths/${learningPathId}/groups/${groupId}`, {
    method: "PUT",
  });
