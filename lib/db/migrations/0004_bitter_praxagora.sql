ALTER TABLE "users" ADD COLUMN "company_name" varchar(150) NOT NULL DEFAULT 'Unknown Company';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "school_district" varchar(150);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "tax_id" varchar(100) NOT NULL DEFAULT '12354';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "department" varchar(100);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "job_title" varchar(100) NOT NULL DEFAULT 'Unknown Title';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone" varchar(20) NOT NULL DEFAULT '8675309';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "website" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "street" varchar(255) NOT NULL DEFAULT 'Unknown Street';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "city" varchar(100) NOT NULL DEFAULT 'Unknown City';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "state" varchar(100) NOT NULL DEFAULT 'Unknown State';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "zip_code" varchar(20) NOT NULL DEFAULT 'Unknown Zip';