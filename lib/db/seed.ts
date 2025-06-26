import { stripe } from "../payments/stripe";
import { db } from "./drizzle";
import { users, teams, teamMembers } from "./schema";
import { hashPassword } from "@/lib/auth/session";

async function createStripeProducts() {
  console.log("Creating Stripe products and prices...");

  const individualProduct = await stripe.products.create({
    name: "Individual",
    description: "Individual subscription plan",
  });

  await stripe.prices.create({
    product: individualProduct.id,
    unit_amount: 300, // $3 in cents
    currency: "usd",
    recurring: {
      interval: "month",
    },
  });

  const professionalProduct = await stripe.products.create({
    name: "Professional",
    description: "Professional subscription plan",
  });

  await stripe.prices.create({
    product: professionalProduct.id,
    unit_amount: 700, // $7 in cents
    currency: "usd",
    recurring: {
      interval: "month",
    },
  });

  const nonProfitProduct = await stripe.products.create({
    name: "Non-Profit",
    description: "Non-Profit subscription plan",
  });

  await stripe.prices.create({
    product: nonProfitProduct.id,
    unit_amount: 36000, // $360 in cents
    currency: "usd",
    recurring: {
      interval: "year",
      trial_period_days: 30
    },
  });

  const educationProduct = await stripe.products.create({
    name: "Education",
    description: "Education subscription plan",
  });

  await stripe.prices.create({
    product: educationProduct.id,
    unit_amount: 120000, // $1200 in cents
    currency: "usd",
    recurring: {
      interval: "year",
      trial_period_days: 30
    },
  });

  const enterpriseProduct = await stripe.products.create({
    name: "Enterprise",
    description: "Enterprise subscription plan",
  });

  await stripe.prices.create({
    product: enterpriseProduct.id,
    unit_amount: 120000, // $1200 in cents
    currency: "usd",
    recurring: {
      interval: "year",
      trial_period_days: 30
    },
  });

  console.log("Stripe products and prices created successfully.");
}

async function seed() {
  const email = "test@test.com";
  const password = "admin123";
  const passwordHash = await hashPassword(password);

  const [user] = await db
    .insert(users)
    .values([
      {
        email: email,
        passwordHash: passwordHash,
        role: "owner",
        name: "Test User",
        companyName: "Test Company",
        schoolDistrict: "Test District",
        taxId: "N/A",
        department: "Education",
        jobTitle: "Administrator",
        phone: "123-456-7890",
        website: "https://testcompany.com",
        street: "123 Test Street",
        city: "Testville",
        state: "TX",
        zipCode: "73301",
      },
    ])
    .returning();

  console.log("Initial user created.");

  const [team] = await db
    .insert(teams)
    .values({
      name: "Test Team",
    })
    .returning();

  await db.insert(teamMembers).values({
    teamId: team.id,
    userId: user.id,
    role: "owner",
  });

  await createStripeProducts();
}

seed()
  .catch((error) => {
    console.error("Seed process failed:", error);
    process.exit(1);
  })
  .finally(() => {
    console.log("Seed process finished. Exiting...");
    process.exit(0);
  });
