CREATE TABLE "classroom_powerpoints" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_url" text NOT NULL,
	"title" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "classroom_presentations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"course_url" text,
	"video_id" integer,
	"speaker_notes_id" integer,
	"presentation_powerpoint_id" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "handouts" (
	"id" serial PRIMARY KEY NOT NULL,
	"classroom_presentation_id" integer NOT NULL,
	"file_url" text NOT NULL,
	"title" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "speaker_notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_url" text NOT NULL,
	"title" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"title" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "classroom_presentations" ADD CONSTRAINT "classroom_presentations_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_presentations" ADD CONSTRAINT "classroom_presentations_speaker_notes_id_speaker_notes_id_fk" FOREIGN KEY ("speaker_notes_id") REFERENCES "public"."speaker_notes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classroom_presentations" ADD CONSTRAINT "classroom_presentations_presentation_powerpoint_id_classroom_powerpoints_id_fk" FOREIGN KEY ("presentation_powerpoint_id") REFERENCES "public"."classroom_powerpoints"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "handouts" ADD CONSTRAINT "handouts_classroom_presentation_id_classroom_presentations_id_fk" FOREIGN KEY ("classroom_presentation_id") REFERENCES "public"."classroom_presentations"("id") ON DELETE no action ON UPDATE no action;